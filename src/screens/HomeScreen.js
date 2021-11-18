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
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLVfI9sqdBqabNU9rKIrKS0KjUI7d--pKO4-FR_LPtYSCEcxyGsbzIOrDslOC5MHoufmW_aRcxKrmwtlhoMWgnMdaBXk5vY_WoYXJ_9qUchAUhJMJgZtoR-lA7OFg1y-YkAcwvbW-Cg-t35WrNEXJGQO=w1000-h665-no?authuser=0" alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain data={data} />
    </div>
  );
}

export default Home;