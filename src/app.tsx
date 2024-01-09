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

	return (
		<div className="m-8 grid place-items-center">
			<div className="flex p-4 rounded-lg border border-slate-200 shadow-md max-w-[900px]">
				<div className="grid grid-cols-[1fr_30%] gap-6 w-full">
					<div className="flex flex-col gap-4">
						<div>
							<Label>Title</Label>
							<Input placeholder="Add title" />
						</div>
						<div>
							<Label>Description</Label>
							<Textarea placeholder="Add description" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label>Classification</Label>
								<Select>
									<SelectTrigger>
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
								<Label>Medium</Label>
								<Select>
									<SelectTrigger>
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
							<Label>Size</Label>
							<div className="flex gap-2 items-center">
								<Input type="number" inputMode="numeric" placeholder="Width" />
								<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
								<Input type="number" inputMode="numeric" placeholder="Height" />
								<Cross2Icon className="min-w-3 min-h-3 text-slate-600" />
								<Input type="number" inputMode="numeric" placeholder="Dimension" />
							</div>
						</div>
						<div>
							<div className="flex justify-between items-center mb-2">
								<Label>Artist</Label>
								<Button size="xs" variant="outline">
									<PlusIcon className="mr-2" />
									New
								</Button>
							</div>
							<div className="flex gap-2">
								<Input placeholder="Add artist" />
								<Button variant="outline" size="icon">
									<PlusIcon className="h-4 w-4" />
								</Button>
							</div>
							<div className="flex gap-2 p-2 bg-slate-100 mt-2 rounded-md">
								<Badge>
									Raden Saleh
									<button
										type="button"
										className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
									>
										<Cross2Icon className="h-3 w-3 text-muted-foreground hover:text-foreground" />
									</button>
								</Badge>
							</div>
						</div>
						<div>
							<div className="flex justify-between items-center mb-2">
								<Label>Medium</Label>
								<Button size="xs" variant="outline">
									<PlusIcon className="mr-2" />
									New
								</Button>
							</div>
							<div className="flex gap-2">
								<Input placeholder="Add medium" />
								<Button variant="outline" size="icon">
									<PlusIcon className="h-4 w-4" />
								</Button>
							</div>
							<div className="flex gap-2 p-2 bg-slate-100 mt-2 rounded-md">
								<Badge>
									Acrylic
									<button
										type="button"
										className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
									>
										<Cross2Icon className="h-3 w-3 text-muted-foreground hover:text-foreground" />
									</button>
								</Badge>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<Label>Type</Label>
							<RadioGroup
								defaultValue="digital"
								className="p-2 rounded-md bg-slate-100 grid grid-cols-2 gap-2"
							>
								<Label className=" [&:has([data-state=checked])>div]:bg-white">
									<RadioGroupItem value="digital" className="sr-only" />
									<div className="rounded-sm p-3 text-center ring-offset-black outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1">
										Digital
									</div>
								</Label>
								<Label className="[&:has([data-state=checked])>div]:bg-white">
									<RadioGroupItem value="physical" className="sr-only" />
									<div className="rounded-sm p-3 text-center ring-offset-black outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1">
										Physical
									</div>
								</Label>
							</RadioGroup>
						</div>
					</div>
					<div className="flex flex-col justify-between">
						<div className="flex gap-4 flex-col">
							<div className="flex gap-2 flex-col">
								<Label>Photo</Label>
								<div className="w-full h-[250px] bg-slate-200 rounded-md" />
								<Input type="file" placeholder="Select photo" />
							</div>
							<hr />
							<div>
								<Label>Creation Date</Label>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn(
												"w-full justify-start text-left font-normal",
												!date && "text-muted-foreground",
											)}
										>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{date ? format(date, "PPP") : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
									</PopoverContent>
								</Popover>
							</div>
							<hr />
							<div className="flex items-center justify-between gap-2">
								<Label>Private Collection</Label>
								<Switch />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<Checkbox id="terms" />
								<Label htmlFor="terms">Accept terms and conditions</Label>
							</div>
							<Button className="w-full" size="lg">
								Add Collection
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
