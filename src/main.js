import React from 'react';
import ReactDOM from 'react-dom';
import config from './data.json';
import StepComponent from './StepComponent';
import ContentComponent from './ContentComponent';
import style from './sass/main.scss';

let data = config;

var App = React.createClass({
    render: function(){
      return (
        <main className="App_main">
            <div className="App_main-step">{<StepComponent
              step={this.props.step}
              data={data} />}
            </div>
            
            <span className="withLove">Made with <i className="fa fa-heart"></i> by Joe Dahle</span>
        </main>
      );
    }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
