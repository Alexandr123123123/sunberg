import React from 'react';
import spDesignImg from '../../../assets/sp_design.png';
import spIntegrationImg from '../../../assets/sp_integration.png';
import spAnalyticsImg from '../../../assets/sp_analytics.png';
import spCaseStudyImg from '../../../assets/sp_casestudy.png';
import spCommercialImg from '../../../assets/sp_commercial.png';
import spTechHighlightImg from '../../../assets/sp_tech_highlight_blue_modern_euro_green.png';

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
    title: 'Архитектура и дизайн',
    desc: 'Анализ затенения, 3D-моделирование и проектирование конструкций для максимального использования потенциала вашей крыши.',
    targetId: 'design-block',
  },
  {
    icon: <IconIntegration />,
    title: 'Развертывание и интеграция',
    desc: 'Профессиональная установка модулей первого уровня и гибридных инверторов с полной синхронизацией с сетью и системой «умный дом».',
    targetId: 'integration-block',
  },
  {
    icon: <IconAnalytics />,
    title: 'Аналитика и управление',
    desc: 'Непрерывный мониторинг с помощью ИИ и упреждающее техническое обслуживание гарантируют максимальную эффективность на протяжении десятилетий.',
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
        title: 'LiDAR Terrain Mapping',
        text: 'Every Sunberg project begins with a comprehensive site analysis. We combine drone-captured aerial imagery with proprietary shading simulation software to model your roof\'s solar potential down to the square centimeter.',
        stat: { value: '1cm²', label: 'Modeling precision' },
        features: [
          'LiDAR-based terrain analysis',
          '3D digital twin generation',
          'Solar radiance mapping'
        ]
      },
      {
        id: 'model',
        label: 'Model',
        title: 'BIM-Integrated Design',
        text: 'Our structural engineers calculate wind, snow, and dead-load factors to ensure decades of integrity. We create a complete Building Information Model (BIM) to optimize panel placement and wiring infrastructure.',
        stat: { value: '100%', label: 'BIM Compliance' },
        features: [
          'Full structural load calculations',
          'Optimized electrical schematics',
          'Virtual installation walkthrough'
        ]
      },
      {
        id: 'logic',
        label: 'Logic',
        title: 'Architectural Synergy',
        text: 'We believe solar should enhance your architecture, not obscure it. Our design logic prioritizes sleek aesthetics and minimal visual impact while maximizing energy harvest through advanced geometry.',
        stat: { value: 'Zero', label: 'Visible wiring' },
        features: [
          'Invisible mounting solutions',
          'Custom color-matched components',
          'Landscape-integrated design'
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
        title: 'N-Type TOPCon Efficiency',
        text: 'We exclusively deploy N-type TOPCon modules with industry-leading efficiency ratings. These panels offer superior low-light performance and minimal degradation over their 25-year lifespan.',
        stat: { value: '22.5%', label: 'Peak efficiency' },
        features: [
          'High-density cell packaging',
          'Superior bifacial energy gain',
          'Industry-best temperature coefficient'
        ]
      },
      {
        id: 'inverters',
        label: 'Inverters',
        title: 'Hybrid Conversion Power',
        text: 'Our hybrid inverters are the brains of your system, capable of seamless battery integration and millisecond-fast backup transitions. Efficiency is prioritized at every stage of power conversion.',
        stat: { value: '97.8%', label: 'Conversion rate' },
        features: [
          'Direct-to-battery DC coupling',
          'Advanced MPPT tracking',
          'Grid-independent backup mode'
        ]
      },
      {
        id: 'mounting',
        label: 'Mounting',
        title: 'Wind-Rated Integrity',
        text: 'Our anodized aluminum mounting systems are wind-tunnel tested to withstand extreme conditions. Every fastener is engineered for maximum pull-out resistance and long-term durability.',
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
        id: 'monitoring',
        label: 'Monitoring',
        title: 'AI-Driven Vigilance',
        text: 'Post-installation, your system enters our AI-driven monitoring ecosystem. Anomalies are detected before they become failures, with real-time reporting accessible from any device.',
        stat: { value: '24/7', label: 'Active monitoring' },
        features: [
          'Real-time energy flow tracking',
          'Machine-learning fault detection',
          'Instant mobile notifications'
        ]
      },
      {
        id: 'care',
        label: 'Care',
        title: 'Proactive Maintenance',
        text: 'We don\'t wait for issues to arise. Our proactive care program includes thermal imaging inspections, automated cleaning schedules, and detailed health checks twice a year.',
        stat: { value: '2x', label: 'Yearly inspections' },
        features: [
          'IR thermal panel analysis',
          'Professional deep cleaning',
          'Electrical torque verification'
        ]
      },
      {
        id: 'returns',
        label: 'Returns',
        title: 'Yield Optimization',
        text: 'Quarterly performance reports ensure your investment operates at peak efficiency. We analyze environmental data to suggest optimizations that maximize your long-term ROI.',
        stat: { value: '30y', label: 'Design lifespan' },
        features: [
          'Performance benchmarking',
          'Seasonal tilt optimization',
          'Financial yield reporting'
        ]
      }
    ],
    image: spAnalyticsImg,
  },
];

export const hardwarePartners = [
  { name: 'LONGi', tagline: 'Modules' },
  { name: 'SMA', tagline: 'Inverters' },
  { name: 'SolarEdge', tagline: 'Optimizers' },
  { name: 'Victron', tagline: 'Storage' },
  { name: 'K2 Systems', tagline: 'Mounting' },
];

export const faqItems = [
  {
    q: 'What happens to panel efficiency after 10 years of operation?',
    a: 'Our N-type TOPCon modules have a degradation rate of just 0.4% per year — significantly below the industry average of 0.7%. After 10 years, your system will still operate at approximately 96% of its original capacity. After 25 years, we guarantee a minimum of 87.4% output.',
  },
  {
    q: 'How does the system perform during a full grid blackout?',
    a: 'Systems equipped with our hybrid inverter and battery package automatically switch to island mode within 20 milliseconds — fast enough that most appliances won\'t even register the outage. Standard grid-tied systems without storage will shut down per regulatory requirements.',
  },
  {
    q: 'What specific sensors are used in your monitoring system?',
    a: 'Each installation includes panel-level power optimizers with individual MPPT tracking, ambient and module temperature sensors, irradiance meters, and bi-directional grid meters. All data feeds into our centralized AI platform with 5-second polling intervals.',
  },
  {
    q: 'How do you calculate ROI projections and what assumptions do you use?',
    a: 'Our projections use 10-year localized irradiance data from satellite sources, actual utility rate escalation trends (typically 3–5% annually), verified panel degradation curves, and your real consumption profile. We deliberately model conservative scenarios — our clients typically outperform projections by 8–12%.',
  },
  {
    q: 'What is your installation defect rate compared to industry average?',
    a: 'Our post-installation defect rate is 0.3%, versus the industry average of 2.1%. This is achieved through our triple-inspection protocol: self-inspection by the installation crew, independent QA review by our engineering team, and a final thermal imaging scan 30 days post-activation.',
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

export const spTechHighlightImgExport = spTechHighlightImg;
