import { useEffect, useState } from "react";
import CreditCardListRepository from "screens/CreditCard/List/data/CreditCardListRepository"
import CreditCardListState from "screens/CreditCard/List/screens/CreditCardListState";
import { Success } from "api/ResultRequest";
import CreditCardListModel from "screens/CreditCard/List/model/CreditCardListModel";
import CreditCardDefault, { find } from "screens/CreditCard/List/model/StyleCard";
import LogApp from "utils/LogApp";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationUrl } from "navigation/NavigationUrl";

export default function CreditCardListViewModel() {
  const respository = CreditCardListRepository()
  const creditCard = CreditCardDefault()
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute<RouteProp<ParamListBase>>();

  const [state, setState] = useState<CreditCardListState>({
    listCards: [],
    itemDelete: null,
    isLoading: false,
    errorService: false,
    confirmDelete: false,
    successDeleteService: false,
  });

  useEffect(() => {
    LogApp("onDataCreated")
    onDataCreated(route.params as CreditCardListModel) 
  }, [route.params])
  
  useEffect(() => {
    LogApp("onGetData")
    onGetData()
  }, [])

  const onGetData = async () => {
    try {
      state.isLoading = true
      setState({...state})

      var response = await respository.getData()

      if(response instanceof Success) {
          var data = (response.data as CreditCardListModel[])
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

  const onDataCreated = (data: CreditCardListModel) => {
    if(data != undefined &&  data != null) {
      //(model.styleCard = find(model.flag) ?? creditCard.Undefined)
      state.listCards.unshift(data)
      LogApp("onDataCreated ", data)
      setState({...state})
    }
  }

  const gotoForm = (item?: CreditCardListModel) => {
    navigation.navigate(NavigationUrl.CreditCardFormScreen, item);
  }

  return {
    state,
    onGetData,
    onDeleteData,
    onDeleteDataConfirm,
    onDeleteDataCancel,
    onDataCreated,
    gotoForm,
  }
}