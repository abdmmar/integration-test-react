import { CalendarIcon, Cross2Icon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import "./app.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./components/ui/select";
import { Badge } from "./components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { cn } from "./lib/utils";
import { Calendar } from "./components/ui/calendar";
import { format } from "date-fns";
import * as React from "react";
import { Switch } from "./components/ui/switch";
import { Checkbox } from "./components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";

function App() {
	const [date, setDate] = React.useState<Date>();

	const onSubmitCollection = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		for (const [key, value] of form.entries()) {
			console.log(key, value);
		}
		console.log("🚀 ~ onSubmitCollection ~ form:", form);
		console.log("🚀 ~ onSubmitCollection ~ form:", form.get("type"));
	};

	return (
		<div className="m-8 grid place-items-center">
			<form
				className="flex p-4 rounded-lg border border-slate-200 shadow-md max-w-[900px]"
				onSubmit={onSubmitCollection}
			>
				<div className="grid grid-cols-[1fr_30%] gap-6 w-full">
					<div className="flex flex-col gap-4">
						<div>
							<Label htmlFor="title">Title</Label>
							<Input id="title" name="title" placeholder="Add title" />
						</div>
						<div>
							<Label htmlFor="description">Description</Label>
							<Textarea id="description" name="description" placeholder="Add description" />
						</div>
						<div>
							<Label htmlFor="artist">Artist</Label>
							<Input id="artist" name="artist" placeholder="Add artist" />
						</div>
						<div>
							<Label htmlFor="creationDate">Creation Date</Label>
							<Input type="date" placeholder="Pick a date" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label htmlFor="classification">Classification</Label>
								<Select name="classification">
									<SelectTrigger id="classification">
										<SelectValue placeholder="Classification" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="painting">Painting</SelectItem>
										<SelectItem value="sculpture">Sculpture</SelectItem>
										<SelectItem value="other">Other</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Label htmlFor="medium">Medium</Label>
								<Select name="medium">
									<SelectTrigger id="medium">
										<SelectValue placeholder="Medium" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="painting">Painting</SelectItem>
										<SelectItem value="sculpture">Sculpture</SelectItem>
										<SelectItem value="other">Other</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div>
							<Label htmlFor="sizeWidth">Size</Label>
							<div className="flex gap-2 items-center">
								<Input
									id="sizeWidth"
									name="sizeWidth"
									type="number"
									inputMode="numeric"
									placeholder="Width"
								/>
								<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
								<Input
									id="sizeWidth"
									name="sizeHeight"
									type="number"
									inputMode="numeric"
									placeholder="Height"
								/>
								<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
								<Input
									id="sizeDimension"
									name="sizeDimension"
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
								<Input id="photo" name="photo" type="file" placeholder="Select photo" />
							</div>
							<hr />

							<div className="flex items-center justify-between gap-2">
								<Label htmlFor="isPrivate">Private Collection</Label>
								<Switch name="isPrivate" />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<Checkbox id="terms" name="terms" />
								<Label htmlFor="terms">Accept terms and conditions</Label>
							</div>
							<Button className="w-full" size="lg" type="submit">
								Add Collection
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default App;
