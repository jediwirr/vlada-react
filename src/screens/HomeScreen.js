import React, {useState, useEffect} from 'react';
import AboutMain from '../components/AboutMain';
import Menu from '../components/Menu';

function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setData(response)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="Home">
        <div className="Photo-main">
        <img src="https://photos.app.goo.gl/p4UU9nqodNwWm4Bw6" alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain data={data} />
    </div>
  );
}

export default Home;