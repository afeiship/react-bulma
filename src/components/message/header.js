import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {className, children, ...props} = this.props;
    return (
      <header {...props} className={classNames('message-header', className)}>{children}</header>
    );
  }
}
