import "@testing-library/jest-dom/vitest";

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

// Mock PointerEvent used by @radix-ui/react-select under the hood
class MockPointerEvent extends Event {
	button: number;
	ctrlKey: boolean;
	pointerType: string;

	constructor(type: string, props: PointerEventInit) {
		super(type, props);
		this.button = props.button || 0;
		this.ctrlKey = props.ctrlKey || false;
		this.pointerType = props.pointerType || "mouse";
	}
}
// biome-ignore lint/suspicious/noExplicitAny: idk
window.PointerEvent = MockPointerEvent as any;
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
