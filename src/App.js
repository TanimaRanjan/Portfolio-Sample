import React from 'react';
import './App.scss';

import Header from './components/header'
import Gallery from './components/gallery'




 class App extends React.Component {
  constructor() {
    super()

    this.state = { 
      design_photo:''
    }

  }

  handleSelection = (selection) => {
  //  e.preventDefault()
   // console.log(e)
    console.log(selection)
    this.setState(
      {design_photo:selection}
    )
  
  }

  render() {
    return (
      <div className="App">
        {
          /******************
           * Header 
           * ** Logo 
           * ** Design
           * ** Photography
           * 
           * Homepage
           * ** Gallery
           * ** ** GalleryItem
           * ** ** ** Image  
           * 
           * Photo Modal
           * 
           ******************/
        }

        <Header handleSelection={this.handleSelection} />
        <Gallery selected={this.state.design_photo}/>

      </div>
    );
  }
}

export default App;
