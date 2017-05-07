import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

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
    //size:
    large: PropTypes.bool,
    medium: PropTypes.bool,
    normal: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {};

  render() {
    const {
      className, children, theme,
      large, medium, normal, small,
      ...props
    } = this.props;
    return <progress {...props} className={classNames('progress', `is-${theme}`, {
      'is-large': large,
      'is-medium': medium,
      'is-normal': normal,
      'is-small': small,
    }, className)}>
      {children}
    </progress>
  }
}
