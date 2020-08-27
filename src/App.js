import React, {useState, useEffect}  from 'react';
import MyCarousel from './MyCarousel.js';
import './App.css';
import ControlledAccordions from './ControlledAccordions.js';
import NewItemForm from './NewItemForm'
import ItemContainer from './ItemContainer'
import Item from './Item.js'
import Sources from './Sources.js'
import ReactPlayer from "react-player"

// import LoginModalContainer from './LoginModalContainer.js'
// import LoginModal from './LoginModal'


const App = () => {
  const [faves, setFaves] = useState([])

  // addFave = () => {
   
  // });
  // };


  // const [isLoginModalOpen, setLoginModal] = React.useState(false);

  
    const [value, setValue] = useState([])
    
  
    useEffect(() => {
    fetch("http://localhost:3000/items")
     .then(r => r.json())
     .then(data => {
         setValue(data)
         console.log("data", data)}
         )
    }, [] 
    );
  
   const handleSubmit= (image, video) => {
      const form = new FormData()
        form.append("image", image) //inverse dataflow
        form.append("video", video)
        fetch(`http://localhost:3000/items`, {
            method: "POST",
            body: form
        })
        .then(r => r.json())
        .then(data => {
          console.log(data, value)
          setValue([...value, data])
        })
   }

   const handleDelete= (id) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method:"DELETE"
   }).then(r => r.json())
     .then(data => 
      {
       const updateItems = value.filter(item => item.id !== data)
       setValue(updateItems)
      }
      )
  } 

return (
  <div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <MyCarousel/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ControlledAccordions/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>Resources</h1>
    <Sources/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <NewItemForm handleSubmit={handleSubmit}/>
    <br></br>
    <ItemContainer value={value} handleDelete={handleDelete}/>
    <Item/>
    <br></br>
    <br></br>
    {/* <button onClick={() => setLoginModal(true)}>Open Modal</button>
   <LoginModalContainer isOpen={isLoginModalOpen} close={() => setLoginModal(false)}/> */}

  </div>
);
}


export default App;