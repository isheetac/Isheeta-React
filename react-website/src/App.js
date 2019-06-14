import React, { Component } from 'react';
import Header from './Components/HeaderComponent/header';
import Footer from './Components/FooterComponent/footer';
import Homepage from './Components/Pages/homePage';
import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
