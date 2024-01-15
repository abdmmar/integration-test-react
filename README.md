# Integration Test in React

> [!NOTE]
> Repository for article: [Integration Test in React](https://www.abdmmar.com/blog/integration-test-in-react)

Testing is an integral part of software development, providing developers with confidence when making additions, changes, or refactors to the codebase. As I've embarked on my journey to learn frontend development, I often found myself pondering what to test first—utility functions, query calls, components, form schemas, or pages. Typically, I start by testing utility functions, such as date or number formatting, mappers, and other pure functions. These are easy, cost-effective, and quick to test. Then, I proceed with integration tests for more complex scenarios, like data creation involving multiple components: input forms, form schemas, confirmation dialogs, and toast notifications. While integration testing is more challenging, costly, and time-consuming compared to unit testing, it provides immense confidence when introducing changes to the application.

Over the past few months, I've been delving into integration testing for forms and several pages in my application using Jest and React Testing Library, but for learning purpose, I’ll try to use Vitest. I've found this process enjoyable and worthwhile, so I'm documenting it for my own learning purposes.

## Run the Test

```
# clone project
git clone https://github.com/abdmmar/integration-test-in-react.git
cd integration-test-in-react

# install dependencies
pnpm install # equivalent to npm install or yarn install

# build project # equivalent to npm test or yarn test
pnpm test
```

## Bug Founds

> ![NOTE]
> Bug Reproduction: [CodeSandbox](https://codesandbox.io/p/devbox/romantic-smoke-yd6m6j?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrcajcak00053584n7hokh8x%2522%252C%2522sizes%2522%253A%255B54.33098591549296%252C45.66901408450704%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrcajcak00023584q74torg4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrcajcak00033584em7208g2%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrcajcak000435845yny973m%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrcajcak00023584q74torg4%2522%253A%257B%2522id%2522%253A%2522clrcajcak00023584q74torg4%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrd66kap00023583ky7xmlgw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A31%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A31%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Ftest%252Fsetup.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrd66kap00023583ky7xmlgw%2522%257D%252C%2522clrcajcak000435845yny973m%2522%253A%257B%2522id%2522%253A%2522clrcajcak000435845yny973m%2522%252C%2522activeTabId%2522%253A%2522clrevpkaw007m3584rttsw7na%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522id%2522%253A%2522clrevpkaw007m3584rttsw7na%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clrcajcak00033584em7208g2%2522%253A%257B%2522id%2522%253A%2522clrcajcak00033584em7208g2%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clrcajmn5002n3584nxamobza%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522id%2522%253A%2522clrcamb8r00eo35843rfmlbwp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clrcam8lf000feffu3zs69cng%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrcamb8r00eo35843rfmlbwp%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A26.889886621300064%257D)

### PointerEvent

When adding mock for `PointerEvent` that used by `@radix-ui/react-select`, it will throw an error if we use `user.upload()` on the test case

```ts
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
window.PointerEvent = MockPointerEvent as any;
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
```

Error:
```bash
AssertionError: expected "spy" to be called 1 times, but got 0 times
```

Component:
```tsx
<input type="file">
```

### Input file required

Here's step to reproduction:
- Add `required` attribute to the `<input type="file"/>`
- Simulate user upload using `user.upload()` method
- Click submit button inside a `<form onSubmit={onSubmit}/>` tag
- Add assertion to check if component is valid

It will throw an error:

```bash
Received element is not currently valid:
  <input
  id="photo"
  name="photo"
  placeholder="Select photo"
  required=""
  type="file"
/>
```