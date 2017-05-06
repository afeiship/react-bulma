import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    is: PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'danger'
    ])
  };

  static defaultProps = {
    is: 'success'
  };

  render() {
    const {className, is, children, ...props} = this.props;
    return (
      <div {...props} className={classNames('notification', `is-${is}`, className)}>
        {children}
      </div>
    );
  }
}
