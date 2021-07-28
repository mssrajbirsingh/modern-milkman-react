import React, { Suspense, Component } from "react";
import { Provider } from "react-redux";
 import Routes from "./routes/index";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Suspense>
        <Provider store={store()}>
           <Routes /> 
         
        </Provider>
      </Suspense>
    );
  }
}
export default App;

