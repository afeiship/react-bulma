import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf([
      'white',
      'light',
      'dark',
      'black',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
    ]),
  };

  static defaultProps = {};

  render() {
    const {className, theme, children, ...props} = this.props;
    return (
      <div {...props} className={classNames('message', `is-${theme}`, className)}>{children}</div>
    );
  }
}
