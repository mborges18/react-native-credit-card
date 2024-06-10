import { ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigationUrl } from "./NavigationUrl"

export type NavigationProps = {
    navigator: StackNavigationProp<ParamListBase, NavigationUrl>
  }