import React, { useEffect, useState } from 'react';
import './Board.css';
import img from '../../Images/player-5.png';

const Board = (props) => {
    const { selectedActivity } = props;

    // add break time
    const [selectBreak, setSelectBreak] = useState();
    useEffect(() => {
        const localstorageData = localStorage.getItem(setSelectBreak)
        console.log(localstorageData)
    }, []);


    const setTime1 = () => {
        setSelectBreak('10')
    }
    const setTime2 = () => {
        setSelectBreak('20');
    }
    const setTime3 = () => {
        setSelectBreak('30');
    }
    const setTime4 = () => {
        setSelectBreak('40');
    }
    const setTime5 = () => {
        setSelectBreak('50');
    }

    // add exercise time
    let totalSecond = 0;

    for (const activity of selectedActivity) {
        totalSecond = totalSecond + activity.time;
    }
    return (
        <div className='board-display'>
            <div class="player">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 class="players-name">Hanry Jhon</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='player-details'>

                <div>
                    <h2>64 kg</h2>
                    <p>weight</p>
                </div>
                <div>
                    <h2>5.3 </h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>24 yr</h2>
                    <p>Age</p>
                </div>


            </div>
            <h3>Add a break</h3>
            <div className='btn-group'>
                <button onClick={setTime1}>10s</button>
                <button onClick={setTime2}>20s</button>
                <button onClick={setTime3}>30s</button>
                <button onClick={setTime4}>40s</button>
                <button onClick={setTime5}>50s</button>
            </div>
            <h3>Exercise Details</h3>
            <div>
                <div className='time-count'>
                    <p>Exercise time: <span> {totalSecond} <small>seconds</small></span>  </p>
                </div>
                <div className='time-count'>
                    <p>Break time: {selectBreak} seconds </p>
                </div>
                <div className='complete-acti'>
                    <p>Activity Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Board;