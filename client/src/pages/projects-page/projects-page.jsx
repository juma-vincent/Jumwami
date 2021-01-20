import React from 'react';
import './projects-page.scss'

class ProjectsPage extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Projects Page</h1>
                <div className='projects-container'>
                    <div className='project1'>
                        <h2>Project 1 Title</h2>
                        <div> 
                            Project content
                        </div>
                    </div>
                    <div className='project2'>
                        <h2>Project 2 Title</h2>
                        <div> 
                            Project content
                        </div>

                    </div>
                    <div className='project3'>
                        <h2>Project 3 Title</h2>
                        <div> 
                            Project content
                        </div>

                    </div>
                </div>
            </div>
          );
    }
}
 
export default ProjectsPage;