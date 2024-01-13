import "./app.css";
import CollectionForm from "./form";

function App() {
	const onSubmitCollection = (data: Record<string, unknown>) => {
		console.log(data);
	};

	return (
		<div className="m-8 grid place-items-center">
			<CollectionForm onSubmit={onSubmitCollection} />
		</div>
	);
}

export default App;
