
import IconElo from "assets/images/ic_elo.svg";
import IconHiper from "assets/images/ic_hipercard.svg";
import IconVisa from "assets/images/ic_visa.svg";
import IconAmex from "assets/images/ic_american_express.svg";
import IconDiners from "assets/images/ic_diners.svg";
import IconDiscover from "assets/images/ic_discover.svg";
import IconJcb from "assets/images/ic_jcb.svg";
import IconMaster from "assets/images/ic_mastercard.svg";
import IconUndefined from "assets/images/ic_credit_card.svg";

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

export type CreditCardDefault = {
    name: string,
    icon: JSX.Element
    colorLight: string,
    colorDark: string,
}

const height = 50
const width = 70

const Visa: CreditCardDefault = { name: 'Visa', icon: <IconVisa fill='#000' width={width} height={height} />, colorLight: '#545454', colorDark: '#D2D2D2' }
const Amex: CreditCardDefault= { name: 'American Express', icon: <IconAmex fill='#000' width={width} height={height} />, colorLight: '#01398D', colorDark: '#011738' }
const Diners: CreditCardDefault = { name: 'Diners', icon: <IconDiners fill='#000' width={width} height={height} />, colorLight: '#44A124', colorDark: '#2E6E03' }
const MasterCard: CreditCardDefault = { name: 'MasterCard', icon: <IconMaster fill='#000' width={width} height={height} />, colorLight: '#282828', colorDark: '#000000' }
const HipperCard: CreditCardDefault = { name: 'HiperCard', icon: <IconHiper fill='#000' width={width} height={height} />, colorLight: '#AD2020', colorDark: '#3F0202' }
const Discover: CreditCardDefault = { name: 'Discover', icon: <IconDiscover fill='#000' width={width} height={height} />, colorLight: '#EA8524', colorDark: '#8D4701' }
const Elo: CreditCardDefault = { name: 'Elo', icon: <IconElo fill='#000' width={width} height={height} />, colorLight: '#01398D', colorDark: '#011738' }
const Jcb: CreditCardDefault = { name: 'Jcb', icon: <IconJcb fill='#000' width={width} height={height} />, colorLight: '#01398D', colorDark: '#011738' }
const Undefined: CreditCardDefault = { name: 'Credit Card', icon: <IconUndefined fill='#000' width={width} height={height} />, colorLight: '#D0D0D0', colorDark: '#252424' }

export default StyleCard
