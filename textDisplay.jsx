class TextDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.display) {
      return (<p>{this.props.message}</p>);
    }
    return (<p></p>);
  }
}


window.TextDisplay = TextDisplay;