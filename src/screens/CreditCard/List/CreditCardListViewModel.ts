import { useState } from "react";
import CreditCardListRepository from "screens/creditcard/list/data/CreditCardListRepository"
import CreditCardListState from "screens/creditcard/list/CreditCardListState";
import { Success } from "api/ResultRequest";
import CreditCardListModel from "screens/creditcard/list/model/CreditCardListModel";
import CreditCardDefault, { find } from "screens/creditcard/list/model/StyleCard";

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

            var response = await respository.getData()

            if(response instanceof Success) {
                var data = (response.data as Array<CreditCardListModel>)
                data.flatMap((element) => 
                    (element.styleCard = find(element.flag) ?? creditCard.Undefined)
                )
                state.listCards = data
            } else {
                state.errorService = true
            }
        } catch(error) {
            state.errorService = true
           console.log('error ', error)
        } finally {
            state.isLoading = false
            setState({...state})
        }
    }

    const onDeleteData = (item: string) => {
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

    const onDataCreated = (data: Object) => {
        console.log("onDataCreated "+ data)
        if(data!=null) {
            var model = data as CreditCardListModel
            (model.styleCard = find(model.flag) ?? creditCard.Undefined)
            state.listCards.unshift(model)
            console.log("onDataCreated "+ (model))
            setState({...state})
        }
    }

    return {
        onGetData,
        state,
        onDeleteData,
        onDeleteDataConfirm,
        onDeleteDataCancel,
        onDataCreated
    }
}