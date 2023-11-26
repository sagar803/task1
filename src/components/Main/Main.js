import React , {useState} from 'react';
import './Main.css'

export const Main = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const clickSound = async () => {
        const audioModule = await import('../../asset/click.mp3');
        const audioElement = new Audio(audioModule.default);
        audioElement.play();
    };
    const errorSound = async () => {
        const audioModule = await import('../../asset/error.mp3');
        const audioElement = new Audio(audioModule.default);
        audioElement.play();
    };

    const topClick = () => {
        if (y > 0) {
            setY(y - 50)
            clickSound();
        }
        else errorSound()
    }
    const bottomClick = () => {
        if (y < 450) {
            setY(y + 50)
            clickSound();
        }
        else errorSound()
    }
    const leftClick = () => {
        if (x > 0) {
            setX(x - 50)
            clickSound();
        }
        else errorSound()
    }
    const rightClick = () => {
        if (x < 450) {
            setX(x + 50)
            clickSound();
        }
        else errorSound()
    }

  return (
    <div className='main-container'>
        <div className='playground'>
            <button className={`top horizontal button ${ y <= 0 ? 'disabled' : ''}`} onClick={topClick}><span>Top</span></button>
            <div className='layout'>
                <button className={`left vertical button ${ x <= 0 ? 'disabled' : ''}`} onClick={leftClick}><span>Left</span></button>
                <div className='screen'>
                    <div className='ball' style={{position: 'absolute', left: x, top: y}}></div>
                </div>
                <button className={`right vertical button ${ x >= 450 ? 'disabled' : ''}`} onClick={rightClick}><span>Right</span></button>
            </div>
            <button className={`bottom horizontal button ${ y >= 450 ? 'disabled' : ''}`} onClick={bottomClick}><span>Bottom</span></button>
        </div>

    </div>
  )
}
