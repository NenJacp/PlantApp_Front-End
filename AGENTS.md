# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this PlantApp Front-End repository.

## Project Overview

This is a SvelteKit 5 application with TypeScript, Tailwind CSS, and Vitest for testing. The project follows modern web development practices with a focus on clean, maintainable code.

## Build, Lint, and Test Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run check` - Run Svelte type checking with TypeScript
- `npm run check:watch` - Run type checking in watch mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Run both Prettier check and ESLint

### Testing
- `npm run test` - Run all tests once (unit tests)
- `npm run test:unit` - Run Vitest in watch mode
- `npm run test:unit -- --run` - Run all tests once
- `npm run test:unit -- path/to/test.spec.ts` - Run single test file
- `npm run test:unit -- path/to/test.spec.ts --reporter=verbose` - Run single test with verbose output

## Code Style Guidelines

### TypeScript Configuration
- Strict mode enabled (`"strict": true`)
- Consistent casing enforced (`"forceConsistentCasingInFileNames": true`)
- ES modules with bundler resolution
- Source maps enabled for debugging

### Import Organization
- Use ES6 imports/exports exclusively
- Group imports in this order:
  1. External libraries (Svelte, Vitest, etc.)
  2. Internal SvelteKit imports (`$app/*`)
  3. Local imports (`$lib/*`)
  4. Relative imports (`./`, `../`)

### Svelte Component Structure
Follow this consistent pattern in `.svelte` files:
```svelte
<!-- Logica -->
<script lang="ts">
  // Imports first
  // Then component logic
</script>

<!-- Estructura y diseño -->
<main>
  <!-- HTML content -->
</main>

<!-- Estilos (if needed) -->
<style>
  /* Component-specific styles */
</style>
```

### Naming Conventions
- **Components**: PascalCase (e.g., `NavBar.svelte`, `UserProfile.svelte`)
- **Files**: kebab-case for routes, PascalCase for components
- **Variables**: camelCase
- **Functions**: camelCase, descriptive verbs (e.g., `handleSubmit`, `fetchUserData`)
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: Tailwind utility classes primarily

### TypeScript Usage
- Always use `lang="ts"` in script tags
- Type all function parameters and return values
- Use interfaces for object shapes
- Prefer explicit types over inference when clarity is needed
- Use generic types where appropriate

### Error Handling
- Use try-catch blocks for async operations
- Display user-friendly error messages
- Log technical errors for debugging
- Validate form inputs before submission
- Use Svelte's `{#if error}` blocks for conditional error display

### Svelte-Specific Patterns
- Use `bind:value` for form inputs
- Use `on:submit|preventDefault` for form handling
- Use `$app/navigation` for programmatic navigation
- Use Svelte stores for state management across components
- Leverage Svelte 5 reactivity with `$state` and `$derived`

### Tailwind CSS Guidelines
- Use utility classes over custom CSS when possible
- Follow mobile-first responsive design (`sm:`, `md:`, `lg:`)
- Use consistent color palette (green-600 for primary, gray-600 for secondary)
- Apply focus states for interactive elements (`focus:ring-2`, `focus:outline-none`)
- Use semantic spacing utilities (`p-4`, `m-2`, `space-y-4`)

### File Organization
```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── api.ts         # API utilities and functions
│   └── index.ts       # Library exports
├── routes/
│   ├── (public)/      # Public routes
│   ├── (private)/     # Authenticated routes
│   └── +layout.svelte # Root layout
└── app.d.ts          # Global type declarations
```

### Testing Guidelines
- Use Vitest for unit testing
- Use `vitest-browser-svelte` for component testing
- Test files should follow pattern: `*.spec.ts` or `*.test.ts`
- Use `describe`, `it`, and `expect` from Vitest
- Test user interactions and component rendering
- Mock external dependencies when needed

### ESLint Configuration
- TypeScript ESLint rules enabled
- Svelte ESLint plugin configured
- Prettier integration for consistent formatting
- No-undef rule disabled for TypeScript projects
- Browser and Node globals available

### Git Workflow
- Run `npm run lint` before committing
- Ensure all tests pass before pushing
- Use semantic commit messages
- Keep PRs focused and well-described

## Development Notes

- The project uses SvelteKit 5 with the new runes system
- Tailwind CSS v4 with Vite plugin for styling
- Vitest with Playwright for browser testing
- CORS enabled on development server
- Auto-adapter for deployment flexibility

## Common Patterns

### Form Handling
```typescript
let email: string = "";
let error: string = "";

function handleSubmit(): void {
  if (!email) {
    error = "Campo obligatorio";
    return;
  }
  // Process form
}
```

### Navigation
```typescript
import { goto } from "$app/navigation";
await goto("/target-route");
```

### API Calls
```typescript
// Use try-catch for async operations
try {
  const response = await fetch("/api/endpoint");
  const data = await response.json();
} catch (err) {
  error = "Error al cargar datos";
}
```

Remember to run `npm run check` and `npm run lint` after making changes to ensure code quality and consistency.