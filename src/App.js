import React from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = { tech: "React" };
const store = createStore(reducer, initialState);

const App = () => {
	return <HelloWorld tech={store.getState().tech} />;
};

export default App;
