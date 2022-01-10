import React, { createContext } from 'react'

export const ChatContext = createContext()
const ChatProvider = (props) => {
    return (
        <ChatProvider.Provider>
            {props.children}
        </ChatProvider.Provider>
    )
}

export default ChatProvider
