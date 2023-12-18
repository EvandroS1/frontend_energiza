import Form from "./components/form";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return <Provider store={store}>
    <Form />;
  </Provider>
}

export default App;
