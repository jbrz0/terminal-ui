import React from 'react';
import cx from 'classnames';
import s from './checkboxes.scss';

class Checkbox extends React.Component {

  render() {
    return (
      <div className={s.checkboxWrap}>
        <input type="checkbox" id={this.props.id} name={this.props.name} />
        <label htmlFor={this.props.id}><span></span>{this.props.text}</label>
      </div>
    );
  }

}

export default Checkbox;
