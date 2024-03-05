# NEXTJS STARTER TEMPLATE

This project is built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [TailwindCSS](https://tailwindcss.com/) & [TypeScript](https://www.typescriptlang.org/).

## Features

- NextJS 13
- TailwindCSS 3
  - Class sorting using `prettier-plugin-tailwindcss`
- Typescript 5
- shadcn/ui
- Code Formatting via Prettier
- Commit linting using Conventional Commits
- Lint and format staged files using [lint-staged](https://github.com/okonet/lint-staged/)
- Responsive Layout
- Custom 404 page
- Security Headers
- RSS Feed (opt-in)
- Optiomised SEO and Link Metadata (Lighthouse SEO score = 100)
- Automatic sitemap generation
- Staging environment support
- Accessbility Linting
- First class Visual Studio Code integration

## Getting Started

First, install the required packages:

```bash
yarn install
```

By default yarn will install using `--frozen-lockfile` which makes sure that the environment is consistent on any machine by installing the exact package versions listed in the [yarn.lock](yarn.lock). You can opt out of the behaviour by adding `--force`.

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

**Always** run `yarn build && yarn start` to see how the code works in a production environment before committing.

For staging environments use `build:staging` and `start:staging`.

- This updates the system environment variables and page metadata.

Uses [@axe-core/react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md) for accessbility testing.

Uses the `cn` alias built on [tailwind-merge](https://github.com/dcastil/tailwind-merge/) to organise our classes into groups that combine at build time.

### Committing your changes

Before a commit is accepted the staged changes will be formatted using [prettier](https://prettier.io/) and linted using [eslint](https://eslint.org/). The commit will be reverted if files are formatted or lint errors are returned.

#### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Commit messages will be checked using [husky](https://typicode.github.io/husky/#/) and [commitlint](https://commitlint.js.org/).

### TailwindCSS

#### Class organisation

This helps with readability and is encouraged. Consider it to be a guideline and not a set of rules.

##### React

```jsx
  <div className={cn(
    "general classes here - colors, fonts, padding, margin etc",
    "each responsive class utility should have it's own string md: lg: etc."
    "placeholder classes",
    "animations, transforms, effect",
    "pseudo classes i.e hover, focus, active, etc.",
    "toggling classes i.e. NavMenu isExpanded"
  )}></div>
```

##### Custom CSS classes

Any custom CSS classes should be written in [globals.css](src/app/globals.css).

```css
.custom-class {
  @apply "general classes here - colors, fonts, padding, margin";
  @apply "group breakpointed classes into their own strings";
  @apply "placeholder classes";
  @apply "animations, transforms, effect";
  @apply "pseudo classes i.e hover, focus, active";
}
```

#### Notes

- We can't use template literals with classes if we want to purge the CSS.
  - https://github.com/tailwindlabs/tailwindcss/issues/2209#issuecomment-677855297
  - https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  - Avoid: `hover:bg-black hover:text-${bgColor}`
  - Do: `const hoverClasses = [backgroundColor === 'black' && 'bg-black hover:text-black'];`

## Deployment

1. Once you have a domain replace all instances of `YOUR_DOMAIN_HERE` in this project.
2. Edit [constants/metadata.ts](constants/metadata.ts) with your project info for accurate metadata and effective SEO.
