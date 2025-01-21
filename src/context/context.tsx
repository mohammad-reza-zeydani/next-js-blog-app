'use client'

import { createContext, useContext } from "react";
import { useState } from "react";

// Create a Context to hold and share state globally across the app
const MyContext = createContext<any>(null);  // Default value is null

// Custom hook to use the context data easily
export const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    // Declare state for tracking if data is being sent (e.g., for API requests)
    const [isSending, setIsSending] = useState<boolean>(false);

    // Declare state for storing the form's default values (e.g., when editing a blog)
    const [formDefaultValue, setFormDefaultValue] = useState<any>();

    return (
        // Provide the context values (isSending, setIsSending, formDefaultValue, setFormDefaultValue) to the children
        <MyContext.Provider value={{ isSending, setIsSending, formDefaultValue, setFormDefaultValue }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;
