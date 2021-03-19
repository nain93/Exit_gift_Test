import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ongoing from "./pages";
// import MyBid from "./components/MyBid";
// import Collection from "./components/Collection";
// import Support from "./components/Support";
// import SignUp from "./components/Signup";
import Pagenotfound from "./components/Pagenotfound";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Ongoing} />
        {/* <Route path="/mybid" component={MyBid} />
        <Route path="/collection" component={Collection} />
        <Route path="/support" component={Support} />
        <Route path="/signup" component={SignUp} /> */}
        <Route path="/signin" component={SigninPage} />
        <Route component={Pagenotfound} />
      </Switch>
    </Router>
  );
}

export default App;
