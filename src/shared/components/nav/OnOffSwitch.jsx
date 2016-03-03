'use strict';

var React = require('react');
var NavFilters = require('./NavFilters');
var {Row, Col} = require('react-bootstrap');
var config = require('../../config');
var OnOffSwitch = require('./OnOffSwitch');
var DesktopNavFilters;

module.exports = DesktopNavFilters = React.createClass({
    getInitialState: function() {
        return {checked: true};
    },
    toggleCheck: function () {
        this.setState({checked: !this.state.checked});
    },
    render: function () {
        return (
	    	<div className="onoffswitch">
	            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
	                checked={this.state.checked} onChange={this.toggleCheck} />
	            <label className="onoffswitch-label">
	                <span className="onoffswitch-inner"></span>
	                <span className="onoffswitch-switch"></span>
	            </label>
	        </div>
        );
    }
});