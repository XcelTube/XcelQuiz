// subjects.js



const subjects = {
  'English': {
    description: 'Literature, composition, and language arts',
    resources: {
      books: [
        'The Great Gatsby by F. Scott Fitzgerald',
        'To Kill a Mockingbird by Harper Lee',
        'The Elements of Style by Strunk & White'
      ],
      videos: [
        { title: 'Literary Analysis Techniques', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'AP English Literature Review', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP English Literature', 'AP English Language', 'SAT Evidence-Based Reading']
    }
  },
  'Mathematics': {
    description: 'Algebra, geometry, calculus, and statistics',
    resources: {
      books: [
        'Algebra I Workbook by McGraw Hill',
        'Calculus Made Easy by Silvanus Thompson',
        'The Art of Problem Solving series'
      ],
      videos: [
        { title: 'Algebra Fundamentals', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'AP Calculus AB Crash Course', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP Calculus AB/BC', 'AP Statistics', 'SAT Math']
    }
  },
  'Science': {
    description: 'Biology, chemistry, physics, and environmental science',
    resources: {
      books: [
        'Campbell Biology',
        'Chemistry: The Central Science',
        'Conceptual Physics by Paul Hewitt'
      ],
      videos: [
        { title: 'Biology: Cellular Respiration', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'AP Chemistry Review', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP Biology', 'AP Chemistry', 'AP Physics', 'ACT Science']
    }
  },
  'Social Studies': {
    description: 'History, geography, government, and economics',
    resources: {
      books: [
        'A People\'s History of the United States',
        'AP U.S. History Crash Course',
        'Principles of Economics by N. Gregory Mankiw'
      ],
      videos: [
        { title: 'U.S. History in 20 Minutes', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'AP Government Review', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP U.S. History', 'AP World History', 'AP Government', 'AP Macroeconomics']
    }
  },
  'Foreign Languages': {
    description: 'Spanish, French, German, and other world languages',
    resources: {
      books: [
        'Spanish for Dummies',
        'French Grammar in Context',
        'Practice Makes Perfect series'
      ],
      videos: [
        { title: 'Spanish 101', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'French Conversation Practice', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP Spanish Language', 'AP French Language', 'SAT Subject Tests']
    }
  },
  'Arts & Electives': {
    description: 'Visual arts, music, computer science, and career technical education',
    resources: {
      books: [
        'The Artist\'s Way by Julia Cameron',
        'Computer Science Principles',
        'Introduction to Graphic Design'
      ],
      videos: [
        { title: 'Digital Art Techniques', url: 'https://www.youtube.com/embed/2GHF67U2SWI' },
        { title: 'AP Computer Science Review', url: 'https://www.youtube.com/embed/7T37fZ9bpzI' }
      ],
      exams: ['AP Art History', 'AP Music Theory', 'AP Computer Science']
    }
  }
};

export default subjects;
