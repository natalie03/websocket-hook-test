import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Websocket from 'react-websocket';

import { NameForm } from '_components';
import { changeScreen, saveName } from '_actions';

class ApplicationLayout extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object),
    name: PropTypes.string,
    pageIndex: PropTypes.number,
  };

  static defaultProps = {
    data: {},
    name: '',
    pageIndex: 0
  };

  static mapDispatchToProps = {
    changeScreen, 
    saveName
  };

  static mapStateToProps(state) {
    const {
      appReducer: {
        data, 
        name, 
        pageIndex
      }
    } = state;
    return {
      data,
      name,
      pageIndex
    };
  }

  handleData = (data) => {
    console.log('happening');
    let result = JSON.parse(data);
    console.log(result);
  }

  handleSubmit = (name) => {
    const { changeScreen, saveName } = this.props;
    saveName(name);
    changeScreen(1);
  }

  render() {
    const { data, name, pageIndex } = this.props;
    const page = data.pages[pageIndex];
    return (
      <div>
        <h1>{page.title}</h1>
        <p>{page.content} {name}</p>
        {pageIndex === 0 &&
          <NameForm button_text={page.button_text} onSubmit={this.handleSubmit} />
        }
        <Websocket url='ws://localhost:29672' onMessage={this.handleData}/>
      </div>
    );
  }
}

export default connect(
  ApplicationLayout.mapStateToProps,
  ApplicationLayout.mapDispatchToProps
)(ApplicationLayout);
