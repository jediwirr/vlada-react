import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Pastel = () => {
    const paths = [
        'https://lh3.googleusercontent.com/pw/AM-JKLWCjtkTLZHBrggZTutD_Dz9zn9pC7_ChbQoFnD8cjqIVmg0PMOxmKskcI7HZbcZcdoIzHHb_TjWGBd4AnNuInqBO3sWtAuVDAj-d5o0RGgp5_GEmCYElduAjSshZEOAqx__YXCCLDfZqWCitMN8Z-5X=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXOeVsRCC0xK6L3RSqmFAVPoEHaVo4ZxYKYOKxXsevqGnS1AMxHaZIIyUmZZvp8j9k2N7QENdi1KaGDMeIyCcZHFe0MhGniSTwZFF5gs6D4qnoaBdHDIEtC8DIbvkA0Q0vrweno_EOC703ah2UkPnp8=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLV01xV0PCeT3lrp7seHH5SIIKB8SDDJb-FSrXEjBgdEckFwanm_HduOf3guDUM13s-tt2mWtnh3BPMPfvGobA9hfAXmeSWBrn5S5UC3HfednUur4CBSzWtRKTuM5Owq4ToAYk9xExyz0J3hw6UqtkK6=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXTPsRaQ7TLKTtJywOGlAMX_sSoxH3rA05u0lpKxuqUAEDMJTiFI93dv2wPqwJyquVVgjbwlrW2r94wM7SMDUQ5QGXCg5X1WL7jmMNWO6jZr8ZRAelzGR1wz3geOsnrXkMFNbArMOqAxXOY3m1Fl-_B=w1469-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWdRvXnFXrmde_XFIaViuC0gnY6R5KC9luUe7zvFvf3sdwl7chYIAlFmUEedmKbW-iwuw_Qc5FDouawyKomLgPy5hhjT9bLy2iNPnUl5fZfT6g6b_VeKka15Ur1LvkJzUCvO8ZmIHFANUWbkgPy4kk8=w1469-h979-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Pastel;