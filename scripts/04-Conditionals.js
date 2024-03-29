var HelloThere = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    isPerson: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      name: 'Alex'
    }
  },

  render: function() {
    var greeting = "World";

    // If object is a person then return the persons name, else 'World'
    if (this.props.isPerson) {
      greeting = (<Person name={this.props.name} />)
    } 
    // Returns the greeting
    return (
      <h1>Hello {greeting} </h1>
    )
  }
});

var Person = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      name: 'Alex'
    }
  },

  render: function() {
    return (
      //This is the name passed in to person 
      <span>{this.props.name}</span>
    )
  }
});


ReactDOM.render(
    <HelloThere name="Abdul" isPerson={true} />,
    document.getElementById('area')
  );