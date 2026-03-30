# React Application Template

A lightweight bootstrap template for isolated React + TypeScript applications.

Includes pre-configured:

- Webpack (dev + prod builds)
- TypeScript
- ESLint
- Jest + React Testing Library
- Prettier
- SCSS support

Any small React project can use this as a starting point without needing to wire up tooling from scratch.

---

## Dependency Strategy

Shared configuration (ESLint, and later tsconfig/jest) has been extracted into standalone versioned packages rather than living directly in this template.

**Why:** When config improves in one place, every app consuming it can adopt those changes by bumping a version, instead of manually copying files across repos.

### Shared packages

| Package                                                 | Repo                                                                              |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `@aaronmacken/eslint-config-react-application-template` | [GitHub](https://github.com/AaronMacken/eslint-config-react-application-template) |

### How to consume a shared package

Install from GitHub Packages:

```bash
npm install -D @aaronmacken/eslint-config-react-application-template@2.0.1
```

Before installing private scoped packages, add an `.npmrc` file in the repo root:

```ini
@aaronmacken:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_AUTH_TOKEN}
always-auth=true
```

Set `GITHUB_PACKAGES_AUTH_TOKEN` as a user-level environment variable on each machine.

### How to update to a new version

When the shared config releases a new package version, bump it in this app:

```bash
npm install -D @aaronmacken/eslint-config-react-application-template@2.0.2
```

No manual file merging or copy-pasting required.

---

## Getting Started

```bash
npm install
npm start
```

## Scripts

| Command                 | Description            |
| ----------------------- | ---------------------- |
| `npm start`             | Start dev server       |
| `npm run build`         | Production build       |
| `npm run lint`          | Run ESLint             |
| `npm run format`        | Run Prettier           |
| `npm test`              | Run Jest               |
| `npm run test:coverage` | Run Jest with coverage |
