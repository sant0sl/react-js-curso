import React, { Component } from "react";

class Feed extends Component{
    render(){
        return(
            <div>
                <div key={this.props.id}>
                    <h3>{this.props.username}</h3>
                    <a>
                        {this.props.curtidas > 1 ? this.props.curtidas + ' curtidas!' : this.props.curtidas + ' curtida!'} 
                        <br/>
                        {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios!' : this.props.comentarios + ' comentario!'}
                    </a>
                </div>
            </div>
        );
    }
}

export default Feed;