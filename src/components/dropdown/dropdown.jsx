import React from 'react';
import s from './dropdown.scss';

// import Select from 'react-select'; - uninstall this
// import 'react-select/dist/react-select.css';
// import '../../../public/react-select.css';
//
// import Dropdown from './dropdown.jsx';


// const options = [
//     { value: 'one', label: 'One' },
//     { value: 'two', label: 'Two' }
// ];
//
// function logChange(val) {
//     console.log("Selected: " + val);
// }

class Dropdown extends React.Component {


  render() {

    return (
      <div className={s.dropdownRoot}>


          <input className={s.dropdownToggle} type="text" />
          <div className={s.dropdownText}>Account</div>
          <ul className={s.dropdownContent}>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Log out</a></li>
          </ul>

      </div>
    );
  }
}

export default Dropdown;
