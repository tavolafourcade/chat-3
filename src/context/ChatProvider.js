import React, { createContext, useState, useEffect } from 'react'
import {auth} from '../firebase'
export const ChatContext = createContext()
const ChatProvider = (props) => {
    const dataUsuario = {uid: null, email: null, estado: null}

    const [usuario, setUsuario] = useState(dataUsuario)

    useEffect(() => {
        detectarUsuario()
    }, [])

    //Checking if the user is logged
    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({uid: user.uid, email: user.email, estado: true})

            }else{
                setUsuario({uid: null, email: null, estado: false})
            }
        })
    }
    return (
        <ChatContext.Provider value={{usuario}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
