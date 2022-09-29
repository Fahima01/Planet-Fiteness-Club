import React from 'react';
import './Activity.css';

const Activity = (props) => {
    //console.log(props.activity)

    const { name, for_age, img, time } = props.activity;
    return (
        <div className='single-activity'>
            <img src={img} alt=''></img>

            <div className='activity-details'>
                <h3>{name}</h3>
                <p><span>For age:</span> {for_age}</p>
                <p><span>Time: </span> {time}s</p>
            </div>
            <div className='btn'><button onClick={() => props.handleAddActivity(props.activity)} className='activity-btn'>Add to list</button></div>

        </div>

    );
};

export default Activity;