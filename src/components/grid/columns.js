import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    is: PropTypes.oneOf([
      '',
      'desktop',
      'mobile',
    ])
  };

  static defaultProps = {
    is: ''
  };

  render() {
    const {children, is, className} = this.props;
    const isCls = is ? `is-${is}` : '';
    return (
      <div className={classNames('columns', className)}>{children}</div>
    );
  }
}

