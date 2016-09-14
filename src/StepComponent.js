import React from 'react';
import ContentComponent from './ContentComponent';

import style from './sass/step.scss';

var StepComponent = React.createClass({
    getInitialState: function(){
        return {step: 1};
    },
    handlePrevClick: function() {
      if(this.state.step > 1){
        return this.setState({step: this.state.step - 1});
      }
    },
    handleNextClick: function() {
      if(this.state.step < 4){
        return this.setState({step: this.state.step + 1});
      }
    },
    render: function(){
      return (
        <div className="Step_Component">
          <div className="Step_Component-nav">
            <span className="Step_prev-p" onClick={this.handlePrevClick}>
              <i className="fa fa-arrow-left" aria-hidden="true">  </i>
            </span>
            <span className="Step_current-p">  Step  {this.state.step}  </span>
            <span className="Step_next-p" onClick={this.handleNextClick}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </div>
        <hr></hr>
        <ContentComponent
          dataProp={this.props.data}
          slideProp={this.state.step} />
        </div>
      );
    }
})

export default StepComponent;
