import { Component } from "react";
import "./AcercadeStyles.css";

class Acercade extends Component {
  render() {
    return (
       <div className={this.props.className}>
        <div className="des-texts">
          <h2>{this.props.heading }</h2>
          <p>{ this.props.text}</p>
        </div>
        <div className="images">
           <img src={this.props.img1} alt="img" />
        </div>
      </div>
    );
  }
}

export default Acercade;
