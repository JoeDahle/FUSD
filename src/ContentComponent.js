import React from 'react';

import style from './sass/content.scss';

var ContentComponent = React.createClass({
    getInitialState: function() {
      return {
        value: "select"
      }
    },
    change: function(event) {
      return this.setState({value: event.target.value});
    },
    render: function(){
      let that = this;
      var path;
      if(this.props.slideProp == 1) {
        let schoolNodes = this.props.dataProp.school.map(function(data, i){
            return <option key={"op-" + i} value={data.abbr}>{data.name}</option>
        });
        return(
          <div className="Content-step-1">
            <h1 className="Content-step-1-header">Choose Your School</h1>
            <select className="Content-step-1-select" onChange={this.change} value={this.state.value}>
              {schoolNodes}
            </select>
          </div>
        )
      };
      if(this.props.slideProp == 2) {
        let schoolNodes = this.props.dataProp.school.map(function(data, i){
            if (that.state.value == data.abbr) {
              return (
                  <h1 className="Content-step-2-header" key={"op-" + i}>{data.name}</h1>
                )
            }
        });
        return(
          <div className="Content-step-2">
              {schoolNodes}
            <p>Open the WOWSlider application</p>
            <p>Open the publish tab</p>
          </div>
        );
      };
      if(this.props.slideProp == 3) {
        let schoolNodes = this.props.dataProp.school.map(function(data, i){
          if(that.state.value == data.abbr){
            path = data.path;
            return (
              <div className="Content-step-3" key={i}>
                <h1 className="Content-step-3-header" key={"op-" + i}>{data.name}</h1>
                <p>Location: {data.name}</p>
                <p>Server: '10.3.0.50'</p>
                <p>Port: '21'</p>
                <p>Enter Your Username & Password</p>
              </div>
            );
          }
        });
        return (
            <div>{schoolNodes}</div>
        );
      };
      if(this.props.slideProp == 4) {
        return (
          <div className="Content-step-4">
            <p>Select your newly created FTP site from the dropdown menu</p>
            <p>Your FTP foler file path is: /{this.state.value}/Slider/wowslider.html</p>
          </div>
        );
      }
    }
});

export default ContentComponent;
