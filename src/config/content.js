// =====================================================================
//  CONTENT CONFIGURATION
//  Replace any text, image URL, or link href here.
//  Images: drop your files in /public/images/ and update the paths.
// =====================================================================

export const content = {

  // ── Company meta ──────────────────────────────────────────────────
  company: {
    name:    'MAG Energy',
    phone:   '734-586-8868',
    email:   'info@magenergy.com',
    address: '8475 Port Sunlight Rd\nNewport, MI 48166',
  },

  // ── Navigation ────────────────────────────────────────────────────
  nav: [
    {
      label: 'Energy Efficiency',
      children: [
        'Overview', 'Lighting', 'Mechanical', 'Automation & Controls',
        'Electrical', 'Generators', 'Thermal Storage', 'EMP Defense', 'Building Envelope',
      ],
    },
    {
      label: 'Renewable Energy',
      children: [
        'Overview', 'Solar', 'Battery Energy Storage', 'Biomass', 'Geothermal', 'Hydrogen',
      ],
    },
    {
      label: 'Company',
      children: ['Meet MAG Energy', 'Our Process', 'MagMax™ Audit'],
    },
    {
      label: 'Incentives',
      children: [
        'Big Beautiful Bill', 'Project Funding', 'Scope 1-2-3',
        'Investment Tax Credit', 'Case Studies', 'Request Consultation',
      ],
    },
  ],

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    headline:    'Is decarbonization your goal?',
    subheadline: 'We are your partner.',
    description: 'MAG Energy delivers fully customized energy solutions aligned with your business goals — serving commercial and industrial facilities across multiple sectors.',
    cta:         'Request Consultation',
    // Replace with your own image in /public/images/
    backgroundImage: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1800&q=80',
  },

  // ── Service Highlights (5 icon cards) ────────────────────────────
  serviceHighlights: {
    items: [
      {
        icon: 'Lightbulb',
        title: 'Lighting Upgrades',
        description: 'High-efficiency LED systems that slash energy consumption and maintenance costs.',
      },
      {
        icon: 'Wind',
        title: 'Mechanical Systems',
        description: 'HVAC optimization, chiller plants, and VFDs for maximum building efficiency.',
      },
      {
        icon: 'Sun',
        title: 'Renewable Energy',
        description: 'Solar, battery storage, and clean energy solutions tailored to your load profile.',
      },
      {
        icon: 'BadgeDollarSign',
        title: 'Utility & Tax Incentives',
        description: 'Expert guidance on investment tax credits, rebates, and funding opportunities.',
      },
      {
        icon: 'Hammer',
        title: 'Turnkey Execution',
        description: 'End-to-end project management from design through commissioning.',
      },
    ],
  },

  // ── Why Choose Us ─────────────────────────────────────────────────
  whyChooseUs: {
    eyebrow:     'Why Choose MAG Energy',
    heading:     'Customized Solutions.\nMeasurable Results.',
    description: 'Unlike one-size-fits-all approaches, MAG Energy develops fully customized energy strategies aligned with your specific business goals, budget, and operational requirements.',
    points: [
      'Deep expertise across all energy efficiency domains',
      'Proven track record with commercial and industrial facilities',
      'Full access to utility incentives and tax credits',
      'Turnkey execution with dedicated project management',
      'Ongoing performance monitoring and reporting',
    ],
    cta:             'Request Consultation',
    backgroundImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80',
  },

  // ── Services Overview ─────────────────────────────────────────────
  services: {
    heading:    'Comprehensive Energy Solutions',
    subheading: 'From assessment to commissioning, we manage every detail.',
    items: [
      {
        icon:        'Lightbulb',
        title:       'Lighting Upgrades',
        description: 'From warehouse LED retrofits to smart lighting controls, we design and install systems that dramatically cut energy use while improving light quality and worker productivity.',
      },
      {
        icon:        'Wind',
        title:       'Mechanical Systems Optimization',
        description: 'Comprehensive HVAC assessments, chiller plant optimization, variable frequency drives, and building automation integration to minimize waste.',
      },
      {
        icon:        'Sun',
        title:       'Renewable Energy Solutions',
        description: 'Rooftop solar, ground-mount arrays, battery energy storage, and hybrid clean energy configurations designed for your specific load profile and goals.',
      },
      {
        icon:        'TrendingUp',
        title:       'Utility & Tax Incentive Guidance',
        description: 'We identify and secure every available incentive — utility rebates, Investment Tax Credits, grants, and favorable financing to maximize your project ROI.',
      },
      {
        icon:        'Briefcase',
        title:       'Turnkey Project Execution',
        description: 'From initial audit through commissioning and measurement & verification, our team manages every aspect with zero disruption to your operations.',
      },
    ],
  },

  // ── Process ───────────────────────────────────────────────────────
  process: {
    heading:    'Our Process',
    subheading: 'A proven five-step methodology — from discovery to ongoing savings.',
    steps: [
      {
        number:      '01',
        title:       'Consultation & Assessment',
        description: 'We begin with a thorough MagMax™ audit of your facilities to identify all energy-saving opportunities and establish a performance baseline.',
      },
      {
        number:      '02',
        title:       'Customized Proposal',
        description: 'Our engineers design a tailored energy solution package with detailed ROI projections, payback analysis, and implementation roadmap.',
      },
      {
        number:      '03',
        title:       'Funding Solutions',
        description: 'We secure utility incentives, federal tax credits, and financing options to minimize your upfront investment and accelerate payback.',
      },
      {
        number:      '04',
        title:       'Project Execution',
        description: 'Experienced project managers oversee all installation work, ensuring quality, safety, and on-schedule delivery with minimal disruption.',
      },
      {
        number:      '05',
        title:       'Savings & Performance Monitoring',
        description: 'Ongoing measurement and verification confirms your energy savings and keeps systems performing at peak efficiency year after year.',
      },
    ],
  },

  // ── Industries ────────────────────────────────────────────────────
  industries: {
    heading:    'Industries We Serve',
    subheading: 'Deep expertise across commercial and industrial sectors.',
    items: [
      { icon: 'Factory',    title: 'Industrial' },
      { icon: 'Car',        title: 'Automotive' },
      { icon: 'Film',       title: 'Entertainment & Media' },
      { icon: 'UtensilsCrossed', title: 'Food Processing & Bottling' },
      { icon: 'Building2',  title: 'Commercial' },
      { icon: 'Package',    title: 'Warehousing & Distribution' },
      { icon: 'Truck',      title: 'Transportation' },
      { icon: 'Flame',      title: 'Petrochemical' },
    ],
  },

  // ── Tax Credit / Big Beautiful Bill ───────────────────────────────
  taxCredit: {
    eyebrow:     'Investment Tax Credit',
    heading:     'Maximize Your Energy Tax Benefits',
    description: 'Current legislation provides significant financial incentives for businesses investing in energy efficiency and renewable energy. Our team ensures you capture every available dollar.',
    highlights: [
      'Up to 30% federal tax credit on qualifying solar installations',
      'Additional credits for battery storage and efficiency upgrades',
      'Bonus credits for projects in energy communities',
      'Transferable and direct-pay options available under current law',
    ],
    cta:             'Learn About Project Funding',
    backgroundImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1400&q=80',
  },

  // ── Testimonial ───────────────────────────────────────────────────
  testimonial: {
    quote:           'Nobody finds and maximizes at-scale efficiencies like we can.',
    author:          'Larry C. Masserant',
    role:            'CEO, Mid-American Group',
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
  },

  // ── Call to Action ────────────────────────────────────────────────
  cta: {
    heading:         'Ready to Reduce Your Energy Costs?',
    description:     'Schedule a complimentary consultation with our energy experts and discover how much your facility can save.',
    cta:             'Request Consultation',
    backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80',
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    description: 'Delivering customized energy solutions for commercial and industrial facilities across North America.',
    links: [
      { label: 'Contact Us',        href: '#contact' },
      { label: 'Mid-American Group', href: '#' },
      { label: 'EMP Defense',        href: '#' },
    ],
    legal: '© 2024 MAG Energy. All rights reserved.',
  },
}
