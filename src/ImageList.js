import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
class ImageList extends Component {
    
    render() { 
        return ( 
           <>
           {this.props.images.map((item) => {

                return <ImageItem key={item.keyword} image={item} />

           })}; 
           </>

         );
    }
}
 
export default ImageList;