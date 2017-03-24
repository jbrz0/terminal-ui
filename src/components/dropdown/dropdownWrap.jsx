import React from 'react';
import s from './dropdown.scss';

class Dropdown extends React.Component {

  render() {
    return (
      <div className={s.dropdownRoot}>
        <input className={s.dropdownToggle} type="text" />
        <div className={s.dropdownText}>Account</div>
        <ul className={s.dropdownContent}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
