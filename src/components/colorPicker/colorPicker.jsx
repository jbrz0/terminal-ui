import React from 'react';
import cx from 'classnames';
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
      <div>
        <ChromePicker disableAlpha="true" />
      </div>
    )
  }
}
