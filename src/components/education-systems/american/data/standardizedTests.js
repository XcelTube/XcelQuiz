// standardizedTests.js



const standardizedTests = [
  {
    name: 'SAT',
    description: 'Scholastic Assessment Test used for college admissions. Includes Math and Evidence-Based Reading and Writing.',
    resources: [
      { type: 'Book', title: 'The Official SAT Study Guide', publisher: 'College Board' },
      { type: 'Video', title: 'SAT Prep Tips & Tricks', url: 'https://www.youtube.com/embed/kU8pJ0yMSl4' }
    ],
    link: 'https://collegereadiness.collegeboard.org/sat'
  },
  {
    name: 'ACT',
    description: 'American College Testing exam covering English, Math, Reading, Science, and optional Writing.',
    resources: [
      { type: 'Book', title: 'ACT Prep Black Book', publisher: 'Mike Barrett' },
      { type: 'Video', title: 'ACT Time Management Strategies', url: 'https://www.youtube.com/embed/F_hNVaNGXXw' }
    ],
    link: 'https://www.act.org/'
  },
  {
    name: 'AP Exams',
    description: 'Advanced Placement exams for college-level subjects, administered by the College Board.',
    resources: [
      { type: 'Book', title: '5 Steps to a 5: AP Exam Series', publisher: 'McGraw-Hill' },
      { type: 'Video', title: 'AP Exam Overview & Strategy', url: 'https://www.youtube.com/embed/0DsXTLNAb6o' }
    ],
    link: 'https://apstudents.collegeboard.org/'
  },
  {
    name: 'PSAT/NMSQT',
    description: 'Preliminary SAT/National Merit Scholarship Qualifying Test. Practice for the SAT and eligibility for scholarships.',
    resources: [
      { type: 'Book', title: 'PSAT/NMSQT Prep 2024', publisher: 'Kaplan' },
      { type: 'Video', title: 'PSAT Overview and Tips', url: 'https://www.youtube.com/embed/ENIuDcn7zLw' }
    ],
    link: 'https://satsuite.collegeboard.org/psat-nmsqt'
  }
];

export default standardizedTests;
