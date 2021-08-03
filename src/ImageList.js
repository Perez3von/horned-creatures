import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
class ImageList extends Component {
    
    render() { 
        return ( 
           <>
           {this.props.images.map((item, index) => {

                return <ImageItem key={index} image={item} />

           })} 
           </>

         );
    }
}
 
export default ImageList;