import React, { Component } from "react"
import { connect } from "react-redux"

export class Header extends Component {
  renderTitle() {
      const { gameState } = this.props;

      if (gameState === "not_running") {
          return "Switches"
      } else if(gameState === "running") {
          return "Tap a switch"
      }
  }

  render() {
    return (
      <div className={"header"}>
        <h1 className={"title"}>{this.renderTitle()}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState
    }
}

export default connect(mapStateToProps)(Header);
