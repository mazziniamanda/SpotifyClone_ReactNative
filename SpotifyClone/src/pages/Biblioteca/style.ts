import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:30,
  },
  header:{
    flexDirection:'row',
    display: 'flex',
    alignItems: 'center',
  },
  foto:{
    width: 37,
    height: 37,
    marginTop:20,
    marginLeft:10,
  }, 
  icone:{
    width: 20,
    height: 20,
    marginTop:20,
    marginLeft:25,
    tintColor:"white",
  },
  itens:{
    color:"white",
    paddingLeft:10,
    paddingRight:10,
    marginTop:25,
    paddingTop:3,
    paddingBottom:3,
    borderColor: "#fff",
    marginLeft:10,
    borderRadius: 52,
    borderWidth:1,
  },
  categoria:{
    flexDirection:'row',
    borderBottomWidth:2,
    paddingBottom:10,
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 13,
    paddingTop: 5,
  },
  nav:{
    width: 30,
    height: 30,
    } ,
    lib:{
      width:43,
      height:30,
    },
  texto:{
    marginLeft:10,
    color:"white",
    marginTop:20,
    marginRight:75,
    fontWeight:"bold",
    fontSize: 20,
  }
})