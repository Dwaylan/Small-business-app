import React from "react";
import { Provider } from "react-redux";
import Landingpage from "./Components/Landingpage";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Landingpage />
      </div>
    </Provider>
  );
}

export default App;
