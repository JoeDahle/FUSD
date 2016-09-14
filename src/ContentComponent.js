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
              <option value="select" disabled>Select</option>
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
            <p>Select the 'Publish to FTP' option</p>
            <p>Select Edit</p>
          </div>
        );
      };
      if(this.props.slideProp == 3) {
        let schoolNodes = this.props.dataProp.school.map(function(data, i){
          if(that.state.value == data.abbr){
            path = data.path;
            return (
              <table className="Content-step-3">
                <caption className="Content-step-3-header" key={"op-" + i}>{data.name}</caption>
                <tr className="Content-step-3-table">
                  <th className="Content-step-3-table-header">Location</th>
                  <td className="Content-step-3-desc">{data.name}</td>
                </tr>
                <tr className="Content-step-3-table">
                  <th className="Content-step-3-table-header">Server</th>
                  <td className="Content-step-3-desc">10.3.0.50</td>
                </tr>
                <tr className="Content-step-3-table">
                  <th className="Content-step-3-table-header">Port</th>
                  <td className="Content-step-3-desc">21</td>
                </tr>
                <tr className="Content-step-3-table">
                  <th className="Content-step-3-table-header">User/Pass</th>
                  <td className="Content-step-3-desc">Your user/pass</td>
                </tr>
              </table>
            );
          }
        });
        return (
            <div>{schoolNodes}</div>
        );
      };
      if(this.props.slideProp == 4) {
        return (
          <table className="Content-step-4">
            <caption className="Content-step-4-caption">Select your newly created FTP site from the dropdown menu</caption>
            <tr className="Content-step-4-table">
              <th className="Content-step-4-header">FTP File Path</th>
              <td className="Content-step-4-desc">/{this.state.value}/Slider/</td>
            </tr>
            <i className="fa fa-check-circle Content-step-4-done"><span>Done!</span></i>
          </table>
        );
      }
    }
});

export default ContentComponent;
