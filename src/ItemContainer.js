import React, {useState, useEffect}  from 'react';
import Item from './Item'


const ItemContainer = props => {
    

    if (props.value.length > 0) {
    return (
        <div >
          {props.value.map((item) =>(     
            <Item item={item} key={item.id} />
           ))}
        </div>


 
    );
          }
          else {
              return "ils"
          }
    
        }


 
    

export default ItemContainer;