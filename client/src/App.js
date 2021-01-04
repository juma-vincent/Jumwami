import React from 'react'
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';

class App extends React.Component {

  componentDidMount(){
    
  }

  render(){
    return(
      <div className="App">
        
        <Header/>
        <Homepage/>   
        <Footer/>    
        
      
      </div>
    );
  }
}


export default App;