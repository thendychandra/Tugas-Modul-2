import "./App.css";
import CardList from "./components/CardList";
import React, { Component } from "react";
const quotes = [
  {
    quote:
      "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    author: "Louis L’Amour",
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    author: "William Faulkner",
  },
  {
    quote: "The first draft is just you telling yourself the story.",
    author: "Terry Pratchett",
  },
  { quote: "Start before you’re ready.", author: "Steven Pressfield" },
  {
    quote:
      "You can’t wait for inspiration. You have to go after it with a club.",
    author: "Jack London",
  },
  {
    quote: "You can always edit a bad page. You can’t edit a blank page.",
    author: "Jodi Picoult",
  },
];

class App extends Component {
  state = { contacts: [] };
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <CardList contacts={this.state.contacts} quotes={quotes} isNameBold />
    );
  }
}

export default App;
