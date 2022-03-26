import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const ZinVlada: FC = () => {
    const paths: string[] = [
        'https://lh3.googleusercontent.com/pw/AM-JKLWyr2aqCJlmbSvuMq-USniuPs-qa70-ttN7Z6X4CPYaBBgpkHqF_x_U_oODJ4J41G-7ojeaOB8Zr-gWOLKeLdwdC8m8_OasX_JnTUnyxb4qWBydvAI9NQRRCFMm2V_p5TqSXRmRltNO5K103_qAMr42=w1118-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUWyyGa7FwU0hgSBk6aSZQsT5se2vUp2M1WLFkVdVqGsJAD4-Z_6su31n7Shd1eOuu9cXlCdNjcpcwA_eYg4AdaHQOB2hauYLatiQ_AQ_F8xTRJrrYduGTGCsYFiA0VvkpEngXnGmabHu_9MTjMM8As=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWa3U4kZrtVE3WMTJQd80-TRLlX1bF2LiX-qC_WO32T8JGWbk1plSMeQ8onmYpIUGnVtQB86CWq32xF9szamauQbKyLXc_7937lqtZcQVEeePW0TMzOvAc55jD-kbPjeL7JwjgZclNeOOeqMtDIq7j2=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUzNsDADQQ4CJhGeQl6Q2xXUfxEtdEaWzmLGykkuOkkyU0zXBQ9sMaA8y-JOu-YhbztoD8IxXK7-W_3s0QVBJUdP2ZTXr4gXPfENFI6bpoju8Z5LO5vhrvhnoPWFpBfoAwMppPnesA_1h4_GtJXoVSN=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVzohnsKisjJOPoOga38K6wplbLl_VCbeb96stEP0V8-yGy5djlJT1tCq8_1iradT5b3pW9GOysvrB6S6lmieEvW_tpd0uCNw0q6OF3-WWrdvxsvo6O6BJq1gpAb1QcXsZqz3y_vV2dCwxcMoyCOzXh=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVgCZ4Bss9uBO6uwHFwWnl6c0_WhCE3us5xwbRF56Cbau6sW9dUb0k3DTzo6K1Tj7prnT0-8PqS1cEMftHdXX15iHnMynJign4PtBBcSZMuNupQNe9aIUYbaqLtskf8k28XZa5lYdicdKAwskK7kL72=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLW5P-3tXy7qY90xyiT41em_suDS3aS-aCHAh50y-uVfngMlYXMOF-YXTgtgy4TKqjOBlX-pyU1RZKLgTjWOB2IBSAJoJPp-PW8AMOJ8n2mMV1_AVU81QGJdWZyKwSEk5A74k4x4RAwa9rpPd3yNbKen=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLV6F8AlfajdwfNW9D9TFr8F4AISSWsk-HVRSl9rz74yIUxrnLQ8BldfJK1wny3kSwP7QRnlF90TybUymCtSnXniVNDDNR6aQT5lVmVVxaA-FWzjogjbMl4eIcyePubhVu6_1JPkiGAMAsN5gpQzggKK=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUpdSKbatUzJaNrvBSgkHjdLXmDr7vq3FqTNmOKrXYvpO8ZmYv-9nLD550gLUk0Tex4UJNsxNWuH8eiF9Doike92a_uqyLJ8NOgts4tYkzI9Cvp9t5ybKK-duExZ9VmxSSbVb7LizV6lFISo_Vk3Vfr=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVGxLCrYUtdmfjLPH8SOlPOEVKdg2w0031WgzvyN-GOSb_ObdtZ7S1gy2oRvmSIhvlf_84-e6vzCk5ojTyW1KhboLxdIeBHRlhEs_38-GgnAEmJMXTKmwc3nrzzUXJzY61D0HKrtHWOsUNzyIXE4xcl=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWLNUVNpJm8BIk2cwwhIzbEWGuhFxDM4OhPhVz54tgOkQUPMWoutiXaOBck7BioGGtZ6GY_VlbjzPWxbT2Y5JM84ZgQIfYI_KhZk98d-y7M6ag4O_z8jmM4fEK5UrlvTaVRJXMCKm4CokVacrRJ7fu9=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXwSENOygI2Ss6GXhghXTIiPcEYFmUl5hQ8EP0d025pZfYP18d0sOamIZ48GhaZ0LhqI9Ggg4iH5N9iAIh3EHycczQDD2xoQnyVMUJ9ptlEHWKqG1I-PAGUVbgig0-PSzrTaSBxeXteGUoc8BT7lkKd=w1377-h979-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXvAQu0wZ8cSliB2xCO5i85On0tog-PH8w99zFlxV3xwTOCu5oehjJS7s2pcAyx10eaOdlh_5inTuAQuucVf_TCnla4XIkn9HWboZq8znVm_I1z7tGBkbc2mCZeYWxNkxcTG5-b8hp6QZFXtRJIUwU1=w1377-h979-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default ZinVlada;