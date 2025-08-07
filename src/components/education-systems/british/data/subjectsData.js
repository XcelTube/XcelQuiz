const subjectsData = [
  {
    id: 'maths',
    name: 'Mathematics',
    icon: '🧮',
    levels: ['GCSE', 'A-Level', 'Further Maths'],
    boards: ['aqa', 'edexcel', 'ocr'],
    popularity: 95,
    resources: {
      books: [
        { title: 'Edexcel GCSE Mathematics (Higher)', publisher: 'Pearson', isbn: '9781292346127' },
        { title: 'AQA A-Level Maths Year 1 & 2', publisher: 'CGP', isbn: '9781782947196' },
        { title: 'Further Mathematics for AQA', publisher: 'Cambridge', isbn: '9781316644436' }
      ],
      videos: [
        { title: 'GCSE Algebra Masterclass', url: 'https://www.youtube.com/embed/OK2vP8zN_yo', duration: '32 min', views: '1.2M' },
        { title: 'A-Level Calculus Introduction', url: 'https://www.youtube.com/embed/bNJhCl0vAb8', duration: '45 min', views: '856K' }
      ],
      pastPapers: [
        { title: 'AQA GCSE Maths Foundation 2022', board: 'aqa', year: 2022, level: 'GCSE' },
        { title: 'Edexcel A-Level Maths 2021', board: 'edexcel', year: 2021, level: 'A-Level' }
      ]
    }
  },
  // Science, English, Humanities...
  // (Paste the remaining subjects exactly from your code into this array)
];

export default subjectsData;
