import React, {useState, useEffect}  from 'react';
import Item from './Item'


const ItemContainer = props => {
    

    if (props.value.length > 0) {
    return (
        <div class="itemContainer" >
          {props.value.map((item) =>(     
            <Item item={item} key={item.id} handleDelete={props.handleDelete} />
           ))}
        </div>


 
    );
          }
          else {
              return "ils"
          }
    
        }


 
    

export default ItemContainer;