import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {className, children} = this.props;
    return (
      <div className={classNames('level-left', className)}>{children}</div>
    );
  }
}
