var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = function(props){
	return (
      <div>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
          <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</IndexLink>
          <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</IndexLink>
      </div>
    )
};

module.exports = Nav;
