import React, { useState } from 'react';

const TestCaseComponent = ({ testCase, onProceed }) => {
  const [subTestResults, setSubTestResults] = useState({});

  const handleSubTestChange = (id, result) => {
    setSubTestResults(prev => ({ ...prev, [id]: result }));
  };

  const allSubTestsPassed = () => {
    return Object.values(subTestResults).every(result => result === 'pass');
  };

  return (
    <div>
      <h3>{testCase.description}</h3>
      {testCase.subTests.map(subTest => (
        <div key={subTest.id}>
          <p>{subTest.description}</p>
          <button onClick={() => handleSubTestChange(subTest.id, 'pass')}>Pass</button>
          <button onClick={() => handleSubTestChange(subTest.id, 'fail')}>Fail</button>
        </div>
      ))}
      <button onClick={() => onProceed(allSubTestsPassed())}>Proceed</button>
    </div>
  );
};

export default TestCaseComponent;
