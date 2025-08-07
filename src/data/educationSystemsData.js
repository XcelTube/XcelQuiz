const educationSystemsData = [
  {
    id: 'british',
    title: 'British',
    subtitle: 'Internationally Adopted',
    countryCode: 'GB',
    colors: {
      primary: 'bg-gradient-to-r from-red-500 to-blue-600',
      text: 'text-white',
    },
    programs: [
      { name: 'O Level' },
      { name: 'IGCSE' },
      { name: 'A Level' },
      { name: 'Cambridge AS/A' },
    ]
  },
  {
    id: 'american',
    title: 'American',
    subtitle: 'Standardized Testing',
    countryCode: 'US',
    colors: {
      primary: 'bg-gradient-to-r from-red-500 to-blue-400',
      text: 'text-white',
    },
    programs: [
      { name: 'SAT' },
      { name: 'ACT' },
      { name: 'AP Courses' },
      { name: 'High School Diploma' },
    ]
  },
  {
    id: 'pakistani',
    title: 'Pakistani',
    subtitle: 'National Curriculum',
    countryCode: 'PK',
    colors: {
      primary: 'bg-gradient-to-r from-green-400 to-green-600',
      text: 'text-white',
    },
    programs: [
      { name: 'Matric (SSC)' },
      { name: 'Intermediate (HSSC)' },
      { name: 'FSc Pre-Medical' },
      { name: 'FSc Pre-Engineering' },
      { name: 'ICS / I.Com' },
    ]
  },
  {
    id: 'indian',
    title: 'Indian',
    subtitle: 'Diverse Boards',
    countryCode: 'IN',
    colors: {
      primary: 'bg-gradient-to-r from-orange-500 to-green-600',
      text: 'text-white',
    },
    programs: [
      { name: 'CBSE' },
      { name: 'ICSE' },
      { name: 'State Boards' },
      { name: 'NEET / JEE Prep' },
    ]
  },
];

export default educationSystemsData;
