import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

import "../../Images/player-5.png"
import Activity from '../Activity/Activity';
import './Activities.css'
import Board from '../Activity_Board/Board';


const Activities = () => {

    const [activities, setActivities] = useState([])
    const [selectedActivity, setSelectedActivity] = useState([])

    useEffect(() => {

        fetch('activity-data.json')
            .then(res => res.json())
            .then(data => setActivities(data));

    }, []);

    const handleAddActivity = (activity) => {
        //console.log(activity)
        const newActivity = [...selectedActivity, activity];
        setSelectedActivity(newActivity);
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

        </div>
    );
};

export default Activities;