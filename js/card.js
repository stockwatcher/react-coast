
window.RcAspectContainer = React.createClass({
  render: function() {
    var containerClasses =        'rc-aspect-container ' +          this.props.className;
    var dummyClasses =            'rc-aspect-container-dummy-' +    this.props.height;
    var contentContainerClasses = 'rc-aspect-container-content ' +  this.props.containerClasses;
    if (this.props.onClick != null) {
      contentContainerClasses = 'clickable ' + contentContainerClasses;
    }
    return (
      <div className={containerClasses}>
        <div className={dummyClasses}></div>
        <div className={contentContainerClasses} onClick={this.props.onClick}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

window.RcCard = React.createClass({
  render: function() {
    var containerClasses = 'rc-card-container ' + (this.props.className || 'rc-width-100');
    var height = this.props.height || "100";
    var innerClasses = this.props.innerClasses || 'rc-padding-normal';
    return (
      <div className={containerClasses}>
        <RcAspectContainer className="rc-card" height={height} containerClasses={innerClasses} onClick={this.props.onClick}>
          {this.props.children}
        </RcAspectContainer>
      </div>
    )
  }
});

