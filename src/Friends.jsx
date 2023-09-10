import { useEffect, useState } from "react"

export default function Friends(){
    const [friends, setFriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return(
        <div>
            <h3>Friend List</h3>
        </div>
    )
}