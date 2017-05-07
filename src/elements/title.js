import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  static propTypes = {
    nodeName: PropTypes.string,
    subtitle: PropTypes.bool,
    spaced: PropTypes.bool,
    size: PropTypes.oneOf([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ])
  };

  static defaultProps = {};

  get nodeName() {
    const {size, nodeName} = this.props;
    return nodeName || `h${size}`;
  }

  get children() {
    const {className, size, subtitle, spaced, nodeName, ...props} = this.props;
    return React.createElement(this.nodeName, {
      className: classNames('title',
        `is-${size}`,
        {
          'is-subtitle': subtitle,
          'is-spaced': spaced,
        },
        className),
      ...props
    })
  }

  render() {
    return this.children;
  }
}
