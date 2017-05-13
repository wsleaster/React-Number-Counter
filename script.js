var CountChallenge = React.createClass({
  
  //sets the count to 0 by default
  getInitialState: function() {
    return {
      count: 0
    };
  },
  
  //increase decrease count
  increaseCountByOne: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  increaseCountByFive: function() {
    this.setState({
      count: this.state.count + 5
    });
  },
  increaseCountByTen: function() {
    this.setState({
      count: this.state.count + 10
    });
  },
  decreaseCountByOne: function() {
    this.setState({
      count: this.state.count - 1
    });
  },
  decreaseCountByFive: function() {
    this.setState({
      count: this.state.count - 5
    });
  },
  decreaseCountByTen: function() {
    this.setState({
      count: this.state.count - 10
    });
  },
  //renders HTML 
  render: function() {
    return (
      <div className = 'container'>
        <h1> Count: {this.state.count}</h1>
        <button onClick={this.increaseCountByOne} className = 'btn btn-primary'>
          + 1
        </button>
        <button onClick = {this.increaseCountByFive} className = 'btn btn-warning'>
          + 5
        </button>
        <button onClick = {this.increaseCountByTen} className = 'btn btn-danger'>
          + 10
        </button>
      <div>
        <button onClick={this.decreaseCountByOne} className = 'btn btn-primary'>
          - 1
        </button>
        <button onClick = {this.decreaseCountByFive} className = 'btn btn-warning'>
          - 5
        </button>
        <button onClick = {this.decreaseCountByTen} className = 'btn btn-danger'>
          - 10
        </button>
      </div>
        </div>
    );
  }
});

//puts it into HTML
ReactDOM.render(<CountChallenge />, document.getElementById("app"));