import React, { Component } from 'react';
import Main from './components/MainComponet';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
     <BrowserRouter>
      <div className="App">
      <script id="convertful-api" src="https://app.convertful.com/Convertful.js?owner=31908" async></script>
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
