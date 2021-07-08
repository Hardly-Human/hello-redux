import React from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import store from "./store";

const App = () => {
	return (
		<div>
			<HelloWorld tech={store.getState().tech} />
			<ButtonGroup technologies={["React", "Elm", "React-Redux"]} />
		</div>
	);
};

export default App;
