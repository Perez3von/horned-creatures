import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
class ImageList extends Component {
    
    render() { 
        const {hornsNum} = this.props;
        return ( 
           <>
           {hornsNum.map((item) => {
               const {name, url} = item;
                return <ImageItem key={item.id} url= {url} name = {name}  />

           })} 
           </>

         );
    }
}
 
export default ImageList;