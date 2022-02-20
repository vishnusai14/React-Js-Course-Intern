import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(err) {
    this.setState((prevState) => ({
      ...prevState,
      hasError: true,
    }));
  }
  render() {
    return (
      <>
        {this.state.hasError && <p>SomeThing Went Wrong</p>}
        {!this.state.hasError && this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
