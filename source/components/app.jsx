//@flow
import * as React from "react"
import Root from "./root"
import Counter from "./counter"
import Game from "./game"

type Props = {}
export default class App extends React.Component<Props> {
  render() {
    return (
      <Root>
        <Game></Game>
      </Root>
    );
  }
}
