import './dev.scss';
import ReactBulma from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-bulma">
        <ReactBulma />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
