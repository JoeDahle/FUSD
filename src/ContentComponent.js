import React from 'react';

import style from './sass/content.scss';

var ContentComponent = React.createClass({
  getInitialState: function() {
    return {
      value: "select",
      abbr: "abbr"
    }
  },

  propTypes: {
    onChange: React.PropTypes.func
  },

  handleNextClick: function(){
    return this.props.onChange()
  },

  change: function(event) {
    let that = this;
    this.handleNextClick();
    this.setState({value: event.target.value});
    // console.log(this.props.dataProp);
    this.props.dataProp.school.map(function(data, i){
      if(data.name == event.target.value){
        that.setState({abbr: data.abbr})
      }
    });
    return true;
  },

  render: function(){
    let that = this;
    var path;
    if(this.props.slideProp == 1) {
      let schoolNodes = this.props.dataProp.school.map(function(data, i){
        return <option key={"op-" + i} value={data.name}>{data.name}</option>
      });

      return(
        <div className="Content-step-1">
          <h1 className="Content-step-1-header">Choose Your School</h1>
          <select className="Content-step-1-select" onChange={this.change}
            value={this.state.value}>
            <option value="select" disabled>Select</option>
            {schoolNodes}
          </select>
        </div>
      )
    }

    if(this.props.slideProp == 2) {
      let schoolNodes = this.props.dataProp.school.map(function(data, i){
        if (that.state.value == data.name) {
          return (
            <h1 className="Content-step-2-header" key={"op-" + i}>{data.name}</h1>
          )
        }
      });

      return(
        <div className="Content-step-2">
          {schoolNodes}
          <p>Open the WOWSlider application</p>
          <p>Open 'Publish'</p>
          <p>Select the 'Publish to FTP' option</p>
          <p>Select Edit</p>
          <button className="button" onClick={this.handleNextClick}>Next</button>
        </div>
      );
    }

    if(this.props.slideProp == 3) {
      let schoolNodes = this.props.dataProp.school.map(function(data, i){
        if(that.state.value == data.name){
          path = data.path;

          return (
            <table key={i} className="Content-step-3">
              <caption className="Content-step-3-header" key={"op-" + i}>{data.name}</caption>
              <p>Click 'Add New Location'</p>
              <tr className="Content-step-3-table">
                <th className="Content-step-3-table-header">Location Name</th>
                <td className="Content-step-3-desc">{data.name}</td>
              </tr>
              <tr className="Content-step-3-table">
                <th className="Content-step-3-table-header">Server FTP://</th>
                <td className="Content-step-3-desc">10.3.0.50</td>
              </tr>
              <tr className="Content-step-3-table">
                <th className="Content-step-3-table-header">Port</th>
                <td className="Content-step-3-desc">21</td>
              </tr>
              <tr className="Content-step-3-table">
                <th className="Content-step-3-table-header">Username/Password</th>
                <td className="Content-step-3-desc">Your username/password</td>
              </tr>
            </table>
          );
        }
      });
      if(that.state.value == 'select'){
        return (
          <div className="Content-step-3-no-school">
            <p>You didn't select a school.</p>
          </div>
        );
      }

      return (
        <div>
          {schoolNodes}
          <button className="button button-3" onClick={this.handleNextClick}>Next</button>
        </div>
      );
    }

    if(this.props.slideProp == 4) {
      return (
        <div className="Content-step-4-container">
          <p>Click 'Close'</p>
          <p>Select '{that.state.value}' from the dropdown</p>
          <p>Find 'FTP Folder Path' and enter: </p>
          <table className="Content-step-4">
            <tbody>
              <tr className="Content-step-4-table">
                <th className="Content-step-4-header">FTP Folder Path</th>
                <td className="Content-step-4-desc">/{this.state.abbr}/Slider/</td>
              </tr>
            </tbody>
          </table>
          <p>Click 'Apply/Publish'</p>
          <button className="button button-4" onClick={this.handleNextClick}>Next</button>
        </div>
      );
    }

    if(this.props.slideProp == 5) {
      return (
        <div className="Content-step-5">
          <p><i className="fa fa-check-circle checkMark"></i></p>
          <p className="Content-step-5-done">Done!</p>
        </div>
      );
    }
  }
});


export default ContentComponent;
