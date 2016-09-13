import React from 'react';

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
      let path;
      if(this.props.slideProp == 1) {
        return(
          <div>
            <h1>Choose Your School:</h1>
            <select onChange={this.change} value={this.state.value}>
              <option value="an">Anthem</option>
              <option value="mg">Magma Ranch</option>
              <option value="fk8">Florence K-8</option>
              <option value="wb">Walker Butte</option>
            </select>
          </div>
        )
      };
      if(this.props.slideProp == 2) {
        return(
          <div>
            <p>Open the WOWSlider application</p>
            <p>Open the publish tab</p>
          </div>
        );
      };
      if(this.props.slideProp == 3) {
        var schoolNodes = this.props.dataProp.school.map(function(data, i){
          if(that.state.value == data.abbr){
            path = data.path;
            return (
              <div key={i}>
                <h1>{data.name}</h1>
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
          <div>
            <p>Select your newly created FTP site from the dropdown menu</p>
            <p>Your FTP foler file path is: /{this.state.value}/Slider/wowslider.html</p>
          </div>
        );
      }
    }
});

export default ContentComponent;
