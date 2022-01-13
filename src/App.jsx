import React, {useContext} from 'react'
import { ChatContext } from './context/ChatProvider'
import Navbar from './components/Navbar'

const App = () => {
    const { usuario } = useContext(ChatContext)
    return (
        <div>
            <Navbar/>
            Chat
        </div>
    )
}

export default App
