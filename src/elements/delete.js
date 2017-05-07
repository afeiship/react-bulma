import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    nodeName: PropTypes.string,
    //size:
    large: PropTypes.bool,
    medium: PropTypes.bool,
    normal: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    nodeName: 'span'
  };


  getChildren() {
    const {
      className, children, nodeName,
      large, medium, normal, small,
      ...props
    } = this.props;
    return React.createElement(nodeName, {
      className: classNames('delete', {
        'is-large': large,
        'is-medium': medium,
        'is-normal': normal,
        'is-small': small,
      }, className),
      children,
      ...props
    })
  }

  render() {
    return this.getChildren();
  }
}
