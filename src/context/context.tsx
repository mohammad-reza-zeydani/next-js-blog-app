'use client'
import { createContext,useContext } from "react";
import { useState } from "react";
const MyContext=createContext<any>(null)
export const useMyContext=()=>useContext(MyContext)
const MyContextProvider = ({children}:{children:React.ReactNode}) => {
    const [isSending,setIsSending]=useState<boolean>(false)
    const [formDefaultValue,setFormDefaultValue]=useState<any>()
    return ( 
        <MyContext.Provider value={{isSending,setIsSending,formDefaultValue,setFormDefaultValue}}>
            {children}
        </MyContext.Provider>
     );
}
export default MyContextProvider;