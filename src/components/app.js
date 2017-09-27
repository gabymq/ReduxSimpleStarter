import React, { Component } from 'react';
import {connect } from 'react-redux';
import Thumbnails from './thumbnails';
import * as actions from '../actions';

class App extends Component {
    componentWillMount() {
      this.props.fetchImages();
    }

    render() {
      return (
        <div>
          <Thumbnails images={this.props.images} />
        
        </div>
      );
    }
}


export default connect(({images}) => ({images}), actions)(App);
    
