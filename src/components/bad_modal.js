import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class badModal extends Component {
   

    _render() {
       ReactDOM.render(
        <div>
            <div>{this.props.children}</div>
        </div>,
            this.modalTarget
    
        ); 
    }
    

}

export default BadModal;