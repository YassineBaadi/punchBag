import './image.css';
import subZeroAlive from '../../assets/subZeroo.gif';
import subZeroDied from '../../assets/skeleton.png';
import fatality from '../../assets/fatality.png';
import finishHim from '../../assets/finish-him.gif';
import scorpion from '../../assets/scorpioon.gif';
import scorpionAttack from '../../assets/attackScorpion.png';
import fireball from '../../assets/energyBall.png';
import subZeroStun from '../../assets/subStun.gif';
import scorpionWin from '../../assets/scorpion-win.gif'


export default function Image({ isDead, shake, lowHp, scorpionAttacks, fireballVisible  }) {
  return (
    <div className="fighters">
  
      <div className="scorpion-side">
        <img
          src={
            isDead
              ? scorpionWin
              : scorpionAttacks
              ? scorpionAttack
              : scorpion
          }
          alt="Scorpion"
          className={`scorpion ${isDead ? 'scorpion-win-big' : ''}`}
        />


      </div>

      <div className="subzero-side flipped">
        <div className="subzero-wrapper">
          <img
            src={lowHp ? subZeroStun : subZeroAlive}
            alt="Sub-Zero"
            className={`subZeroAlive ${shake ? 'shake' : ''} ${!isDead ? 'breathe' : ''}`}
            style={{ display: isDead ? 'none' : 'block' }}
          />
          <img
            src={subZeroDied}
            alt=""
            className="subZeroDied"
            style={{ display: isDead ? 'block' : 'none' }}
          />
        </div>
      </div>

      <img
        src={fatality}
        alt=""
        className={`fatality ${isDead ? 'zoom' : ''}`}
        style={{ display: isDead ? 'block' : 'none' }}
      />
      <img
        src={finishHim}
        alt=""
        className="finish-him"
        style={{ display: lowHp ? 'block' : 'none' }}
      />

      {fireballVisible && (
  <img src={fireball} alt="Fireball" className="fireball" />
)}
    </div>
  );
}
