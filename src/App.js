
import { Fragment , useState} from 'react';

import PostCard from './component/postCard/PostCard';
import ShowCard from './component/postCard/ShowCard';

const App = () => {

  // const [apiData , setApiData ] = useState([ ]);
  
  const [postList   , setPostList] = useState([ ]); 
  const addPostHandler = ( enteredContent, enteredTitle, enteredImage, enteredCategory) => { 
    console.log(enteredImage,"image");
      setPostList((prevUsersList) => {
        return [...prevUsersList, {
            content: enteredContent,
            title: enteredTitle,
            image: enteredImage,
            category: enteredCategory,
            id: Math.random().toString()}];
      });
  };

 
//  async  function fetchApiDataHandler() {
//   const response = await fetch(
//      {
//         method: "get",
//         url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
//         headers: {
//           "X-Parse-Application-Id": "MVV6avFp",
//           "Content-Type": "application/json"
//         }
//       }
//   )
//   const data = await response.json();
//     const transfromApiData = data.results.map(apiData => {
//       return {
//         id:apiData.objectId,
//           title: apiData.title,
//           description: apiData.description,
//           category: apiData.category,
//           image: apiData.image,
//       }
//     });
    // setApiData(transfromApiData);

 

  return (
    <Fragment>
       
        <PostCard addPost={addPostHandler} />
     
        <ShowCard newpost={postList} />
    </Fragment>
  );
}
// }
export default App;
