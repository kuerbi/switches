//@flow
import * as React from "react"
import { connect } from "react-redux"
import type { State } from "state/reducers"

type Props = {
  counter: number
}
export class Counter extends React.Component<Props> {
  render() {
    return (
      <span className="counter">{this.props.counter + " buttons pressed"}</span>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter);
