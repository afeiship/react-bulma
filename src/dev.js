import './dev.scss';
import '../node_modules/bulma/bulma.sass';

import {Columns, Column, Notification, Tile, Box, Button, Block, Content,Tag} from './main';


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

        <Tile ancestor>
          <Tile is={[4]} vertical parent>
            <Tile is="12" className="box">
              <p className="title">One</p>
            </Tile>
            <Tile className="box">
              <p className="title">Two</p>
            </Tile>
          </Tile>

          <Tile parent>
            <Tile className="box">
              <p className="title">Three</p>
            </Tile>
          </Tile>
        </Tile>

        <Box>
          I am a poor box.
        </Box>

        <Block>
          <Button>Test</Button>
          <Button theme="white">Test</Button>
          <Button theme="light">Test</Button>
          <Button theme="dark">Test</Button>
          <Button theme="black">Test</Button>
          <Button theme="primary">Test</Button>
          <Button theme="info">Test</Button>
          <Button theme="success">Test</Button>
          <Button theme="warning">Test</Button>
          <Button theme="danger">Test</Button>
          <Button theme="success" outlined>Test</Button>
          <Button theme="success" outlined large>Test</Button>
          <Button theme="info" focused>Test</Button>
          <Button theme="info" loading disabled>Test</Button>
        </Block>


        <Content small>
          <h1>Hello World</h1>
          <Tag>MyTag1</Tag>
          <Tag theme="primary">MyTag1</Tag>
          <Tag theme="info">MyTag1</Tag>
          <Tag theme="danger">MyTag1</Tag>
          <Tag theme="success">MyTag1</Tag>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
            nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
            sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus
            mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
            mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </Content>

        <Content normal>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
            nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
            sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus
            mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
            mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </Content>

      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
