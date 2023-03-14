import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.container}>
            <div>
                <img className={classes.img}
                     src="https://i.pinimg.com/originals/89/0a/8e/890a8eba2a4737d83abe052ecf6c560c.jpg"/>
            </div>
            <div className={classes.item}>
                <img className={classes.photos} src={props.profile.photos.large}/>
                <div>
                    <div className={classes.userName}><strong>Имя:</strong> {props.profile.fullName}</div>
                    <div><strong>Статус:</strong> {props.profile.aboutMe}</div>
                </div>

            </div>
            <br/>
            <div><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>

        </div>

    );
};

export default ProfileInfo;

