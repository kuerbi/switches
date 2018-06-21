//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { abortGame, restartGame } from "actions"
import type { Dispatch } from "redux"
import type { GameState } from "reducers/game"

type Props = {
  game: any;
  abortGame: () => void;
  restartGame: () => void;
}
export class Header extends Component<Props> {
  renderTitle() {
    const { game } = this.props;
    
    if (game === "not_running") {
      return "Switches"
    } else if(game === "running") {
      return "Tap a switch"
    } else if(game === "victory") {
      return "Victory"
    }
  }

  handleAbort(event: any) {
    event.preventDefault();

    this.props.abortGame();
  }

  handleRestart(event: any) {
    event.preventDefault();

    this.props.restartGame();
  }

  renderHeaderRight() {
    const game: GameState = this.props.game;

    switch(game) {
      case "not_running": {
        return;
      };
      case "running": {
        return (
          <div className={"header__right"}>
            <a className={"action"} href="#" onClick={this.handleAbort.bind(this)}>Abort</a>
          </div>
        );
      }
      case "victory": {
        return (
          <div className={"header__right"}>
            <a className={"action"} href="#" onClick={this.handleRestart.bind(this)}>Restart</a>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className={"header"}>
        <h1 className={"title"}>{this.renderTitle()}</h1>
        {this.renderHeaderRight()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    abortGame: () => dispatch(abortGame()),
    restartGame: () => dispatch(restartGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
