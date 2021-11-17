import React, { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';

const Texts = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('https://gimnazist.herokuapp.com/api/novels/')
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setData(response)
        })
        .catch(error => console.log(error))
      }, [])

    return (
        <div className="Gallery">
            <Gallery />
            <div className="Texts">
                <div className="Texts-menu">
                    {
                        !data ? 'Loading... ' :
                        data.map((item, i) => (
                            <p onClick={() => setTitle(item.title)}>{i + 1}. {item.title}</p>
                        ))
                    }
                </div>
                <div className="Texts-content">
                    {
                        !data ? 'Loading... ' :
                        data.map(item => (
                            <>
                                <p key={item.title} className="Title">{item.title === title ? item.title : ''}</p>
                                {
                                    item.content.split('\n').map(par => (
                                        <p>{item.title === title ? par : ''}</p>
                                    ))
                                }
                            </>
                        ))
                    }
                    </div>
        </div>
        </div>
    )
}

export default Texts;