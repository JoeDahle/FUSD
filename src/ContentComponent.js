import React from 'react';

var ContentComponent = React.createClass({
    render: function(){
        var schoolNodes = this.props.data.school.map(function(school, i){
            console.log(school);
            return (
                <div key={i}>{school[i].name}</div>
            );
        });
        return (
            <h1>{schoolNodes}</h1>
        );
    }
});

export default ContentComponent;
