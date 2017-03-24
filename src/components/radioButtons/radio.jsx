import React from 'react';
import cx from 'classnames';
import s from './radioButtons.scss';

class Radio extends React.Component {

  render() {
    return (
      <div className={s.radioWrap}>
        <input type="radio" id={this.props.id} name={this.props.name} />
        <label htmlFor={this.props.id}><span></span>{this.props.text}</label>
      </div>
    );
  }

}

export default Radio;
