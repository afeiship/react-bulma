import './dev.scss';
import '../node_modules/bulma/bulma.sass';

import {Columns, Column, Notification, Tile} from './main';


class App extends React.Component {
  render() {
    return (
      <div className="hello-react-bulma">
        <Columns>
          <Column>
            <Notification is="info">
              First column
            </Notification>
          </Column>
          <Column>
            <Notification is="success">
              Second column
            </Notification>
          </Column>
          <Column>
            <Notification is="warning">
              Third column
            </Notification>
          </Column>
          <Column>
            <Notification is="danger">
              danger column
            </Notification>
          </Column>
        </Columns>

        <Tile is="ancestor">
          <Tile is={[4, 'vertical', 'parent']}>
            <Tile is="12" className="box">
              <p className="title">One</p>
            </Tile>
            <Tile className="box">
              <p className="title">Two</p>
            </Tile>
          </Tile>

          <Tile is="parent">
            <Tile className="box">
              <p className="title">Three</p>
            </Tile>
          </Tile>
        </Tile>


      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
