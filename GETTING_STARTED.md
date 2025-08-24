# Getting Started with Next.js Starter Template

This guide will help you get up and running with your new Next.js project.

## 🚀 Quick Start

1. **Clone or download the template**

   ```bash
   git clone <your-template-url> my-project
   cd my-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Understanding the Structure

### Key Directories

- **`src/app/`** - Next.js App Router pages and layouts
- **`src/components/`** - Reusable React components
- **`src/hooks/`** - Custom React hooks
- **`src/lib/`** - Utility functions and configurations
- **`src/services/`** - API services and external integrations
- **`src/stores/`** - Zustand state management
- **`src/types/`** - TypeScript type definitions

### Key Files

- **`src/app/layout.tsx`** - Root layout with providers
- **`src/app/page.tsx`** - Home page
- **`src/lib/providers.tsx`** - Context providers (React Query, etc.)
- **`src/lib/utils.ts`** - Utility functions
- **`src/stores/authStore.ts`** - Authentication state management
- **`src/services/apiClient.ts`** - HTTP client configuration

## 🎨 Customization

### Styling

The template uses Tailwind CSS v4 with a comprehensive design system:

1. **Colors**: Edit CSS variables in `src/app/globals.css`
2. **Components**: Use shadcn/ui CLI to add new components
3. **Theme**: Customize the design tokens in the CSS variables

### Adding New Pages

1. Create a new file in `src/app/` following Next.js App Router conventions
2. Use the existing layout structure
3. Import components from `src/components/`

### Adding New Components

1. Create components in the appropriate directory under `src/components/`
2. Use the existing UI components from `src/components/ui/`
3. Follow the established patterns for props and styling

## 🔧 Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking

# Utilities
npm run clean        # Clean build artifacts
npm run check-all    # Run all checks
```

### Git Workflow

The template includes pre-commit hooks that:

- Run ESLint on staged files
- Format code with Prettier
- Validate commit messages

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting changes
- `refactor:` for code refactoring

## 🔌 API Integration

### Setting Up Your Backend

1. Update `NEXT_PUBLIC_API_URL` in `.env.local`
2. The API client is configured in `src/services/apiClient.ts`
3. Use React Query for server state management

### Example API Call

```typescript
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/apiClient';

function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => apiClient.get('/users'),
  });
}
```

## 🔐 Authentication

The template includes a complete authentication system:

1. **State Management**: Zustand store in `src/stores/authStore.ts`
2. **Custom Hook**: `useAuth` hook in `src/hooks/useAuth.ts`
3. **API Integration**: Authentication endpoints in `src/services/apiClient.ts`

### Using Authentication

```typescript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, signIn, signOut } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <div>Welcome, {user?.name}!</div>;
}
```

## 📱 Responsive Design

The template is built with mobile-first responsive design:

- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Test on different screen sizes
- Use the existing responsive components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

Make sure to set up your environment variables in your deployment platform:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_APP_ENV`
- Any other environment-specific variables

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `package.json` scripts
2. **TypeScript errors**: Run `npm run type-check` to identify issues
3. **Linting errors**: Run `npm run lint:fix` to auto-fix issues
4. **Build errors**: Check the console output for specific error messages

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Look at the [shadcn/ui documentation](https://ui.shadcn.com/)

## 📚 Next Steps

1. **Read the documentation** for each library you're using
2. **Explore the components** in `src/components/ui/`
3. **Set up your backend API** and update the configuration
4. **Customize the design** to match your brand
5. **Add more features** following the established patterns

Happy coding! 🚀
