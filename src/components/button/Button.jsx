import './button.css'
import { useState } from 'react'
import punchBtn from '../../assets/punchButton.png'
import resetBtn from '../../assets/resetButton.png'



export default function Bouton({ onClick, showReset, onReset }) {

  return (

    <>

    <div className="containerBtn">
      <button onClick={onClick}>
        <img src={punchBtn} alt="punch" width={300} height={130} />
      </button>

      {showReset && (
        <button onClick={onReset} style={{ marginTop: '10px' }}>
          <img src={resetBtn} alt="reset" width={170} height={130} />
        </button>
      )}
    </div>


    </>
  );


   
}
