import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Three Tier App</h1>
      {data.map((item, index) => (
        <p key={index}>{item.message}</p>
      ))}
    </div>
  );
}

export default App;
