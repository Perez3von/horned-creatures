import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
class ImageList extends Component {
    
    render() { 
        const {arrayC} = this.props;
        return ( 
           <>
           {arrayC.map((item) => {
               const {name, url} = item;
               console.log(arrayC)
                return <ImageItem key={item.id} url= {url} name = {name}  />

           })} 
           </>

         );
    }
}
 
export default ImageList;