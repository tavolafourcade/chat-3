import React, { createContext } from 'react'

export const ChatContext = createContext()
const ChatProvider = (props) => {
    const saludo = 'Hola desde Chat'
    return (
        <ChatContext.Provider value={{saludo}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
