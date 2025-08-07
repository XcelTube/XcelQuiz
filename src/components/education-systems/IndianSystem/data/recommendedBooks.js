const getRecommendedBooks = (board, grade) => {
  if (board === 'CBSE' && grade === '10') {
    return ['NCERT Mathematics', 'NCERT Science', 'First Flight English'];
  } else if (board === 'CBSE' && grade === '12') {
    return ['NCERT Physics', 'Modern ABC Chemistry', 'RD Sharma Maths'];
  } else if (board === 'ICSE' && (grade === '9' || grade === '10')) {
    return ['Selina Concise Physics', 'Together With Mathematics', 'ICSE Biology'];
  } else {
    return ['Generic Textbook 1', 'Generic Textbook 2'];
  }
};

export default getRecommendedBooks;
