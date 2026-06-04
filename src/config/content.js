// =====================================================================
//  CONTENT CONFIGURATION
//  Replace any text, image URL, or link href here.
//  Images: drop files in /public/images/ and update the paths.
// =====================================================================

export const content = {

  // ── Company meta ──────────────────────────────────────────────────
  company: {
    name:    'intelXsa',
    phone:   '+1 000-000-0000',
    email:   'support@intelxsa.com',
    address: 'Remote — Available Worldwide',
  },

  // ── Navigation ────────────────────────────────────────────────────
  // children are objects: { label, href }
  // href starting with '/' uses React Router Link; '#' uses anchor
  nav: [
    {
      label: 'Services',
      children: [
        { label: 'Desigo CC & Niagara Graphics',  href: '/services/graphics' },
        { label: 'BMS Programming & Logic',        href: '/services/bms-programming' },
        { label: 'IO List & Wiring Diagrams',      href: '/services/io-wiring' },
        { label: 'Controller Selection & BOQ',     href: '/services/controller-selection' },
        { label: 'DQ / IQ / OQ Documentation',    href: '/services/documentation' },
      ],
    },
    {
      label: 'Expertise',
      children: [
        { label: 'Siemens DDC Systems',   href: '#' },
        { label: 'Pharma BMS',            href: '#' },
        { label: 'Desigo CC Platform',    href: '#' },
        { label: 'Niagara Framework',     href: '#' },
      ],
    },
    {
      label: 'About',
      children: [
        { label: 'Why Choose Us',       href: '#' },
        { label: 'Remote Work Model',   href: '#' },
      ],
    },
    {
      label: 'Contact',
      children: [
        { label: 'Request Support', href: '#contact' },
        { label: 'Get a Quote',     href: '#contact' },
      ],
    },
  ],

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    headline:        'Expert BMS Engineering Support',
    subheadline:     'On-demand. Remote. Worldwide.',
    description:     'End-to-end support for Siemens DDC controllers — delivering accurate, professional programming, graphics, and documentation for contractors, system integrators, and consultants.',
    cta:             'Get Support Now',
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80',
  },

  // ── Service Highlights (5 icon cards on home) ─────────────────────
  serviceHighlights: {
    items: [
      {
        icon:        'LayoutDashboard',
        title:       'Desigo CC & Niagara Graphics',
        description: 'Clean, intuitive graphics for AHU, FCU, CHW, FAHU, VAV, pumps, and pressurization units.',
      },
      {
        icon:        'Cpu',
        title:       'BMS Programming & Logic',
        description: 'Controller programming, control sequencing, optimized strategies, and troubleshooting support.',
      },
      {
        icon:        'Network',
        title:       'IO List & Wiring Diagrams',
        description: 'Detailed point lists, control panel layouts, terminal diagrams, and cable schedules.',
      },
      {
        icon:        'Server',
        title:       'Controller Selection & BOQ',
        description: 'Siemens PXC selection, IO sizing, cost optimization, and complete Bill of Quantities.',
      },
      {
        icon:        'BookOpen',
        title:       'Documentation & Training',
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

  // ── Services Overview (home page cards) ───────────────────────────
  // Each item also drives its own service detail page via `slug` and `page`.
  services: {
    heading:    'Comprehensive BMS Engineering Services',
    subheading: 'From graphics and programming to documentation — we handle every deliverable.',
    items: [
      {
        slug:        'graphics',
        icon:        'LayoutDashboard',
        title:       'Desigo CC & Niagara Graphics',
        description: 'Customized, clean, and intuitive graphics for AHU, FCU, CHW systems, FAHU, VAV, pumps, and pressurization units — with dynamic animations, alarms, navigation, and user-friendly layouts.',
        heroImage:   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
        page: {
          intro:        'We design and deliver professional HMI/SCADA graphics for Siemens Desigo CC and Niagara N4/4.x platforms. Every screen is built to be operator-friendly, visually clean, and aligned with your project\'s branding and technical standards.',
          sectionImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
          deliverables: [
            'AHU, FAHU, and Air Handling Unit screens',
            'FCU, VAV, and terminal unit graphics',
            'CHW plant, pump group, and pressurization unit screens',
            'Dynamic animations with live data point bindings',
            'Alarm summary and alarm banner views',
            'Site overview and floor navigation pages',
            'Custom-branded, client-specific layouts',
            'Trend and report display screens',
          ],
          forWhom: [
            { title: 'BMS Contractors',    desc: 'Need Desigo CC or Niagara graphics delivered quickly on tight project timelines.' },
            { title: 'System Integrators', desc: 'Require consistent, clean graphics across multiple concurrent projects.' },
            { title: 'Siemens Resellers',  desc: 'Need expert sub-contract graphics support without hiring in-house.' },
            { title: 'MEP Consultants',    desc: 'Want review-ready, standard-compliant screen mockups for client submissions.' },
          ],
        },
      },
      {
        slug:        'bms-programming',
        icon:        'Code2',
        title:       'BMS Program & Logic Development',
        description: 'Controller programming, control logic/sequencing and optimized strategies. Testing, simulation, and troubleshooting support included.',
        heroImage:   'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
        page: {
          intro:        'Complete DDC controller programming for Siemens systems — from new builds to complex modifications. We develop optimized control sequences, PID strategies, and commissioning-ready program files for any HVAC or BMS application.',
          sectionImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80',
          deliverables: [
            'Full DDC program files for Siemens PXC controllers',
            'AHU, FCU, and chiller plant control sequences',
            'PID loop tuning parameters and strategies',
            'Scheduling, setpoint management, and operational modes',
            'Alarm definitions, priority levels, and routing',
            'Trend and reporting point configuration',
            'Offline simulation and testing support',
            'Commissioning troubleshooting assistance',
          ],
          forWhom: [
            { title: 'System Integrators', desc: 'Need programming capacity for multiple sites or complex plant sequences.' },
            { title: 'BMS Contractors',    desc: 'Require fast, tested program files to meet site commissioning schedules.' },
            { title: 'Freelance Engineers', desc: 'Looking for reliable sub-contract support on Siemens DDC programming.' },
            { title: 'MEP Firms',          desc: 'Need verified logic reviewed or modified for ongoing O&M contracts.' },
          ],
        },
      },
      {
        slug:        'io-wiring',
        icon:        'FileText',
        title:       'IO List & Wiring Diagrams',
        description: 'Detailed, project-specific point lists and control panel layouts. Terminal diagrams, cable schedules, and field device wiring — standard-compliant and easy to understand.',
        heroImage:   'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80',
        page: {
          intro:        'Accurate, organized engineering documentation is the foundation of every successful BMS project. We prepare detailed IO lists and wiring diagrams that panel builders, site engineers, and commissioning teams can rely on without ambiguity.',
          sectionImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
          deliverables: [
            'Project-specific IO point lists with tag names and addresses',
            'Controller and field device IO allocation tables',
            'Control panel general arrangement drawings',
            'Terminal wiring diagrams and numbering schedules',
            'Cable schedule and routing documentation',
            'Field device wiring (sensors, actuators, meters)',
            'Panel BOM (bill of materials) support',
            'Standard-compliant, easy-to-follow document formats',
          ],
          forWhom: [
            { title: 'Panel Builders',     desc: 'Need accurate, detailed wiring diagrams ready for fabrication.' },
            { title: 'Project Engineers',  desc: 'Require clean IO lists for coordination with site and commissioning teams.' },
            { title: 'MEP Firms',          desc: 'Need standard-compliant wiring documents as part of project deliverables.' },
            { title: 'System Integrators', desc: 'Want consistent documentation across multiple control panels on a project.' },
          ],
        },
      },
      {
        slug:        'controller-selection',
        icon:        'Server',
        title:       'Controller Selection & BOQ',
        description: 'Siemens PXC controller selection with IO calculation, sizing, cost optimization, and complete Bill of Quantities.',
        heroImage:   'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
        page: {
          intro:        'Get the right Siemens controller for every zone and system — with precise IO calculations, cost-optimized selection, and a complete BMS Bill of Quantities ready for procurement or tender submission.',
          sectionImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
          deliverables: [
            'Siemens PXC controller selection per zone/system',
            'IO count and allocation calculation sheets',
            'Controller sizing with expansion module planning',
            'Complete BMS Bill of Quantities (BOQ)',
            'Siemens part numbers and procurement references',
            'Cost estimation for budgeting and tendering',
            'Value-engineering options and alternatives',
            'Network architecture and topology overview',
          ],
          forWhom: [
            { title: 'Project Managers',  desc: 'Need accurate BOQs for budget approval and procurement sign-off.' },
            { title: 'Tender Teams',      desc: 'Require complete, costed BOQs for competitive BMS tender submissions.' },
            { title: 'Contractors',       desc: 'Need verified controller selection to finalize panel designs and orders.' },
            { title: 'Consultants',       desc: 'Want independent controller selection review for specification compliance.' },
          ],
        },
      },
      {
        slug:        'documentation',
        icon:        'BookOpen',
        title:       'DQ / IQ / OQ Documentation',
        description: 'Complete preparation of Design Qualification, Installation Qualification & Operational Qualification documents as per GMP guidelines with 21 CFR Part 11 consideration.',
        heroImage:   'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80',
        page: {
          intro:        'Pharmaceutical BMS projects demand rigorous validation documentation. We prepare complete DQ, IQ, and OQ documents aligned with GMP guidelines and 21 CFR Part 11 requirements — so your BMS passes audits and inspections without rework.',
          sectionImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80',
          deliverables: [
            'Design Qualification (DQ) document preparation',
            'Installation Qualification (IQ) protocols and checklists',
            'Operational Qualification (OQ) test scripts and records',
            '21 CFR Part 11 compliance consideration notes',
            'Alarm management and audit trail documentation',
            'BMS & EMS integration validation support',
            'Risk assessment and mitigation documentation',
            'Deviation and change control record templates',
          ],
          forWhom: [
            { title: 'Pharma Companies',   desc: 'Need GMP-compliant BMS validation documents for regulatory audits.' },
            { title: 'Validation Teams',   desc: 'Require expert preparation of DQ/IQ/OQ protocols for BMS systems.' },
            { title: 'Project Managers',   desc: 'Need complete validation deliverables as part of project handover.' },
            { title: 'System Integrators', desc: 'Need pharma-specific documentation support for BMS projects in regulated environments.' },
          ],
        },
      },
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
      { label: 'Contact Us', href: '#contact' },
      { label: 'Services',   href: '#' },
      { label: 'About',      href: '#' },
    ],
    legal: '© 2024 intelXsa. All rights reserved.',
  },
}
