import React from 'react';
import ContentComponent from './ContentComponent';

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
        <div>
          <p className="Step_prev-p" onClick={this.handlePrevClick}>Prev</p>
          <p className="Step_current-p">Step: {this.state.step}</p>
          <p className="Step_next-p" onClick={this.handleNextClick}>Next</p>
          <ContentComponent
            dataProp={this.props.data}
            slideProp={this.state.step} />
        </div>
      );
    }
})

export default StepComponent;
