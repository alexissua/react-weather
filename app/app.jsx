// Importamos las librerías::
var React = require("react");
var ReactDOM = require("react-dom");

//Route, Router, IndexRoute, hashHistory son variables que acceden a la propiedad de react-router::
//EJ: var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");
var Nav = require("./components/Nav");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

// var obj = {
//   name: "Andrew"
// }
//
// var {name} = obj;

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory} >
      <Route path="/" component={Main}>
          <Route path="about" component={About} />
          <Route path="examples" component={Examples} />
          <IndexRoute component={Weather} />
      </Route>

    </Router>,
    document.getElementById("app")
);
