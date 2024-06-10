import { useState } from "react";
import CreditCardListRepository from "./data/CreditCardListRepository"
import CreditCardListState from "./CreditCardListState";
import { Success } from "../../api/ResultRequest";
import CreditCardListModel from "./model/CreditCardListModel";
import CreditCardDefault from "./model/StyleCard";

export default function CreditCardListViewModel() {
    const respository = CreditCardListRepository()



    const [state, setState] = useState<CreditCardListState>({
        listCards: [],
        isLoading: false,
        errorService: false,
        successService: false,
    });

    const onGetData = async () => {

        try {

            state.isLoading = true
            setState({...state})

            // var response = await respository.getData()

            // if(response instanceof Success) {
            //     state.successService = true
            //     state.listCards = list()
            // } else {
            //     state.errorService = true
            // }
       
            state.successService = true
            state.listCards = list()
    
        } catch(error) {
            state.errorService = true
           console.log('erro  ', error)
        } finally {
            state.isLoading = false
            setState({...state})
        }
    }

    const list = () => {
       
        var model1 : CreditCardListModel = {
            ROWID: "1",
            idUser: "1",
            number: "8521 8532 8452 9852",
            nameUser: "MARCIO BORGES SILVA",
            dateExpire: "10/2025",
            cvv: "325",
            flag: "Elo",
            status: "ENABLED",
            styleCard: CreditCardDefault().Elo
        }
        var model2 : CreditCardListModel = {
            ROWID: "2",
            idUser: "2",
            number: "8521 8532 8452 9852",
            nameUser: "MARCIO BORGES SILVA",
            dateExpire: "10/2025",
            cvv: "325",
            flag: "HiperCard",
            status: "ENABLED",
            styleCard: CreditCardDefault().HipperCard
        }
        var model3 : CreditCardListModel = {
            ROWID: "3",
            idUser: "3",
            number: "8521 8532 8452 9852",
            nameUser: "MARCIO BORGES SILVA",
            dateExpire: "10/2025",
            cvv: "325",
            flag: "Visa",
            status: "ENABLED",
            styleCard: CreditCardDefault().Visa
        }
        var model4 : CreditCardListModel = {
            ROWID: "4",
            idUser: "4",
            number: "8521 8532 8452 9852",
            nameUser: "MARCIO BORGES SILVA",
            dateExpire: "10/2025",
            cvv: "325",
            flag: "MasterCard",
            status: "ENABLED",
            styleCard: CreditCardDefault().MasterCard
        }
        var model5 : CreditCardListModel = {
            ROWID: "5",
            idUser: "5",
            number: "8521 8532 8452 9852",
            nameUser: "MARCIO BORGES SILVA",
            dateExpire: "10/2025",
            cvv: "325",
            flag: "JCB",
            status: "ENABLED",
            styleCard: CreditCardDefault().Jcb
        }
        return [model1, model2, model3, model4, model5]
    }

    return {
        onGetData,
        state
    }
}