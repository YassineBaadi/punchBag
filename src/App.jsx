import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './components/progressBar/ProgressBar'
import Image from './components/image/Image'
import Bouton from './components/button/Button'
import soundPunch from './assets/punch.mp3'
import soundBg from './assets/bg-sound.mp3'
import soundFinishHim from './assets/soundFinish.mp3'
import soundFatality from './assets/fatalitySound.mp3'
import roundOne from './assets/roundOne.png'
import fight from './assets/fight.png'
import startBtn from './assets/startBtn.png';
import roundOneSound from './assets/roundOneSound.mp3'

function App() {

const [hasStarted, setHasStarted] = useState(false);
const [scorpionAttacks, setScorpionAttacks] = useState(false);



const startGame = () => {
  const bg = new Audio(roundOneSound);
  bg.volume = 1;
  bg.play();
  const audio = new Audio(soundBg);

  setTimeout(() => {
  audio.play()
  audio.volume = 0.1
  audio.loop = true
  audio.currentTime = 23
}, "2800");

  setHasStarted(true);
};

  

  // 100% HP
const [life, setLife] = useState(100);

//Vibration
const [shake, setShake] = useState(false);

//-20%
const [fireballVisible, setFireballVisible] = useState(false);

const reduceLife = () => {
  setLife(prev => Math.max(prev - 20, 0));
  setShake(true);
  setScorpionAttacks(true);
  setFireballVisible(true); 

  setTimeout(() => {
    setShake(false);
    setScorpionAttacks(false);
    setFireballVisible(false);
  }, 1000);

  const audio = new Audio(soundPunch);
  audio.currentTime = 0.3;
  audio.play();
};

  //0 HP
  const isDead = life === 0;

  //20% HP
  const lowHp = life === 20;

  //Reset
  const resetLife = () => {
  setLife(100);
};


useEffect(() => {
  if (life === 20) {
    const finishAudio = new Audio(soundFinishHim);
    finishAudio.play();
  }

  if (life === 0) {
    const fatalityAudio = new Audio(soundFatality);
    fatalityAudio.play();
  }
}, [life]);








  return (
    <>

    {!hasStarted && (
      <div className="start-screen">
        <img
      src={startBtn}
      alt="Start"
      className="start-btn"
      onClick={startGame}
    />
      </div>
)}

    {hasStarted && (
      <>
      <div className="intro">
        <img src= {roundOne}  alt="Round 1" className="round-img" />
        <img src= {fight} alt="FIGHT" className="fight-img" />
      </div>

      
  <ProgressBar life = {life} />
  <Image isDead={life === 0} shake={shake} lowHp={life === 20} scorpionAttacks={scorpionAttacks} fireballVisible={fireballVisible}/>

  <Bouton onClick={reduceLife} showReset={life === 0} onReset={resetLife} />
      </>
    )}
    
  
     
    </>
  )
}

export default App
