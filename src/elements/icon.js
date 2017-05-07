import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    //size:
    large: PropTypes.bool,
    medium: PropTypes.bool,
    normal: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {};

  render() {
    const {
      className, name,
      large, medium, normal, small,
      ...props
    } = this.props;
    return <span {...props} className={classNames('icon', {
      'is-large': large,
      'is-medium': medium,
      'is-normal': normal,
      'is-small': small,
    }, className)}>
      <i className={classNames(`fa fa-${name}`)}/>
    </span>
  }
}
