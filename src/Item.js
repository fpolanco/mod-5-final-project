import React, {useState, useEffect} from 'react';
import LikeButton from './LikeButton.js'
import DeleteButton from './DeleteButton.js'


const Item = (props) => {

const [likes, setLikes] = useState(0);

// const deleteItem = (i) => {
//     setItems(currentItems => currentItems.filter((item, index) => index !== i));
//   }



if (props.item) {
return (
<div>
{props.item.image ? <img src={props.item.image} alt="uploaded content"/> : " "}
{props.item.video ?<video src={props.item.video} /> : " "}
<LikeButton itemId={Item.id}/>
<DeleteButton/>

{/* <button onClick={() => setLikes(likes)}>
    Like 
</button> */}
{/* <button onClick={() => {props.deleteItem(id)}>
    x
</button> */}
{/* <img src="http://res.cloudinary.com/dog95zc5u/image/upload/v1597689582/bn4hjqvbcil2vubej7lj.png"/>
<video width="320" height="240" controls>
<source src="http://res.cloudinary.com/dog95zc5u/video/upload/v1597681881/kaxdwivofzj3qvjjrxqi.mov" type="video/mp4"/>
</video> */}
</div>

)}
 else return ("")
}

export default Item;