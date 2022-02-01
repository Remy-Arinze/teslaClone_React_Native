import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from '../global/styles'

const Buttons = (props) => {

    return (
        <View style={{
            alignItems:'center',
            position:'relative',
            top:600
        }}>
            <Pressable
            style={{
                backgroundColor:'#171A20cc',
                width:'80%',
                padding:8,
                borderRadius:15,

            }}
            >
                <Text style={{
                    textAlign:'center',
                    color:'white',
                    fontSize:12,
                    fontWeight:'500',
                    textTransform:'uppercase'
                }}>Place an order</Text>
            </Pressable>
            <Pressable
            style={{
                backgroundColor:'#ffffffa6',
                width:'80%',
                padding:8,
                borderRadius:15,
                marginTop:10

            }}
            >
                <Text style={{
                    color:'#171a20',
                    textAlign:'center',
                    fontSize:12,
                    fontWeight:'500',
                    textTransform:'uppercase'
                }}>Place an order</Text>
            </Pressable>
            
        </View>
    )
}

export default Buttons
