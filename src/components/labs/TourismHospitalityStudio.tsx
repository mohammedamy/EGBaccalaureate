import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  HOTEL_YIELD_PRESETS,
  TOUR_PACKAGE_PRESETS,
  EGYPTIAN_HERITAGE_SITES,
  CARRYING_CAPACITY_MODELS,
  GDS_FLIGHT_INVENTORY,
  type HotelYieldPreset,
  type TourPackagePreset,
  type EgyptianHeritageSite,
  type CarryingCapacityModel,
  type GdsFlightEntry,
} from '../../data/tourismLab/tourismLabData';
import {
  Hotel,
  Compass,
  Landmark,
  ShieldAlert,
  Plane,
  Maximize2,
  Minimize2,
  Download,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: TourismStation;
}

export type TourismStation =
  | 'hotel_yield'
  | 'tour_costing'
  | 'heritage_explorer'
  | 'carrying_capacity'
  | 'gds_terminal';

export const TourismHospitalityStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'hotel_yield',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<TourismStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Hotel Yield Management & Performance Indicators
  // -------------------------------------------------------------
  const [selectedYieldPreset, setSelectedYieldPreset] = useState<HotelYieldPreset>(HOTEL_YIELD_PRESETS[0]);
  const [totalRooms, setTotalRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].totalRooms);
  const [availableRooms, setAvailableRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].availableRooms);
  const [occupiedRooms, setOccupiedRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].occupiedRooms);
  const [adrEgp, setAdrEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].averageDailyRateEgp);
  const [fbRevenueEgp, setFbRevenueEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].foodBeverageRevenueEgp);
  const [otherRevEgp, setOtherRevEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].otherOperatingRevenueEgp);
  const [deptExpensesEgp, setDeptExpensesEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].departmentalExpensesEgp);
  const [undistExpensesEgp, setUndistExpensesEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].undistributedExpensesEgp);

  const handleApplyYieldPreset = (preset: HotelYieldPreset) => {
    setSelectedYieldPreset(preset);
    setTotalRooms(preset.totalRooms);
    setAvailableRooms(preset.availableRooms);
    setOccupiedRooms(preset.occupiedRooms);
    setAdrEgp(preset.averageDailyRateEgp);
    setFbRevenueEgp(preset.foodBeverageRevenueEgp);
    setOtherRevEgp(preset.otherOperatingRevenueEgp);
    setDeptExpensesEgp(preset.departmentalExpensesEgp);
    setUndistExpensesEgp(preset.undistributedExpensesEgp);
  };

  const yieldMetrics = useMemo(() => {
    const safeAvailable = Math.max(1, availableRooms);
    const safeOccupied = Math.min(safeAvailable, Math.max(0, occupiedRooms));
    const occupancyRate = (safeOccupied / safeAvailable) * 100;
    const roomRevenueEgp = safeOccupied * adrEgp;
    const revparEgp = roomRevenueEgp / safeAvailable;
    const totalOperatingRevenueEgp = roomRevenueEgp + fbRevenueEgp + otherRevEgp;
    const trevparEgp = totalOperatingRevenueEgp / safeAvailable;
    const totalExpensesEgp = deptExpensesEgp + undistExpensesEgp;
    const grossOperatingProfitEgp = totalOperatingRevenueEgp - totalExpensesEgp;
    const gopparEgp = grossOperatingProfitEgp / safeAvailable;
    const operatingMarginPct = totalOperatingRevenueEgp > 0
      ? (grossOperatingProfitEgp / totalOperatingRevenueEgp) * 100
      : 0;

    return {
      occupancyRate,
      roomRevenueEgp,
      revparEgp,
      totalOperatingRevenueEgp,
      trevparEgp,
      totalExpensesEgp,
      grossOperatingProfitEgp,
      gopparEgp,
      operatingMarginPct,
    };
  }, [availableRooms, occupiedRooms, adrEgp, fbRevenueEgp, otherRevEgp, deptExpensesEgp, undistExpensesEgp]);

  // -------------------------------------------------------------
  // STATION 2: Tour Package Costing & Itinerary Pricing
  // -------------------------------------------------------------
  const [selectedTourPreset, setSelectedTourPreset] = useState<TourPackagePreset>(TOUR_PACKAGE_PRESETS[0]);
  const [coachTransportEgp, setCoachTransportEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedCoachTransportEgp);
  const [guideFeesEgp, setGuideFeesEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedGuideFeesEgp);
  const [permitsEgp, setPermitsEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedPermitsEgp);
  const [hotelPerPaxEgp, setHotelPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableHotelPerPaxEgp);
  const [mealsPerPaxEgp, setMealsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableMealsPerPaxEgp);
  const [ticketsPerPaxEgp, setTicketsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableEntranceTicketsPerPaxEgp);
  const [flightsPerPaxEgp, setFlightsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableDomesticFlightsPerPaxEgp);
  const [agencyMarkupPct, setAgencyMarkupPct] = useState<number>(TOUR_PACKAGE_PRESETS[0].agencyMarkupPct);
  const [paxCount, setPaxCount] = useState<number>(TOUR_PACKAGE_PRESETS[0].anticipatedPax);

  const handleApplyTourPreset = (preset: TourPackagePreset) => {
    setSelectedTourPreset(preset);
    setCoachTransportEgp(preset.fixedCoachTransportEgp);
    setGuideFeesEgp(preset.fixedGuideFeesEgp);
    setPermitsEgp(preset.fixedPermitsEgp);
    setHotelPerPaxEgp(preset.variableHotelPerPaxEgp);
    setMealsPerPaxEgp(preset.variableMealsPerPaxEgp);
    setTicketsPerPaxEgp(preset.variableEntranceTicketsPerPaxEgp);
    setFlightsPerPaxEgp(preset.variableDomesticFlightsPerPaxEgp);
    setAgencyMarkupPct(preset.agencyMarkupPct);
    setPaxCount(preset.anticipatedPax);
  };

  const tourMetrics = useMemo(() => {
    const totalFixedCosts = coachTransportEgp + guideFeesEgp + permitsEgp;
    const variableCostPerPax = hotelPerPaxEgp + mealsPerPaxEgp + ticketsPerPaxEgp + flightsPerPaxEgp;
    const safePax = Math.max(1, paxCount);
    const fixedCostPerPax = totalFixedCosts / safePax;
    const netCostPerPax = fixedCostPerPax + variableCostPerPax;
    const sellingPricePerPax = netCostPerPax * (1 + agencyMarkupPct / 100);
    const contributionMarginPerPax = sellingPricePerPax - variableCostPerPax;
    const breakEvenPax = contributionMarginPerPax > 0
      ? Math.ceil(totalFixedCosts / contributionMarginPerPax)
      : 0;
    const totalRevenue = sellingPricePerPax * safePax;
    const totalCosts = totalFixedCosts + variableCostPerPax * safePax;
    const agencyNetProfit = totalRevenue - totalCosts;

    return {
      totalFixedCosts,
      variableCostPerPax,
      fixedCostPerPax,
      netCostPerPax,
      sellingPricePerPax,
      contributionMarginPerPax,
      breakEvenPax,
      totalRevenue,
      totalCosts,
      agencyNetProfit,
    };
  }, [coachTransportEgp, guideFeesEgp, permitsEgp, hotelPerPaxEgp, mealsPerPaxEgp, ticketsPerPaxEgp, flightsPerPaxEgp, agencyMarkupPct, paxCount]);

  // -------------------------------------------------------------
  // STATION 3: UNESCO Heritage Explorer
  // -------------------------------------------------------------
  const [selectedHeritageSite, setSelectedHeritageSite] = useState<EgyptianHeritageSite>(EGYPTIAN_HERITAGE_SITES[0]);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number>(0);

  // -------------------------------------------------------------
  // STATION 4: Tourism Carrying Capacity Modeler
  // -------------------------------------------------------------
  const [selectedCcModel, setSelectedCcModel] = useState<CarryingCapacityModel>(CARRYING_CAPACITY_MODELS[0]);
  const [usableAreaSqM, setUsableAreaSqM] = useState<number>(CARRYING_CAPACITY_MODELS[0].totalUsableAreaSqM);
  const [spaceReqPerVisitor, setSpaceReqPerVisitor] = useState<number>(CARRYING_CAPACITY_MODELS[0].spaceRequiredPerVisitorSqM);
  const [dailyHours, setDailyHours] = useState<number>(CARRYING_CAPACITY_MODELS[0].dailyOperatingHours);
  const [visitDurationHours, setVisitDurationHours] = useState<number>(CARRYING_CAPACITY_MODELS[0].averageVisitDurationHours);
  const [sunReductionFactor, setSunReductionFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].sunExcessReductionFactor);
  const [vulnerabilityFactor, setVulnerabilityFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].biodiversityVulnerabilityFactor);
  const [infraFactor, setInfraFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].infrastructureCapacityFactor);

  const handleApplyCcModel = (model: CarryingCapacityModel) => {
    setSelectedCcModel(model);
    setUsableAreaSqM(model.totalUsableAreaSqM);
    setSpaceReqPerVisitor(model.spaceRequiredPerVisitorSqM);
    setDailyHours(model.dailyOperatingHours);
    setVisitDurationHours(model.averageVisitDurationHours);
    setSunReductionFactor(model.sunExcessReductionFactor);
    setVulnerabilityFactor(model.biodiversityVulnerabilityFactor);
    setInfraFactor(model.infrastructureCapacityFactor);
  };

  const ccMetrics = useMemo(() => {
    const safeSpace = Math.max(0.1, spaceReqPerVisitor);
    const safeDuration = Math.max(0.1, visitDurationHours);
    const rotationCoefficient = dailyHours / safeDuration;
    // Physical Carrying Capacity (PCC) = (Area / Space) * Rotation
    const pccVisitorsPerDay = Math.floor((usableAreaSqM / safeSpace) * rotationCoefficient);
    // Correction Factors (Cf) = 1 - factor
    const cfSun = Math.max(0, 1 - sunReductionFactor);
    const cfBio = Math.max(0, 1 - vulnerabilityFactor);
    // Real Carrying Capacity (RCC) = PCC * Cf1 * Cf2
    const rccVisitorsPerDay = Math.floor(pccVisitorsPerDay * cfSun * cfBio);
    // Effective / Permissible Capacity (ECC) = RCC * Management / Infrastructure factor
    const cfInfra = Math.max(0, 1 - infraFactor);
    const eccVisitorsPerDay = Math.floor(rccVisitorsPerDay * cfInfra);

    const sustainabilityAlert = eccVisitorsPerDay < 50
      ? 'CRITICAL_CONSERVATION'
      : eccVisitorsPerDay < 500
      ? 'REGULATED_QUOTA'
      : 'SUSTAINABLE_MASS';

    return {
      rotationCoefficient,
      pccVisitorsPerDay,
      rccVisitorsPerDay,
      eccVisitorsPerDay,
      sustainabilityAlert,
    };
  }, [usableAreaSqM, spaceReqPerVisitor, dailyHours, visitDurationHours, sunReductionFactor, vulnerabilityFactor, infraFactor]);

  // -------------------------------------------------------------
  // STATION 5: GDS Terminal & PNR Builder
  // -------------------------------------------------------------
  const [selectedFlight, setSelectedFlight] = useState<GdsFlightEntry>(GDS_FLIGHT_INVENTORY[0]);
  const [selectedCabin, setSelectedCabin] = useState<'economyClass' | 'businessClass' | 'firstClass'>('economyClass');
  const [passengerFirstName, setPassengerFirstName] = useState<string>('AHMED');
  const [passengerLastName, setPassengerLastName] = useState<string>('HASSAN');
  const [passengerTitle, setPassengerTitle] = useState<string>('MR');
  const [frequentFlyerNo, setFrequentFlyerNo] = useState<string>('MS90218491');
  const [pnrCreated, setPnrCreated] = useState<boolean>(false);
  const [generatedPnrCode, setGeneratedPnrCode] = useState<string>('7EGY9R');

  const handleGeneratePnr = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPnrCode(code);
    setPnrCreated(true);
  };

  // CSV Export handler
  const handleExportCsv = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';

    if (activeStation === 'hotel_yield') {
      csvContent += 'Metric,Value\n';
      csvContent += `Preset,${selectedYieldPreset.nameEn}\n`;
      csvContent += `Total Rooms,${totalRooms}\n`;
      csvContent += `Available Rooms,${availableRooms}\n`;
      csvContent += `Occupied Rooms,${occupiedRooms}\n`;
      csvContent += `Occupancy Rate %,${yieldMetrics.occupancyRate.toFixed(2)}\n`;
      csvContent += `Average Daily Rate ADR (EGP),${adrEgp}\n`;
      csvContent += `RevPAR (EGP),${yieldMetrics.revparEgp.toFixed(2)}\n`;
      csvContent += `Total Operating Revenue (EGP),${yieldMetrics.totalOperatingRevenueEgp.toFixed(2)}\n`;
      csvContent += `TrevPAR (EGP),${yieldMetrics.trevparEgp.toFixed(2)}\n`;
      csvContent += `GOPPAR (EGP),${yieldMetrics.gopparEgp.toFixed(2)}\n`;
      csvContent += `Operating Margin %,${yieldMetrics.operatingMarginPct.toFixed(2)}\n`;
    } else if (activeStation === 'tour_costing') {
      csvContent += 'Tour Costing Parameter,Value\n';
      csvContent += `Tour Package,${selectedTourPreset.nameEn}\n`;
      csvContent += `Anticipated Pax,${paxCount}\n`;
      csvContent += `Fixed Costs Total (EGP),${tourMetrics.totalFixedCosts}\n`;
      csvContent += `Variable Cost Per Pax (EGP),${tourMetrics.variableCostPerPax}\n`;
      csvContent += `Net Cost Per Pax (EGP),${tourMetrics.netCostPerPax.toFixed(2)}\n`;
      csvContent += `Agency Markup %,${agencyMarkupPct}\n`;
      csvContent += `Selling Price Per Pax (EGP),${tourMetrics.sellingPricePerPax.toFixed(2)}\n`;
      csvContent += `Break-Even Pax,${tourMetrics.breakEvenPax}\n`;
      csvContent += `Total Expected Profit (EGP),${tourMetrics.agencyNetProfit.toFixed(2)}\n`;
    } else if (activeStation === 'heritage_explorer') {
      csvContent += 'UNESCO Site,Inscribed Year,Latitude,Longitude\n';
      EGYPTIAN_HERITAGE_SITES.forEach((site) => {
        csvContent += `"${site.nameEn}",${site.inscribedYear},${site.coordinates.lat},${site.coordinates.lng}\n`;
      });
    } else if (activeStation === 'carrying_capacity') {
      csvContent += 'Carrying Capacity Level,Visitors Per Day\n';
      csvContent += `Physical Carrying Capacity (PCC),${ccMetrics.pccVisitorsPerDay}\n`;
      csvContent += `Real Carrying Capacity (RCC),${ccMetrics.rccVisitorsPerDay}\n`;
      csvContent += `Effective Capacity (ECC),${ccMetrics.eccVisitorsPerDay}\n`;
      csvContent += `Sustainability Classification,${ccMetrics.sustainabilityAlert}\n`;
    } else if (activeStation === 'gds_terminal') {
      csvContent += 'PNR,Passenger,Flight,Origin,Dest,Cabin,Fare EGP\n';
      csvContent += `${generatedPnrCode},${passengerLastName}/${passengerFirstName} ${passengerTitle},${selectedFlight.flightNumber},${selectedFlight.originIata},${selectedFlight.destIata},${selectedCabin},${selectedFlight.fareEgp[selectedCabin]}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `tourism_hospitality_${activeStation}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'relative w-full my-6'
      } ${
        isContrast
          ? 'bg-black text-white border-white'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200 shadow-xl'
          : 'bg-[#0D1117] text-slate-100 border-slate-800 shadow-2xl'
      }`}
    >
      {/* ------------------------------------------------------------- */}
      {/* Studio Header */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-white'
            : 'border-slate-800 bg-[#161B22]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Hotel className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر محاكاة السياحة والضيافة وإدارة التراث الثقافي'
                  : 'Tourism, Hospitality & Cultural Heritage Simulation Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'إدارة العائد الفندقي RevPAR، تسعير البرامج السياحية، آثار التراث العالمي لليونسكو، الحمولة السياحية، ونظام حجز الطيران GDS'
                : 'Hotel Yield RevPAR/GOPPAR, Tour Costing & Pricing, UNESCO Heritage Explorer, Carrying Capacity & GDS Terminal'}
            </p>
          </div>
        </div>

        {/* Global Controls: Export CSV & Fullscreen */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isArabic ? 'تصدير البيانات CSV' : 'Export CSV Data'}
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>{isArabic ? 'تصدير' : 'CSV Export'}</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? (isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Station Navigation Tabs */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex items-center gap-1 px-4 py-2 border-b overflow-x-auto text-xs font-medium no-scrollbar ${
          isLight ? 'border-slate-200 bg-slate-100/70' : 'border-slate-800 bg-[#090D11]'
        }`}
      >
        <button
          onClick={() => setActiveStation('hotel_yield')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeStation === 'hotel_yield'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Hotel className="w-4 h-4" />
          <span>{isArabic ? '١. إدارة العائد الفندقي (RevPAR/ADR)' : '1. Hotel Yield & Performance'}</span>
        </button>

        <button
          onClick={() => setActiveStation('tour_costing')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeStation === 'tour_costing'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>{isArabic ? '٢. تسعير البرامج السياحية' : '2. Tour Package Costing'}</span>
        </button>

        <button
          onClick={() => setActiveStation('heritage_explorer')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeStation === 'heritage_explorer'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>{isArabic ? '٣. مستكشف التراث العالمي (اليونسكو)' : '3. UNESCO Heritage Explorer'}</span>
        </button>

        <button
          onClick={() => setActiveStation('carrying_capacity')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeStation === 'carrying_capacity'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{isArabic ? '٤. نمذجة الطاقة الاستيعابية البيئية' : '4. Tourism Carrying Capacity'}</span>
        </button>

        <button
          onClick={() => setActiveStation('gds_terminal')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeStation === 'gds_terminal'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Plane className="w-4 h-4" />
          <span>{isArabic ? '٥. نظام حجز الطيران GDS (سابر/أمديوس)' : '5. GDS Reservation Terminal'}</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Workspace Canvas */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 flex-1 overflow-y-auto max-h-[calc(100vh-180px)]">
        {/* STATION 1: HOTEL YIELD MANAGEMENT */}
        {activeStation === 'hotel_yield' && (
          <div className="space-y-6">
            {/* Presets row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'النماذج الفندقية الجاهزة:' : 'Hotel Presets:'}
              </span>
              {HOTEL_YIELD_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyYieldPreset(preset)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedYieldPreset.id === preset.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'نسبة الإشغال Occupancy' : 'Occupancy Rate'}</div>
                <div className="text-2xl font-bold text-amber-500">
                  {yieldMetrics.occupancyRate.toFixed(1)}%
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {occupiedRooms} / {availableRooms} {isArabic ? 'غرفة مشغولة' : 'rooms occupied'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'معدل السعر اليومي ADR' : 'Average Daily Rate'}</div>
                <div className="text-2xl font-bold text-emerald-500">
                  {adrEgp.toLocaleString()} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'متوسط سعر الغرفة المباعة' : 'Avg room revenue per sold room'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'عائد الغرفة المتاحة RevPAR' : 'RevPAR'}</div>
                <div className="text-2xl font-bold text-sky-500">
                  {yieldMetrics.revparEgp.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  ADR × {isArabic ? 'نسبة الإشغال' : 'Occupancy Rate'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'ربح التشغيل لكل غرفة GOPPAR' : 'GOPPAR'}</div>
                <div className="text-2xl font-bold text-purple-500">
                  {yieldMetrics.gopparEgp.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'هامش التشغيل:' : 'Operating Margin:'} {yieldMetrics.operatingMarginPct.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Main Interactive Controls & Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sliders panel */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'معايير التحكم في الإشغال والتسعير' : 'Occupancy & Pricing Sliders'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد الغرف المتاحة:' : 'Available Rooms:'}</span>
                    <span className="font-mono font-bold text-amber-500">{availableRooms}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="600"
                    step="5"
                    value={availableRooms}
                    onChange={(e) => setAvailableRooms(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد الغرف المباعة (المشغولة):' : 'Occupied Rooms:'}</span>
                    <span className="font-mono font-bold text-emerald-500">{occupiedRooms}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={availableRooms}
                    step="1"
                    value={occupiedRooms}
                    onChange={(e) => setOccupiedRooms(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'متوسط السعر اليومي ADR (جنيه):' : 'Average Daily Rate ADR (EGP):'}</span>
                    <span className="font-mono font-bold text-sky-500">{adrEgp} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="800"
                    max="15000"
                    step="100"
                    value={adrEgp}
                    onChange={(e) => setAdrEgp(Number(e.target.value))}
                    className="w-full accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'إيرادات الأغذية والمشروبات (F&B):' : 'F&B Revenue (EGP):'}</span>
                    <span className="font-mono font-bold">{fbRevenueEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="25000"
                    value={fbRevenueEgp}
                    onChange={(e) => setFbRevenueEgp(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'إجمالي المصروفات التشغيلية:' : 'Total Operating Expenses:'}</span>
                    <span className="font-mono font-bold text-red-400">
                      {(deptExpensesEgp + undistExpensesEgp).toLocaleString()} EGP
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="3000000"
                    step="50000"
                    value={deptExpensesEgp + undistExpensesEgp}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setDeptExpensesEgp(Math.round(val * 0.65));
                      setUndistExpensesEgp(Math.round(val * 0.35));
                    }}
                    className="w-full accent-red-500"
                  />
                </div>
              </div>

              {/* Revenue breakdown chart & insight */}
              <div
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    {isArabic ? 'هيكل الإيرادات والأرباح اليومية للفندق' : 'Daily Revenue & Profit Structure'}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'إيراد الغرف:' : 'Rooms Revenue:'}</span>
                        <span className="font-mono text-slate-200">
                          {yieldMetrics.roomRevenueEgp.toLocaleString()} EGP (
                          {yieldMetrics.totalOperatingRevenueEgp > 0
                            ? ((yieldMetrics.roomRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100).toFixed(1)
                            : 0}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all"
                          style={{
                            width: `${
                              yieldMetrics.totalOperatingRevenueEgp > 0
                                ? (yieldMetrics.roomRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'إيراد الأغذية والمشروبات F&B:' : 'Food & Beverage Revenue:'}</span>
                        <span className="font-mono text-slate-200">
                          {fbRevenueEgp.toLocaleString()} EGP (
                          {yieldMetrics.totalOperatingRevenueEgp > 0
                            ? ((fbRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100).toFixed(1)
                            : 0}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-purple-500 h-full rounded-full transition-all"
                          style={{
                            width: `${
                              yieldMetrics.totalOperatingRevenueEgp > 0
                                ? (fbRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'الربح التشغيلي الإجمالي (GOP):' : 'Gross Operating Profit (GOP):'}</span>
                        <span
                          className={`font-mono font-bold ${
                            yieldMetrics.grossOperatingProfitEgp >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {yieldMetrics.grossOperatingProfitEgp.toLocaleString()} EGP
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            yieldMetrics.grossOperatingProfitEgp >= 0 ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(
                                0,
                                yieldMetrics.totalOperatingRevenueEgp > 0
                                  ? (yieldMetrics.grossOperatingProfitEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                  : 0
                              )
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-amber-950/20 border-amber-900/40 text-amber-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'التحليل الاستراتيجي للعائد:' : 'Yield Strategic Insight:'}</span>{' '}
                  {isArabic
                    ? `يحقق الفندق حالياً TrevPAR يعادل ${yieldMetrics.trevparEgp.toFixed(
                        0
                      )} جنيه، ومعدل RevPAR يعادل ${yieldMetrics.revparEgp.toFixed(
                        0
                      )} جنيه. إذا رُفع السعر بمقدار ١٠٪ مع انخفاض الإشغال بنسبة ٥٪، فإن مرونة الطلب تحدد ما إذا كان RevPAR سيزداد.`
                    : `Current TrevPAR stands at ${yieldMetrics.trevparEgp.toFixed(
                        0
                      )} EGP and RevPAR at ${yieldMetrics.revparEgp.toFixed(
                        0
                      )} EGP. Demand elasticity determines if price hikes outweigh occupancy drops.`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATION 2: TOUR PACKAGE COSTING */}
        {activeStation === 'tour_costing' && (
          <div className="space-y-6">
            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'البرامج السياحية النموذجية:' : 'Tour Package Presets:'}
              </span>
              {TOUR_PACKAGE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyTourPreset(preset)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedTourPreset.id === preset.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'سعر بيع الفرد للبرنامج' : 'Selling Price / Pax'}</div>
                <div className="text-2xl font-bold text-amber-500">
                  {tourMetrics.sellingPricePerPax.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'شامل هامش ربح' : 'Includes markup'} {agencyMarkupPct}%
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'نقطة التعادل (عدد الأفواج)' : 'Break-Even Pax'}</div>
                <div className="text-2xl font-bold text-emerald-500">
                  {tourMetrics.breakEvenPax} <span className="text-xs font-normal">{isArabic ? 'سائح' : 'pax'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {paxCount >= tourMetrics.breakEvenPax ? (
                    <span className="text-emerald-400">
                      ✓ {isArabic ? 'فوق نقطة التعادل بـ' : 'Profitable by'} {paxCount - tourMetrics.breakEvenPax}
                    </span>
                  ) : (
                    <span className="text-rose-400">
                      ⚠ {isArabic ? 'عجز تعادل بـ' : 'Deficit by'} {tourMetrics.breakEvenPax - paxCount}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'إجمالي أرباح الوكالة' : 'Total Agency Profit'}</div>
                <div className="text-2xl font-bold text-sky-500">
                  {tourMetrics.agencyNetProfit.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'عن فوج مكون من' : 'For group of'} {paxCount} {isArabic ? 'سائحاً' : 'pax'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'التكلفة الإجمالية للفرد' : 'Net Cost / Pax'}</div>
                <div className="text-2xl font-bold text-purple-500">
                  {tourMetrics.netCostPerPax.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'تكاليف متغيرة + نصيب الثابت' : 'Fixed alloc. + Variable'}
                </div>
              </div>
            </div>

            {/* Cost Breakdowns and Sliders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sliders */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'محددات التسعير والتكاليف' : 'Cost & Margin Controls'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد السياح المتوقع (Pax):' : 'Anticipated Pax:'}</span>
                    <span className="font-mono font-bold text-amber-500">{paxCount} pax</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="1"
                    value={paxCount}
                    onChange={(e) => setPaxCount(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة هامش ربح الوكالة (Markup %):' : 'Agency Markup %:'}</span>
                    <span className="font-mono font-bold text-emerald-500">{agencyMarkupPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="1"
                    value={agencyMarkupPct}
                    onChange={(e) => setAgencyMarkupPct(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تكلفة الأتوبيس السياحي الثابتة:' : 'Coach Transport Fixed:'}</span>
                    <span className="font-mono font-bold text-sky-500">{coachTransportEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="80000"
                    step="2000"
                    value={coachTransportEgp}
                    onChange={(e) => setCoachTransportEgp(Number(e.target.value))}
                    className="w-full accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تكلفة الفندق لكل فرد (إجمالي الليالي):' : 'Hotel Lodging / Pax:'}</span>
                    <span className="font-mono font-bold">{hotelPerPaxEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="500"
                    value={hotelPerPaxEgp}
                    onChange={(e) => setHotelPerPaxEgp(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تذاكر المزارات والمتاحف للفرد:' : 'Attraction Tickets / Pax:'}</span>
                    <span className="font-mono font-bold">{ticketsPerPaxEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="200"
                    value={ticketsPerPaxEgp}
                    onChange={(e) => setTicketsPerPaxEgp(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                </div>
              </div>

              {/* Cost Structure Card */}
              <div
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-sky-500" />
                    {isArabic ? 'بيان تفصيل تكلفة وتوزيع البرنامج' : 'Tour Package Quotation Sheet'}
                  </h3>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'إجمالي التكاليف الثابتة:' : 'Total Fixed Costs:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.totalFixedCosts.toLocaleString()} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'نصيب الفرد من التكاليف الثابتة:' : 'Fixed Cost Share / Pax:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.fixedCostPerPax.toFixed(0)} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'التكاليف المتغيرة للفرد:' : 'Variable Costs / Pax:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.variableCostPerPax.toLocaleString()} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-amber-500/10 border border-amber-500/20">
                      <span className="text-amber-400 font-semibold">{isArabic ? 'سعر بيع البرنامج المقترح:' : 'Recommended Selling Price:'}</span>
                      <span className="font-mono font-bold text-amber-400">
                        {tourMetrics.sellingPricePerPax.toFixed(0)} EGP
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'معادلة نقطة التعادل السياحية:' : 'Break-Even Equation:'}</span>{' '}
                  {isArabic
                    ? `Break-Even Pax = التكاليف الثابتة ÷ (سعر البيع - التكلفة المتغيرة للفرد). لتغطية تكاليف الأتوبيس والمرشد والتصاريح، يحتاج الفوج إلى ${tourMetrics.breakEvenPax} مسافرين على الأقل.`
                    : `Break-Even Pax = Fixed Costs / (Price - Variable Cost). The agency needs at least ${tourMetrics.breakEvenPax} travelers to break even.`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATION 3: UNESCO HERITAGE EXPLORER */}
        {activeStation === 'heritage_explorer' && (
          <div className="space-y-6">
            {/* Site selector tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EGYPTIAN_HERITAGE_SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => {
                    setSelectedHeritageSite(site);
                    setActiveHighlightIndex(0);
                  }}
                  className={`p-3 rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between ${
                    selectedHeritageSite.id === site.id
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-sm'
                      : isLight
                      ? 'bg-white border-slate-200 hover:bg-slate-100'
                      : 'bg-[#161B22] border-slate-800 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-500">
                      UNESCO {site.inscribedYear}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-xs line-clamp-2">
                    {isArabic ? site.nameAr : site.nameEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {isArabic ? site.locationAr : site.locationEn}
                  </p>
                </button>
              ))}
            </div>

            {/* Detailed Site Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Information Panel */}
              <div
                className={`lg:col-span-2 p-6 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold flex items-center gap-2">
                      <Landmark className="w-5 h-5 text-amber-500" />
                      {isArabic ? selectedHeritageSite.nameAr : selectedHeritageSite.nameEn}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {isArabic ? selectedHeritageSite.locationAr : selectedHeritageSite.locationEn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {isArabic ? selectedHeritageSite.periodAr : selectedHeritageSite.periodEn}
                      </span>
                    </div>
                  </div>
                  <div className="text-right rtl:text-left text-xs font-mono text-slate-400">
                    {selectedHeritageSite.coordinates.lat.toFixed(4)}° N, {selectedHeritageSite.coordinates.lng.toFixed(4)}° E
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
                    {isArabic ? 'القيمة العالمية الاستثنائية (OUV):' : 'Outstanding Universal Value (OUV):'}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {isArabic ? selectedHeritageSite.significanceAr : selectedHeritageSite.significanceEn}
                  </p>
                </div>

                {/* Architectural highlights checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isArabic ? 'أبرز المعالم المعمارية والتاريخية المسجلة:' : 'Key Architectural & Historical Highlights:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(isArabic
                      ? selectedHeritageSite.architecturalHighlightsAr
                      : selectedHeritageSite.architecturalHighlightsEn
                    ).map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveHighlightIndex(idx)}
                        className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-start gap-2 ${
                          activeHighlightIndex === idx
                            ? 'bg-amber-500/15 border-amber-500 text-slate-100 font-semibold'
                            : isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            activeHighlightIndex === idx ? 'text-amber-500' : 'text-slate-500'
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conservation Challenges & Management */}
              <div
                className={`p-6 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3 text-rose-400">
                    <ShieldAlert className="w-4 h-4" />
                    {isArabic ? 'تحديات الترميم والصون الوقائي' : 'Conservation & Preventive Care'}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isArabic ? selectedHeritageSite.conservationChallengesAr : selectedHeritageSite.conservationChallengesEn}
                  </p>

                  <div className="space-y-3 text-xs border-t border-slate-800 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'سنة الإدراج باليونسكو:' : 'Inscribed Year:'}</span>
                      <span className="font-bold text-amber-400">{selectedHeritageSite.inscribedYear}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'التصنيف الدولي:' : 'Classification:'}</span>
                      <span className="font-bold text-slate-200">{isArabic ? 'تراث ثقافي عالمي' : 'Cultural Heritage'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'مستوى حماية الموقع:' : 'Protection Level:'}</span>
                      <span className="font-bold text-emerald-400">{isArabic ? 'قانون الآثار رقم ١١٧' : 'Law No. 117'}</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-6 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-800/50 border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'ميثاق فينيسيا ١٩٦٤:' : 'Venice Charter 1964:'}</span>{' '}
                  {isArabic
                    ? 'يمنع الترميم التخيلي، ويشترط استخدام مواد قابلة للانعكاس والتمييز بين النسيج الأثري الأصلي والإضافات الحديثة.'
                    : 'Mandates reversible materials and strict distinction between original historical fabric and modern conservation repairs.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATION 4: CARRYING CAPACITY MODELER */}
        {activeStation === 'carrying_capacity' && (
          <div className="space-y-6">
            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'المواقع البيئية والأثرية الحساسة:' : 'Sensitive Sites:'}
              </span>
              {CARRYING_CAPACITY_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => handleApplyCcModel(model)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedCcModel.id === model.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? model.nameAr : model.nameEn}
                </button>
              ))}
            </div>

            {/* Carrying Capacity Level Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الاستيعابية المادية (PCC)' : 'Physical Carrying Capacity (PCC)'}
                </div>
                <div className="text-2xl font-bold text-sky-500">
                  {ccMetrics.pccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  (Area / Space) × Rotation ({ccMetrics.rotationCoefficient.toFixed(1)})
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الاستيعابية الحقيقية (RCC)' : 'Real Carrying Capacity (RCC)'}
                </div>
                <div className="text-2xl font-bold text-amber-500">
                  {ccMetrics.rccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  PCC × {isArabic ? 'معاملات التصحيح البيئي' : 'Environmental Correction Factors'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الفعالة المسموحة (ECC)' : 'Effective Capacity (ECC)'}
                </div>
                <div className="text-2xl font-bold text-emerald-500">
                  {ccMetrics.eccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'الحد الأقصى اليومي الآمن للاستدامة' : 'Safe Sustainable Daily Quota'}
                </div>
              </div>
            </div>

            {/* Sliders & Parameters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'معايير المساحة وساعات الزيارة' : 'Physical & Operational Parameters'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المساحة المتاحة للاستخدام (م²):' : 'Usable Area (m²):'}</span>
                    <span className="font-mono font-bold text-amber-500">{usableAreaSqM.toLocaleString()} m²</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100000"
                    step="50"
                    value={usableAreaSqM}
                    onChange={(e) => setUsableAreaSqM(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المساحة المطلوبة لكل زائر (م²):' : 'Space Required / Visitor (m²):'}</span>
                    <span className="font-mono font-bold text-emerald-500">{spaceReqPerVisitor} m²</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    step="1"
                    value={spaceReqPerVisitor}
                    onChange={(e) => setSpaceReqPerVisitor(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ساعات التشغيل اليومية للموقع:' : 'Daily Operating Hours:'}</span>
                    <span className="font-mono font-bold text-sky-500">{dailyHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="14"
                    step="1"
                    value={dailyHours}
                    onChange={(e) => setDailyHours(Number(e.target.value))}
                    className="w-full accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'متوسط مدة زيارة الفرد (ساعات):' : 'Average Visit Duration (hrs):'}</span>
                    <span className="font-mono font-bold">{visitDurationHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="0.25"
                    max="8"
                    step="0.25"
                    value={visitDurationHours}
                    onChange={(e) => setVisitDurationHours(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>
              </div>

              {/* Vulnerability factors */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  {isArabic ? 'معاملات الهشاشة البيئية والتصحيح' : 'Vulnerability & Correction Factors'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل الإشعاع الشمسي والطقس القاسي:' : 'Extreme Climate / Heat Factor:'}</span>
                    <span className="font-mono font-bold text-amber-400">{(sunReductionFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={sunReductionFactor}
                    onChange={(e) => setSunReductionFactor(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل هشاشة التنوع الحيوي / النقوش الأثرية:' : 'Biodiversity / Fresco Fragility:'}</span>
                    <span className="font-mono font-bold text-rose-400">{(vulnerabilityFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={vulnerabilityFactor}
                    onChange={(e) => setVulnerabilityFactor(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل قيود إدارة البنية التحتية:' : 'Infrastructure Management Limit:'}</span>
                    <span className="font-mono font-bold text-sky-400">{(infraFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={infraFactor}
                    onChange={(e) => setInfraFactor(Number(e.target.value))}
                    className="w-full accent-sky-500"
                  />
                </div>

                <div
                  className={`p-3 rounded-lg border text-xs leading-relaxed ${
                    ccMetrics.sustainabilityAlert === 'CRITICAL_CONSERVATION'
                      ? 'bg-rose-950/20 border-rose-900/40 text-rose-300'
                      : ccMetrics.sustainabilityAlert === 'REGULATED_QUOTA'
                      ? 'bg-amber-950/20 border-amber-900/40 text-amber-300'
                      : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'التصنيف البيئي للموقع:' : 'Environmental Classification:'}</span>{' '}
                  {ccMetrics.sustainabilityAlert === 'CRITICAL_CONSERVATION' &&
                    (isArabic
                      ? 'موقع شديد الحساسية (حماية حرجة). يتطلب نظام حجز مسبق صارم وسقفاً لا يتجاوز ٥٠ زائراً يومياً لحماية الأثر أو الشعاب.'
                      : 'Critical Conservation Zone: Strict pre-booking quota required (< 50 daily visitors).')}
                  {ccMetrics.sustainabilityAlert === 'REGULATED_QUOTA' &&
                    (isArabic
                      ? 'موقع خاضع لنظام الحصص المنظمة (Regulated Quota) بمراقبة مستمرة لمستويات الرطوبة والتزاحم.'
                      : 'Regulated Quota Zone: Continuous environmental and crowd telemetry monitoring.')}
                  {ccMetrics.sustainabilityAlert === 'SUSTAINABLE_MASS' &&
                    (isArabic
                      ? 'موقع ذو طاقة استيعابية رحبة، قادر على استيعاب السياحة الجماعية المستدامة مع مسارات توجيه محددة.'
                      : 'Sustainable Mass Tourism Zone: Wide spatial capacity with guided pedestrian flow.')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATION 5: GDS TERMINAL & PNR BUILDER */}
        {activeStation === 'gds_terminal' && (
          <div className="space-y-6">
            {/* Terminal Header Info */}
            <div
              className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    {isArabic ? 'شاشة التوزيع العالمي للطيران (GDS Amadeus / Sabre Emulation)' : 'GDS Flight Inventory & PNR Emulator'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isArabic ? 'الناقل الوطني: مصر للطيران (EGYPTAIR - MS) - اتحاد النقل الجوي IATA' : 'National Flag Carrier: EGYPTAIR (MS) - IATA System'}
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400">
                GDS HOST: LIVE-CONNECTED
              </div>
            </div>

            {/* Flight Selection Table */}
            <div
              className={`rounded-xl border overflow-hidden ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="p-3 border-b border-slate-800 font-semibold text-xs flex items-center justify-between">
                <span>{isArabic ? 'جدول رحلات مصر للطيران المتاحة بالحجز:' : 'Available EgyptAir Scheduled Flights:'}</span>
                <span className="text-slate-500">{isArabic ? 'انقر على الرحلة لتحديدها' : 'Click flight to select'}</span>
              </div>
              <div className="divide-y divide-slate-800 overflow-x-auto text-xs">
                {GDS_FLIGHT_INVENTORY.map((flight) => (
                  <div
                    key={flight.flightNumber}
                    onClick={() => {
                      setSelectedFlight(flight);
                      setPnrCreated(false);
                    }}
                    className={`p-3.5 flex items-center justify-between cursor-pointer transition-all ${
                      selectedFlight.flightNumber === flight.flightNumber
                        ? 'bg-sky-500/15 text-slate-100 font-semibold'
                        : isLight
                        ? 'hover:bg-slate-50'
                        : 'hover:bg-slate-800/40 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                        {flight.flightNumber}
                      </span>
                      <div>
                        <div className="font-bold">
                          {flight.originIata} → {flight.destIata}
                        </div>
                        <div className="text-[11px] text-slate-500">{flight.aircraftType}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-slate-400 text-[11px]">{isArabic ? 'المغادرة' : 'Dep'}</div>
                        <div className="font-mono">{flight.departureTime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-400 text-[11px]">{isArabic ? 'الوصول' : 'Arr'}</div>
                        <div className="font-mono">{flight.arrivalTime}</div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="text-[11px] text-slate-400">{isArabic ? 'من' : 'From'}</div>
                        <div className="font-mono font-bold text-emerald-400">
                          {flight.fareEgp.economyClass.toLocaleString()} EGP
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Passenger Details & PNR Creation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* PNR Form */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-500" />
                  {isArabic ? 'بيانات الراكب ودرجة السفر (PNR Form)' : 'Passenger Details & Cabin Selection'}
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'اللقب' : 'Title'}</label>
                    <select
                      value={passengerTitle}
                      onChange={(e) => setPassengerTitle(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs"
                    >
                      <option value="MR">MR</option>
                      <option value="MRS">MRS</option>
                      <option value="MS">MS</option>
                      <option value="DR">DR</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'الاسم الأول' : 'First Name'}</label>
                    <input
                      type="text"
                      value={passengerFirstName}
                      onChange={(e) => setPassengerFirstName(e.target.value.toUpperCase())}
                      className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono uppercase"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'اسم العائلة' : 'Last Name'}</label>
                    <input
                      type="text"
                      value={passengerLastName}
                      onChange={(e) => setPassengerLastName(e.target.value.toUpperCase())}
                      className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'درجة السفر' : 'Cabin Class'}</label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {(['economyClass', 'businessClass', 'firstClass'] as const).map((cabin) => (
                      <button
                        key={cabin}
                        onClick={() => setSelectedCabin(cabin)}
                        disabled={selectedFlight.availableSeats[cabin] === 0}
                        className={`p-2 rounded-lg border text-center transition-all ${
                          selectedCabin === cabin
                            ? 'bg-sky-500/20 text-sky-400 border-sky-500 font-bold'
                            : selectedFlight.availableSeats[cabin] === 0
                            ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                            : isLight
                            ? 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                            : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                        }`}
                      >
                        <div className="capitalize">
                          {cabin === 'economyClass' ? (isArabic ? 'سياحية' : 'Economy') : cabin === 'businessClass' ? (isArabic ? 'رجال أعمال' : 'Business') : (isArabic ? 'أولى' : 'First')}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {selectedFlight.fareEgp[cabin] > 0
                            ? `${selectedFlight.fareEgp[cabin].toLocaleString()} EGP`
                            : isArabic
                            ? 'غير متوفر'
                            : 'N/A'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'رقم المسافر الدائم (EgyptAir Plus)' : 'Frequent Flyer No:'}</label>
                  <input
                    type="text"
                    value={frequentFlyerNo}
                    onChange={(e) => setFrequentFlyerNo(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono"
                  />
                </div>

                <button
                  onClick={handleGeneratePnr}
                  className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>{isArabic ? 'إصدار رمز الحجز المؤكد (Generate PNR)' : 'Issue Confirmed PNR'}</span>
                </button>
              </div>

              {/* PNR Terminal Screen Display */}
              <div className="p-5 rounded-xl border bg-black border-slate-800 font-mono text-xs text-emerald-400 space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2 text-[11px]">
                  <span className="text-emerald-500 font-bold">SABRE/AMADEUS SYSTEM PNR RECORD</span>
                  <span className="text-slate-500">STATUS: {pnrCreated ? 'HK (CONFIRMED)' : 'PENDING'}</span>
                </div>

                <div className="space-y-1.5 leading-relaxed text-[11px]">
                  <div>1.1{passengerLastName}/{passengerFirstName} {passengerTitle}</div>
                  <div>
                    2 {selectedFlight.flightNumber} {selectedCabin === 'economyClass' ? 'Y' : selectedCabin === 'businessClass' ? 'C' : 'F'} {selectedFlight.originIata}{selectedFlight.destIata} HK1 {selectedFlight.departureTime} {selectedFlight.arrivalTime}
                  </div>
                  <div>3 AP EGY/CAIRO AIRPORT TELECOM +20 2 22650000</div>
                  <div>4 TK OK{pnrCreated ? new Date().toLocaleDateString('en-GB') : 'PENDING'}</div>
                  <div>5 SSR FQTV MS HK1 {frequentFlyerNo}</div>
                  <div>
                    6 FARE: EGP {selectedFlight.fareEgp[selectedCabin].toLocaleString()} / TAX: EGP {(selectedFlight.fareEgp[selectedCabin] * 0.14).toFixed(0)} / TOTAL: EGP {(selectedFlight.fareEgp[selectedCabin] * 1.14).toFixed(0)}
                  </div>
                </div>

                {pnrCreated && (
                  <div className="mt-4 p-3 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-300">
                    <div className="font-bold text-sm text-emerald-400">
                      PNR RECORD LOCATOR: {generatedPnrCode}
                    </div>
                    <div className="text-[10px] text-emerald-500 mt-1">
                      {isArabic
                        ? 'تم حجز المقعد وإصدار التذكرة الإلكترونية بنجاح عبر بروتوكول IATA 724.'
                        : 'Seat secured and e-ticket generated successfully under IATA 724 protocol.'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
