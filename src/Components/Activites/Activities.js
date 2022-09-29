import React, { useEffect, useState } from 'react';
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
                <h2>Activity details</h2>
                <div class="player">
                    <div>
                        <img src="../../Images/player-5.png" alt="" />
                    </div>
                    <div>
                        <h3 class="players-name">John Smith</h3>
                        <p>Sydney, Austrelia</p>
                    </div>
                </div>

                <h3>Add a break</h3>
                <div className='btn-group'>
                    <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>
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
    );
};

export default Activities;