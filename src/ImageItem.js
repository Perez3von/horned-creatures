import React, { Component } from 'react';

class ImageItem extends Component {
  state = {};
    render() { 
        const {keyword, url} = this.props;
        return ( 
            <p>
                Creature: {keyword}
                <img 
                alt={keyword}
                width="100"
                src={url}
                />

            </p>
         );
    }
}
 
export default ImageItem;