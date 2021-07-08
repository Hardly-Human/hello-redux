import React from "react";
import store from "./store";
import setTechnology from "./actions";

const ButtonGroup = ({ technologies }) => (
	<div className="btn-grp">
		{technologies.map((tech, i) => (
			<button
				data-tech={tech}
				key={`btn-${i}`}
				className="hello-btn"
				onClick={dispatchButtonAction}
			>
				{tech}
			</button>
		))}
	</div>
);

const dispatchButtonAction = (e) => {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
};

export default ButtonGroup;
