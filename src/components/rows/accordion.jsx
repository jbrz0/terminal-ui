import React from 'react';
import s from './rows.scss';

var Accordion = React.createClass({
  getInitialState: function() {
    return {
      selected: this.props.selected
    };
  },
  render: function() {
    var children = React.Children.map(
    this.props.children, this.enhanceSection);
    return (
      <div className={s.accordion}>
        {children}
      </div>
    );
  },
  enhanceSection: function(child) {
    var selectedId = this.state.selected,
    id = child.props.id;
    return React.cloneElement(child, {
      key: id,
      _selected: id === selectedId,
      _onSelect: this.onSelect,
    });
  },
  onSelect: function(id) {
    this.setState({selected: id});
  }
});

Accordion.Section = React.createClass({
  render: function() {
    var className = s.accordionSection + (this.props._selected ? s.selected : '');
    return (
      <div className={className}>
        <h3 onClick={this.onSelect} className={s.sectionSelectTitle}>
            {this.props.title}
        </h3>
        <div className={s.body}>
            {this.props.children}
        </div>
      </div>
    );
  },
  onSelect: function() {
    this.props._onSelect(this.props.id);
  }
});

export default Accordion;
