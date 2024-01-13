import App from "./app";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Form", () => {
	it("should render properly", () => {
		render(<App />);
		const formElements = {
			titleInput: screen.getByLabelText(/title/i),
			descriptionInput: screen.getByLabelText(/description/i),
			artistInput: screen.getByLabelText(/artist/i),
			creationDateInput: screen.getByLabelText(/creation date/i),
			classificationInput: screen.getByLabelText(/classification/i),
			mediumInput: screen.getByLabelText(/medium/i),
			sizeWidthInput: screen.getByLabelText(/size \(cm\)/i),
			sizeHeightInput: screen.getByLabelText(/height/i),
			sizeDimensionInput: screen.getByLabelText(/dimension/i),
			typeInput: screen.getByLabelText(/type/i),
			photoInput: screen.getByLabelText(/photo/i),
			isPrivateInput: screen.getByLabelText(/private collection/i),
			termsInput: screen.getByLabelText(/accept terms and conditions/i),
		};
		expect(formElements.titleInput).toBeInTheDocument();
	});
});
