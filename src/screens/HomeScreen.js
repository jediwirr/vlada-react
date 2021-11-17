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
        <img src="https://lh3.googleusercontent.com/ZhGYowXBlPx7ZG8pdj4zfhDshW8QNv1feEIx5bMcw-biPeQMxN09SwfASOF_PNmkUCYGvcdRx0cd9qAXsBgRvFf-R1YMNdOMbFrhRIsW48wQp1xTjLrQqyLFBj376ksADZyRI9BcOjmrytw48_CnWS98SaWDyv1Z6TxL6QswShNEWaK53y4lqDSEiEdxG9puFTxi3N0tlSnZvedt6Pa4EiPDaJYCB3viD00k4fz-u-GdweaSH52OKOyuKNma3WKXxBOG2036nvWlF6OSiowSFAnLhECFFwC0QDlIeqMlDK7rEsboQiJyubdI1cNb_ZbNRk1xDHRlghqJT8O6mJXy3MySgS99qla6F8nI1a7_IyMKWvFc0icwS1mRJeVi9L1PXPylNXcoXih_PrqQcLOHgo9NZ23cNV0W55jF0jIqdSkZ_J8E7wItgOJEHUf3qFphsvvm71FrIa-JMYg4TkAjDRVccw4sZwBaofwXGj04G3RQnZTab16poapcHXRjs9dS2OVa48-qqY6QFO5WO8lI5gFPbAQmNV3fCdloZn2TV2zzIw8TqAG-BMzjgms89_VNn0JxYHJhZYqa_uTDD1qs67zwkTikXQZa2B2AwBJJ_K45G5U0N7-1s4cwDe133ysXIykrmvu0AkCzm53-z3dUV1iGEGBrLWhsQbakO_CTz0lht_hVL1oXxHEacEndqftX17Z09fKhHfyX_mhefRy1ZJg=w1000-h665-no?authuser=0" alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain data={data} />
    </div>
  );
}

export default Home;