//@flow
import * as React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer, { initialState } from "state/reducers"
import type { State } from "state/reducers"


type Props = {
  children: any,
  initialState?: State
}
export default class Root extends React.Component<Props>{
  static defaultProps = {
    initialState
  }

  render() {
    const store = createStore(reducer, initialState);

    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}
