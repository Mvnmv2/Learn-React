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
                     src="https://assets.truevirtualtours.com/img_cache/85/85067d65209a2f0f4ddbb4e58bf91a3e/1280x600/85067d65209a2f0f4ddbb4e58bf91a3e.jpg"/>
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

