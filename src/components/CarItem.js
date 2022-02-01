import React from 'react'
import {Image, View,ImageBackground,Text,Dimensions} from 'react-native'
import { images } from '../assets/images'
import { styles } from '../global/styles'
import Buttons from './Buttons'
import Header from './Header'

const CarItem = ({img,name,price}) => {
    return (
            <View style={{
                height:Dimensions.get('window').height,
                width: Dimensions.get('window').width
            }}>
                <ImageBackground source={img} resizeMode='cover' style={{
                    width:'100%',
                    height:"100%",
                    position:'absolute',
                }} />
                <View style={styles.titles}>
                    <Text style={styles.title1}>{name}</Text>
                    <Text style={styles.title2}>{price}</Text>
                </View>

                <View>
                    <Buttons />
                </View>
            </View>
    )
}

export default CarItem
