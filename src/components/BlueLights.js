import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const BlueLights = () => {
    const paths = [
        'bluelights/Лист 00',
        'bluelights/Лист 01',
        'bluelights/Лист 02',
        'bluelights/Лист 03',
        'bluelights/Лист 04',
        'bluelights/Лист 05',
        'bluelights/Лист 06',
        'bluelights/Лист 07',
        'bluelights/Лист 08',
        'bluelights/Лист 09',
        'bluelights/Лист 10',
        'bluelights/Лист 11',
        'bluelights/Лист 12',
        'bluelights/Лист 13',
        'bluelights/Лист 14',
        'bluelights/Лист 15',
        'bluelights/Лист 16',
        'bluelights/Лист 17',
        'bluelights/Лист 18',
        'bluelights/Лист 19',
        'bluelights/Лист 20',
        'bluelights/Лист 21',
        'bluelights/Лист 22',
        'bluelights/Лист 23',
        'bluelights/Лист 24',
        'bluelights/Лист 25',
        'bluelights/Лист 26',
        'bluelights/Лист 27',
        'bluelights/Лист 28',
        'bluelights/Лист 29'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueLights;