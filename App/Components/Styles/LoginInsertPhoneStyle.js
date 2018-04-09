import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    borderRadius:10,
    alignItems:"center",
    width:"100%",
    height:"100%",
    padding:5


  },
  heading:{
    color:"rgb(27,118,186)",
    textAlign:"center",
    fontSize:20,
    fontWeight:"600",
    marginTop:"3%",
    fontFamily:"NeoSansArabic",
  },
  heading2:{
    color:"rgb(112,112,112)",
    textAlign:"center",
    fontSize:16,
    marginLeft:"5%",
    marginTop:"3%",
    marginRight:"5%",
    fontWeight:"500",
    fontFamily:"NeoSansArabic",
  },
  inputBoxView:{
    flexDirection:"row",
    marginTop:"3%",
   

  },
  itemStyle:{
    marginLeft:"10%",
    marginRight:"0%",
    width:"75%",
  },
  formInputPlaceholder:{
    color:"rgb(27,118,186)",
    textAlign:"center",
    fontWeight:"500",
    marginLeft:"63%",
    marginRight:"0%",
    fontSize:20,
    marginTop:"0%",
    fontFamily:"NeoSansArabic",

  },
  input:{
    width:"100%",
    color:"rgb(27,118,186)",
    height:"100%",
    marginTop:"1%",
    padding:0,
    borderBottomWidth:1,
    borderBottomColor:"black",
    
  },
  countryView:{
    flexDirection:"column",
    borderBottomWidth:2,
    marginLeft:"5%",
    marginRight:"10%"

  },
  countryText:{
    color:"rgb(27,118,186)",
    marginTop:"0%",
    fontWeight:"500",
    textAlign:"center",
    marginRight:"5%",
    fontFamily:"NeoSansArabic",
    fontSize:20
  },
  countryFlag:{
    width:"100%",
    height:29,
    marginTop:"0%",
    marginBottom:"0%"
  },
  linearGradient: {
    marginTop:"12%",
    borderRadius: 50,
    width:"70%",
    height:"16%"
    
  },
  buttonText: {
    fontSize: 19,
    fontFamily: 'NeoSansArabic',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  
})