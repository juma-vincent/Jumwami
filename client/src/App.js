import React from 'react'
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProjectsPage from './pages/projects-page/projects-page';
import {connect} from 'react-redux';
import { fetchUser } from './redux/user/user.actions';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from './redux/user/user.selectors';
import UserDashboard from './components/user/user-dashboard/user-dashboard';
import Spinner from './components/spinner/spinner';


class App extends React.Component {

  state = {
    isLoaded: false,
  }

  async componentDidMount(){
    await this.props.fetchUser();
    this.setState({isLoaded: true});
  }

  render(){
    const {currentUser} = this.props
    return(
      <div> 

         {
           this.state.isLoaded?
           (
                    <div className="App">
                
                
                    <Header/>
            
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/projects' component={ProjectsPage}/>
                        
                        <Route
                        exact
                        path="/dashboard"
                        render={() => (currentUser ? <UserDashboard/> : <Redirect to="/"  />)}
                        />
                    </Switch>
            
                    <Footer/>   
                    
                    
                  
                  </div>
            )
            :
            <Spinner/>
         }

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);