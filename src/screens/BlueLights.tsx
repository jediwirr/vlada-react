import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const BlueLights: FC = () => {
    const paths: string[] = [
        'https://lh3.googleusercontent.com/pw/AM-JKLU7QmQbBl-jHGBMT4UZ_MIqdJ7-xKVxBZV27Ry5d2VzOnVSKsiGs1QGqXacfKvwWMtkDdCAaXfC6xlrojJEJQZoDU4ABPaLnCfKDSSLYVOKpCuRCm8mOnRk6q3TA_AAUmL-FINDeL4MQPM7rkrL1B62=w1120-h980-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUpLYcHX0HFfOIt7gusC4b-T5Iy0SN8I5ZTRYX0KguVwMGd-Z81LD_-zSHnkDPtNdUz94C4M8niHsxBBUAldZAt1Hv7_sryWbsYqTQKVTgV6BQZ23mzDHFxuFkyFg5hiQ8hQcLjdoMlJyEKYA9SR7L4=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVOPyYKfd1mJMCyyIPL8803yrsTeuPYgo9oVqlmuN9i7rqZp2WqjkKfmj2Jtq0RS14VOrh3L9Y-o_Y3P-Y87zs6uhqWH8OW6M2rqR3jvymq5BOmF2a7TeVEBKJrHbY5290WTvKcGLwFHp2ZI9NcyM3K=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVGLbL3qeFdc04OQHg6PN05U8Bz6RGBfI5f_Yg336ZCl0FC6DaoBdSWW_hYWmUiop6vVSzv7RCqOnvu7yNu9STWHk0n5xmk3lltR9XquBJjT-JGMw0D8rDyFaYvK6XjK7SbycMiITVfUAzYf5gWLBxx=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUppq8q1hzU4O6_nWku2x_Ti_XeW5DGuuACQ8a23hz18FVvHuwKmfIW8f7uuyOiIKmi_tXjHkkBRcVfQ1kw81QADlErnMdH8NBZgBQN2607dCEKHbw8EVQUfVgVDbLfeNeOmxJR7bl7rwppV00sryeG=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUjB0fmJRpd2x0teNbLIMrA3_AjI0pzMRPxwQnkyabpEVWiep3fvjEgTDYIqrkBmO6kdcYFt7yvXQ6wQ4HvRc9MjqwTXzzk28KjOIM1kdI8aJIVTPNO1UY77wtIEYuHuz8ibfqehObRdouuyeM01Kyb=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWLz1yY_mTX9EXf45K_BYIOxph6gVh_3Ia9rntJ2vVbMIe70aida3AZFkzarCuDcRFhH_J52oT14y1JDCzgZWr3rXpCEWk-VN7yZc6t8Q-sPuiuXYqI7ABbxbKWDgfjHWs5bGeHSJVPOph1Y8LVO5Of=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLX-KssL7ja1kP5-TWi9Hc2DyeuocyyS7qXdLvmW6RJUzvKZstgjBgKH8TnfgnFk0zGEef1TDLn1M8NmF2v5maMRPBeXn_pPBbYkO3ixhsXC1KuOfuweHRfrB6k8h99nA8xUWvl41iPLql4zMIrnWo_T=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLX0Y0y4wvrRHDXm10G4rKtBdY9UH1FW6vtMTKdENfX7jJO2ftuUGSNKDq2azQpa5JYdn_csa9PcOmApIRfPQeDzQTy7G0e0FQ1rlXSNIenuUEVWny6gpRsvf73xbzAnTIh9A1h0Bi3lHKr9yapJWaPA=w1920-h640-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWfEAz8_xvpqFIqILbvOD0hkjMg2CeB3kpDyow5KIUHDywA1tkFHUzE8m0V1usHagDetpDtZbJku0AMEuNbdoaRW-I7oqlJ7rY9itHiAEyVRo83F--7nutT7Yt04twaR5Uzmf3awjoXbBGvCukuRiY3=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWWutcHSrgP7BkWaCU4OkFeZHEvBZqbB6uz--38RpvGOuNGU3OEd3QBqE9a7E8pjg7bb_XxIChZAq-xpOZSOjulNW5IC1KtxPKhgs5xz_Mqp436wBSjHZ6Fv2QO25e5iKr0f6zUDCV-hsJHHjq9Wo3_=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUluf6zY67SmGsrOUTPGsxlFdV2WYFPbKbjlLJkZyVHItoHVJiGytKUe2bPId3E9Qp5PEQBmWJBze0hub83640-jSPw4z95uVm6iSSiL8Y_xxi7XO79j4DhxV4vpnqcoo_tydfjxHW-6_bLgHN8qEZj=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWWHrNxReZWm-pfoefBLXnrca1iL3uwW56zmIBH3fck-2rjEO01u6wq4thUQw-zk5AsXBhVyvj-4_fNRlhHqXKpHqhnFZSUUeeZpC1L21aO1HWkB5mASlDkp8W0TTN9P77y0Oi7fDvb5iwyz4TUS-HA=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVYKoCS5JouihkFCgdUeosydHQF9iyYIxg1xnYkQRm7DmbDnLBHy0vnrmzipp7iOg8bRTFVJs37pf3xI2r1YvIEgmRQRjwmXM3Kk3UEnKq0rZMGdH20_v7onvGNgQ8y6_9Gg__3n7tiFz5LhbEZjz8R=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUvCGoi8RBtkwkWJKfBXhIpyab0w-F5YUXzGmqddE5pjSeq6-VKGLjDrMY8OZYrhZzDdyTAmkRiZlaN74AUY4lATxX8FSN4Aa7oB0PCeESCoPc6MioTknnlPDfyjnhEhIrwh7QO-rCyvGgivUxMMgEA=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVXLUt6Q4wISaT3nOGdZxaA9p7XODUxKiWmibXAW5j1Ts3w4ot6UIRayYOGHDY6Q7c-Wk_WmOm5IXERjl7QU-5qcO9EIPL6jYaSjU4vSXNtITGy3lxC15KwvcKVp7MiGnHppOIn_0ybQEsSLNaGbfxj=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXz92V2KyfwuSCiVm5IcSJUEC37rpSC8DaqqgaKx_G7cSceH2M6zOCDIsO4uQ90Fpkd3OQfWzDU8GldRSu02HNK94Y_kghC24g19YjUaTPZXDFcYHnhn9lfN7jzW9aNMdBsPlYw803zeVfQyxb_Mcw6=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVyMMXhn28eO17A8-aLw1Ig5ztzVxfOxkStfGMucfbP44kZ9VYo8o_ThxOHZDPVyoJJB88vaWSV8FEz8moDlBvwEECppkcp4im7e_XpUDcyvyLNQNL2KVkPgXpamDu7u1H1oXO2e3KumWzyyFSBV2Np=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXb0YJvpm7OGUCy-HTw_YlQYHMnzCIoeYNSSZevw94wfGoOaDj4ADI-Rt2xFNlVYTj2K7fjiEV1PMvV1oA06L8FaZOxxdP8hjFAqZ5RN2twRFK_YnvXwrZfngi3mgqymBvGrxi6z02C1EZd-y4Yo7UH=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUIVmA-Oi0WJn5Swrp-Clp5_uNaFMuIP9R4kx2PrRkLQg_5tyl103x63FoxkhpShLcj3mjolw6qJcucwT8Q4sSagjiEs-JHXsdWwPWDdYVNN3R1ZYd7UBpPaT5tzBFOoidVB_ZYQYjHmR8oAnp2TVbd=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWTD3YR6DGgKxiErEGqZPm4CXbnRSEfrFv3tEsEQ13PgfZcd4aQUrI339r9U8ql3G_1JjJNIgHSiY1dM8sYLABRumZMkclNNDDZslLa5BIy-CU_36ewelb6e2kMu4SQljz154QOhkm2LTN9W_zxyD3_=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLUfeFK9yFXteLdR0dVNTLRgyYraO-bDBG_haXFWmWBcYgP_x9nB9VjIJSM74Mh1mNXmGMH_Pr1qHQd9yzPC3ic-BOmS5kKhov_jSGlVXr-MPJ6X_nBFM4KXGJWsWdZJ6El9gKR8ZKueYw0DC5xUcHQE=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLXZxX_ph2w8b64E_0ffbdjEt8iK_P1J6BOjfxxTI_CbHF7LAWJex0pY1IhRSOXzZho6yOrWa60aNR4Q8sJ51DWByC-H8mF8aGiQrHU1pViKmlvo_eY4yiCdlcYo76f-YCKjCGiI0x3V5IIgxErRo73a=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWxuXHYAoOqRR514s2UJdYL-fxQI1K6RhqOeOaqB7JebEG2GmpZh1c9Kand3vL7w2Vfv4sA9QE9EwuGVVTe4ewkwsPKS-rbUcsLo2ZaUJJH_zFY1Zyo2KiYu4oiFJ-pCD9fJwo_9rJjiAoiPlpvJHvm=w1920-h962-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWMy7JaoREzfGBSqs2GhWUdTub4FJ_quXvdDXD_EyYIKmeom4slhZTCeXmYHNxNIn9b1gSQEnGKLXur2uf0qWLNuB4UPlhRxM0kxjdWbauEZepxMuM4a3j3Jc5Rp3YnmooxFnNvQbNHudpjaL5CTjFX=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWpAnkR7nxoOOUECaG1G_lEtjoKS7xyA6hkCvcqqluIgmdYuRDor7tJpco3M7pXmwXDuOkEMjuCnAmFzTnKTzCrH1uyPGcQ22GDPd0DmiaZxofWm8OumJWmkjGC-ImVDt7wHiJwWsiShXYWB1csXtmM=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLW6P-gVO9kIH7Lw8MlKJfP6lPXgiO-2VyAsvI30Tj1Hqeb5_Ftgb7AYltuU2XOHm3UsLxi1nP8TcHM65RuduuuBKVYQQ_4Z9uc9plcxK0MU55I395oXhqz7lGEeuPv-yURt4I4uPjsXcp6sWvo1sVFs=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLVqKFUU1uooCS9VznGzQGfrE5dN6itOBAhpSjQtSJgL58tqxOiJNryaCny1YGJ2NG5_4mNftkrcNIWPhS5ODmbY3dzdzY6a0iDIlNgbA8J_aVZPMm2-B17mAZKur3NVGURiUG7B_wgz_m4s9rBnFYh0=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLWNe_hcV2PbG99JIuAt8owxnvIBXmOFfJidT2qfCVwy3MIMCQofecXDpcfpBRcSi5QHlD566pzIg7Jhg9W9KW8oeGZZzKgNrB-25U6ku9awR_Lwz4YGr7NkDck-kvdkGJJN2zG5a8KLqzzHxwm6Yjx2=w1920-h961-no?authuser=0',

        'https://lh3.googleusercontent.com/pw/AM-JKLX9a5pLjcBEo00KRjVUfxyrCEuoYE_mfipxNPCHaKbCEkIvnka4OZefPsmz75r_LvMRnRAp10ACuw-I_UlnAi27ZcYhVDU85tiJWGh-TYKL6trt0RmI5s5vFxJ6qAACtgUAocW8vVz1YDMn_l35wqGn=w1920-h961-no?authuser=0'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueLights;