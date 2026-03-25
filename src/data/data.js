export const experiences = [
  {
    role: 'Low Code | No Code | Solutions Engineer',
    company: 'Boolean',
    period: 'December 2024 – Present',
    current: true,
    bullets: [
      'Automated HubSpot deal creation triggered by appointment bookings, eliminating manual data entry and accelerating the sales pipeline.',
      'Designed and deployed an Airtable interface to centrally manage jobs, deals, and financing — enabling real-time visibility and streamlined operations.',
      'Built Make.com workflows integrating HubSpot CRM with third-party scheduling tools to maintain data accuracy across all platforms.',
    ],
  },
  {
    role: 'Automation Specialist — IT Specialist 3',
    company: 'My Amazon Guy',
    period: 'November 2023 – December 2024',
    current: false,
    bullets: [
      'Developed and implemented HubSpot workflows that streamlined the sales process, leading to a 20% increase in lead conversion rates.',
      'Designed and deployed Zapier automation for the ticketing system, reducing response time by 30% and enhancing customer satisfaction.',
      'Collaborated with cross-functional teams to identify automation gaps and implement solutions that improved overall operational efficiency.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    num: '01',
    type: 'Automation',
    name: 'HubSpot Deal Auto-Creation',
    description:
      'Make.com workflow that automatically creates a HubSpot deal whenever a new appointment is scheduled — extracting contact details, assigning project types, and routing deals through the CRM pipeline without manual entry.',
    tech: ['Make.com', 'HubSpot CRM', 'Webhooks'],
    image: '/PortfolioV3/assets/projects/hubspot_deal.png',
  },
  {
    id: 2,
    num: '02',
    type: 'Automation',
    name: 'N8N QuickBooks Invoice Creation',
    description:
      'Built an N8N workflow that automatically retrieves client hours from project data, merges invoice data, searches for existing invoice folders, and creates QuickBooks invoices on a scheduled trigger — eliminating manual billing effort.',
    tech: ['N8N', 'QuickBooks', 'Google Sheets', 'REST API'],
    image: '/PortfolioV3/assets/projects/n8n_quickbooks.png',
  },
  {
    id: 3,
    num: '03',
    type: 'Automation',
    name: 'Slack Channel Creation via Airtable',
    description:
      'Zapier automation that listens for Airtable checkbox triggers to automatically create private Slack channels, invite internal and external users, and update Airtable with the new channel name — handling both internal and external client paths.',
    tech: ['Zapier', 'Slack', 'Airtable'],
    image: '/PortfolioV3/assets/projects/slack_channels_airtable.png',
  },
  {
    id: 4,
    num: '04',
    type: 'Automation',
    name: 'Monthly SDR Leaderboard',
    description:
      'Automated end-of-day reporting system in Google Sheets tracking SDR performance metrics including meetings scheduled, bids, goal completion, calls per day, and conversion rates across all Temporary Wall Systems locations.',
    tech: ['Google Sheets', 'Google Apps Script', 'Automation'],
    image: '/PortfolioV3/assets/projects/monthly_leaderboard.png',
  },
  {
    id: 5,
    num: '05',
    type: 'Open Source',
    name: 'AI Ticket Triage',
    description:
      'Python script that reads unread support emails via Gmail API, classifies them with OpenAI (urgent / billing / technical / general), and creates tagged tickets in Airtable with a confidence score — complete with a --dry-run mode and prompt engineering as a first-class artifact.',
    tech: ['Python', 'OpenAI', 'Gmail API', 'Airtable', 'REST API'],
    image: 'https://placehold.co/800x500/0A192F/FFD700?text=AI+Ticket+Triage',
    github: 'https://github.com/rizmarkcorpuz/ai-ticket-triage',
  },
  {
    id: 6,
    num: '06',
    type: 'Open Source',
    name: 'Google Apps Script × Airtable Sync',
    description:
      'Google Apps Script that syncs a Sheets-based project tracker with Airtable via REST API — with conflict detection, field mapping config, and a self-installing daily trigger. No server required.',
    tech: ['Google Apps Script', 'Airtable', 'Google Sheets', 'REST API'],
    image: 'https://placehold.co/800x500/0A192F/6FC2B0?text=Apps+Script+%C3%97+Airtable',
    github: 'https://github.com/rizmarkcorpuz/google-apps-script-airtable-sync',
  },
  {
    id: 7,
    num: '07',
    type: 'Open Source',
    name: 'N8N Lead Enrichment Pipeline',
    description:
      'N8N workflow that enriches inbound leads via Hunter.io, scores them automatically, then routes hot leads to HubSpot and cold leads to GoHighLevel — with Slack alerts for high-priority contacts. Includes importable workflow JSON files.',
    tech: ['N8N', 'HubSpot', 'GoHighLevel', 'Slack', 'REST API'],
    image: 'https://placehold.co/800x500/0A192F/FFD700?text=N8N+Lead+Enrichment',
    github: 'https://github.com/rizmarkcorpuz/n8n-lead-enrichment-pipeline',
  },
  {
    id: 8,
    num: '08',
    type: 'Web App',
    name: 'Ventures ++',
    description:
      'A comprehensive business venture tracking application designed to help entrepreneurs manage and monitor multiple business projects, investments, and milestones in one centralised platform.',
    tech: ['Web Development'],
    image: '/PortfolioV3/assets/projects/ventures_++.jpg',
    github: 'https://drive.google.com/file/d/1D2pKuf3wDSvjo-o2t-yVX-gqXqV-kB7d/view?usp=sharing',
    live: 'https://drive.google.com/file/d/1IDMVwmon7-y8Vrec7W3VhUPgovu5I8bN/view?usp=sharing',
  },
  {
    id: 9,
    num: '09',
    type: 'Web App',
    name: 'Urban Gardener',
    description:
      'A full-stack web application for urban gardening communities — helping users discover local gardens, share tips, and connect with fellow gardeners in their area.',
    tech: ['Web Development'],
    image: '/PortfolioV3/assets/projects/urban_gardener.jpg',
    github: 'https://github.com/rizmarkcorpuz/Urban-Gardener',
    live: 'https://urbangardenercavite.000webhostapp.com',
  },
  {
    id: 10,
    num: '10',
    type: 'Web App',
    name: 'Google Keep Clone',
    description:
      'A feature-faithful clone of Google Keep built with React — supporting note creation, colour-coding, pinning, archiving, and real-time search across all notes.',
    tech: ['React', 'JavaScript'],
    image: '/PortfolioV3/assets/projects/google_keep_clone.png',
    github: 'https://github.com/rizmarkcorpuz/google-keep-clone',
    live: 'https://rizmarkcorpuz.github.io/google-keep-clone/',
  },
  {
    id: 11,
    num: '11',
    type: 'Portfolio',
    name: 'Personal Website V2',
    description:
      'The second iteration of my personal portfolio, built with React and Tailwind CSS. Featured animated letter reveals, a full project showcase, skills grid, experience timeline, and testimonials.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/PortfolioV3/assets/projects/portfolio_v2.png',
    github: 'https://github.com/rizmarkcorpuz/PortfolioV2',
    live: 'https://rizmarkcorpuz.github.io/PortfolioV2/',
  },
  {
    id: 12,
    num: '12',
    type: 'Portfolio',
    name: 'Personal Website V1',
    description:
      'The first version of my personal portfolio — a clean, responsive site introducing my skills and projects as a developer.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/PortfolioV3/assets/projects/portfolio_v1.png',
    github: 'https://github.com/rizmarkcorpuz/Portfolio',
    live: 'https://rizmarkcorpuz.github.io/Portfolio/',
  },
]

export const testimonials = [
  {
    quote:
      'Riz built an automation that completely eliminated our manual invoicing process. What used to take hours now happens instantly. Highly recommend him for any workflow automation project.',
    name: 'Ryan Hupfer',
    role: 'CEO and Founder',
    company: 'Element Ops',
    initials: 'RH',
  },
  {
    quote:
      'Working with Riz was a great experience. He quickly understood our HubSpot setup and built a deal automation that saved our sales team hours of manual data entry every week.',
    name: 'Steven Pope',
    role: 'CEO and Founder',
    company: 'My Amazon Guy',
    initials: 'SP',
  },
  {
    quote:
      'Riz designed our Airtable + Slack automation and it works flawlessly. He communicated clearly throughout the project and delivered exactly what we needed on time.',
    name: 'Chris Kiefer',
    role: 'CEO and Founder',
    company: 'Boolean',
    initials: 'CK',
  },
]
