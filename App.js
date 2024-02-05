import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome6} from '@expo/vector-icons';
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
          <View style={style.bdContact}>
            <Text style={style.bdTitle}>CONTACTO</Text>
            <Text style={style.bdLine}>────</Text>    
            <Text style={style.bdTxt}><FontAwesome6 name="square-whatsapp" size={24} color="black" />   4421446031</Text>
            <Text style={style.bdTxt}><MaterialCommunityIcons name="gmail" size={24} color="black" />  alan.c@gmail.com</Text>
            <Text style={style.bdTxt}><AntDesign name="github" size={24} color="black" />  github.com/alanolv</Text>
          </View>
          <View style={style.bdAbility}>
            <Text style={style.bdTitle}>HABILIDADES</Text>
            <Text style={style.bdLine}>────</Text>
            <Text style={style.bdTxt}>• Comunicacion acertiva</Text>
            <Text style={style.bdTxt}>• Resolucion de problemas</Text>
            <Text style={style.bdTxt}>• Trabajo en equipo</Text>
            <Text style={style.bdTxt}>• Proactivo</Text>
          </View>
          <View style={style.bdEdu}>
            <Text style={style.bdTitle}>EDUCACIÓN</Text>
            <Text style={style.bdLine}>────</Text>
            <Text style={[style.bdTxt,{fontWeight:'bold'}]}>• Ingenieria de software</Text>
            <Text style={[style.bdTxt,{fontSize:12}]}>Universidad Autonoma de Queretaro</Text>
            <Text style={[style.bdTxt,{fontWeight:'bold',marginTop:10}]}>• Tecnico en programación</Text>
            <Text style={[style.bdTxt,{fontSize:12}]}>Centro de bachilleres tecnico y de servicios</Text>
          </View>
          <View style={style.bdEmpt}></View>
        </View>
        <View style={style.bdRight}>
          <View style={style.bdAbout}>
            <Text style={style.bdTitle}>ACERCA DE MI</Text>
            <Text style={style.bdLine}>────</Text>
            <Text style={style.bdTxt}>Mi nombre es Alan Olvera Cristino, soy un estudiante mexicano de ingeniería de software, actualmente desarrollo proyectos privados y personales.</Text>
          </View>
          <View style={style.bdExp}>
            <Text style={[style.bdTitle,{marginTop:10}]}>EXPERIENCIA</Text>
            <Text style={style.bdLine}>────</Text>
            <Text style={[style.bdTxt,{fontWeight:'bold'}]}>• Hackathon 2022</Text>
            <Text style={[style.bdTxt,{fontSize:12}]}>Desarrollo de una aplicacion web entorno a la tematica de LegalTech con el nombre Virizion</Text>
            <Text style={[style.bdTxt,{fontWeight:'bold',marginTop:10}]}>• Hackathon 2021</Text>
            <Text style={[style.bdTxt,{fontSize:12}]}>Desarrollo de una aplicacion web y movil entorno a la educacion con el nombre Aprinder</Text>
            </View>
            <View style={style.bdEmpt}></View>
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
  },
  bdContact:{
    flex:2.5,
    
  },
  bdTxt:{
    textAlignVertical:'center',
    fontSize:14
  },
  bdAbility:{
    flex:2.5
  },
  bdEdu:{
    flex:2.5
  },
  bdEmpt:{
    flex:3
  },
  bdAbout:{
    flex:1.3
  },
  bdExp:{
    flex:1.5
  }
  
});

export default App;