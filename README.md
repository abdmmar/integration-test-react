# Integration Test in React

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