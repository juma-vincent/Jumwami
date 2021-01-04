import React from "react";
import Testimonials from "../../components/testimonials/testimonials";
import VideoBackground from "../../components/video-background/video-background";
import "./homepage.scss";



const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="banner">
      <VideoBackground />

        {/* <div className="profile-image"></div> */}
        {/* <div className="profile-text">Software Developer</div> */}
      </div>

      <div className="main-section">
        

        <div className="about-container">
          <div className="title">ABOUT ME</div>
          <div className="content">
              <div > <img src="/images/image1.jpg" className="image-container" alt=""/></div>
                <div className="description">
                  Hi, my name is Julius, a fantastic writer,
                  with 4 years of experience in academic writing. Writing is my
                  passion and I enjoy giving out quality content that most
                  of the time exceeds my clients' expectations. It's my pride
                  to ensure that every client I serve get the best value for
                  their money. I look forward to giving you the best I've got, look no 
                  further.
                    
                </div>
            </div>
        </div>

        <div>
            <h1 style={{color: 'green', textAlign: 'center'}}>Testimonials</h1>
            <Testimonials 
            name={`JAMES ALLAN`} 
            title={`I had the best assignment ever`} 
            imageUrl={`/images/image2.jpg`}
            body={` My assignments are getting done in time. My assignments are getting done in time. 
            My assignments are getting done in time.`}
            />
            <Testimonials 
            name={`JOHN HILL`}
            title={`My grades are on the rise`}
            imageUrl={`/images/image3.jpg`}
            body={`I love the way am performing right now. I love the way am performing right now.
            I love the way am performing right now.`}
            />
            <Testimonials 
            name={`VINCENT JUMA`} 
            title={`I'm so stunned`} 
            imageUrl={`/images/image4.png`} 
            body={`I keep on surprising my friends with my improved Grades. 
            I keep on surprising my friends with my improved Grades.
            I keep on surprising my friends with my improved Grades. `}
            />
        
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
