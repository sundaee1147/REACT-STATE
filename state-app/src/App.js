

import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
import Profile from "./Components/Profile";

class App extends React.Component {
// state object containing person

  state = {
    Person: {
      fullName: "Ogbodu Sunday",
      bio: "I'm Sundaee. I like exploring, I also design and code beautifully simple things.",
      profession: "Fullstack js",
    
    },
        show: false,
        date: new Date(),
  };

  //a field that shows the time interval since the last component was mounted using the component lifecycle.

  componentDidMount() {
    this.timer = setInterval(() => this.refreshDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // a function that returns a new date as the date.
  refreshDate() {
    this.setState({
      date: new Date(),
    });
  }

  onOpenModal = () => {
    this.setState({ show: true });
  };

  onCloseModal = () => {
    this.setState({ show: false });
  };

  render() {

    const { show } = this.state;

    return (
      <React.Fragment>

          <div className="App">
            <h1 style={{ color: "#7a5757" }}>Welcome To My World</h1>
            <p>CLICK BELOW!</p>

            <div>
              <i className="fas fa-level-down-alt"></i>
            </div>

            <button className="btn" onClick={this.onOpenModal}>Show Profile</button>

            <Modal open={show} onClose={this.onCloseModal} center>

              <Profile person={this.state.Person} />
            </Modal>
            
          </div>
      </React.Fragment>
    );
  }
}

export default App;