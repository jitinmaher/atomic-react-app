import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { simpleAction } from '../../Environment/User/actions/simpleAction';
import { makeSelectAuthor } from '../../Environment/User/selectors/selector';
import './App.module.scss';

class App extends Component {

  componentDidMount() {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = createStructuredSelector({
  author: makeSelectAuthor,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
