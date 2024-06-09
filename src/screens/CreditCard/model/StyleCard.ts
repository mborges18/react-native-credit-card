
export const StyleCard = () => {

    return {
        Diners,
        Discover,
        Elo,
        Visa,
        Amex,
        MasterCard,
        HipperCard,
        Jcb,
        Undefined
    }
}

export type CraditCardDefault = {
    name: string,
    icon: string,
    colorLight: string,
    colorDark: string,
}

const Visa: CraditCardDefault = { name: 'Visa', icon: '', colorLight: '#D2D2D2', colorDark: '#545454' }
const Amex: CraditCardDefault= { name: 'American Express', icon: '', colorLight: '#01398D', colorDark: '#011738' }
const Diners: CraditCardDefault = { name: 'Diners', icon: '', colorLight: '#44A124', colorDark: '#2E6E03' }
const MasterCard: CraditCardDefault = { name: 'MasterCard', icon: '', colorLight: '#282828', colorDark: '#000000' }
const HipperCard: CraditCardDefault = { name: 'HiperCard', icon: '', colorLight: '#AD2020', colorDark: '#3F0202' }
const Discover: CraditCardDefault = { name: 'Discover', icon: '', colorLight: '#EA8524', colorDark: '#8D4701' }
const Elo: CraditCardDefault = { name: 'Elo', icon: '', colorLight: '#01398D', colorDark: '#011738' }
const Jcb: CraditCardDefault = { name: 'Jcb', icon: '', colorLight: '#01398D', colorDark: '#011738' }
const Undefined: CraditCardDefault = { name: 'Credit Card', icon: '', colorLight: '#D0D0D0', colorDark: '#252424' }

export default StyleCard
