import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './components/Question';

const App = () => {
  const [ques, setQues] = useState(null);

  useEffect(()=>{
      axios.get('./questions.json')
      .then((response) => {
          setQues(response.data)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="heading">EXPERTIZO</h1>
      <Question question={ques} />
    </div>
  );
}

export default App;