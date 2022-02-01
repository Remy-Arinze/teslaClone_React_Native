import React from 'react'
import { View, Text,Image } from 'react-native'
import { images } from '../assets/images'

const Header = () => {
    return (
        <View style={{
            flexDirection:'row',
            position:'absolute',
            top:20,
            zIndex:100,
            justifyContent:'space-between',
            width:"100%",
            paddingHorizontal:20
        }}>
                <Image 
                source={images.logo}
                resizeMode='contain' 
                style={{
                    width:100,
                    height:20
                }}
                />

                <Image
                resizeMode='contain'
                source={images.menu}
                style={{
                    width:100,
                    height:25
                }} />
        </View>
    )
}

export default Header
