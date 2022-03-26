import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Dostoevsky: FC = () => {
    const paths: string[] = [
        'https://lh3.googleusercontent.com/pw/AM-JKLUjQ1PU6sJo4CH5uMgU8RF2qkOcrQwzChVynnpEeMkzgn4MWkGjpCYqg3XDiAVMDjXUdf1mfQmCg5Q-Nlci6Y1-gNAaGSrpTc1OMuT_TGPjIqBM1RcH-u_8G0TJT2bCq92XoD3aSaWQjnJSHQSgOtqC=w1118-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWxsgS8Bb7eMDZycsMGsTgMVtGr0plQ6Qhd_jDCJAhbIYC8T-s60cpUg1DBYj3CE79iU2it8VTMqqctXeC0i4WCbZMzQioGTM3IFoN1dWc3TnB1CdDx1FANSyOnbXJmCdHy2N_XBOTdptSSTQzoc4sn=w784-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXQ_IXLRb3FcTC0hye6Hc3Zr9MF8lWihjWoh7RhgB9vUOzodYRwdy7AIUubSNJNxbWTIgbTroqssncf7xxSGosQudmitlRec4bAaQRtaWat61jU7oDiEbAC1e_7jY3VcZaUu6PVQefp-QsSeJq1s0md=w1350-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLULeVKpms8kc-jhxfHWlH4eDeQF627_VepGF8oA3Cktz1sYMl5QY-OY84jV0x9m-dTNNxdubd3xYNfS-KCTukLJmOHlqwLnausrhE61xB3_Pa903hNO-h6wdVcX5Lcc2jsQsqBBA7JglJ_7hlHQguhq=w948-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLURsbwhHAmJlLIUS5TOwmxuDoTNP2J18KDlNLxJ4e5WYjz7Jqzbm-mVbqAEdv0awuB7IYuKrrwUnkYGN04YnUOTwtKJHwumIYPm9ebGbVGEzC6LafWS_MKaKLTolhzRVNhf5K07ZAysnrM18bFMOIaT=w653-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLV5Gn4XfuS08w6bnGl3AKWjneUW8mBLBTruLx1sYmYQS9UIW3o0AK038v1a2HvNPoOEik5EB2CVaoxR58Ws7hYpp-z83bZdA1wSFg6o_TGWVvGHFK2ldYyFYYua8XrxMxZ_2SOlQVkF0LDEMSPtxX4G=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLU2Dqr8SqICKyY5SBIIhxEPJy-vNRhXBtgyUn8ulMJxLb7veBjfWhvg2tk60FsBJG6oobTvKXCqMLSQ3KICv4YDnTA3YouBmO2l2dqHE3S6589xs0nxhgeoPQYR96DIuUv3VY3dj7-qZ4Pl6bvjCdrQ=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUy7Zb-l0nAXJzl1Z4MElocUv36776-G9ZUPMkjjn38eMKsORN3luisN2nSIYAoj3ejAYUT4kNeIm-hpKp2xkmw4XBsxnzt7EexJls8_8E2VAuQ7bx8aLGArrzglnWirBdpJNoYxmP8WK5l0-ke9Ed8=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUxOtHtU7XcIN9piJYq6-CYiPBrpFw116AS-Mn9JbZHRnm_vyC5oRlsyhOpiYtuDWgToui0BEeiseeZewSzwVSemTe2Vt4NgscquPahFiJrBB9NYX_uywyNldmNFSR99Vunw2DDnCAOT0gIcq0KqajB=w624-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXy0Zrswk-iWCIVZkQDvRgbO2vh2WRcHA9HHuRXd3tCf_0VjsZG8L8JoC8W3edScbf3JyuUjNwHq2wbA1iv6CngYeb61bg0OOEz4YksEgPMuNOpamVvTLmnDEtUp0uYYwU55Ir0FEe3octx6lRvACsk=w653-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLU9NFWSKCk_3kd828FHFfVSLOWHt-rifSelnJLOAHDrYePIVDTA823d58KWCLiaVYkCgJbBDc93sG3roSOumDbca-iE0dnLITujdJLRsCi_NodBKEYF8XQiwzh0fyocL-hqGLIooI0e7wuqJ7VXFKih=w703-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXEN00PhnQQKpfGJd4o7XS2cMHr9vI0Ur2G0rzCk3JfzV2xRY6Zu0FknUExHdluNU8TKquo9W33xveTR5csnPT6G9SSUbozycS0KjAemWe6949m8WT_FTfg1CT75QbcyjtvNSqDOXnTDaX_HJOYyoH2=w1398-h980-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Dostoevsky;