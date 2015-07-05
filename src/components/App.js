'use strict';

import React from 'react';
import {Link} from 'react-router';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render () {
    return (
      <div>
        <h1><Link to='/'>Instagram</Link></h1>
        {this.props.children}
        <footer>
          <p>Powered by <a href='https://github.com/lukekarrys/universal-static-instagram'>lukekarrys/universal-static-instagram</a></p>
        </footer>
      </div>
    );
  }
});

export default App;
