class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      message: this.repeatWord()
    };
  }

  repeatWord() {
    var message = '';
    for(var i = 0; i < this.props.number; i++) {
      message += this.props.word + '\n';
    }
    return message;
  }

  toggleDisplay() {
    var temp = !this.state.display;
    this.setState({
      display: temp
    });
  }

  display() {
    if (this.state.display) {
      return this.state.message;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <p onClick = {this.toggleDisplay.bind(this)}>Switch Display</p>
        <div>
          <TextDisplay message={this.state.message} display={this.state.display}/>
        </div>
      </div>
    );
  }

}

window.App = App;