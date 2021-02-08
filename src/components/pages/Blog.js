import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return(
            <div>
                <ul>
                {this.props.post.map((posts, i) => {
                    return <li><h2>{posts.title}</h2> <h3>{posts.body}</h3></li>
                })}
                </ul>
            </div>
        )
    }
}

export default Blog