import React, { Component } from "react"
import { connect } from "react-redux"

export class Header extends Component {
  renderTitle() {
      const { game } = this.props;

      if (game === "not_running") {
          return "Switches"
      } else if(game === "running") {
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
        game: state.game
    }
}

export default connect(mapStateToProps)(Header);
