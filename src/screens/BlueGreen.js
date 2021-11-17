import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const BlueGreen = () => {
    const paths = [
        'https://lh3.googleusercontent.com/ln3oSkzDXOKjAmVvbCTEthQ-rj_oZRDGKwy_FSU14m7CVjA7lHYbasNXhvHZVSr3iDLh3hEqpC1K-uOIIxEplnpf_eJILyjyQdctoIg1dahrdp5VwNWPYQLJXw_e8YR7qIe3LIOyQqY2KI_rqHnLaSRdRVdpS_52oXxr7ywC8AW52iJYWUMPci0ouUqoJB1WRynaeoxRcLS13jgysLqyGEFXfMZGBhb-bywkrmxkIB6l6QqZNxpimC7oyEsghlPbVWZc0AUBV2XmtDXSMNSu0iuLAIY_rXzziyipaXs0BbYZ9BqdcTUCN1nZKtkIsljyuTmQE6RGY8iUUjvPW-kjHihaLbnHeSm7U0VcZoGYXLZxWWjuJqpGEzir8rTGC52oszaSp7DVOpaTyPpy36avWDQESoaR3bxBR1aLagHEs_BURgIATEby5XkMDObhjbw0D5ly7WK03PlO2wTWGyjIHiG1pVgv-qsp5YCbGrtCq8oT3wAtiYWlEm7GUg53RPGhsYBpbSwx88Ke_Tl773K5hfKFcUbzkP3Cmg-XYuMb3Lej_AeP8TCyc_mbkk7emJT6c5OjLLSq-MYjRO9pUvv1QQkvVmvc_h0Oc50dQ5GpIPZZSHITLfUbkovwMpfoMi1HBytfgQvkS0EVQp3O7S_x3bKybP-fMvGs_1rFk-mDB0cCHq_GG8lqoUPg2dL0GRVk1wAtSo2AS28M-m4rtWuAAyg=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/9gt_1MByIrVuH_02pPZ20RXN-sGQUQjXoJJ3Kk5a-w2vd8QEt7joCrwDzg_Y7STt5cgYQhHhGpsG-uApH88sV7xxr0I5eq3BnVUsm6HgfWblHrsy9yZliEvyPRHPxBElIifyzkDeH4w5M5D3VlrIgts0Htocig569nV8V3U-y1LaS5lE_i4U3zHzcd1356YtiMA2759I9qS6OY-PGuV7lC18l45iyCDNZ4y-CG30pDZrJg2HdAYOlesxW-xC-wK7SbxGhfUhWHdaXKm5a7Cx12RSvrLx3LvMe0rH_X2JbdmdELcHd93m9dtZh4saGhE8V-vF3m9ZgTnEqWbwzSUpSEj9Jx_krs863rYE8bg1ab24sMLdU69Ooy5PzziZsig9wP1Sd7wHMPhpgdo2Jh1qaxrWDUN-ZGzMM899_StWh6RAlSIdlPsQYVsLxrBWWGKzanLzip1aSXchhElvpEweesH1-lEKxnNQrmQW1o9OgmiPxDRSqvLkQqgCBUvV5T361DqnwuIH5hDPDxcrFLhiFF1yIfoj8jrWY07Uzsxxku5Yg5iMNtT1jV8rm9l1VuTXpXKMjwJC7dvu-SkLbdtFz_acl6Qmh44axJjgSsvJpxMDJ1mjNTsxu_ZGsPWi4AaUgcZRSsdu3dO2dt7WyhJwR9sDj28N9Or4JSApuZuYsBeWs00f3kBmC-1yZ2ksTsf9FHEwDEyo38BaR6lQCsZn_hA=w653-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/0R1tRe0WXjzL3cQ-Qeb7vcQvzaPlcPYkZDgknv_CuIGQT7-1ZhH8IP4Ja1tCXmLJuREv-db8OMvGbrpNAgAIeBnFAsHchcIlIqvrLpt6AaUKYqG49sqkFktnFXWhmtignxj41wrliZSpLZO-BgeMM_5N-2nXawb787rcVj8DVA3id7mRzlTSWXYxpYelsWY_soNlcP8yLfsPYLogJDp38wF29RhsnC-D6OLDPtpXAnzNZt9pGD34gEKxn0WhaEOjf7tH69D56kHZeUL7Q4NQYKkb41zfRd00fEM5H5Gq9t3UGL6lszyKBzMjTVhPnf1cxLElh6iO9seKaYIidgTL7ht41xq07IH93AJ_gRXlpIepTZRWurb0Sl7H4ynL_R4W5uYD3TwQuIIUYMOpYcT_uFjrccjzZb9fg4tr9sA5fczCdIwtzWFK_1RwHEVh3STRzW-fSKkY_8dwVg2LB_stRuLBVQm2DtXI6fcMqLvAiqsApLam_cSdhL5EYtTbsAj3z4uVdv3OqCRLF11A6ykSxJhATu2xXqnDv5KOhrmpC2T2r_YoA1FgdWXmkXZHzKTItqqkNeXgNLob0pRSUhmBGzezalv833-6ZBlns-Z72kjH5faYGf6SYIekO-q1pzEqcX6iHQTbtv2MjR8lecOmifleEo41uFa-GHGv4ql_Ccm4gtXCVEJEBCwhDDduK384tpW5yohH0IDqmqWPggs0MtQ=w650-h974-no?authuser=0',

        'https://lh3.googleusercontent.com/r7iENhEyTHTRJBbrHQzh_z01CqNyL8OovvTsF1daYCgKcqLdBxSpkeYBPvMRZFcaBaUtk43grI9_6olo19Hhk6SJuMOTXLh86NTXuzop7F323u9Te7RdsP0ciu2O9ULA2UIQvtKzoVxrJEjO40xXCXjY2Y9AuyKmefV1SDDo9OCGceN6lPbwjhHoCXPjhmOXm6kOt3EDccqfjpUVl_o8COv-d7p_fhlzuRMzzjdHPn1EMhW4mQIbqpQ3AcWPrWofjsxQ8q71ASTx1sU7MRJLKTTPm6GO71Ky0smpEljV1wWeDjyx-Jv2I-Wy1QUsKXMeiLneT_Fz1QbqJYGM_WqKx-PYfjgTnFu2s7bVBLuPHZmLttJ9BYAcFLUFswUhWHo5xF2iUkge68LPolG37wpMVlF0wi4-DENWDY4yFx7_lTO_YTkmhchodcG0uWFaT7hFC0t9BDCcwl9Ed3XCGyfNEVxc6QidlKKBu5rbcc0hKU6y9PmowkbEAmLjRRxrrluGSME_nUQx-Qv1-Uk0IRBcdLljxdkWq0KIxZMpu_O4TkY545LUgmU_4UNB_Oz6UK2FJgiSUGHD5xhTIwKnLhFD3GIrZNnT4xCW17mq4wHjSTjM2AhBTaf_CgCWrt3XqBWwZkJJUNhjssJuV9V2GqlVYHIlvpeXpKtB5ZM1OB9o8i6pnGK__u83aH3GFn-UzOZwjxnRD4WVicXaVaeuNygn6bI=w650-h974-no?authuser=0',

        'https://lh3.googleusercontent.com/ruJfZiIwoNpVj2PFaOenhGEqhoXmVwUDrW9bOr7UasM_AeLJe1eUUpnDxPdbPomCNAqLoJNAuGdS82eRCCTFUj8c0uCfacHJwm-Mxk31QfW9fh4SER7JURkqkM472d2AWcjidBz77DVC4G_gDG0-Inj0D1HZCYrDvq06O14955UfsJBBwIM6WJ42zY20yoY70dS5AxYMfAS-BabK6MeZypij4Aut5LBVDhz8Xo3NnJX1v0s8QphZiRKlW0XodNKNfKiQxUEm9tsK4A4McJpi8bUjrNEzSeoBbGBNPvz6BlXg0nz71jLYe4puumsgpfJJ39ntrlzbXNk0idOH6gVJ95Ij1fYOEih17GFxEukSPgXW3aSXF1igvHCOlEO8pIIp2-slmeuK7WjGSeamWVmS--IKmpBMve0OZ1z41wY-AihXsebIWfltC3f__Oi2fNBZmjUNGH2UTF4hpAoolDtONDlspYrYZPwTqR6c1FZEx_itdyU9XOmQ1MtS_0rt1d8h6NqGR42gy32DQLERYiiSrM_mUBc-8xblDVMK9um-VbGYHNu_JRNfRRi7rkIIhiTYfPtpoQhxUe9uocC5Vnjy7wnZY5593Dp9dMoN-VKwfN2aZk6Z97QTpE39s0evaIop9GKoWCanIvFYmgSD_LMbxZhbzWVHdfXh2RMDe1jcoAc-5TUVz1nFV5FA1RIFwU2-rl3Ol7Id8q044d68szDgFpU=w960-h640-no?authuser=0',

        'https://lh3.googleusercontent.com/DlfdzAhTgXd191R_ZklvbOzHi6-VM324TSv-EwjSUXvESmh005x7-zkeSTC1jRxAe8i7k2CX8yZ95hcDFi_fpmQhgZ7nQLwvE6CdNmJwJWWiOZW6ORXpsxskTZugZ6Wy10BtsHyWY0fOY-oA8Vmr_luOYevwqXIV_kLo4I5UqGn5Kv2GJTtJjXlDttHHrYey9XfqnXlfSwf8-kh2A3q2nDDf2Av1yXnksPBjFCyBI55_kH8DwT6hixm22nd5J6rB8OrmSPBMO98zkSuPZrpGPy3iqSkK4E_u_4E_COD7_DpABSL1kstVCf0XP5TXbwTnXLG26rnSzjE7vtWctnBw2ro_Ev-XD7tOZhZBKV8X5Yi_22PtqbNxWmWYwP-JKmht_iVm_m69byCCU1VB3wOi1njxjjLTcs70sE3IUEVVu3uXvu8k7fFAxFuzroH1yZCG-2TFBxwhsBTvINCVs1PYkhF3x2l48FTRcO0_bPvkbYHuB0iTUdPvRmPCxSxXJTuO28BWRySWj_RNuvTf6osWs9hXcWmbMnRyNhxLhiFkKmCn6H1GFBLAA9MfSWJ0ssGgzxOJutW5U1YjL6niY8iHmEVzLMyXXUNhCybjZkIFTDFIpEeen0uePAPXaDixh7DOUDEBYE8gqEGuIC65rJGfxwwkx1gQs3BSmV7OLmw0YO98_oyMvgwCJjeX1iSWJxJCeEiYNdPZo4xGqI9HoqYiRqc=w960-h640-no?authuser=0',

        'https://lh3.googleusercontent.com/hxeRL7cQdEBpTq851A-r4PlsllbFAo-ln3pSyM6lB5HPDB0Bd2VqYmPwLfT7irF3jsObVf9lqXDlrYXW92PqJyaXXqx6R6wB2uIx_JSu6LTtSdDSYDeVBg8afUf7h6YeQ_KN_75qr4PXhspCsMWPcysdfLRHa_3hk31J9g3Iw8Xb57MtKNfl6iIf7x6WaU6ZUQ5McyZILjvccJJ29qfJ4eys73pZ6kxkrCINs_oqJhD7BNtiKv6pvJUYXsUxjqaufKblxCeOAU7Q6FFfu_lAuZ-RofWZ9b9g9tufKmDFhzTHV8L9sA9tUEI9eSYRbv5m_RD6vALLqleIHplBih7a6SaH-9dz63AJZ9-x62jfNVq0pmCQ7wbT8N_1a6F-wj9-AGD6s9Kf3g1_dZ9SLYXDchfKde8vjQIb6bBwyJfoUiuDW-ycfdhvGXXiNDykX9g_UBrn5Cn9L8dj2jAjkI75TNZrKn09Sg7Q6B43fo6nD9sJEN1vpq6aCWlEg23GkFN8cum3wOGpIkTA6bxM1ppOBfRm4jPSltkmPN-Qbum5x6owEULh-2TFI004YiNoP5nCbSMKGmscNEm49yVAZY9BAMCF7g45zs7PnPVuKycN6hwVUiFEXMo-6la6Uktu-O9BxtPar4UxtM1xA8-OoC8NtxZCgVVUm_8YkzWmn0ISFY1qmpQ6KpqrhhWgB6xBk4hAllNC24BH2zXb-xAP6iFnrqM=w650-h974-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueGreen;