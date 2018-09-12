import React from "react";

import { Button, Link } from "../Components/Buttons";
import "../styles/home.css";

import UpdateBanner from "../Components/UpdateBanner";
import * as ServiceWorker from "../service-worker";

import { AudioConsumer } from "../Components/AudioManager";
class Home extends React.Component {
  state = {
    showBanner: false
  };
  componentWillMount() {
    ServiceWorker.onUpdate(() => {
      this.setState({ showBanner: true });
    });
  }
  clickHandler = silent => {
    silent(false);
    this.props.history.replace("/new-game");
  };
  render() {
    const { props } = this;
    return (
      <div className="home">
        {this.state.showBanner && <UpdateBanner />}
        <div className="logo shape1">
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2" />
          <div className="shape2 shape3" />
        </div>
        <AudioConsumer>
          {({ silent }) => (
            <Button onClick={e => this.clickHandler(silent)}>Play</Button>
          )}
        </AudioConsumer>
        <Link onClick={e => props.history.replace("/history")}>
          View History
        </Link>

        <div className="footer-text">
          We made <a className="footer-link" href="">Photo pieces</a> for you crazy millennials. <br />
          Talk to us :   
          <a className="footer-link" href="https://twitter.com/kuldeepkeshwar" target="_blank">@kuldeepkeshwar </a>
          <a className="footer-link" href="https://twitter.com/ntshtyagi" target="_blank">@ntshtyagi </a>
        </div>
      </div>
    );
  }
}
export default Home;
