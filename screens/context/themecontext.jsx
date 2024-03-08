import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const changeIntoDark=createContext();

export default function ThemeProvider({children}) {
const [dark,setDark]=useState(false) 
const changeMode=()=>{
    setDark((prev)=>!prev)
}

  return (
<changeIntoDark.Provider value={{dark,changeMode}}>
{children}
</changeIntoDark.Provider>

)
}

