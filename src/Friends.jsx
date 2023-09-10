import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Friends.css'

export default function Friends(){
    // declare state
    const [friends, setFriends] = useState([]);  
    console.log(friends)

    // add use effect
    useEffect(()=>{
        // use fetch for dtaa loading   
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className="box">
            <h3>Friends {friends.length}</h3>
            {
                friends.map(friend => <Friend friend = {friend}></Friend>)
            }
        </div>
    )
}