import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , StyleSheet, Text, View , Image} from 'react-native';

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
          <Text style={[style.txtHeader,{color: "#a8a8f6",fontSize:14}]}>ING. DE SOFTWARE</Text>
        </View>
      </View>
      <View style={style.bd}>
        <View style={style.bdLeft}>
          <View>
            <Text style={style.bdTitle}>CONTACTO</Text>
            <Text style={style.bdLine}>────</Text>
          </View>
          <View>
            <Text style={style.bdTitle}>HABILIDADES</Text>
            <Text style={style.bdLine}>────</Text>
          </View>
          <View>
            <Text style={style.bdTitle}>EDUCACIÓN</Text>
            <Text style={style.bdLine}>────</Text>
          </View>
        </View>
        <View style={style.bdRight}>
          <View>
            <Text style={style.bdTitle}>ACERCA DE MI</Text>
            <Text style={style.bdLine}>────</Text>
          </View>
          <View>
            <Text style={style.bdTitle}>EXPERIENCIA LABORAL</Text>
            <Text style={style.bdLine}>────</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  txtHeader:{
    color:'#f5f6fa',
    fontSize: 26,
    fontWeight:'bold',
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
    backgroundColor:'#e9e9e9'

  },
  bdRight:{
    padding:15,
    width:'55%',
    backgroundColor:'#eeeeee'
  },
  bdTitle:{
    fontSize:16,
    fontWeight: 'bold',
    color:'#291295',
  },
  bdLine:{
    fontSize:20,

    fontWeight: 'bold',
    color:'#291295',
  }
  
});

export default App;