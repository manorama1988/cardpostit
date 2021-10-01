import React  from 'react';

import classes from './ShowCard.module.css';


const ShowCard = (props) => {
   
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
        
        <div className={classes.users} >
            
            {props.newpost.map((post) => (
            <ul>        
                <li key={post.id} className={classes.cardPost}>
                    <p className={classes.cardPostImage}>{post.image} </p>
                        <div className={classes.cardPostContent}>
                            <div className={classes.cardPostText}>
                                 <p className={classes.cardPostTitle}>{post.title} </p>
                                 <p className={classes.cardPostDate}>{year}-{month < 10 ? `0${month}` : `${month}`}-{date} </p>
                            </div>
                            <div className={classes.cardPostDescription}>
                                 <p className={classes.cardDescription}>{post.content} </p>
                            </div>
                            <div className={classes.cardPostCategory}>
                                 <p className={classes.cardCategory}>{post.category} </p>
                            </div>   
                        </div>
                    
                    
                   
                    
                    {/* <div className={classes.postDate}>
                        {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
                    </div> */}

                </li>
            </ul>
            ))}
        </div>
    );
};
export default ShowCard;