import { useState,useEffect } from 'react';
import { format } from 'date-fns'
import './App.css'

function App() {
  const [time, setTime] = useState(format(new Date(), 'HH:mm:ss'))
  setInterval(() => {
    return setTime(format(new Date(), 'HH:mm:ss'))
  }, 1000);
  
  useEffect(() => {
    console.log(time)
    return () => {
    
    };
  }, [time]);
  
  
  return (
    <div className="App">
      <div className="clock">
        {[...time].map((digit,index) =>
          <div key={index} className='digit'>{digit}</div>
        )}
      </div>
    </div>
  )
}

export default App
