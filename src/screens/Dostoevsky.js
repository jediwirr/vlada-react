import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Dostoevsky = () => {
    const paths = [
        'https://lh3.googleusercontent.com/WgldbgvishMc2lzsrB2BFgjHwnWNy8ilgheNpxe1LfHz-fvCWpdK3HePVvlq3GVH5OsxHaQH3aUYh2-NSl7sMzRuOd6VtIxGZMdgyDbT3XTWXKvpwLrkT3PQCQEXqlAEgMwozzz7wcWxWcnRmHx6I5WqReEOXEzL_Y7r5AXYE_MAyfMElr8ua3oFr3VnSprfA9gQMQxqmlw52L2cpYF9rIt23jGRzhHQj5GvZn4n4NCDTtZB_de21q0PSbfFfJsohzeiku3CO1mchXkPJrBXdz0vBZh4uxz2Oufy8QdEN4JJo_tb79herwKLJbSR-lrEzX28eYDUAHPuq91VFleiFYh2GR-F5fGZoVlIrEvRdQJOXrKcSvaaTt86cMjGaH0H3hlE9usUV8NJyJbhj-7ChCsv_WJg5WqVv4WCF3XcrEPxtgQf7v0M4dhSm66WTAYbqJ3Z6aouGJCsVEkYlWeU02tmv_0MvNJ-srqzQgoXq2Qo3PtoHUXPULcKEXgf627WFT8sck2dw_ALxbyqml-8TZD9m37bUPgcBuPoPWV1jscKKSSE2UZQC0DSNj6q1oC_AiYs0ri7NUl8honZUytw_uHUtmUYp0ZQudSy-hcg-3et57HTSy8SkMq9p-P05LEKDWCjkXS7Kc0DqJI4JKCPKyTMadDh6_Qw_wXs2oR1Jai0pO9_VGiLwEp3gsc0AZD6Xe4bqOnpRwTyd0MU-DVQ02I=w1118-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/8tY2LoFinzFBENLbCbTNlPVdOe20s6paKJY1LSkje6QojiwsXxqyX75GfTdmXlnXs0QfRTNDp3P7ZqJ5GGz8vNsKU7Zlz0jkq6nEodcbkGLJ8rPOdUSjzZQ6BMdelAMpWZal1nBGU2T6Olta-cEZPis-CTKMhGKD9ZZnMKxWCowU-MvAVgtTAQyld4JA7A7q_GD-tBMwWUr3WTr7hzc5re1luQeaDYHdYk8NZOfzNP3CAZ33FdEmFHIPxrIjn6EFvzu7YD98hyvOxQjZ3uN4MfoMm4bM5uk2mzpWvkS7UcujkfLMtyafoDfM8UG6U5yxg43dei6xGsjVwoISN40hkwfN37n0ARWexDHFPqxb9Jf4UUeOKv5US_igNbv1Ub4XcT481IkFVik446Gcan-9roX6krUUC4-Q9IyeBMgkbdxWeU3tFoteGgtJaDatYT2pEjjGvsW3zhfwYi8woicx0TQpUw0m6uu4-rmBkmzD9J1aXWS_AyiQ3HoYzzaKPETeylYGnqiD-y7M4XO0czeTgo01i43fyKRjphWjQRw9uBCaWw583elYpAxWbwPxp0wjS9fQmkIUSzR9o0kn_6cnETL4LYdnaJYQl2VtYQAYfwMsgVqjrRDqYsY7j2K7-zT04_nux1ioa8oJuCohq7aBT-U8knotVNSnYIBK6fMXFcAepFAo4If5gQQ_YdvdbIWe-foYSiPcD3lTekwZ0A4ccoc=w784-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/KGEeRxxljhw-Xu0_W2h--I36KAYJkamIwuddpBL5RnnWGalNbBiUBLnkv0-H9Vcfg-8KpuPecCBzN3IXSqwtznZ29KFPdE4qCXm4SaZsTRVE7nB27Gm17E2T4n4eVNJH5e2zL0vdiUtMQvKPzXjlV5mwPbXZc3grDxFmCtrMLXQI602bj1BEJ0UmtkGaUGJihTH18DYvUPeA2XNGNk-eXuy5jpEl5EUsDcy1PigVJVWMpnqd2x59RJ8paGWe8_8CWFrCkNyQo8MGwmtjg0N2WfTpUXAw8kYfZwg5sYYLaLWL4J3qlwlIBXaamhXHXoeA7wUozZUFTAtYA8rwKMtpkC-OQxAp7KEduItZeUAjd3A6s0yMSUoIvJlkiXZl_FLUkp1LSlCNzFLoT3Wbnf4PmC_w3xgWZoYcGWb0nze_Ujv-Mc2M0gNWkNjPa3JaSvC07ENL7pE9njv3lJm_JcjIvFJm2JXePeX2wjzOuX59VpGhJkb4VO-nN3SFeRZLrDVFe8V1t5WgQk_ZpI2dDfH-wpNZSv7Al_CGT836atzu98KDJ8LwleaxmKnoeU4JlI_tT0uOo3OIDCo8avBeG6lvrXayUNXzgVw5YyQg7y2igQNVbAz0ilNxnXgia3kvvDkyDqsyiEPOinRpAkfWu93QQsC5JTzu90KXTnt5VdX9GOEF1bmUETK1voEARC2kAfUPe8tf0qU6DRBN2AET6dWmlLY=w1350-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/1wGq1L7-tId6odANCQBxuyz7RNdG3d1YRLgv46bb1_jbrTIbML7DvV6MfpSiockHjNnlIDGkQF5v-luuG9UtwsiCMvn2RQFNyjaPohTcNSclztwBy2RkgPAfCVkbCVDVwb5zc6FU4ZDkYdFg6OH_CS0HoHukMfBacSb7ldSmHAsd3RJ1xlBWzQKXaovNZhI_3Ffk04e8G8HJkiVDT1U90hqnZm3j4MKEjgQxxz_SXB_C0s9be28wGpO-UsU6J-mKs0aYcHv3X4reXzQYrtH1WfybWPhOhEpF64LABKZCnJys6AHI8ASbd3AjM238IcLyOjntAES2Dm8wiHbnA2kKoLc0uMuMa9kQzLZ8uFiFWz2GHQ7SVxVvkwP_tf_L8EQc0eCouPMWcjI2N0jTWfuk_1Q7xiEjbsHEVTqf2xTigmA1eMw8Ult22-uWkvw_67g2xbkObgBkG16_7zciziHOo_L6iz5dEfBWqa2eoRcaNIlvdeqFhhYlj3HFP4UsTLlwCGQ8mrYkWlf80v0nKTyw08TI9p46cZCxL1gW-0VFtafixj6jLBo869NpmU2SpeKBAwmPoWec1apfIzfpvmpZv9GBYEJucg0EMxZZ9J1902zZ89ywYOJ9KX4Uc99uh1A_ZKe_Aj2Y6QLt7F0AycIOm00A7LI-tyvmuwlObIEkYYAyX18HS9sx69zRGFpChgBpaEV33T2IirvGSfHmaFfrmJA=w948-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/lfhvKQgyOjyPn64hylD5AWuGXqlKnh-qPk_7VNDuK1gn62KmMYD4CBtLdbo_5nfXUkCZfp8SPdMCH19ybu_vvWtp0jCG0wMcW_Z8OSSryO5l5JRmpOW3GuRHmdz1HU9oBnMGHvArv8IB5Rh6zct1RTETk3nF7ZQDZh2tEfj7XTANvEkn4ZgeTTX2k-AXoFiFPykdIaOR0rxSoVbte2AQC66gU9cVeTF3VlOYkqMtPybDi02eGZvlupJRaoJNGaUUUzTW9g39m1Wbq3rUF6GiniscTZZDQR4gZ18SFrxyuYySnSb3bKSfIh5Fx3ZiapuBxCI0fLhFiHMpfiUmN_k9rl7t3htO9prqxXr2K0jd61F1IgzuLWDZmFgi2tNqAAulC204-9JGqE9vNT_6YfZ2ccWALmXH3ZW4xqXUZTDNbvrV84oGBnLnVAevcmIafcN1t8ltZg6tvhxPIs6pONbvuoNM-G_kGfKJPCkuiZL-0f-3GJSi0BUCJ0kvH99p81G2B6gagnKDjvYcK7YCjbA2N7xd28ZV8BBwcsES4AVHYBfpqlgIW5fh0XrMuVMmJNYtcgl8nWpeIOONEzeviOKhtNUC2Di95DjKusAe5NqvmwQIiqDrcJntl5jVspqIX6X4LSuq3ThVYp4iMk8HxEA_shX6ulA61mtL0-Jl_MYWh0EpVDWkmjiVz_WH1qPvaGhjgmwRvDo6FN7l50SEksyu3jY=w653-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/64eZZTs1hICdgdD4XTwtxXkD75ZWnDVObmZLIrTv0UoVkbIAL4gqjiS1Bq_URyR4yipZfoIX7LpWhub930Iaz2GsCZg3kQvcWfE2jNLXksAW07dJbDtcXe3bJ2lkCxRttcVtQD3ma1jsLtxih2VxLAliFTBJFkI1P0ZMyoIpdpexQXoCMtY3xYoNYir1Yxg1d7rC1erNulXVNAM19TN6VtI1ff4X1bTEvs2kUTMB7YqiH0BU3A84101iHkHgJ9qfxNBL8YYOWHDUuHQb2edHvrROi1gQDJkqioWR684g5bk9ovEfZQgUmZj3pURXTOw5_XJ7ov9IUeiEi0OxAugoLOrdWUoIVFiIrD3IuJ82JC2YwaBhYKcqWuwGQbZnbWwXgFLBAe7tPck2zoFvOiTU6IaTqf3VU1gN8JI7T-7eICT_RWLCZ2Ml1p17GoupQSux3jOpQ3I2sTJpnKaROCMUHBjEu1duFFvmZOGTF9zT0jX6l86d5iGarZIhDwckCPVXLTNg2M2mkD6w-gfpm-1jfbPqWLLS6HiFf5QvSpN8Jm2QzdjQ2S_Y3R3oonzY6Tm2E1qkgyda41U2vS_thx9ktIAxThVXP5H_B0ebD1vxMINDrGt7hxx1MmPKYBFNj-uPckwF0qTHsfv42C0eYnrg2idM-KsKY0ugwM80JsiSHOP-ARmJVvpgI1Z6kA9NI-e9GQNPq-eEk2JPjCRDP0nOid4=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/KR4ueqkwU4YU-biHiyHkoM2foj6Fq-eVekdh_8igWf_UmSFQFCqV6QFQcj9hBhnwlVxQey2uhkZAoJwGiR52dvRohKFadBL6FoZ3E7IoYyBLB5QKMReFRo5aUaJ4u64VmaRzJBdQ14nS1PxrIqq6RsgtaAxrEzFkcsSVobPDvwzqQYxsZm6SCiCSKo6CittCJ1Ba0BnplA6-zmOqKPJ6ZFQKRsLBi2kMCvHL8wd-E9fWf-3mui8u3SvJPRbq39EJOYFRYeOjRrlkzBQtUL3lvK23AIHq_f9xHG5E4qAe2uWFw-hlbUy-yexdPbxa1Ave_8n5-dEghi6q_-okVEdnrLJ1zxfTPFsRkiMzjFHdfpHsmd6T5PuOkMiuIAXU8WsnuxTGQU7V6kwNbf_ACqel5QlZfcEk434OtQoqS1MUf4QjYSzGcbwli10BRvnlgeXKyIKuHMvz59VKAHwPU2PYzB5qJJCaJQbRL4Fc4fk1Fs-I_WPziJJdi7eqlp81Rb5o2sWwjfoRk4S2HBhGsnsXEZoMIiX4mu4C3dOcWtWJF7fJem_sdJZfGo_z5mKTcYwGW8wwyJW-ITgHhKs_PwtDMExDBiNYWfcaoA4kUpOnJ8I6p5UlS2jX2Za2LSyxwhlvdWIsdwLO6knKrB2h1k9WCJpTdrhDKMQByy7zn14XA2yrWxq71cXTTwx9zd7H-EWGWU0LAoY3HQ08tPV3YXSh53M=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/JTfRjjcipEQ-psVmHdk8snBtUSumnu9i6aAVhuItP7I-MtQD329EcQi3rZn9CvtDw8DBzL-vpi-sF_Nf9FEQRypg9mf51k3ZdPWVgc3Ntz7pYMuyZMVG6CUMwZI-5SaC8LjiSVS1pWsO_Ar43RXMKR5GhS-PSLSmQSvO-X9uEZl0yNepd_OlJ064gS2g9HRM-6hZhB1yAhoNOmb63eImeEisfkZrWy3nV5lhxJHr8qsjDLm8Y8KV5oVchLBdt04IY0UclqdCN5bzW_cMeZgowKAfsA-GRfWYXAYasNc_hsxFxM1aAPPhPiZPRpza7uDDe7CKdda66ioQVMaWz3dJ0eBt0vsoiJdbxBpG2Pk-wG5AF5B5zEzoifm6g83dsOilVH79pF1xFGuA3aVUpUMvrikYGKPr3hS0G4ECWfm4x9qHSTbI7t5XrQ1ThESHvr30ulLwJdfmxvybTMXtLQwH21SUs1syL-Ugm5T6RjmeAahXwE_RVNqW-jhA34Qa82IFO7Z3XdedvHkEbx2ueKrSXKEoi7vRqJZYS1UuQbCZjz6AVjTz2toVh-sBYJ41u7SrtZDFwOluVgV3in44rnqLluT-Q3qk6qyi-hTb4sybXIyMzaoY3QAgg05ayZSFs7x92WdzQbKmwgMBm--PUzQFIVwfpsUN92U8FGYAoRdvwpqdFxtgVUP_elVGOh8f_giU4iBNkChmryb-OFSueNWbvdE=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/wu9eExM87Y7AtsoYgtFmhWH4bGEHMJNlbKMb4hOR7JQGryK809jAQKx8TvuBlCloc9WywlqqYgonl83wvUUlGVoKW0IDTsBVbAU4rBacNdOkK6XPela5nNke49mv9oQIOPSJSBkdHpa1e7ryGOkPrVc04hfU8TEoLZsDrHQbfryptC3P2HEUjwTlj39nmbgG43iXt7sSwHqcTH8s2iqcNemiOglFebzh5nq0q35-uWF_cdX1Bdmk7dSpKmDdbaD9tpUrEuYJURmL3h3A2X4YUTR0VDxvDFPZ_dTTOHm9bf8-Uqhz8dp3v0pnFZe192q96o0ysjkbi53i2OpTWcXYPzeOI6QAfpNstyaYr3w4kk55RswZ7zxxWHGUtttpBoyvzPlau4oGgztMWDKsPBUFgyksn5tQzqGUCdB94r52-CUWXty5t7NOFfL9Caq8uowLf7_533DGGBJzaQkpO_WgRB4WpD2LaJRNa2Er4MY7VkT5DwA4l0WQG1SUcSad4S7FdzBgSeA4xJQsZXkMefWAxtP19YY94dNw56wHBaUiZXA8H4LdpTcmQ0mo2oM4T2wZhDFHfekZI1ecXYUbFP-r7hVY9Jt69LnRUfB3ZVahuRJvNIqkOWGadzz3El1Z5UxeS-fKMd19dqkrs0tToAjNfjfou2Zovhd-3nuTXSy_4-99rxv7DQMHA5WMBfzF-4qjbdDJxpJmClSWRpppQ67MDOs=w624-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/h3VoJ-KtrrUVTVBEDZmxnhM9Vi6fbPNs9Zd8c0_KO7XxrmwxGHE5YZQiP4A7GfXDSAkD-7j-4qSMgyIXgly_iOFbwfXlqnviqIP8FKFKvrrjSza_wHQH7uCYAz7AwaqYO2GytF709LxekAjk-4xCuBkXwVsi7p2P3-UVWnkYbtyMADf963Pb4ATzXAPhPWD7ub0HvmHSSXXTBa9ViGMEjhZREwFqG-2VmAGFWuu8LW-7UjGIO83y_TwLnP73K92HkdxoS5OVTYfqZNbGTWdBlXPLqFjjuZCueAay2VEsnx2npQcFLiF439Ompv0yrSBVFX8C1rUn-cFPn6slZmYY27s8_1ClznO1YyaVLKm6zoJoAm9LquQuxjDBmtsLjv2TOXO0mJTD9ysiVXINY7XpknJB4r1fXF0KdV3LDcmtxB3DIho0yFLc1Mi0hDMPE6tuvSj91NGlBA-iT6gf1gQR_qWlAH50myx-s1xqujbFVbQV_hHCR0MWJJjMflNFl3_3uMMTQyIRzc2xydSzkOQqkcnfRoi0_vVaQTrP2lIuLSKaVAdEyObeDmFORD5Y1jFluYbUGaVlvHkpgY5q4itxr0XCgiG0veSFt4z3-deKuPBB2OVQQ1BIdCAqwRS_pyqIq-2Ji2xkm1tRLttA4pFuTLCkTeJfI6dgpkdGB85RDuEmZrIia6vN9JTcdRmUzy2omO5HXJQ7-iO04CXdLT17tWM=w653-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/An5gKguagpglErOTuVtrl9hrRYNGtPvWwdtofTqhUYYR3qPvQ1P4mWi-aWrUvIYnneM7FIn6c0ldlbqqqewKqET6rVMkeNoF-t-E21OCkUQYMQ1k9RiQESwKOLBDFy3IjFClpnctGO8TG5SY51m4ugrF40kL9vq_cPOxwQTfg4xH34gojuXb6x6H_nJfbhERcg0p0BQxhJQD_pGspWYNCSf4q3TMNI_X72Gbk_rJM16UwRCj-caxGQi82pYa0VcYgq7d8k0B07IhX9nNXYovxmJLhqxiRimnnmVbfdVxUG2ksxFBXZgeTW6maUAq6DFzNQ0FvHWTorjILE_Rd9b3tK7CoaAtMxX-UC1AmgzfTy0SqjxBNcWLMjepIAX8p95L7V0ld1cPcpzokBT0V33G5XEC969DEHa80fd681f7tzH7mogEqna7ZLTQFvvye5ekL8IoKdYoiV0xHhLuaB6mzT9xvFjW6OXdiPjnPn5iFug1zPgayWdi9MRlMyYz-HbadyoPnb2I4umG95J_0bCXCnBBJBJoZ1eh4Tc4NnN2XN-WHLTw6IyAhcAbq_llBq13E7iRH4ws6dwViKJKsMsGPp54Eo8xwz3kBUu55RI-iIBVxOp0recSeQ4Qkw5T8rNDWJZmvdJqRmwNKJu8ywNWfBIn1PQCDxGJAVIVqQGh72iMob8n3fSkdopo-rjQzbx8t3k6n9Z9PvDIyFeOC6qu1iU=w703-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/AqrL_4xFyV6jprjmXArLJe0AMIR2Nt0hknJYpNSoGul8U21XFZlcfqkXUwt-QBlCDFW-iFNOukiWWRIdjdy6UDVTRO8Xi0y8SjyDVnlTx5CAs0CD5O8HZ55xy8CAbQkWJ8ZItEYVpBLxlu3T786oK0SEaEpC-SZm3yiiMv55NAn364QIzpz_8vRW3YTDGjxZzVHs79ljCtm8KE-LHU0wVot2qNFbC5_YQBomCfJ38-sjKSfbwH2ZB92w1bsvNaxH4B_atN1Ky8ViaNhVLAdyxq-Raxz-hAOOOXdfORONv8hdhdEWwwDAQ4ps6Roze68c8F0C6hyMlYAngoU29ninMxd2951cYVF8jUsDgQb0b1pEUtyFn_oJFap6rjrtFjtXLdG_Cxhewn4KO2al4AZjjzab-xSoj7Nt8JAapZ_B6-Hz8mG_oU9lzAXmyu8th_3bZC0Xmt-hY2A0TRzdO5L1xb_V7-xBhHIc5rF5Ny5leJLMdKVZG-h9fSERzyEZNm_C4x-njcgwcx4TBntRE-Ihn1cDLnBY6vGHaJdfIcFVi6qbUa5p112fWqqpGVrwoMdm0KAThNGLFGFt96_Myg5K9fGbIGWs_88kOk5YoITrg1HTxrDkaaXjV-QEmot3y0Zj9aQnBRkEL_7zeW0ifzCDCFRZAj3xANQKcNWKA-fkhaQ2Loj5TkSYj-9CFBMFtUnqw8jM0uyfFlKLf1lM4O3NzeM=w1398-h980-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Dostoevsky;