export interface contactItem {
    altName: string;
    value: string;
    link: {
        url: string;
        outside?: boolean;
    };
    image: {
        default: string;
        alternative: string;
    };
}

const contactInfo: contactItem[] = [
    {
        altName: 'Lokalizacja',
        value: 'Wołczyńska 2, 46-030 Stare Budkowice',
        link: {
            url: 'https://goo.gl/maps/SggQTNRHx5GCTFTr8',
            outside: true,
        },
        image: {
            default: '/images/localization.svg',
            alternative: '/images/localization-primary.svg',
        },
    },
    {
        altName: 'Numer telefonu',
        value: '+48 774 210 498',
        link: {
            url: 'tel:+48774210498',
        },
        image: {
            default: '/images/phone.svg',
            alternative: '/images/phone-primary.svg',
        },
    },
    {
        altName: 'Dodatkowy numer telefonu',
        value: '781 058 594',
        link: {
            url: 'tel:+781058594',
        },
        image: {
            default: '/images/phone.svg',
            alternative: '/images/phone-primary.svg',
        },
    },
    {
        altName: 'Adres email:',
        value: 'karczmanagorce@gmail.com',
        link: {
            url: 'mailto:karczmanagorce@gmail.com',
        },
        image: {
            default: '/images/email.svg',
            alternative: '/images/email-primary.svg',
        },
    },
    {
        altName: 'Fanpage',
        value: 'facebook',
        link: {
            url: 'https://www.facebook.com/Karczma-na-G%C3%B3rce-255581354538501/',
            outside: true,
        },
        image: {
            default: '/images/facebook.svg',
            alternative: '/images/facebook-primary.svg',
        },
    },
];

export default contactInfo 