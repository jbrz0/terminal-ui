import styles from './index.scss';
import React from 'react';
// import Slideshow from './slideshow.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
