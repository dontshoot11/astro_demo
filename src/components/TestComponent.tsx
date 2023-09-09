import MediaQuery from "react-responsive";

export const TestComponent = (): JSX.Element => {
	return (
		<>
			<MediaQuery minWidth={960}>
				<div className="">Screen Big</div>
			</MediaQuery>
			<div className="">Screen Smol</div>
		</>
	);
};
