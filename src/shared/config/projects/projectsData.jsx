import proj1 from '../../../assets/sp_design.png';
import proj2 from '../../../assets/sp_integration.png';
import proj3 from '../../../assets/sp_analytics.png';
import proj4 from '../../../assets/rev1_refined.png';
import proj5 from '../../../assets/rev2_refined.png';
import proj6 from '../../../assets/sp_casestudy.png';

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
];

export const projects = [
  {
    id: 1,
    category: 'residential',
    title: 'Villa Eriksson Ecosystem',
    location: 'Stockholm Archipelago',
    specs: '18.2 kWp | 30kWh Storage',
    image: proj6,
    size: 'large',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'A complete off-grid capable residential system integrating 18.2 kWp TOPCon modules with a 30kWh storage system.' },
      { id: 'tech', label: 'Tech', content: 'N-Type TOPCon panels, Victron MultiPlus-II inverters, and high-density LFP batteries for maximum cycle life.' },
      { id: 'result', label: 'Impact', content: '100% energy autonomy during summer months and 85% yearly reduction in grid dependence.' }
    ]
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Nordic Logistics Hub',
    location: 'Gothenburg',
    specs: '250 kWp | Grid Sync',
    image: proj1,
    size: 'small',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'Large-scale commercial installation for a logistics center.' },
      { id: 'tech', label: 'Tech', content: 'SMA Core 1 inverters and custom mounting for corrugated steel roofs.' },
      { id: 'result', label: 'Impact', content: 'Payback period reduced to 4.2 years with government subsidies.' }
    ]
  },
  {
    id: 3,
    category: 'industrial',
    title: 'Steel Fabrication Plant',
    location: 'Kiruna',
    specs: '1.2 MWp | Peak Shaving',
    image: proj2,
    size: 'medium',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'High-power industrial deployment to mitigate peak energy costs.' },
      { id: 'tech', label: 'Tech', content: 'Central inverter configuration with integrated SCADA monitoring.' },
      { id: 'result', label: 'Impact', content: 'Reduced peak load by 40%, saving over €50k annually.' }
    ]
  },
  {
    id: 4,
    category: 'residential',
    title: 'Modern Lakehouse',
    location: 'Lake Mälaren',
    specs: '12.5 kWp | BIPV Roof',
    image: proj3,
    size: 'medium',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'Architectural integration of solar cells into a standing-seam roof.' },
      { id: 'tech', label: 'Tech', content: 'BIPV (Building Integrated PV) modules with custom flashing.' },
      { id: 'result', label: 'Impact', content: 'Perfect aesthetic preserved while generating 15,000 kWh per year.' }
    ]
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Eco-Office Complex',
    location: 'Oslo',
    specs: '85 kWp | Smart-Grid',
    image: proj4,
    size: 'large',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'Intelligent energy management for a high-traffic office building.' },
      { id: 'tech', label: 'Tech', content: 'Smart-Grid ready inverters with real-time demand response.' },
      { id: 'result', label: 'Impact', content: 'LEED Platinum certification achieved with the help of our solar system.' }
    ]
  },
  {
    id: 6,
    category: 'industrial',
    title: 'Data Center Cooling',
    location: 'Luleå',
    specs: '500 kWp | Thermal Integration',
    image: proj5,
    size: 'small',
    layout: 'overlay',
    aspects: [
      { id: 'overview', label: 'Overview', content: 'Powering critical cooling infrastructure with sustainable energy.' },
      { id: 'tech', label: 'Tech', content: 'High-efficiency modules optimized for low-angle Arctic sun.' },
      { id: 'result', label: 'Impact', content: 'Zero-carbon cooling milestones reached for our enterprise client.' }
    ]
  },
];

export const impactStats = [
  { 
    id: 'power', 
    label: 'Installed Capacity', 
    value: 8.4, 
    unit: 'MWp', 
    desc: 'Total clean energy production across Nordic regions.' 
  },
  { 
    id: 'co2', 
    label: 'CO2 Offset', 
    value: 1240, 
    unit: 'Tons', 
    desc: 'Annual reduction in carbon footprint through our systems.' 
  },
  { 
    id: 'projects', 
    label: 'Solar Objects', 
    value: 450, 
    unit: '+', 
    desc: 'Successfully delivered high-performance ecosystems.' 
  },
];

export const featuredProject = {
  id: 'flagship-1',
  title: 'Arctic Data Sync',
  location: 'Luleå, Sweden',
  client: 'Vortex Computing',
  quote: "Sunberg didn't just install panels; they engineered a zero-emission heartbeat for our most critical infrastructure.",
  author: "Erik Solberg, CTO",
  specs: [
    { label: 'System Size', value: '2.4 MWp' },
    { label: 'Technology', value: 'N-Type Bifacial' },
    { label: 'Storage', value: '1.2 MWh' }
  ],
  description: 'Our most ambitious industrial project to date, providing 100% renewable energy for a hyperscale data center in the sub-arctic region.'
};

export const testimonials = [
  {
    id: 1,
    content: "Sunberg's precision in modeling and installation was beyond anything we've seen. Our energy independence is now a reality, not just a goal.",
    author: "Elena Rossi",
    role: "Private Homeowner, Tuscany",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 2,
    content: "Integrating solar into our warehouse logistics was a complex challenge. Sunberg handled the technical constraints with ease and delivered on time.",
    author: "Marc Werner",
    role: "Logistics Director, Hamburg",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 3,
    content: "The aesthetic integration of the panels was crucial for our historic property. The result is seamless and highly efficient.",
    author: "Sarah Jenkins",
    role: "Estate Manager, Oxford",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
  }
];
