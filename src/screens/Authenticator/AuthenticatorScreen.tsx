import React from 'react';
import PagerView from 'react-native-pager-view';
import {View, Text, TouchableOpacity } from 'react-native';


const AuthenticatorScreen = () => {
    return <ViewPagerComponent />;
}

const TabTopComponent = () => {
    return (
      <View style={{backgroundColor: 'blue', height: 70, borderRadius: 8, marginTop:32, marginBottom:16, marginEnd: 16, marginStart:16, position: 'relative'}}>
  
        <View style={{backgroundColor: 'white', height: 60, width: '50%', position: 'absolute', top: 5, left: 5, borderRadius: 8,}} />
  
        <View style={{flexDirection: 'row', height: 70, }}>
        <TouchableOpacity style={{flex: 1, justifyContent: "center",}} onPress={()=>{}}>
          <Text style={{ textAlign: 'center'}}>ACESSAR</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={{flex: 1, justifyContent: "center",}} onPress={()=>{}}>
          <Text style={{textAlign: 'center'}}>CADASTRAR</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  function ViewPagerComponent() {
    return (
      <>
      <TabTopComponent/>
      <View style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
      </View>
      </>
    );
  }

  export default AuthenticatorScreen;