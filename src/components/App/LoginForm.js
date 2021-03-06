import {connect} from 'react-redux';
import React, { PropTypes } from 'react';

import shouldComponentUpdate from '../../client/utils/shouldComponentUpdate';

// const {string, object} = React.PropTypes;

const connectTemplate = connect(
  // (state, ownProps) => {
  //   return {
  //     ...ownProps,
  //   }
  // }
  // dispatch => ({
  //     dispatchAction: (abc) => {
  //         dispatch({
  //             type: 'user/TYPE',
  //             payload: {abc},
  //         })
  //     },
  // })
)

class Template extends React.Component {
  // static propTypes = {
  // }

  // static defaultProps = {
  // }

  // constructor() {
  //     super()
  //     this.state = {}
  // }


  componentWillMount() {
  }

  componentDidMount() {
  }

  // componentWillReceiveProps(nextProps) {
  // }

  // This is based on react PureRenderMixin, it makes the component very efficient by not re-rendering unless something in the props or state changed.. PureRenderMixin comes highly recommended.  shouldComponentUpdate adds a debug boolean to show you why your component rendered (what changed, in the browser console type: steemDebug_shouldComponentUpdate=true).
  shouldComponentUpdate = shouldComponentUpdate(this, 'Template') // eslint-disable-line

  // componentWillUpdate(nextProps, nextState) {
  //      // Can't call this.setState() here, use componentWillReceiveProps instead
  // }

  // componentDidUpdate(prevProps, prevState) {
  // }

  componentWillUnmount() {
  }

  render() {
    // const {} = this.props
    return (
      <span />
    )
  }
}

export default connectTemplate(Template);
