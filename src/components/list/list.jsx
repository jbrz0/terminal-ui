import React from 'react';
import cx from 'classnames';
import s from './list.scss';


export default class List extends React.Component {
  render() {
    return(
        <div className={s.listWrap}>
        <ul>
          <li>
            <input type="radio" id="sOption2"
                   name="selector" />
            <label htmlFor="sOption2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
            </label>
            <div className={s.check}>
              <div className={s.inside}></div>
            </div>
          </li>

          <li>
            <input type="radio" id="sOption"
                   name="selector" />
            <label htmlFor="sOption">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
            </label>
            <div className={s.check}>
              <div className={s.inside}></div>
            </div>
          </li>
        </ul>

        </div>
    )
  }
}
