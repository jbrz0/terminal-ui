import React from 'react';
import Accordion from './collapsiblewrap.jsx';
import s from './rows.scss';

export default class Rows extends React.Component {

  render() {

    return (
        <div>

          <Accordion>
            <div triggerText="A nifty React accordion component">
              <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
            </div>

            <div triggerText="What the difference?" triggerTextWhenOpen="THAT is the difference!">
              <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
            </div>

            <div triggerText="I'm responsive and I have a little secret. Look inside.">
              <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>
            </div>
          </Accordion>

        </div>
      );
    }
}
