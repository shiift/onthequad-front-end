'use strict';

var React = require('react');
var NavFilters = require('./NavFilters');
var {Row, Col} = require('react-bootstrap');
var config = require('../../config');
var DesktopNavFilters;

module.exports = DesktopNavFilters = React.createClass({
    render: function () {
    	var category = this.props.categoryModel ?
    		config.categories[this.props.categoryModel.category] : "";
        return (
        	<div className="container">
                <Row>
                    <Col md={4} lg={6}>
                        <div className="navbar-brand navbar-category">
                            <p className="category-title">{category}</p>
                        </div>
                    </Col>
                    <Col md={8} lg={6}>
                        <NavFilters desktop {...this.props} />
                    </Col>
                </Row>
            </div>
        );
    }
});