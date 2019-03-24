import ImageGallery from 'react-image-gallery';
import React,{ Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
class MyComponent extends Component {
 


  render() {
    let images = [];
    this.props.data.map(igkey=>{
            images.push({
              original: igkey.picture,
              thumbnail: igkey.picture,
            })
    })
    
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default MyComponent;