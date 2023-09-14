import MediaQuery from "react-responsive";

export const TestComponent = (): JSX.Element => {
	const clickHandler = (): void => {
		console.log("press");
		console.log(window);
	};
	return (
		<>
			<MediaQuery minWidth={960}>
				<div className="">Screen Big</div>
			</MediaQuery>
			<div className="">Screen Smol</div>
			<button onClick={clickHandler}>BUTTON</button>
		</>
	);
};
