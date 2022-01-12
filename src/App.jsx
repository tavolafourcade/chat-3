import React, {useContext} from 'react'
import { ChatContext } from './context/ChatProvider'
import Navbar from './components/Navbar'

const App = () => {
    const { saludo } = useContext(ChatContext)
    return (
        <div>
            <Navbar/>
            Chat {saludo}
        </div>
    )
}

export default App
