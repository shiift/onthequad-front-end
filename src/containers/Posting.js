import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setApp, setCategory, resetPosting } from '../actions';
import { Row, Col } from 'react-bootstrap';
import PostingForm from './PostingForm';

class Posting extends Component {
  componentWillMount() {
    this.props.setCategory(),
    this.props.setApp();
    this.props.resetPosting();
  }

  render() {
    return <div>
      <Row>
        <Col mdOffset={3} md={6} xsOffset={1} xs={10}><h2 className="centertxt">New Posting</h2></Col>
      </Row>
      <PostingForm/>
    </div>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (id) => dispatch(setCategory('Posting')),
    setApp: () => dispatch(setApp('POSTING')),
    resetPosting: () => dispatch(resetPosting())
  };
};

export default connect(()=>({}), mapDispatchToProps)(Posting);