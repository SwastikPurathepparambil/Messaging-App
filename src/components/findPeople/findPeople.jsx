import { useState, useEffect} from 'react';
import './findpeople.css';
import axios from 'axios';


export default function People() {
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {

            const res = await axios.get('/user/61087b092650f0800c3425e5');
            setFriends(res.data);
        }
        
        fetchFriends();
    }, [])


    return(
        <div className="people">
            {/* input of some sort here 
                choose between group or dm
                group has to have at least 3 people
                dm can only have 2 people 

                default searches will be all your friends 
                - this is a get request

                post request will be getting a persons username
            */}
            <form action="">
                <input type="text" />
                <button>
                    Search
                </button>
            </form>
            <ul>
                {/* we need a list of all the users  */}
                <li>{friends.username}</li>
            </ul>
        </div>
    );
    

}

