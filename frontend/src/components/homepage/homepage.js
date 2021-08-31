import React from "react"
import "./homepage.css"
import Appmain from './src/Appmain'
import ReactDOM from 'react-dom'

function Homepage({setLoginUser}) {
    return(
       ReactDOM.render(<Appmain />,
        document.getElementById('root') )
    )
}


export default Homepage