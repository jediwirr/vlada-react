import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Country: FC = () => {
    const paths: string[] = [
        'https://lh3.googleusercontent.com/pw/AM-JKLUWgvzKVutMxdEo5oUCD9nmbMPByYT6XqvQbyccqANFnBnmBKncJol1Qn44jnPSzXkyn9M5GJlP31wgSQup0xyd0TnHHUM5Q333W85ofCrQdCZFqLYFhXKgCzLFhyyeda2DbppbthSiVSROKgE-Jpk3=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUsBnQS_DyYX79fAhMmrnYsnOWe81CrurqUncUtupnDqe7jr0XZdlDeQSYkjjpueZrl0smbY3BviY-cZNGb45oxX3WFmV08TLEpNX0Lh22kKO6di1x5E0RYgGWxoXbfYXJ26xQWhAAhyoWWFu2o22wX=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUeAKpvVjXdAsthCdpkDYX2vlqNaDw9a12DwtqIG3FWvLrb4hp_iUNGnwstLnSopqTLGN51wg10XehQOCcRJKCCpIrwRQbDyM9pMn31DJiMCXU14RMjmANI2mEkGQQ1GCWtQieXoL5yWPK0PB0d1O6H=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXXRbRpdWQrvV_gMwLtP8wJsxU_PlJtWuGlGa7M9BcYhzYZQ9e66cXHnDHoEsHQ47nmJsYtSfc-TIHwSvLqT_INLeU70j7CmLC6D6-LsowEYMamNGwItbxAWczpApnMlVoNPw9JevRy0rr8qOYtPSE5=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXUpcD6dnnm4u8Qdpp9jn4FuucsCMY48chT2HcOfQmqgNqiLdjon35dz5T6JkLOT_QEw3XphNVVwBAlR8eeGv8C98DH2kDKHhllTdpLShXw-f6W_z_SKQUlz-04LiWZ8nc7_7jqzGPsj9refgJ-5tjw=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXlsHjTyGrItk4qvacxy8qkSmGNvNs7aHeOWbwhjBC83MYb05Xm0FRL90TF2h91vGGumZln8Lw77tHJHP03DBjiWuyZBG1iCaYXxM44Vw6gCuNiF-ZZJqEnoprPF8cqNvzhfjGgn4oKIzihDHz9l2hX=w653-h979-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Country;