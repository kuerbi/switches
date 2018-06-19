//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { abortGame } from "actions"

type Props = {
  game: any;
  abortGame: any;
}
export class Header extends Component<Props> {
  renderTitle() {
    const { game } = this.props;
    
    if (game === "not_running") {
      return "Switches"
    } else if(game === "running") {
      return "Tap a switch"
    }
  }

  handleAbort(event: any) {
    event.preventDefault();

    this.props.abortGame();
  }

  renderHeaderRight() {
    const { game } = this.props;
    
    if (game === "not_running") {
      return;
    } else if(game === "running") {
      return (
        <div className={"header__right"}>
          <a className={"action"} href="#" onClick={this.handleAbort.bind(this)}>Abort</a>
        </div>
      );
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

function mapDispatchToProps(dispatch) {
  return {
    abortGame: () => dispatch(abortGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
