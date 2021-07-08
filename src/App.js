// import Card from "./components/Card";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Members from "./pages/Members/Members";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import DetailedProduct from "./pages/DetailedProduct";
import CheckoutPg from "./pages/CheckoutPg";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="/members" component={Members} />
          <Route path="/orders" component={Orders} />
          <Route path="/stock" component={Stock} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/productID" component={DetailedProduct} />
          <Route path="/checkout" component={CheckoutPg} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
