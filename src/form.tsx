import { Cross2Icon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import "./app.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import * as React from "react";
import { Switch } from "./components/ui/switch";
import { Checkbox } from "./components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";

type CollectionFormProps = {
	onSubmit: (data: Record<string, unknown>) => void;
};

function CollectionForm({ onSubmit }: CollectionFormProps) {
	const onSubmitCollection = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const data = Object.fromEntries(form.entries());

		onSubmit(data);
	};

	return (
		<form
			id="collection-form"
			data-testid="collection-form"
			className="flex p-4 rounded-lg border border-slate-200 shadow-md max-w-[900px]"
			onSubmit={onSubmitCollection}
		>
			<div className="grid grid-cols-[1fr_30%] gap-6 w-full">
				<div className="flex flex-col gap-4">
					<div>
						<Label htmlFor="title">Title</Label>
						<Input id="title" name="title" placeholder="Add title" required />
					</div>
					<div>
						<Label htmlFor="description">Description</Label>
						<Textarea id="description" name="description" placeholder="Add description" required />
					</div>
					<div>
						<Label htmlFor="artist">Artist</Label>
						<Input id="artist" name="artist" placeholder="Add artist" required />
					</div>
					<div>
						<Label htmlFor="creationDate">Creation Date</Label>
						<Input
							id="creationDate"
							name="creationDate"
							type="date"
							placeholder="Pick a date"
							max={format(new Date(), "yyyy-MM-dd")}
							required
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<Label htmlFor="classification">Classification</Label>
							<select
								name="classification"
								id="classification"
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
							>
								<option value="painting">Painting</option>
								<option value="sculpture">Sculpture</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<Label htmlFor="medium">Medium</Label>
							<select
								name="medium"
								id="medium"
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
							>
								<option value="oil-on-canvas">Oil on Canvas</option>
								<option value="acrylic">Acrylic</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>
					<div>
						<Label htmlFor="sizeWidth">Size (cm)</Label>
						<Label htmlFor="sizeHeight" className="sr-only">
							Height
						</Label>
						<Label htmlFor="sizeLength" className="sr-only">
							Length
						</Label>
						<div className="flex gap-2 items-center">
							<Input
								id="sizeWidth"
								name="sizeWidth"
								type="number"
								inputMode="numeric"
								placeholder="Width"
								required
							/>
							<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
							<Input
								id="sizeHeight"
								name="sizeHeight"
								type="number"
								inputMode="numeric"
								placeholder="Height"
								required
							/>
							<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
							<Input
								id="sizeLength"
								name="sizeLength"
								type="number"
								inputMode="numeric"
								placeholder="Dimension"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="type">Type</Label>
						<RadioGroup
							id="type"
							name="type"
							aria-label="type"
							defaultValue="digital"
							className="p-2 rounded-md bg-slate-100 grid grid-cols-2 gap-2"
						>
							<Label className=" [&:has([data-state=checked])>div]:bg-white">
								<RadioGroupItem value="digital" id="digital" className="sr-only" />
								<div className="rounded-sm p-2 text-center ring-offset-black outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1">
									Digital
								</div>
							</Label>
							<Label className="[&:has([data-state=checked])>div]:bg-white">
								<RadioGroupItem value="physical" id="physical" className="sr-only" />
								<div className="rounded-sm p-2 text-center ring-offset-black outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1">
									Physical
								</div>
							</Label>
						</RadioGroup>
					</div>
				</div>
				<div className="flex flex-col justify-between">
					<div className="flex gap-4 flex-col">
						<div className="flex gap-2 flex-col">
							<Label htmlFor="photo" className="flex flex-col gap-2">
								<span>Photo</span>
								<div className="w-full h-[250px] bg-slate-200 rounded-md" />
							</Label>
							<Input
								id="photo"
								name="photo"
								type="file"
								placeholder="Select photo"
								accept="image/*"
							/>
						</div>
						<hr />

						<div className="flex items-center justify-between gap-2">
							<Label htmlFor="isPrivate">Private Collection</Label>
							<Switch id="isPrivate" name="isPrivate" />
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Checkbox id="terms" name="terms" required />
							<Label htmlFor="terms">Accept terms and conditions</Label>
						</div>
						<Button className="w-full" size="lg" type="submit">
							Add Collection
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default CollectionForm;
