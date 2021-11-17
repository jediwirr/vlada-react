import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Dostoevsky = () => {
    const paths = [
        'dostoevsky/0 - аннотация',
        'dostoevsky/1 - двойник',
        'dostoevsky/2 - карамазов дмитрий',
        'dostoevsky/3 - карамазов алёша',
        'dostoevsky/4 - карамазов иван',
        'dostoevsky/5 - честный вор',
        'dostoevsky/6 - смердяков',
        'dostoevsky/7 - хозяйка',
        'dostoevsky/8 - ёлка и свадьба',
        'dostoevsky/9 - подполье',
        'dostoevsky/99 - идиот',
        'dostoevsky/999 - белые ночи'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Dostoevsky;