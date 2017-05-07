import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    dimension: PropTypes.oneOf([
      '16x16',
      '24x24',
      '32x32',
      '48x48',
      '64x64',
      '96x96',
      '128x128',
    ]),
    ratio: PropTypes.oneOf([
      'square',
      '1by1',
      '4by3',
      '3by2',
      '3by2',
      '16by9',
      '2by1'
    ]),
  };

  static defaultProps = {};

  render() {
    const {className, children, dimension, radio, ...props} = this.props;
    const dimensionCls = dimension ? `is-${dimension}` : '';
    const radioCls = radio ? `is-${radio}` : '';

    return (
      <figure {...props}
              className={classNames('image', dimensionCls, radioCls, className)}>{children}</figure>
    );
  }
}
