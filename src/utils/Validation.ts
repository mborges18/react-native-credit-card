
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

  return {
    isValidEmail,
    isValidDay,
    isValidDatePermission,
    isValidDateBefore,
    isValidPhoneCell
  }
}