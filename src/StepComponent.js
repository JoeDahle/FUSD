import React from 'react';

var StepComponent = React.createClass({
    getInitialState: function(){
        return {step: 2};
    },
    handlePrevClick: function() {
      if(this.state.step > 1){
        console.log(this.state.step);
        // let newStep = this.state.step - 1;
        return this.setState({step: this.state.step - 1});
      }
    },
    handleNextClick: function() {
      if(this.state.step < 3){
        console.log(this.state.step);
        return this.setState({step: this.state.step + 1});
      }
    },
    render: function(){
      return (
        <div>
          <p className="Step_prev-p" onClick={this.handlePrevClick}>Prev</p>
          <p className="Step_current-p">Step: {this.state.step}</p>
          <p className="Step_next-p" onClick={this.handleNextClick}>Next</p>
        </div>
      );
    }
})

export default StepComponent;
