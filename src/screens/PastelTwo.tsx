import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const PastelTwo: FC = () => {
    const paths: string[] = [
        'https://lh3.googleusercontent.com/pw/AM-JKLUrs11FkicYD36pSz9ETnKONlWqEWmwGz7fhrsCUB_CHJEa8SYn7JA9RMPDzinn2m-umIs1irvgLbCXB6yePGi5JQPtCOWZfv3dhkoYHyyo8gjJHOhGYRLxxqLYsS1HKP-ADuUAue-3GjuYRNKMbcs-=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVx8QTL1hxY3RWb063a09d1-KJWRikmY6A_KEuFce7_zu-iDfbLvlXj5hqc-DX9WQy9rnJqe1WBTi2pdhPU2dPWY8NS55U_BYZk3NVlusC9sXoe5oJh_TJIibaq5k-FsLNP-SuPny_SzBfMaHQE6zsq=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLU3Ss9nhD-SVhr8oaiRgjFZotTnUhEllrLxJ63Ah9ybptIbqrb_o7212tCznwhNKSjf9eex3PqFxhLzeKCNH5cjIaHuNSUQbfiYSqiuh6DrwBj-6jqwsEdiDIGBO84uhvFuLZI0Tf6mtQroDyoux6Wx=w653-h979-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default PastelTwo;