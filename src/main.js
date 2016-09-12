import React from 'react';
import ReactDOM from 'react-dom';
import config from './data.json';
import StepComponent from './StepComponent';
import ContentComponent from './ContentComponent';

let data = config;

var App = React.createClass({
    getDefaultProps: function(){
        return ({
            school: 'anthem',
            step: 1,
        });
    },
    render: function(){
        return (
            <main className="App_main">
                <div className="App_main-step">{<StepComponent step={this.props.step} />}</div>
                <div className="App_main-prev">Prev</div>
                <div className="App_main-next">Next</div>
                <div className="App_main-content">{<ContentComponent data={data}  />}</div>
            </main>);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      <App />,
    document.getElementById('app')
  );
});
