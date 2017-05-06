import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    gapless: PropTypes.bool,
    multiline: PropTypes.bool,
    is: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ])
  };

  static defaultProps = {
    is: ''
  };

  getIsClassName() {
    const {is} = this.props;
    if (Array.isArray(is)) {
      return is.map(item => `is-${item}`);
    }
    return is ? `is-${is}` : '';
  }

  render() {
    const {children, is, className, gapless, multiline, ...props} = this.props;
    return (
      <div
        {...props}
        className={
          classNames(
            'column',
            this.getIsClassName(),
            {
              'is-multiline': multiline,
              'is-gapless': gapless
            }
            , className)
        }>{children}</div>
    );
  }
}

