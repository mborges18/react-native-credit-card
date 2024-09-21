import { CreditCardDefault } from "screens/CreditCard/List/model/StyleCard";

export default interface CreditCardListModel {
    ROWID: string,
    idUser: string,
    number: string,
    nameUser: string,
    dateExpire: string,
    cvv: string,
    flag: flagCard,
    status: string,
}

export type flagCard = "Diners" | "Discover" | "Elo" | "Visa" | "Amex" | "MasterCard" | "HipperCard" | "Jcb" | "Undefined";

export type CardTypes = {
    name: flagCard;
    value: string;
  };

  export const flagCards: CardTypes[] = [
    {name: "Diners", value: "Diners"},
    {name: "Discover", value: "Discover"},
    {name: "Elo", value: "Elo"},
    {name: "Visa", value: "Visa"},
    {name: "Amex", value: "American express"},
    {name: "MasterCard", value: "MasterCard"},
    {name: "HipperCard", value: "HipperCard"},
    {name: "Jcb", value: "Jcb"},
    {name: "Undefined", value: "Undefined"},
  ]
