import React from 'react';
import cx from 'classnames';
import s from './colorPicker.scss';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';



export default class ColorPicker extends React.Component {
  render() {

    const styles = reactCSS({
      'default': {
        sketchPicker: {
          boxSizing: 'border-box !important',
          width: '100%',
        },
      },
    })

    return(
      <div className={s.colorPickerRoot}>
        <ChromePicker disableAlpha="true" />
      </div>
    )
  }
}
