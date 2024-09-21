import { useState } from "react";
import CreditCardListRepository from "screens/CreditCard/List/data/CreditCardListRepository"
import CreditCardListState from "screens/CreditCard/List/screens/CreditCardListState";
import { Success } from "api/ResultRequest";
import CreditCardListModel from "screens/CreditCard/List/model/CreditCardListModel";
import CreditCardDefault, { find } from "screens/CreditCard/List/model/StyleCard";
import LogApp from "utils/LogApp";

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
          var data = (response.data as CreditCardListModel[])
          data?.flatMap((element) => 
              (element.styleCard = find(element.flag) ?? creditCard.Undefined)
          )
          state.listCards = data
      } else {
          state.errorService = true
      }
    } catch(error) {
      state.errorService = true
      LogApp('error '+ error)
    } finally {
      state.isLoading = false
      setState({...state})
  }
}

  const onDeleteData = (item: CreditCardListModel) => {
    state.itemDelete = item
    state.confirmDelete = true
    setState({...state})
    LogApp("onDeleteData ", state.itemDelete)
  }

  const onDeleteDataConfirm = () => {
    state.confirmDelete = false
    setState({...state})
    LogApp("onDeleteDataConfirm ", state.confirmDelete)
  }

  const onDeleteDataCancel = () => {
    state.itemDelete = null
    state.confirmDelete = false
    setState({...state})
    LogApp("onDeleteDataCancel ", state.itemDelete)
  }

  const onDataCreated = (data: Object) => {
    if(data != undefined &&  data != null) {
      var model = data as CreditCardListModel
      (model.styleCard = find(model.flag) ?? creditCard.Undefined)
      state.listCards.unshift(model)
      LogApp("onDataCreated ", model)
      setState({...state})
    }
  }

  return {
    state,
    onGetData,
    onDeleteData,
    onDeleteDataConfirm,
    onDeleteDataCancel,
    onDataCreated
  }
}