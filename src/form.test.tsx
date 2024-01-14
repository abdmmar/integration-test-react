import App from "./app";
import CollectionForm from "./form";
import { cleanup, render, screen, userEvent, within } from "./utils/test-utils";

const collection = {
	title: "Kapal Karam Dilanda Badai",
	description:
		"Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",
	artist: "Raden Saleh",
	creationDate: "1840-01-01",
	classification: "Painting",
	medium: "Oil on Canvas",
	photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {
		type: "image/png",
	}),
	size: {
		width: 98,
		height: 74,
	},
	type: "physical",
	isPrivate: false,
	terms: true,
};

describe("CollectionForm", () => {
	afterEach(() => {
		cleanup();
	});

	it("should successfully submit on valid input", async () => {
		const onSubmitMockFn = vi.fn();
		const user = userEvent.setup();
		render(<CollectionForm onSubmit={onSubmitMockFn} />);
		const formElements = {
			titleInput: screen.getByLabelText(/title/i),
			descriptionInput: screen.getByLabelText(/description/i),
			artistInput: screen.getByLabelText(/artist/i),
			creationDateInput: screen.getByLabelText(/creation date/i),
			classificationInput: screen.getByLabelText(/classification/i),
			mediumInput: screen.getByLabelText(/medium/i),
			sizeWidthInput: screen.getByLabelText(/size \(cm\)/i),
			sizeHeightInput: screen.getByLabelText(/height/i),
			sizeLengthInput: screen.getByLabelText(/length/i),
			physicalTypeInput: screen.getByLabelText(/physical/i),
			digitalTypeInput: screen.getByLabelText(/digital/i),
			photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,
			isPrivateInput: screen.getByLabelText(/private collection/i),
			termsInput: screen.getByLabelText(/accept terms and conditions/i),
			addCollectionButton: screen.getByRole("button", { name: /add collection/i }),
		};

		await user.type(formElements.titleInput, collection.title);
		await user.type(formElements.descriptionInput, collection.description);
		await user.type(formElements.artistInput, collection.artist);
		await user.type(formElements.creationDateInput, collection.creationDate);
		await user.selectOptions(formElements.classificationInput, collection.classification);
		await user.selectOptions(formElements.mediumInput, collection.medium);
		await user.type(formElements.sizeWidthInput, collection.size.width.toString());
		await user.type(formElements.sizeHeightInput, collection.size.height.toString());
		await user.click(formElements.physicalTypeInput);
		await user.upload(formElements.photoInput, collection.photo);
		await user.click(formElements.isPrivateInput);
		await user.click(formElements.termsInput);
		await user.click(formElements.addCollectionButton);

		expect(formElements.titleInput).toHaveValue(collection.title);
		expect(formElements.descriptionInput).toHaveValue(collection.description);
		expect(formElements.artistInput).toHaveValue(collection.artist);
		expect(formElements.classificationInput).toHaveTextContent(collection.classification);
		expect(formElements.mediumInput).toHaveTextContent(collection.medium);
		expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);
		expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);
		expect(formElements.digitalTypeInput).not.toBeChecked();
		expect(formElements.physicalTypeInput).toBeChecked();
		expect(formElements.photoInput.files?.[0]).toBe(collection.photo);
		expect(formElements.photoInput.files).toHaveLength(1);
		expect(formElements.isPrivateInput).toBeChecked();
		expect(formElements.termsInput).toBeChecked();

		expect(formElements.titleInput).toBeValid();
		expect(formElements.descriptionInput).toBeValid();
		expect(formElements.artistInput).toBeValid();
		expect(formElements.creationDateInput).toBeValid();
		expect(formElements.classificationInput).toBeValid();
		expect(formElements.mediumInput).toBeValid();
		expect(formElements.sizeWidthInput).toBeValid();
		expect(formElements.sizeHeightInput).toBeValid();
		expect(formElements.photoInput).toBeValid();
		expect(formElements.isPrivateInput).toBeValid();
		expect(formElements.termsInput).toBeValid();

		expect(onSubmitMockFn).toBeCalledTimes(1);
	});
});
