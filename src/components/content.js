import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    //size:
    large: PropTypes.bool,
    medium: PropTypes.bool,
    normal: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {};

  render() {
    const {className, children, large, medium, normal, small, ...props} = this.props;
    return (
      <div {...props} className={classNames('content', {
        'is-large': large,
        'is-medium': medium,
        'is-normal': normal,
        'is-small': small,
      }, className)}>{children}</div>
    );
  }
}
