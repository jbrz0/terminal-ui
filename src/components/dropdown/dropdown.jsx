import React from 'react';

class Dropdown extends React.Component {

  render() {
    return (
      <li><a href={this.props.link}>{this.props.text}</a></li>
    );
  }

}

export default Dropdown;
