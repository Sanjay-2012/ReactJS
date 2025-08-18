import React, { Component } from "react";

class Props extends Component {
  render() {
    const { status } = this.props;

   
    const styles = {
      success: { color: "green", fontWeight: "bold" },
      error: { color: "red", fontWeight: "bold" },
      warning: { color: "orange", fontWeight: "bold" },
      default: { color: "black" }
    };

    const appliedStyle = styles[status] || styles.default;

    return (
      <div style={appliedStyle}>
        {status === "success" && "✅ Login Successful"}
        {status === "error" && "❌ Invalid Password"}
        {status === "warning" && "⚠️ Please enter all fields"}
        {!["success", "error", "warning"].includes(status) && "ℹ️ Default message"}
      </div>
    );
  }
}

export default Props;

