import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    nodeName: PropTypes.string,
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

    //inverted:
    inverted: PropTypes.bool,

    //size:
    large: PropTypes.bool,
    medium: PropTypes.bool,
    normal: PropTypes.bool,
    small: PropTypes.bool,

    //styled:
    outlined: PropTypes.bool,

    //states:
    link: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    active: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    nodeName: 'a'
  };


  getChildren() {
    const {
      className, children, theme, nodeName,
      large, medium, normal, small,
      outlined, inverted, hovered, focused, active, link, loading, ...props
    } = this.props;

    return React.createElement(nodeName, {
      className: classNames('button', `is-${theme}`, {
        'is-large': large,
        'is-medium': medium,
        'is-normal': normal,
        'is-small': small,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-hovered': hovered,
        'is-focused': focused,
        'is-active': active,
        'is-link': link,
        'is-loading': loading
      }, className),
      children,
      ...props
    })
  }

  render() {
    return this.getChildren();
  }
}
