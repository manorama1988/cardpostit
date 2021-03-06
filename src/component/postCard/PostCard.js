import React ,{ useState } from 'react';
import Card from '../cardUI/CardLayOut';
// import Button from '../cardUI/Button';
import classes from  './PostCard.module.css';



const PostCard = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enteredContent, setEnteredContent] = useState(' ');
    const [enteredImage, setEnteredImage] = useState(' ');
    const [enteredCategory, setEnteredCategory] = useState(' ');
    
    const addPostHandler =(event) => {
        event.preventDefault(); 
        if( enteredContent.trim().length === 0 || enteredTitle.trim().length === 0  ){
            return;
        }
        props.addPost( enteredContent,enteredTitle, enteredImage, enteredCategory);

        setEnteredContent(' ');
        setEnteredTitle(' ');
        setEnteredImage(' ');
        setEnteredCategory(' ');
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const contentChangeHandler = (event) => {
        setEnteredContent(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    };

    return ( 
             <Card className={classes.a}>
                 <h2 className={classes.heading}> My Post </h2>
                    <form onSubmit={addPostHandler}>
                   <input type="text"
                     value={enteredTitle}
                     placeholder="Enter your title" 
                     className={classes.cardTitle}
                     onChange={titleChangeHandler}
                    />
                     <textarea id="usertext" 
                     type="text"
                     className={classes.cardDescription} 
                     cols="10"
                     rows="1"
                     maxLength="180"
                     required value={enteredContent}  
                     onChange={contentChangeHandler}/> 

                    <div className={classes.formBottom}>
                      <input type="text" 
                      value={enteredImage} 
                      className={classes.cardImage} 
                      placeholder="Enter your Image Url" 
                      onChange={imageChangeHandler}/>

                      <input type="text"
                       value={enteredCategory} 
                       className={classes.cardCategory} 
                       placeholder="Enter your category" 
                       onChange={categoryChangeHandler}/>
                    </div>         
                   <button type="submit" className={classes.btn}>Add Post</button>                 
               </form>
            </Card>        
    );
};
export default PostCard;