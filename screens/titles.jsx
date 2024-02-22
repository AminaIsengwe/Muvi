import { StyleSheet, View ,Text} from "react-native"
import React from "react"

export default function Titles({text}){
    return(
        (
            <View style={styles.container}>
            <Text style={{color:'#fff',fontSize: 18,fontWeight: 'bold',paddingHorizontal: 20,}}>
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
            marginTop: 20,
        }
    })