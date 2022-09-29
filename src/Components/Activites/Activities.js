import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

import Activity from '../Activity/Activity';
import './Activities.css'
import Board from '../Activity_Board/Board';
import { addToDb } from '../../utilities/fakedb';
import Qna from '../Blog/Qna';



const Activities = () => {

    const [activities, setActivities] = useState([])
    const [selectedActivity, setSelectedActivity] = useState([])
    // const [buttonText, setButtonText] = useState('Click');

    useEffect(() => {

        fetch('activity-data.json')
            .then(res => res.json())
            .then(data => setActivities(data));

    }, []);

    const handleAddActivity = (activity) => {
        //console.log(activity)
        const newActivity = [...selectedActivity, activity];
        setSelectedActivity(newActivity);
        // setButtonText('New text');
        addToDb(activity.id)
    }

    return (

        <div className='body'>
            <div className='logo'><FontAwesomeIcon icon={faHeartbeat} />   <p>Planet Exercise Club</p>
            </div>
            <div className='activity-container'>
                <div className='list-activity'>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddActivity={handleAddActivity}

                        ></Activity>)
                    }
                </div>
                <div className='activity-detail'>
                    <Board selectedActivity={selectedActivity}></Board>
                </div>
            </div>
            <div className='blog'>
                <Qna></Qna>
            </div>
        </div>
    );
};

export default Activities;