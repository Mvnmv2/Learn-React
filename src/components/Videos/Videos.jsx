import React from "react";
import styles from "./videos.module.css";

let Videos = (props) => {
    if (props.videos.length === 0) {
        props.setVideos ([
            {
                id: 1,
                videoURL: 'https://all-mods.ru/wp-content/uploads/2015/09/witcher_3_wild_hunt__the_-__wallpaper_11.jpg',
                addToMe: true,
                title: 'Witcher3',
                about: {views: 150789, whenAdded: 'two days ago'}
            },
            {
                id: 2, videoURL: 'https://i.ytimg.com/vi/MW8jRVHvdDs/maxresdefault.jpg?7857057827',
                addToMe: false, title: 'Freeride In Elbrus', about: {
                    views: 21561, whenAdded: 'month' +
                        ' ago'
                }
            },
            {
                id: 3, videoURL: 'https://limonos.ru/uploads/posts/2015-04/14290902572525.jpeg',
                addToMe: false, title: 'Fishing in ocean', about: {views: 35422, whenAdded: 'yesterday'}
            },
        ]);
    }

    return <div>
        {
            props.videos.map((v) => <div key={v.id} className={styles.container}>

                <span>
                    <h3>{v.title}</h3>
                    <div>
                        <img src={v.videoURL} className={styles.photo}/>
                    </div>
                      <div>
                          {v.addToMe ? <button onClick={() => {
                                  props.deleteToMe(v.id)
                              }}>Delete</button> :
                              <button onClick={() => {
                                  props.addToMe(v.id)
                              }}>Add</button>}

                    </div>
                </span>
                <span className={styles.views}>
                    {v.about.views}
                </span>
                <span className={styles.whenAdded}>
                    {v.about.whenAdded}
                </span>
            </div>)
        }
    </div>

}

export default Videos;