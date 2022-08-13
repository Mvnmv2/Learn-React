import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://avatars.mds.yandex.net/i?id=633087f63747e99f596695c2049ef8cc_l-5300097-images-thumbs&ref=rim&n=13&w=640&h=640',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'I am are boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://crosti.ru/patterns/00/20/57/ca4e737a8a/picture.jpg',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'Eat sleep code repeat',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://sun1.userapi.com/sun1-56/s/v1/ig2/Xvy6J25YIcjj6sz_FGm2m9wkX9JJnlYeDVkVQtZadSHsQKIqr_Tmr2xSJIRmnjZ6C4Iien0bAXUev3DtQeo1ScuG.jpg?size=200x200&quality=96&crop=264,0,719,719&ava=1',
                    followed: true,
                    fullName: 'Ioshito',
                    status: 'What is going on there?',
                    location: {city: 'Tokio', country: 'Japan'}
                },
            ]
        )
    }


    return (

        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photoUrl} className={styles.usersPhoto} alt="photoUser"/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span> 
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>


    );
}

export default Users;
