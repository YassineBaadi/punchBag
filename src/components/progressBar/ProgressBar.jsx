import './progressBar.css'
import { useState } from 'react'

function ProgressBar ({life}){

    return(
        <>
        <div className='container'>
            <div className='name'>
                <h1>Sub-Zero</h1>
            </div>
            <div className="bar-container">
                <div className="bar" style={{ width: `${life}%` }}></div>
            </div>
        </div>

        <div className='container2'>
            <div className='name2'>
                <h1>Scorpion</h1>
            </div>
            <div className="bar-container2">
                <div className="bar2" style={{backgroundColor : 'green'}}></div>
            </div>
        </div>
        
        

        </>
    )
}

export default ProgressBar