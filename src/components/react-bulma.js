import './style.scss';
import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={classNames('react-bulma',this.props.className)}>
        Hello React!
      </div>
    );
  }
}
