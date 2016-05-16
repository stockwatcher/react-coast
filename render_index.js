
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

var TestCards = React.createClass({
  render: function() {
    return (
      <div className="row">
        <RcCard className="col s12 m6 l3">These cards maintain their aspect ratio.</RcCard>
        <RcCard className="col s12 m6 l3" height="50">You can modify the ratio with the 'height' property (in increments of 5 from 0 - 100 inclusive).</RcCard>
        <RcCard className="col s12 m6 l3" innerClasses="padding-huge">Modifying 'innerClasses' property allows you to change the CSS of the inner container.</RcCard>
        <RcCard className="col s12 m6 l3">Try viewing this page on different screen sizes to see how well these cards work with the grid!</RcCard>
      </div>
    )
  }
});

ReactDOM.render(
  <div>
    <TestButtons />
    <TestCards />
    <RcFooter />
  </div>,
  document.getElementById('container')
);

