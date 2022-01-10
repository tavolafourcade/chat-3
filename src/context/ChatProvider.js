import React, { createContext } from 'react'

export const ChatContext = createContext()
const ChatProvider = (props) => {
    const saludo = 'Hola desde Chat'
    return (
        <ChatProvider.Provider value={{saludo}}>
            {props.children}
        </ChatProvider.Provider>
    )
}

export default ChatProvider
