import React from "react";
import "./header.scss";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Option from "../option/option";
import CustomLink from "../custom-link/custom-link";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import GoogleOption from '../../components/google-signin-option/google-signin-option';
import { withRouter } from 'react-router-dom';


const renderProfile = (currentUser)=>{
  
  return(
    <div className='profile'>
            {currentUser?(
                <div style={{display:'flex', marginTop:'0px', border: 'white 2px ', justifyContent: 'center'}}>
                  {/* <Link  style={{color:'white)', fontWeight:'bold'}}> */}
                    <Link to='/dashboard'>
                      <span style={{ marginTop:'0',color:'lightgreen', alignSelf:'flex-start'}} >
                      {currentUser.name}
                      </span>
                    </Link>
                    <Link to='/dashboard'>
                      <span style={{border: ' yellow 2px '}}>
                      <img width='25'height='25' src={currentUser.imageurl}
                      style={{borderRadius:'50%', marginTop:'-2px',  marginLeft:'0px'  }} alt=""/>                    
                      </span>
                    </Link>
                    
                  {/* </Link> */}
                </div>
              )
              :null
              }
            </div>
  )
}


const Header = ({currentUser, match}) => {
  return (
    <div className="header-container">

      <div className="logo-box">        
        <img src="/images/jumwami-logo.png" className='logo' alt="" />        
      </div>
  
      <div className="subheader-wrapper">
          <div className='upper-subheader'>
              <div className="options-container">
              <Link to='/'  >
              <Option text='HOME'/> 
              </Link>
              {match.isExact?
                (<CustomLink text='services'  >
                <Option text='SERVICES'/>
                </CustomLink>)
              :null
              }
              <Link  to='/projects'   >
              <Option text='PROJECTS'/>
              </Link>

              {currentUser ? 
              (
                <a  href="/api/logout" >
                <Option text='SIGNOUT' signout/> 
                </a>
               ) 
            :                 
            <GoogleOption text='Sign in with Google'/>                 
            
            }
              
              
              </div>
          
          </div>
      
          <div className='lower-subheader'>
              <div className="options-container " style={{backgroundColor:'rgb(26, 25, 25) '}}>

              {renderProfile(currentUser)}

              {match.isExact?
               (
               <>                
                <CustomLink text='about'>
                <Option text='ABOUT US'/>
                </CustomLink>
                <CustomLink text='contact' >
                <Option text='CONTACT US'/>
                </CustomLink>
                </>
               )
              :null
              }
              
              </div>
          </div>
      </div>

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
});

export default connect(mapStateToProps)(withRouter(Header));
