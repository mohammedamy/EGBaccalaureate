/**
 * PhysicsSolvers.ts
 * High-precision numerical differential equation solvers for STEM simulations.
 * Includes Runge-Kutta 4th Order (RK4), Velocity Verlet, and circuit solvers.
 */

export interface Vector2D {
  x: number;
  y: number;
}

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

/**
 * Generic Runge-Kutta 4th Order (RK4) Numerical Integrator for state vectors.
 * Solves dy/dt = f(t, y) with 4th-order accuracy.
 */
export function rk4Step(
  t: number,
  y: number[],
  dt: number,
  derivativeFn: (t: number, y: number[]) => number[]
): number[] {
  const n = y.length;
  const k1 = derivativeFn(t, y);

  const yTemp1 = new Array(n);
  for (let i = 0; i < n; i++) {
    yTemp1[i] = y[i] + 0.5 * dt * k1[i];
  }
  const k2 = derivativeFn(t + 0.5 * dt, yTemp1);

  const yTemp2 = new Array(n);
  for (let i = 0; i < n; i++) {
    yTemp2[i] = y[i] + 0.5 * dt * k2[i];
  }
  const k3 = derivativeFn(t + 0.5 * dt, yTemp2);

  const yTemp3 = new Array(n);
  for (let i = 0; i < n; i++) {
    yTemp3[i] = y[i] + dt * k3[i];
  }
  const k4 = derivativeFn(t + dt, yTemp3);

  const yNext = new Array(n);
  for (let i = 0; i < n; i++) {
    yNext[i] = y[i] + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
  }
  return yNext;
}

/**
 * Velocity Verlet Integrator for physical kinetics:
 * r(t + dt) = r(t) + v(t)*dt + 0.5*a(t)*dt^2
 * v(t + dt) = v(t) + 0.5*(a(t) + a(t+dt))*dt
 */
export function verletStep(
  position: Vector2D,
  velocity: Vector2D,
  accelerationFn: (pos: Vector2D, vel: Vector2D) => Vector2D,
  dt: number
): { position: Vector2D; velocity: Vector2D; acceleration: Vector2D } {
  const a1 = accelerationFn(position, velocity);
  const nextPos: Vector2D = {
    x: position.x + velocity.x * dt + 0.5 * a1.x * dt * dt,
    y: position.y + velocity.y * dt + 0.5 * a1.y * dt * dt,
  };

  // Intermediate velocity estimate to evaluate future acceleration
  const tempVel: Vector2D = {
    x: velocity.x + a1.x * dt,
    y: velocity.y + a1.y * dt,
  };
  const a2 = accelerationFn(nextPos, tempVel);

  const nextVel: Vector2D = {
    x: velocity.x + 0.5 * (a1.x + a2.x) * dt,
    y: velocity.y + 0.5 * (a1.y + a2.y) * dt,
  };

  return { position: nextPos, velocity: nextVel, acceleration: a2 };
}

/**
 * RLC Series Circuit Numerical Solver using RK4.
 * Governing differential equation:
 * L * d^2q/dt^2 + R * dq/dt + q / C = V_source(t)
 * Let y[0] = q (charge), y[1] = dq/dt = i (current).
 */
export function solveRLCStep(
  q: number,
  i: number,
  t: number,
  dt: number,
  R: number,
  L: number,
  C: number,
  vSourceFn: (time: number) => number
): { q: number; i: number; vCapacitor: number; vResistor: number; vInductor: number } {
  const derivative = (currT: number, state: number[]): number[] => {
    const currentQ = state[0];
    const currentI = state[1];
    const vSource = vSourceFn(currT);

    // di/dt = (V_source - R*i - q/C) / L
    const di_dt = (vSource - R * currentI - currentQ / Math.max(C, 1e-12)) / Math.max(L, 1e-12);
    return [currentI, di_dt];
  };

  const [nextQ, nextI] = rk4Step(t, [q, i], dt, derivative);

  const vCapacitor = nextQ / Math.max(C, 1e-12);
  const vResistor = nextI * R;
  const vSourceNow = vSourceFn(t + dt);
  const vInductor = vSourceNow - vResistor - vCapacitor;

  return {
    q: nextQ,
    i: nextI,
    vCapacitor,
    vResistor,
    vInductor,
  };
}

/**
 * Lorentz Force Particle Dynamics in 3D:
 * F = q * (E + v x B)
 * a = F / m
 */
export function solveLorentzStep(
  pos: Vector3D,
  vel: Vector3D,
  charge: number,
  mass: number,
  electricField: Vector3D,
  magneticField: Vector3D,
  dt: number
): { pos: Vector3D; vel: Vector3D; kineticEnergyJoules: number } {
  const derivative = (_t: number, state: number[]): number[] => {
    // state: [x, y, z, vx, vy, vz]
    const vx = state[3];
    const vy = state[4];
    const vz = state[5];

    // Cross product: v x B
    const vCrossBx = vy * magneticField.z - vz * magneticField.y;
    const vCrossBy = vz * magneticField.x - vx * magneticField.z;
    const vCrossBz = vx * magneticField.y - vy * magneticField.x;

    // F = q * (E + v x B)
    const fx = charge * (electricField.x + vCrossBx);
    const fy = charge * (electricField.y + vCrossBy);
    const fz = charge * (electricField.z + vCrossBz);

    const ax = fx / Math.max(mass, 1e-35);
    const ay = fy / Math.max(mass, 1e-35);
    const az = fz / Math.max(mass, 1e-35);

    return [vx, vy, vz, ax, ay, az];
  };

  const initialState = [pos.x, pos.y, pos.z, vel.x, vel.y, vel.z];
  const next = rk4Step(0, initialState, dt, derivative);

  const nextPos: Vector3D = { x: next[0], y: next[1], z: next[2] };
  const nextVel: Vector3D = { x: next[3], y: next[4], z: next[5] };

  const speedSq = nextVel.x * nextVel.x + nextVel.y * nextVel.y + nextVel.z * nextVel.z;
  const ke = 0.5 * mass * speedSq;

  return { pos: nextPos, vel: nextVel, kineticEnergyJoules: ke };
}
