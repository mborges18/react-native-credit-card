import StyleCard, { CreditCardDefault } from "screens/creditcard/list/model/StyleCard";

export default function Validation() {

  const isValidEmail = (email: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("isValidEmail => "+emailRegex.test(email.toLowerCase()))
    return emailRegex.test(email.toLowerCase());
  }

  const isValidDay = (day: number, month: number, year: number) => {
    var days = getDaysInMonth(month-1, year);
    var res = days.find(d => d==day)
    console.log("isValidDay => "+(res==day))
    return res==day;
  }

  const isValidDatePermission = (day: number, month: number, year: number) => {
    const dateC = new Date()
    const dataP = new Date(year + 14, month-1, day)
    console.log("isValidDatePermission => "+(dataP <= dateC))
    return dataP <= dateC
  }

  const isValidDateBefore = (day: number, month: number, year: number) => {
    const dateC = new Date()
    const dataP = new Date(year, month-1, day)
    console.log("isValidDateBefore => "+(dataP < dateC))
    return dataP < dateC
  }

  const getDaysInMonth = (month: number, year: number) => {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    console.log("getDaysInMonth => "+days)
    return days;
  }

  const isValidPhoneCell = (phone: string) => {
    var p = phone.split(" ")[1]
    return p.startsWith("9");
  }

  const validateCCNum = (number: string) => {
  const ccCheckRegExp = new RegExp(/[^\d\s-]/);
  let isValid = !ccCheckRegExp.test(number);
  const typeCreditCard = StyleCard()

  if (isValid) {
    const cardNumbersOnly = number.replace(/[\s-]/g, '');
    const cardNumberLength = cardNumbersOnly.length;

    for (const item of Object.values(typeCreditCard)) {
      let lengthIsValid = false;
      let prefixIsValid = false;
      let prefixRegExp: RegExp;

      switch (item) {
        case typeCreditCard.MasterCard:
          lengthIsValid = cardNumberLength === 16;
          prefixRegExp = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
          break;

        case typeCreditCard.Visa:
          lengthIsValid = cardNumberLength === 16;
          prefixRegExp = /^4[0-9]{15}?/;
          break;

        case typeCreditCard.Amex:
          lengthIsValid = cardNumberLength === 15;
          prefixRegExp = /^3[47][0-9]{13}$/;
          break;

        case typeCreditCard.Discover:
          lengthIsValid = cardNumberLength === 15 || cardNumberLength === 16;
          prefixRegExp = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
          break;

        case typeCreditCard.Diners:
          lengthIsValid = cardNumberLength === 14;
          prefixRegExp = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
          break;

        case typeCreditCard.Jcb:
          lengthIsValid = cardNumberLength === 15 || cardNumberLength === 16;
          prefixRegExp = /^35[0-9]{14}$/;
          break;

        case typeCreditCard.HipperCard:
          lengthIsValid = cardNumberLength === 16;
          prefixRegExp = /^(606282\d{10}(\d{3})?)|(3841\d{12})|(637\d{13})$/;
          break;

        case typeCreditCard.Elo:
          lengthIsValid = cardNumberLength === 16;
          prefixRegExp = /^(4011|431274|438935|451416|457393|4576|457631|457632|504175|627780|636297|636368|636369|(6503[1-3])|(6500(3[5-9]|4[0-9]|5[0-1]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(650(48[5-9]|49[0-9]|50[0-9]|51[1-9]|52[0-9]|53[0-7]))|(6505(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(6507(2[0-7]))|(650(90[1-9]|91[0-9]|920))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[1-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8]))|(506(699|77[0-8]|7[1-6][0-9))|(509([0-9][0-9][0-9])))$/;
          break;

        default:
          prefixRegExp = /^$/;
      }

      prefixIsValid = prefixRegExp.test(cardNumbersOnly);
      isValid = prefixIsValid && lengthIsValid;

      // Check if we found a correct one
      if (isValid) {
        return item;
      }
    }
  }

  if (!isValid) {
    return typeCreditCard.Undefined;
  }

  return typeCreditCard.Undefined;
}

  return {
    isValidEmail,
    isValidDay,
    isValidDatePermission,
    isValidDateBefore,
    isValidPhoneCell,
    validateCCNum
  }
}