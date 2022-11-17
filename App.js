import { Text, View, TouchableOpacity, Image, ScrollView, } from 'react-native'

import {styles} from './app.styles.js'
import productImage from './assets/lingerie.jpg'



export default function ProductDetail () {

  
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems:'center', marginHorizontal:30}}>
          <Image style={styles.productImg} source={productImage}/>
          <Text style={styles.name}>Conjunto DeMillus</Text>
          <Text style={styles.price}>R$ 327,00</Text>
          <Text style={styles.description}>
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Quem num gosta di mé, boa gentis num é.Si num tem leite então bota uma pinga aí cumpadi!Leite de capivaris, leite de mula manquis sem cabeça.
          </Text>
        </View>

        <View style={styles.starContainer}>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
        </View>

        <View style={styles.contentColors}>          
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity> 
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity> 
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity> 
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> 
        </View>

        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}><Text>p</Text></TouchableOpacity> 
          <TouchableOpacity style={styles.btnSize}><Text>m</Text></TouchableOpacity> 
          <TouchableOpacity style={styles.btnSize}><Text>g</Text></TouchableOpacity> 
          <TouchableOpacity style={styles.btnSize}><Text>xl</Text></TouchableOpacity> 
        </View>

        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={sendToCart}>
            <Text style={styles.shareButtonText}>enviar ao carrinho</Text>  
          </TouchableOpacity>
        </View> 
      </ScrollView>
    </View>
  )
}



export const sendToCart = () =>{

  console.log("produto enviado ao carrinho!")

}
