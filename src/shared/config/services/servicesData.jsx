import React from 'react';
import spDesignImg from '../../../assets/sp_design.png';
import spIntegrationImg from '../../../assets/sp_integration.png';
import spAnalyticsImg from '../../../assets/sp_analytics.png';
import spCaseStudyImg from '../../../assets/sp_casestudy.png';
import spCommercialImg from '../../../assets/sp_commercial.png';
import spTechHighlightImg from '../../../assets/sp_tech_highlight_blue_modern_euro_green.png';
import spAgrivoltaicsImg from '../../../assets/sp_agrivoltaics_v2.png';
import spFloatovoltaicsImg from '../../../assets/sp_floatovoltaics.png';

import {
  IconDesign,
  IconIntegration,
  IconAnalytics,
  IconCheck,
  IconChevron,
  IconArrowRight,
  IconResidential,
  IconCommercial,
  IconStorage
} from '../../../shared/ui/icon';

/* ── Data ─────────────────────────────────────── */
export const serviceSectors = [
  {
    icon: <IconDesign />,
    title: 'Architecture & Design',
    desc: 'Shading analysis, 3D modeling, and structural design to maximize your roof\'s solar potential.',
    targetId: 'design-block',
  },
  {
    icon: <IconIntegration />,
    title: 'Deployment & Integration',
    desc: 'Professional installation of Tier-1 modules and hybrid inverters with full grid and smart-home synchronization.',
    targetId: 'integration-block',
  },
  {
    icon: <IconAnalytics />,
    title: 'Analytics & Management',
    desc: 'Monitoring and proactive maintenance ensure peak efficiency for decades to come.',
    targetId: 'analytics-block',
  },
];

export const specializedSolutions = [
  {
    icon: <IconResidential />,
    title: 'Residential Systems',
    desc: 'Engineering sustainable independence for modern homes with premium aesthetics.',
    list: ['Rooftop BIPV & Retrofits', 'Smart-Home Energy Sync', 'Backup Battery Systems'],
  },
  {
    icon: <IconCommercial />,
    title: 'Commercial & Industrial',
    desc: 'Large-scale energy efficiency and ESG-aligned infrastructure for the future of business.',
    list: ['Ground-Mount Stations', 'Peak Shaving Solutions', 'ESG Impact Reporting'],
  },
  {
    icon: <IconStorage />,
    title: 'Infrastructure & EV',
    desc: 'Modular battery ecosystems and high-speed charging networks for next-gen transport.',
    list: ['EV Fleet Charging Hubs', 'Microgrid Engineering', 'Utility-Scale Storage'],
  },
];

export const deepDiveBlocks = [
  {
    id: 'design-block',
    phase: '01',
    tabs: [
      {
        id: 'analysis',
        label: 'Analysis',
        title: 'Advanced Site Mapping',
        text: 'Every Sunberg project begins with an exhaustive site analysis. Our engineers utilize advanced simulation software to evaluate shading dynamics and environmental factors, optimizing your roof\'s solar potential with absolute precision.',
        stat: { value: '15+', label: 'Data Parameters' },
        features: [
          'High-precision terrain analysis',
          'Generation potential analysis',
          'Solar radiance mapping'
        ]
      },
      {
        id: 'design',
        label: 'Design',
        title: 'Architectural Concept',
        text: 'We prioritize aesthetic harmony, selecting premium components that complement your property\'s architecture while maximizing energy harvest through advanced geometry.',
        stat: { value: 'Custom', label: 'Design Aesthetic' },
        features: [
          'Bespoke component selection',
          'Visual impact assessment',
          'Seamless structural integration'
        ]
      }
    ],
    image: spDesignImg,
  },
  {
    id: 'integration-block',
    phase: '02',
    tabs: [
      {
        id: 'modules',
        label: 'Modules',
        title: 'Premium Module Engineering',
        text: 'We utilize advanced photovoltaic modules with industry-leading efficiency, designed for superior performance and minimal degradation over their extended lifespan.',
        stat: { value: '22.5%+', label: 'Peak Efficiency' },
        features: [
          'High-Efficiency Cell Architecture',
          'Advanced Photovoltaic Systems',
          'Superior Climate Resilience'
        ]
      },
      {
        id: 'inverters',
        label: 'Inverters',
        title: 'Hybrid Conversion Power',
        text: 'Our hybrid inverters are the brains of your system, capable of seamless battery integration and millisecond-fast backup transitions. Efficiency is prioritized at every stage of power conversion.',
        stat: { value: '97.8%', label: 'Conversion rate' },
        features: [
          'Optimized Battery Link',
          'Smart Energy Optimization',
          'Seamless Backup Transition'
        ]
      },
      {
        id: 'mounting',
        label: 'Mounting',
        title: 'Wind-Rated Integrity',
        text: 'Our anodized aluminum mounting systems are engineered to withstand extreme conditions. Every fastener is designed for maximum pull-out resistance and long-term structural integrity.',
        stat: { value: '200km/h', label: 'Wind resistance' },
        features: [
          'Corrosion-resistant anodized AL',
          'Non-penetrative roof attachments',
          'Quick-mount alignment system'
        ]
      }
    ],
    image: spIntegrationImg,
  },
  {
    id: 'analytics-block',
    phase: '03',
    tabs: [
      {
        id: 'support',
        label: 'Support',
        title: 'Unwavering Partnership',
        text: 'Our commitment to your energy independence doesn\'t end with installation. We stand by our work, ensuring you\'re never left alone and that expert help is always just a call away.',
        stat: { value: 'Always', label: 'Ready to Help' },
        features: [
          'Expert Phone Support',
          'Comprehensive system training',
          'Rapid Technical Response'
        ]
      },
      {
        id: 'evolution',
        label: 'Evolution',
        title: 'Technological Lifecycle',
        text: 'We maintain a complete digital blueprint of your system configuration. As solar technology advances, we proactively reach out with modernization options to keep your investment at the cutting edge.',
        stat: { value: 'Future', label: 'Ready' },
        features: [
          'Digital Configuration Ledger',
          'Next-Gen Tech Integration',
          'Strategic System Evolution'
        ]
      },
    ],
    image: spAnalyticsImg,
  }
];

