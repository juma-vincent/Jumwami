import React from 'react'
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import {Route} from 'react-router-dom';
import ProjectsPage from './pages/projects-page/projects-page';


class App extends React.Component {

  componentDidMount(){
    
  }

  render(){
    return(
      <div className="App">
        
         
        <Header/>
        <Route exact path='/' component={Homepage}/>          
        <Route path='/projects' component={ProjectsPage}/> 
        <Footer/>   
        
        
      
      </div>
    );
  }
}


export default App;