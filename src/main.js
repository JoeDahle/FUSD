import React from 'react';
import ReactDOM from 'react-dom';
import config from './data.json';
import StepComponent from './StepComponent';
import ContentComponent from './ContentComponent';

let data = config;

var App = React.createClass({
    render: function(){
        return (
            <main className="App_main">
                <div className="App_main-step">{<StepComponent
                  step={this.props.step}
                  data={data} />}</div>
            </main>);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      <App />,
    document.getElementById('app')
  );
});
