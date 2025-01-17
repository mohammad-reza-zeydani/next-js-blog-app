'use client'
import { createContext,useContext } from "react";
import { useState } from "react";
const MyContext=createContext<any>(null)
export const useMyContext=()=>useContext(MyContext)
const MyContextProvider = ({children}:{children:React.ReactNode}) => {
    const [isSending,setIsSending]=useState<boolean>(false)
    return ( 
        <MyContext.Provider value={{isSending,setIsSending}}>
            {children}
        </MyContext.Provider>
     );
}
export default MyContextProvider;