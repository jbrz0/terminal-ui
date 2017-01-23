import React from 'react';
import Select from 'react-select';
import s from './drop.scss';

const STATES = require('./states.jsx');

var Dropdown = React.createClass({
	displayName: 'StatesField',
	propTypes: {
		label: React.PropTypes.string,
		searchable: React.PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'States:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			country: 'US',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'us-states',
			clearable: true,
		};
	},
	switchCountry (e) {
		var newCountry = e.target.value;
		console.log('Country changed to ' + newCountry);
		this.setState({
			country: newCountry,
			selectValue: null
		});
	},
	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	},
	focusStateSelect () {
		this.refs.stateSelect.focus();
	},
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render () {
		var options = STATES[this.state.country];
		return (
			<div className={s.dropdownWrap}>
				<h3 className={s.sectionHeading}>{this.props.label}</h3>
				<Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

			</div>
		);
	}
});


module.exports = Dropdown;
