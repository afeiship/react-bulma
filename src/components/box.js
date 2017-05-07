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
      <div {...props} className={classNames('box', className)}>
        {children}
      </div>
    );
  }
}
