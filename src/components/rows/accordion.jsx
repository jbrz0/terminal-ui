import React from 'react';
import s from './rows.scss';

var Accordion = React.createClass({
    getInitialState: function() {
        // we should also listen for property changes and reset the state
        // but we aren't for this demo
        return {
            // initialize state with the selected section if provided
            selected: this.props.selected
        };
    },

    render: function() {
        // enhance the section contents so we can track clicks and show sections
        var children = React.Children.map(
            this.props.children, this.enhanceSection);

        return (
            <div className={s.accordion}>
                {children}
            </div>
        );
    },

    // return a cloned Section object with click tracking and "active" awareness
    enhanceSection: function(child) {
        var selectedId = this.state.selected,
            id = child.props.id;

        return React.cloneElement(child, {
            key: id,
            // private attributes/methods that the Section component works with
            _selected: id === selectedId,
            _onSelect: this.onSelect
        });
    },

    // when this section is selected, inform the parent Accordion component
    onSelect: function(id) {
        this.setState({selected: id});
    }
});

// the Accordion Section component
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
        // tell the parent Accordion component that this section was selected
        this.props._onSelect(this.props.id);
    }
});

export default Accordion;
