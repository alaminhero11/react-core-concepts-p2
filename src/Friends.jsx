import { useEffect, useState } from 'react'
import './Style.css'
import FriendUser from './FriendUser'

export default function Friends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => setFriends(data))
    }, [])


    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map((data) => <FriendUser userData={data}></FriendUser>)
            }
        </div>
    )
}