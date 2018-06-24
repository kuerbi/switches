//@flow
import * as React from "react"
import Counter from "./counter"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer, { initialState } from "state/reducers"
import Game from "./game"

type Props = {}
export default class App extends React.Component<Props> {
  render() {
    const store = createStore(reducer, initialState);

    return (
      <Provider store={store}>
        <Game></Game>
      </Provider>
    );
  }
}
