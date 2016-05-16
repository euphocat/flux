// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  flux: require("../assets/flux.png"),
  flux_detail: require("../assets/flux_detail.png"),
  redux: require("../assets/redux.png"),
  MVVM: require("../assets/MVVM.png"),
  mvc: require("../assets/mvc-scale.png"),
  fountain: require("../assets/fountain.gif"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary" bgColor="#5454C7">
            <Heading size={1} fit caps lineHeight={1}>
              Flux Architecture
            </Heading>
            <small>(&amp; ReactJS)</small>
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Server side MVC
            </Heading>
            <CodePane
              textSize="25px"
              lang="jsx"
              source={require("raw!../assets/mvc.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} caps fit textFont="primary" textColor="primary">
              Frontend MVCs
            </Heading>
            <Heading size={1} caps textColor="secondary">and MVVM</Heading>
            <Appear fid="1">
              <Image src={images.mvc.replace("/", "")} margin="50px 100px 0 0" height="293px"/>
            </Appear>
            <Appear fid="2">
              <Image src={images.MVVM.replace("/", "")} margin="50px auto 0" height="293px"/>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="primary">MV* changes vs traditional MVC</Heading>
            <List textColor="tertiary">
              <Appear><ListItem>State also inside views
                <Text textColor="primary">=> no single source of truth</Text></ListItem></Appear>
              <Appear><ListItem>Multiple views</ListItem></Appear>
              <Appear><ListItem>We bypass the view &lt;-&gt; controller &lt;-&gt; model flow</ListItem></Appear>
              <Appear><ListItem>The router is no longer the only entry point for state change
              </ListItem></Appear>
              <Appear><ListItem>Multiple models
                <Text textColor="primary">=> hard to picture the state of our app</Text>
                <Text textColor="primary">=> scaling issues</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps textColor="tertiary">
              Flux
            </Heading>
            <Image src={images.flux.replace("/", "")} margin="50px auto 0" />
          </Slide>

          <Slide>
            <List textColor="tertiary">
              <ListItem><strong>Actions</strong> – Helper methods that facilitate passing data to the Dispatcher</ListItem>
              <ListItem><strong>Dispatcher</strong> – Receives actions and broadcasts payloads to registered callbacks</ListItem>
              <ListItem><strong>Stores</strong> – Containers for application state & logic that have callbacks registered to the dispatcher</ListItem>
              <ListItem><strong>Controller Views</strong> – React Components that grab the state from Stores and pass it down via props to child components.</ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={2} caps textColor="primary">
              Flux dataflow
            </Heading>
            <Image src={images.flux_detail.replace("/", "")} />
          </Slide>

          <Slide>
            <Heading size={2} caps textColor="tertiary">
              The good parts
            </Heading>
            <List textColor="tertiary">
              <ListItem>Very stricts rules enforced by the Dispatcher</ListItem>
              <ListItem>Dispatcher = real controller, all states changes have to go through them</ListItem>
              <ListItem>Stores = Model, not db wrappers but just plain state</ListItem>
              <ListItem>Unidirectional dataflow</ListItem>
              <ListItem>Easier for unit testing</ListItem>
              <ListItem>Great for scaling</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={2} caps textColor="primary">
              The bad parts
            </Heading>
            <List textColor="tertiary">
              <ListItem>Lot of implemenations</ListItem>
              <ListItem>No middleware for actions (need for extra Actions Creator)</ListItem>
              <ListItem>View dependency to the store</ListItem>
              <ListItem>Quite complex maybe not needed for small apps</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary">
            <BlockQuote>
              <Quote>Managing this ever-changing state is hard.</Quote>
              <Cite>Dan Abramov</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="tertiary">
                Redux
            </Heading>
            <Image src={images.redux.replace("/", "")} width="900px" />
            <Text>
            Redux starting course videos : <Link href="https://egghead.io/series/getting-started-with-redux">https://egghead.io/series/getting-started-with-redux</Link>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} caps textColor="tertiary">
              Redux features
            </Heading>
            <List textColor="tertiary">
              <ListItem><strong>Single source of truth:</strong> only one store</ListItem>
              <ListItem><strong>State is read-only:</strong> the only way to mutate the state is to emit an action</ListItem>
              <ListItem><strong>Changes</strong> are made with <strong>pure functions</strong></ListItem>
              <ListItem><strong>Redux does not have the concept of a Dispatcher</strong> pure functions instead of event emitters</ListItem>
              <ListItem>Great helpers + tools</ListItem>
              <ListItem> 
              <Link href="http://redux.js.org/docs/introduction/Ecosystem.html">
              http://redux.js.org/docs/introduction/Ecosystem.html
              </Link></ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} caps textColor="tertiary">
              When you code with redux
            </Heading>
            <Appear><Image src={images.fountain.replace("/", "")} margin="50px auto 0" width="800px" /></Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
