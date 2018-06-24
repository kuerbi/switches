//@flow
import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import type { State } from "state/reducers"
import { newGame } from "state/actions"
import { templates } from "tiles"

type ReduxMappedProps = {
  newGame: any
}
type OwnProps = {
  children: any,
  className?: string
}
type Props = ReduxMappedProps & OwnProps;

export class NewGameButton extends React.Component<Props> {
  static defaultProps = {
    newGame: (tileId: number) => {}
  }

  randomLevel(): number {
    return 1 + Math.floor(Math.random() * (templates.length - 1));
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.props.newGame(this.randomLevel());
  }

  render() {
    const { className, children } = this.props;

    return (
      <button className={className} onClick={this.handleClick}>{children}</button>
    );
  }
}

const mapDispatch = {
  newGame: (tileId: number) => newGame(tileId)
};

export default connect(null, mapDispatch)(NewGameButton);
