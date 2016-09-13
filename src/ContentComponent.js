import React from 'react';

var ContentComponent = React.createClass({
    render: function(){
      let that = this;
      var schoolNodes = this.props.dataProp.school.map(function(data, i){
          if(that.props.schoolProp == data.listName){
            return (
              <div>
                <h1 key={i}>{data.name}</h1>
                <p>FTP Filepath: {data.path}</p>
                <p>Server: '10.3.0.50'</p>
                <p>Port: '21'</p>
              </div>
            );
          }
      });
      return (
          <div>{schoolNodes}</div>
      );
    }
});

export default ContentComponent;
