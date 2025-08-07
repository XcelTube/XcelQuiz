import React from 'react';

function QuizPage() {
  return (
    <div style={{ padding: '40px' }}>
      <h2>🚀 Start Your Quiz</h2>

      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>1. What is the capital of France?</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><label><input type="radio" name="q1" /> London</label></li>
          <li><label><input type="radio" name="q1" /> Berlin</label></li>
          <li><label><input type="radio" name="q1" /> Paris</label></li>
          <li><label><input type="radio" name="q1" /> Madrid</label></li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>2. Who wrote Hamlet?</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><label><input type="radio" name="q2" /> Leo Tolstoy</label></li>
          <li><label><input type="radio" name="q2" /> Charles Dickens</label></li>
          <li><label><input type="radio" name="q2" /> William Shakespeare</label></li>
          <li><label><input type="radio" name="q2" /> Mark Twain</label></li>
        </ul>
      </div>
    </div>
  );
}

export default QuizPage;
