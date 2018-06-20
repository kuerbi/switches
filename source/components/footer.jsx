//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { newGame } from "actions"
import type { GameState } from "reducers/game"

type Props = {
  game: GameState,
  counter: number,
  newGame: () => void
}
export class Footer extends Component<Props> {
  renderButtonOrButtonsPressed() {
    const game: GameState = this.props.game;

    if(game === "not_running") {
      return <button className={"button"} onClick={this.props.newGame}>New game</button>
    } else {
      return <span className={"footer__text"}>{this.props.counter + " buttons pressed"}</span>
    }
  }

  render() {
    return (
      <div className={"footer"}>
        {this.renderButtonOrButtonsPressed()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newGame: () => dispatch(newGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
