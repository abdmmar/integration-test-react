import App from "./app";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Form", () => {
	it("should render properly", () => {
		render(<App />);
		expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
	});
});
