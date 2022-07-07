import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.img}
                     src="https://assets.truevirtualtours.com/img_cache/85/85067d65209a2f0f4ddbb4e58bf91a3e/1280x600/85067d65209a2f0f4ddbb4e58bf91a3e.jpg"/>
            </div>
            <div className={classes.item}>avatar+description</div>
        </div>

    );
};

export default ProfileInfo;

