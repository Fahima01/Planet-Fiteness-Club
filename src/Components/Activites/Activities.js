import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import Activity from '../Activity/Activity';
import './Activities.css'


const Activities = () => {

    const [activities, setActivities] = useState([])
    const [selectedActivity, setSelectedActivity] = useState([])

    useEffect(() => {

        fetch('activity-data.json')
            .then(res => res.json())
            .then(data => setActivities(data));

    }, []);

    const handleAddActivity = (activity) => {
        console.log(activity)
        const newActivity = [...selectedActivity, activity];
        setSelectedActivity(newActivity);
    }

    return (

        <div className='body'>
            <div className='logo'><FontAwesomeIcon icon={faHeartbeat} />   <p>Planet Exercise Club</p></div>
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

                    <div class="player">
                        <div>
                            <img src="../../Images/player-5.png" alt="" />
                        </div>
                        <div>
                            <h3 class="players-name">John Smith</h3>
                            <p>Sydney, Austrelia</p>
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
                        <button>10s</button>
                        <button>20s</button>
                        <button>30s</button>
                        <button>40s</button>
                        <button>50s</button>
                    </div>
                    <h3>Exercise Details</h3>
                    <div>
                        <div className='time-count'>
                            <p>Exercise time  </p>
                        </div>
                        <div className='time-count'>
                            <p>Break time  </p>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    );
};

export default Activities;