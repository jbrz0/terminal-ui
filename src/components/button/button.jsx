import React from 'react';
import cx from 'classnames';
import s from './button.scss';

export default class Button extends React.Component {
  render() {
    return(
      <div className={s.buttonRoot}>
        <a href={this.props.buttonLink} className={s.button}>
          {this.props.buttonText}
        </a>
      </div>
    )
  }
}
