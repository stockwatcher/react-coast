
/**
 * @state {
 *  visible: boolean
 *  open(): Opens the modal.
 *  close(): Closes the modal.
 * }
 * @define onOpen(): Optional callback after modal is opened.
 * @define onClose(): Optional callback after modal is closed.
 */
var BaseModalMixin = {
  getInitialState: function() {
    var self = this;
    return {
      visible: this.props.visible,
      open: function() {
        self.setState({
          visible: true,
          transition: 'appear'
        });
        if (self.onOpen) self.onOpen();
      },
      close: function() {
        self.setState({
          visible: false,
          transition: 'disappear'
        });
        if (self.onClose) self.onClose();
      },
    }
  },
  _updateModal: function() {
    var self = this,
        $element = $(React.findDOMNode(this));
    if (self.state.visible) {
      $element.openModal({
        complete: function() {
          self.state.close();
        }
      });
    } else {
      $element.closeModal();
    }
  },
  componentDidMount: function() {
    this._updateModal();
  },
  componentDidUpdate: function(newProps, newStates) {
    this._updateModal();
  },
  componentWillReceiveProps: function(nextProps) {
    var transition = '';
    if (this.state.visible && !nextProps.visible) {
      transition = 'appear';
    } else if (!this.state.visible && nextProps.visibile) {
      transition = 'disappear';
    }
    this.setState({
      visible: nextProps.visible,
      transition: transition
    });
  }
};

/**
 * @prop texts: (see BasicConfirmModalContent)
 * @prop next(): (see BasicConfirmModalContent)
 */
var BasicConfirmModal = React.createClass({
  mixins: [BaseModalMixin],
  onClose: function() {
    // Do nothing
  },
  render: function() {
    return (
      <div className="confirm-modal">
        <BasicConfirmModalContent
          modal={this.state}
          texts={this.props.texts} />
      </div>
    )
  }
});

/**
 * @prop texts: {
 *  title: string
 *  content: string
 *  close: string
 *  submit: string
 * }
 * @prop next(): Function to execute on submit.
 */
var BasicConfirmModalContent = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.modal.close();
    return;
  },
  render: function() {
    return (
      <form className="modal-content" onSubmit={this.handleSubmit}>
        <h5>{this.props.texts.title}</h5>
        <div className="modal-body">
          {this.props.texts.content}
        </div>
        <BasicModalFooter
          submitText={this.props.texts.submit}
          onSubmit={this.handleSubmit}
          closeText={this.props.texts.close}
          onClose={this.props.modal.close} />
      </form>
    )
  }
});

/**
 * @prop submitText: string
 * @prop onSubmit(): callback after submit
 * @prop closeText: string
 * @prop onClose: callback after close
 */
var BasicModalFooter = React.createClass({
  render: function() {
    return (
      <div className="modal-footer">
        <button type="button" className="waves-effect waves-red close-button" onClick={this.props.onClose}>{this.props.closeText}</button>
        <button type="submit" className="waves-effect waves-green submit-button" onClick={this.props.onSubmit}>{this.props.submitText}</button>
      </div>
    )
  }
});

