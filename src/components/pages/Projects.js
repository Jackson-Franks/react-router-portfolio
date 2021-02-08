import React, { Component } from 'react'


class Projects extends Component {
    render() {
        return(
            <div>
                <h2>Projects</h2>
                <div>
                <h3>My Mindcraft House</h3>
                <img src={require('../images/minecraft-house.jpg').default} height={300} width={300}/>
                </div>
                <div>
                <h3>My First Molten Core clear</h3>
                <img src={require('../images/rag.jpg').default} height={300} width={300}/>
                </div>
                <div>
                <h3>My First Nuke</h3>
                <img src={require('../images/nuke.jpg').default} height={300} width={300}/>
                </div>
            </div>
        )
    }
}

export default Projects