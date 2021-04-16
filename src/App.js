import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import AnimalPage from "./pages/AnimalPage/AnimalPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mighty-beach-84997.herokuapp.com",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage} />
            <Route
              exact
              strict
              path="/products/:slug"
              component={CategoryPage}
            />
            <Route exact strict path="/product/:slug" component={AnimalPage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
