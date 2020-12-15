import React from 'react';


function Pyramid(props) {
  let table = [];
  var rows = props.limit;
  for (let i = 1; i <= rows; i++) {
    table.push(<div className="tr" key={i}>{dynCol(i)}</div>);
  }

  return table;
}
const dynCol = (i) => {
  let data = [];
  for (let j = 1; j <= i; j++) {
    data.push(<div className="td" key={j}>*</div>);
  }
  return data;
}
class Testcomponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      limit: "10"
    };
    this.changeLimit = this.changeLimit.bind(this);
  }
  changeLimit(e) {
    if ((parseInt(e.target.value) || 0) <= parseInt(this.props.max)) {
      this.setState({ limit: e.target.value });
    }
  }
  render() {

    return (
      <div>
        <h3>Simple Pyramid Pattern!</h3>
        <input onChange={this.changeLimit} value={this.state.limit} />
        <div id="pyramidContainer">
          <Pyramid limit={this.state.limit} />
        </div>
      </div>
    );
  }
}
Testcomponent.defaultProps = { max: "100" };

export default Testcomponent

