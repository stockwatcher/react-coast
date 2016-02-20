
var TestButtons = React.createClass({
  getInitialState: function() {
    return {
      basicConfirmModalVisible: false,
    }
  },
  showBasicConfirmModal: function() {
    this.setState({
      basicConfirmModalVisible: true,
    });
  },
  render: function() {
    return (
      <div>
        <TestButton onClick={this.showBasicConfirmModal} text="Open BasicConfirmModal" />
        <BasicConfirmModal
          visible={this.state.basicConfirmModalVisible}
          texts={{
            title: "Confirm Modal",
            content: "Example content.",
            close: "Close",
            submit: "Ok"
          }} />
      </div>
    )
  }
});

var TestButton = React.createClass({
  render: function() {
    return (
      <button type="button" className="rc-button" onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
});

ReactDOM.render(
  <div>
    <TestButtons />
    <RcFooter />
  </div>,
  document.getElementById('container')
);

