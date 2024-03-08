import { StyleSheet, View ,Text} from "react-native"
import React from "react"

export default function Titles2({text}){
    return(
        (
            <View style={styles.container}>
            <Text style={{color:'#fff',fontSize: 14,padding:6,borderWidth:1,borderColor:'gray',marginHorizontal:2,borderRadius:5}}>
                    {text}
                  </Text>
            </View>          
            )

    );
}
    const styles=StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', 
            marginTop: 10,
            padding:5
        }
    })