import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const ZinVlada = () => {
    const paths = [
        'https://lh3.googleusercontent.com/pw/AM-JKLWyr2aqCJlmbSvuMq-USniuPs-qa70-ttN7Z6X4CPYaBBgpkHqF_x_U_oODJ4J41G-7ojeaOB8Zr-gWOLKeLdwdC8m8_OasX_JnTUnyxb4qWBydvAI9NQRRCFMm2V_p5TqSXRmRltNO5K103_qAMr42=w1118-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUWyyGa7FwU0hgSBk6aSZQsT5se2vUp2M1WLFkVdVqGsJAD4-Z_6su31n7Shd1eOuu9cXlCdNjcpcwA_eYg4AdaHQOB2hauYLatiQ_AQ_F8xTRJrrYduGTGCsYFiA0VvkpEngXnGmabHu_9MTjMM8As=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWa3U4kZrtVE3WMTJQd80-TRLlX1bF2LiX-qC_WO32T8JGWbk1plSMeQ8onmYpIUGnVtQB86CWq32xF9szamauQbKyLXc_7937lqtZcQVEeePW0TMzOvAc55jD-kbPjeL7JwjgZclNeOOeqMtDIq7j2=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUced9zGtceS6RBM9feX6fYZd6UGadddI2ugfczCfgdh6sPM7UnZyQ5PXkXy4mP15hIDW4gzRO6udmpgKyaWOH9rTdS_BEqx-n8u7-nsIlfbl1_jdd0JHlhWF7UuPCF0u1rSvcnjV0G7R8obVXwenhJ=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWSESZnyy0zHVscfO202-DKR_7JORzd8HUIF3dxgZ61b2zXZ6D8MEjwLaL7RWpwtr3eHZ1K0AazxsgNgWdFlbkIUM4L04_IrpIXaYzrC_fpxqQQZkZDpYhgbQ0EDzz08rl7lG0vinG2bdHHukDyBwFu=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLU_U0Q6JH-_6fGwgsJ0s-oPemRuqzo73cjKKEvmyYDRLIBWWqIoG_OKPGytvmS0rQdu44RmEsBAqUWe_u-r0Nve5hQlIr1m1ejebGt-7mxy0mqQaLUu_J3scLjtMXiqwr7X9JoTZNRqOwrId-35IQ0I=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVTXdtdwX5ut7-kgqX6zayx1h6xTEBt5y14b6CRsGz67UTeSrQr8XVbE6hYrOkk7ZSyfiBTkcv0Kb_3xaS7qXRwa4cqW9mz4Q5KaDaBknAKT5UENOqf3Rh1Fwdc5xJxa0WFphJMtTs6UY1vkVvR0NtS=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXPRJXvxa7syrHngD0SKg4cSO4hlq9Pce5I-VsZTR388J-hcI4Ml_Zs7XgnA3ZiSmcm70bkfiUpNnMQDhZQ0nTl-SOm_uWdsW8nLHlCt6K7OfZqBDhslC0Kmvep6WtEhIJN_egbvAKclTbBsNmbQv03=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLV1YN1vGR8vzmJjNq4-JBt2uGaPVMDNmNwRUb1TwZjuePeM9GLrdgM_fEE1DlQLpxDyHpwAiTBC6shio3VRpUbYORI9Php68Ar1p2kTLfTTYfbp5Q1Q6YaTr2T-l0bPmTVBzkM08WnaRX5ei3bXkerL=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVppxtfNsoGkYkMgu2xq1kAvmjMxkMr7-v3dOKm3EVSW-01dUCDz7zmLmTxxTPf8M4LvQh_lqqGj_WrgUWP5affkFuzp-17oskDdneXZSdtDLUyLfXyADMZvlCVrzxzSlUIrQAmSGETVScbjTvQPUqb=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLV9ESOHCrmzeC2685o46olIEWnIRe2fR3djsII1KWFpWIK-6vReR07sPK3NCIWWIHM1NJ-4cpDDKAGkpStCQvYZIzR3hwUgZpjtJaLTkLRaXM59xcYJDr9KHDQCVO2L94DqMSsZImDPp8_kQk4YYWBd=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWwYuXOslRg-f7dk9waRy22u_lzQ8U1fMC86ffZIA_chjNwjMRrQGf5eh_ecZsyKP6OydvF_QNq9fa9HKZM-AdiUjr8sZLXElEkSCvxrE5GZQGjOBd0iAqk--anLC5ILIWscRSRfGifA2r_RxTyuygs=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXTfyjkx-PzImLgI4LnGnmDM_TpSjCfaBIwaSqWHCQ3Qt4xKWZ11ZPJHTGXXq9U57NrN6lKhZkKwwZgSreIlhqzLH-M5LqzfIa3R4UjQemQldYqjFY2gNzHBR4J4ar0so-TyPSv9RUxVXAhgO5R4yhZ=w1377-h979-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default ZinVlada;