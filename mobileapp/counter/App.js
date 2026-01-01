import Counter from "./Counter";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

export default function App() {
  return ( 
    <Provider store={store} >
          <Counter/>
    </Provider>
  );
}