
export const menuItemData = [
  {
    title: 'About',
    url: 'about',
    id: 1,
    showMenu: false,
    submenu: [
      {
        title: 'Mission & Vision',
        url: 'mission-vision',
      },
      {
        title: 'Staff',
        url: 'staff',
      },
      {
        title: 'Board of Directors',
        url: 'board',
      },
      {
        title: 'Financials',
        url: 'financials',
      },
      {
        title: 'Impact',
        url: 'impact',
      },
      {
        title: 'DEI at DAC',
        url: 'dei',
      },
    ],
  },
  {
    title: 'What We Do',
    url: 'what-we-do',
    id: 2,
    showMenu: false,
    submenu: [
      {
        title: 'Court Appointed Family Defense',
        url: '',
      },
      {
        title: 'Legal Services',
        submenuCategory: 'family-defense-programs',
        url: 'family-defense-programs',
        urlHash: '/#legal-services',
        submenuHash: true,
      },
      {
        title: 'In-House Social Workers',
        submenuCategory: 'family-defense-programs',
        url: 'family-defense-programs',
        urlHash: '/#social-workers',
        submenuHash: true,
      },
      {
        title: 'Mentor Parent Program',
        submenuCategory: 'family-defense-programs',
        url: 'family-defense-programs',
        urlHash: '/#mentor-parents',
        submenuHash: true,
      },
      {
        title: 'Prevention Services',
        url: '',
      },
      {
        title: 'First Call For Families',
        submenuCategory: 'prevention-programs',
        url: 'prevention-programs',
        urlHash: '/#first-call',
        submenuHash: true,
      },
      {
        title: 'Corridor',
        submenuCategory: 'prevention-programs',
        url: 'prevention-programs',
        urlHash: '/#corridor',
        submenuHash: true,
      },
    ],
  },
  {
    title: 'Updates',
    url: 'updates-articles',
    id: 3,
  },
  {
    title: 'Get Involved',
    url: 'careers',
    id: 4,
    showMenu: false,
    // submenu: [
    //   {
    //     title: 'Careers',
    //     url: 'careers',
    //   },
    //   {
    //     title: 'Internships/Volunteers',
    //     url: 'internships-volunteers',
    //   },
    // ]
  },
  {
    title: 'Contact',
    url: '/#contact',
    id: 5,
    hash: true,
  },
  {
    title: 'Resources',
    url: 'resources',
    id: 6,
    showMenu: false,
    submenu: [
      {
        title: 'Know Your Rights',
        url: 'know-your-rights',
      },
    ],
  },
  {
    title: 'Donate',
    url: 'donate',
    id: 7,
  },
];