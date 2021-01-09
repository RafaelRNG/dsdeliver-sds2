import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes;