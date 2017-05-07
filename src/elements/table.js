import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    //size:
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    narrow: PropTypes.bool
  };

  static defaultProps = {};

  render() {
    const {
      className, children, theme,
      bordered, striped, narrow,
      ...props
    } = this.props;
    return <table {...props} className={classNames('table', {
      'is-bordered': bordered,
      'is-striped': striped,
      'is-narrow': narrow,
    }, className)}>
      {children}
    </table>
  }
}
