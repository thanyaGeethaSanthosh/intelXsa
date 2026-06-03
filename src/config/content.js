// =====================================================================
//  CONTENT CONFIGURATION
//  Replace any text, image URL, or link href here.
//  Images: drop your files in /public/images/ and update the paths.
// =====================================================================

export const content = {

  // ── Company meta ──────────────────────────────────────────────────
  company: {
    name:    'intelXsa',
    phone:   '+1 000-000-0000',          // ← replace with real number
    email:   'support@intelxsa.com',     // ← replace with real email
    address: 'Remote — Available Worldwide',
  },

  // ── Navigation ────────────────────────────────────────────────────
  nav: [
    {
      label: 'Services',
      children: [
        'Desigo CC Graphics', 'Niagara Graphics', 'BMS Programming',
        'IO List', 'Wiring Diagrams', 'Controller Selection',
        'Cost Sheet & BOQ', 'DQ / IQ / OQ Documents', 'Floor Layout', 'Training',
      ],
    },
    {
      label: 'Expertise',
      children: [
        'Siemens DDC Systems', 'Pharma BMS', 'Desigo CC Platform', 'Niagara Framework',
      ],
    },
    {
      label: 'About',
      children: ['Why Choose Us', 'Remote Work Model'],
    },
    {
      label: 'Contact',
      children: ['Request Support', 'Get a Quote'],
    },
  ],

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    headline:    'Expert BMS Engineering Support',
    subheadline: 'On-demand. Remote. Worldwide.',
    description: 'End-to-end support for Siemens DDC controllers — delivering accurate, professional programming, graphics, and documentation for contractors, system integrators, and consultants.',
    cta:         'Get Support Now',
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80',
  },

  // ── Service Highlights (5 icon cards) ────────────────────────────
  serviceHighlights: {
    items: [
      {
        icon: 'LayoutDashboard',
        title: 'Desigo CC & Niagara Graphics',
        description: 'Clean, intuitive graphics for AHU, FCU, CHW, FAHU, VAV, pumps, and pressurization units.',
      },
      {
        icon: 'Cpu',
        title: 'BMS Programming & Logic',
        description: 'Controller programming, control sequencing, optimized strategies, and troubleshooting support.',
      },
      {
        icon: 'Network',
        title: 'IO List & Wiring Diagrams',
        description: 'Detailed point lists, control panel layouts, terminal diagrams, and cable schedules.',
      },
      {
        icon: 'Server',
        title: 'Controller Selection & BOQ',
        description: 'Siemens PXC selection, IO sizing, cost optimization, and complete Bill of Quantities.',
      },
      {
        icon: 'BookOpen',
        title: 'Documentation & Training',
        description: 'DQ, IQ & OQ documents per GMP guidelines, floor layouts, and hands-on BMS training.',
      },
    ],
  },

  // ── Why Choose Us ─────────────────────────────────────────────────
  whyChooseUs: {
    eyebrow:     'Why Choose intelXsa',
    heading:     '12+ Years of Siemens\nBMS Expertise.',
    description: 'We provide fast, accurate, and professional BMS engineering support for contractors, system integrators, and consultants — available remotely for projects worldwide.',
    points: [
      'Strong expertise in Siemens systems with 12+ years of experience',
      'Pharma BMS: BMS & EMS integration, 21 CFR Part 11, alarm management & validation',
      'Fast delivery with clean, professional documentation',
      'Remote work — available for projects worldwide',
      'Perfect for subcontractors, freelancers & MEP firms needing quick BMS engineering help',
    ],
    cta:             'Get Support Now',
    backgroundImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1400&q=80',
  },

  // ── Services Overview ─────────────────────────────────────────────
  services: {
    heading:    'Comprehensive BMS Engineering Services',
    subheading: 'From graphics and programming to documentation — we handle every deliverable.',
    items: [
      {
        icon:        'LayoutDashboard',
        title:       'Desigo CC & Niagara Graphics',
        description: 'Customized, clean, and intuitive graphics for AHU, FCU, CHW systems, FAHU, VAV, pumps, and pressurization units — with dynamic animations, alarms, navigation, and user-friendly layouts.',
      },
      {
        icon:        'Code2',
        title:       'BMS Program & Logic Development',
        description: 'Complete controller programming including control logic/sequencing and optimized strategies. Testing, simulation, and troubleshooting support included.',
      },
      {
        icon:        'FileText',
        title:       'IO List & Wiring Diagrams',
        description: 'Detailed, project-specific point lists and control panel layouts. Terminal diagrams, cable schedules, and field device wiring — standard-compliant and easy to understand.',
      },
      {
        icon:        'Server',
        title:       'Controller Selection & BOQ',
        description: 'Siemens PXC controller selection with IO calculation, sizing, and cost optimization. Complete BMS Bill of Quantity with value-engineering options.',
      },
      {
        icon:        'BookOpen',
        title:       'DQ / IQ / OQ Documentation',
        description: 'Complete preparation of Design Qualification, Installation Qualification, and Operational Qualification documents as per GMP guidelines with 21 CFR Part 11 consideration.',
      },
    ],
  },

  // ── Process (hidden from App.jsx — kept here if needed later) ─────
  process: {
    heading:    'Our Process',
    subheading: 'A clear, reliable workflow for every project.',
    steps: [
      { number: '01', title: 'Scope Review',         description: 'We review your project scope, drawings, and requirements to understand exactly what needs to be delivered.' },
      { number: '02', title: 'Kickoff & Timeline',    description: 'We agree on deliverables, format standards, and a realistic timeline before any work begins.' },
      { number: '03', title: 'Engineering & Drafting',description: 'Our team develops the programming, graphics, or documentation to your project specifications.' },
      { number: '04', title: 'Review & Revision',     description: 'We share drafts for your review and incorporate feedback until the deliverable meets your standards.' },
      { number: '05', title: 'Final Delivery',         description: 'Clean, organized files are delivered in your preferred format — ready to hand off to site or the client.' },
    ],
  },

  // ── Industries ────────────────────────────────────────────────────
  industries: {
    heading:    'Who We Work With',
    subheading: 'Supporting BMS professionals across sectors worldwide.',
    items: [
      { icon: 'FlaskConical', title: 'Pharmaceutical' },
      { icon: 'Building2',    title: 'MEP Engineering Firms' },
      { icon: 'Network',      title: 'System Integrators' },
      { icon: 'HardHat',      title: 'General Contractors' },
      { icon: 'Briefcase',    title: 'BMS Consultants' },
      { icon: 'Database',     title: 'Data Centers' },
      { icon: 'Building2',    title: 'Commercial Buildings' },
      { icon: 'Activity',     title: 'Healthcare Facilities' },
    ],
  },

  // ── Tax Credit (hidden from App.jsx — kept here if needed later) ──
  taxCredit: {
    eyebrow:     'Pharma BMS Compliance',
    heading:     '21 CFR Part 11 & GMP Validation Support',
    description: 'We prepare complete validation documentation for pharmaceutical BMS projects — DQ, IQ, and OQ documents aligned with regulatory requirements.',
    highlights: [
      '21 CFR Part 11 compliance consideration',
      'Complete DQ / IQ / OQ document preparation',
      'Alarm management and audit trail support',
      'BMS & EMS integration for pharma environments',
    ],
    cta:             'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1400&q=80',
  },

  // ── Testimonial ───────────────────────────────────────────────────
  testimonial: {
    quote:           'Their BMS programming and graphics support saved our project weeks of delays. Clean, accurate deliverables — exactly what we needed.',
    author:          'A. Rajan',
    role:            'Lead Automation Engineer, System Integrator',
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
  },

  // ── Call to Action ────────────────────────────────────────────────
  cta: {
    heading:         'Ready to Accelerate Your BMS Project?',
    description:     'Get professional BMS engineering support — graphics, programming, documentation, and more. Available remotely worldwide.',
    cta:             'Contact for Support',
    backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80',
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    description: 'Online BMS support and engineering services for Siemens DDC systems — serving contractors, system integrators, and consultants worldwide.',
    links: [
      { label: 'Contact Us',  href: '#contact' },
      { label: 'Services',    href: '#' },
      { label: 'About',       href: '#' },
    ],
    legal: '© 2024 intelXsa. All rights reserved.',
  },
}
