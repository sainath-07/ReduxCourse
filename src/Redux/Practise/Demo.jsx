import { Component } from "react";

export default class Demo extends Component {
   constructor(props) {
     super(props);
     this.state = {
       count: 0
     };
   }
 
   incrementCount = () => {
     this.setState(
       (prevState) => ({ count: prevState.count + 1 }),
       () => {
         console.log('State has been updated:', this.state.count);
       }
     );
   };
 
   render() {
     return (
       <div>
         <p>Count: {this.state.count}</p>
         <button onClick={this.incrementCount}>Increment</button>
       </div>
     );
   }
 }
 