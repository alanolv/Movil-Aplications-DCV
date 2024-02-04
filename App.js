import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font'
import { SafeAreaView , StyleSheet, Text, View , Image} from 'react-native';

const statusBarHeight = StatusBar.currentHeight || 0;

const App = () => {
  
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar style="light" />
      <View style={style.header}>
        <View style={style.hImage}>
          <Image
          style={style.img} 
          source={require('./assets/Photo.jpeg')}
          />
        </View>
        <View style={style.hName}>
          <Text style={style.txtHeader}>Alan Olvera Cristino</Text>
          <Text style={[style.txtHeader,{color: "#9c88ff"}]}>INGENIERO DE SOFTWARE</Text>
        </View>
      </View>
      <View style={style.bd}>
        <View style={style.bdLeft}><Text >Left</Text></View>
        <View style={style.bdRight}><Text>right</Text></View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: statusBarHeight
  },
  txtHeader:{
    color:'#f5f6fa',
    fontSize: 18,
    marginTop:10,
  },
  header: {
    flexDirection:'row',
    flex: 3,
    backgroundColor:'black'
    
  },
  hImage:{
    width:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
  hName:{
    width:'50%',
    justifyContent:'center',
    alignItems:'start'
  },
  img:{
    width:150,
    height:150,
    borderRadius: 100
  },
  bd:{
    flex:8,
    flexDirection:'row',
    backgroundColor:'#dcdde1',
  },
  bdLeft:{
    padding:15,
    width:'45%',
    backgroundColor:'#dcdde1'

  },
  bdRight:{
    padding:15,
    width:'55%',
    backgroundColor:'#f5f6fa'
  }
  
});

export default App;