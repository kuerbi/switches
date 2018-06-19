//@flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { newGame } from "actions"

type Props = {
  newGame: any
}
export class Footer extends Component<Props> {
  render() {
    return (
      <div className={"footer"}>
        <button className={"button"} onClick={this.props.newGame}>New game</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newGame: () => dispatch(newGame())
  }
}

export default connect(null, mapDispatchToProps)(Footer)
