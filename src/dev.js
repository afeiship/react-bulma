import './dev.scss';
import '../node_modules/bulma/bulma.sass';

import {
  Columns,
  Column,
  Notification,
  Tile,
  Box,
  Button,
  Block,
  Content,
  Tag,
  Delete,
  Icon,
  Image,
  Progress,
  Table,
  Title,
  Message,
  MessageBody,
  MessageHeader,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem
} from './main';


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
          <Icon name="home" small/>
          <Icon name="search" large/>
          <Tag theme="primary">MyTag1 <Delete small/></Tag>
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


        <Notification theme="success">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
          elit
        </Notification>
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


        <Content>
          <h1>Images</h1>
          <Image dimension="128x128">
            <img src="http://placeholder.qiniudn.com/240x240" alt=""/>
          </Image>


          <h2>Nomral</h2>
          <Progress value="15" max="100">15%</Progress>
          <Progress theme="primary" value="30" max="100">30%</Progress>
          <Progress theme="info" value="45" max="100">45%</Progress>
          <Progress theme="success" value="60" max="100">60%</Progress>
          <Progress theme="warning" value="75" max="100">75%</Progress>
          <Progress theme="danger" value="90" max="100">90%</Progress>


          <h2>Large one</h2>

          <Progress large value="15" max="100">15%</Progress>
          <Progress large theme="primary" value="30" max="100">30%</Progress>
          <Progress large theme="info" value="45" max="100">45%</Progress>
          <Progress large theme="success" value="60" max="100">60%</Progress>
          <Progress large theme="warning" value="75" max="100">75%</Progress>
          <Progress large theme="danger" value="90" max="100">90%</Progress>
        </Content>


        <Title size="1">Table area1</Title>
        <Title size="2">Table area2</Title>
        <Title size="3">Table area3</Title>
        <Title size="4">Table area4</Title>
        <Title size="5">Table area5</Title>


        <Title nodeName="p" size="1" subtitle>Table area1-with tag-p</Title>
        <Title nodeName="p" size="2">Table area2--with tag-p</Title>
        <Title nodeName="p" size="3">Table area3--with tag-p</Title>
        <Title nodeName="p" size="4">Table area4--with tag-p</Title>
        <Title nodeName="p" size="5">Table area5--with tag-p</Title>
        <Table striped>
          <thead>
          <tr>
            <th><abbr title="Position">Id</abbr></th>
            <th>name</th>
            <th><abbr title="Played">age</abbr></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>xiaoming</td>
            <td>23</td>
          </tr>

          <tr>
            <td>2</td>
            <td>xiaoming3</td>
            <td>25</td>
          </tr>

          <tr>
            <td>4</td>
            <td>xiaomin2g</td>
            <td>25</td>
          </tr>
          </tbody>
        </Table>


        <Message>
          <MessageHeader>
            <p>Hello World</p>
            <Delete />
          </MessageHeader>
          <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            vehicula et sem eget, facilisis sodales sem.
          </MessageBody>
        </Message>

        <Message theme="success">
          <MessageHeader>
            <p>Hello World</p>
            <Delete />
          </MessageHeader>
          <MessageBody>
            Cool!
          </MessageBody>
        </Message>

        <Message theme="danger">
          <MessageHeader>
            <p>Danger!</p>
            <Delete />
          </MessageHeader>
          <MessageBody>
            A message comming!
          </MessageBody>
        </Message>

        <Message theme="info">
          <MessageBody>
            Only a poor body!
          </MessageBody>
        </Message>


        <Level>
          <LevelLeft>levet</LevelLeft>
          <LevelRight>levet</LevelRight>
        </Level>


      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
