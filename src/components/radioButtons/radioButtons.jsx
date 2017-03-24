import React from 'react';
import cx from 'classnames';
import s from './radioButtons.scss';

export default class RadioButtons extends React.Component {
  render() {
    return(
      <form>
        <div className={s.radioAllWrap}>
          {this.props.children}
        </div>
      </form>
    )
  }
}
