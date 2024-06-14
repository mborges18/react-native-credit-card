import { useState } from "react";
import CreditCardListRepository from "screens/creditcard/list/data/CreditCardListRepository"
import CreditCardListState from "screens/creditcard/list/CreditCardListState";
import { Success } from "api/ResultRequest";
import CreditCardListModel from "screens/creditcard/list/model/CreditCardListModel";
import CreditCardDefault from "screens/creditcard/list/model/StyleCard";

export default function CreditCardListViewModel() {
    const respository = CreditCardListRepository()
    const creditCard = CreditCardDefault()

    const [state, setState] = useState<CreditCardListState>({
        listCards: [],
        itemDelete: null,
        isLoading: false,
        errorService: false,
        confirmDelete: false,
        successDeleteService: false,
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
            styleCard: creditCard.Elo
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
            styleCard: creditCard.HipperCard
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
            styleCard: creditCard.Visa
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
            styleCard: creditCard.MasterCard
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
            styleCard: creditCard.Jcb
        }
        return [model1, model2, model3, model4, model5]
    }

    const onDeleteData = (item: CreditCardListModel) => {
        state.itemDelete = item
        state.confirmDelete = true
        setState({...state})
        console.log("onDeleteData")
    }

    const onDeleteDataConfirm = () => {
        state.confirmDelete = false
        setState({...state})
        console.log("onDeleteDataConfirm "+ state.itemDelete)
    }

    const onDeleteDataCancel = () => {
        state.itemDelete = null
        state.confirmDelete = false
        setState({...state})
        console.log("onDeleteDataCancel "+ state.itemDelete)
    }

    return {
        onGetData,
        state,
        onDeleteData,
        onDeleteDataConfirm,
        onDeleteDataCancel,
    }
}