export const hardwarePartners = [
  { name: 'LONGi', tagline: 'Modules' },
  { name: 'SMA', tagline: 'Inverters' },
  { name: 'SolarEdge', tagline: 'Optimizers' },
  { name: 'Victron', tagline: 'Storage' },
  { name: 'K2 Systems', tagline: 'Mounting' },
  { name: 'Fronius', tagline: 'Inverters' },
  { name: 'BYD', tagline: 'Storage' },
  { name: 'Enphase', tagline: 'Micro-Inverters' },
  { name: 'Tesla', tagline: 'Powerwall' },
  { name: 'Trina Solar', tagline: 'Modules' },
  { name: 'Meyer Burger', tagline: 'Modules' },
  { name: 'Mounting Systems', tagline: 'Mounting' },
];

export const faqItems = [
  {
    q: 'What happens to panel efficiency after 10 years of operation?',
    a: 'Our premium photovoltaic modules have a degradation rate of just 0.4% per year — significantly below the industry average of 0.7%. After 10 years, your system will still operate at approximately 96% of its original capacity. After 25 years, we guarantee a minimum of 87.4% output.',
  },
  {
    q: 'How does the system perform during a full grid blackout?',
    a: 'Systems equipped with our hybrid inverter and battery package automatically switch to island mode within 20 milliseconds — fast enough that most appliances won\'t even register the outage. Standard grid-tied systems without storage will shut down per regulatory requirements.',
  },
  {
    q: 'How does the system perform during cloudy days or in winter?',
    a: 'Modern high-efficiency modules are highly sensitive to the full light spectrum, meaning they generate power even on overcast days. While production is lower in winter due to shorter days, our system architecture is optimized for low-light efficiency, ensuring a steady energy flow year-round.',
  },
  {
    q: 'Do I need to manually clean the panels or perform any maintenance?',
    a: 'Sunberg systems are designed for minimal maintenance. In most climates, rainfall is sufficient to keep panels clean. However, our technical support and modernization programs ensure that your system remains in peak condition with periodic expert health checks.',
  },
  {
    q: 'Can I integrate my electric vehicle (EV) charging into the solar ecosystem?',
    a: 'Absolutely. Our smart-home energy sync allows you to prioritize EV charging when solar production is at its peak. This "Solar-to-EV" logic ensures your car is powered by the cleanest and cheapest energy available, maximizing your savings.',
  },
  {
    q: 'How do you calculate ROI projections and what assumptions do you use?',
    a: 'Our projections use 10-year localized irradiance data from satellite sources, actual utility rate escalation trends (typically 3–5% annually), verified panel degradation curves, and your real consumption profile. We deliberately model conservative scenarios — our clients typically outperform projections by 8–12%.',
  },
  {
    q: 'What warranties are provided for the system components?',
    a: 'We only partner with Tier 1 manufacturers, providing a standard 25-year linear performance warranty for modules and 10-to-15 year warranties for inverters and storage systems. Additionally, Sunberg provides a comprehensive structural integrity guarantee for the entire installation.',
  },
  {
    q: 'Is it possible to expand the system capacity in the future?',
    a: 'Yes. Our modular architecture is designed for scalability. We can easily add more storage capacity or integrate additional panels as your energy needs evolve, ensuring your investment grows with you.',
  },
];

export const caseStudyData = {
  title: 'Villa Eriksson Ecosystem',
  location: 'Stockholm Archipelago',
  description: 'A complete off-grid capable residential system integrating 18.2 kWp TOPCon modules with a 30kWh storage system, providing 100% energy autonomy during summer months.',
  image: spCaseStudyImg,
  metrics: [
    { value: '18.2', unit: 'kWp', label: 'Capacity' },
    { value: '100', unit: '%', label: 'Autonomy' },
    { value: '4.2', unit: 'y', label: 'ROI' },
  ],
};

export const spTechHighlightImgExport = spAgrivoltaicsImg;

export const floatovoltaicsData = {
  title: 'Floatovoltaic Innovation',
  desc: 'Installation of floating solar farms on reservoirs. Water naturally cools the modules, increasing energy output by 5-10% while reducing evaporation by 70%.',
  image: spFloatovoltaicsImg,
  stats: [
    { value: '+10%', label: 'Energy Yield' },
    { value: '-70%', label: 'Water Evaporation' },
    { value: 'Natural', label: 'Cooling Effect' }
  ]
};
