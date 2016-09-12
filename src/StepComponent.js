import React from 'react';

var StepComponent = React.createClass({
    getDefaultProps: function(){
        return {step: 1};
    },
    render: function(){
        return (
            <p className="Step-p">Step: {this.props.step}</p>
        );
    }
})

export default StepComponent;
