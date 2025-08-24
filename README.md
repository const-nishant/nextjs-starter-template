# Next.js Starter Template

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, shadcn/ui, and all the tools you need to build amazing web applications.

## 🚀 Features

- **Next.js 15** - Latest version with App Router and Turbopack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Latest version with CSS variables
- **shadcn/ui** - Beautiful, accessible components
- **Zustand** - Lightweight state management
- **React Query** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **ESLint & Prettier** - Code quality and formatting
- **Husky & lint-staged** - Git hooks for code quality
- **Commitlint** - Conventional commits
- **Axios** - HTTP client with interceptors
- **React Hot Toast** - Beautiful notifications

## 📦 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Server State**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Code Quality**: ESLint, Prettier, Husky
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the template**

   ```bash
   git clone https://github.com/your-username/nextjs-starter.git my-app
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_APP_ENV=development
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── auth/             # Authentication components
│   ├── common/           # Common components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── providers.tsx     # Context providers
│   └── utils.ts          # Utility functions
├── services/             # API services
├── stores/               # Zustand stores
├── types/                # TypeScript types
└── styles/               # Additional styles
```

## 🎨 Styling

This template uses **Tailwind CSS v4** with a comprehensive design system:

- **CSS Variables**: Custom properties for colors, spacing, and typography
- **Dark Mode**: Built-in dark mode support
- **shadcn/ui**: Pre-built, accessible components
- **Responsive Design**: Mobile-first approach

### Customization

1. **Colors**: Edit CSS variables in `src/app/globals.css`
2. **Components**: Use shadcn/ui CLI to add new components
3. **Theme**: Modify Tailwind config for custom design tokens

## 🔧 Development

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
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking

# Utilities
npm run clean        # Clean build artifacts
npm run check-all    # Run all checks (type, lint, format)
```

### Code Quality

This template includes comprehensive code quality tools:

- **ESLint**: Code linting with Airbnb config
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit linting
- **Commitlint**: Conventional commit messages

### Git Hooks

The template includes pre-commit hooks that:

- Run ESLint on staged files
- Format code with Prettier
- Validate commit messages

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The template is compatible with all major hosting platforms:

- **Netlify**: Use `npm run build` and `npm run start`
- **Railway**: Automatic deployment from GitHub
- **Docker**: Use the provided Dockerfile

## 📚 Documentation

### Key Concepts

- **App Router**: Next.js 13+ file-based routing
- **Server Components**: Default in App Router
- **Client Components**: Use `'use client'` directive
- **TypeScript**: Full type safety throughout
- **State Management**: Zustand for client state, React Query for server state

### Best Practices

1. **File Naming**: Use kebab-case for files, PascalCase for components
2. **Imports**: Use absolute imports with `@/` prefix
3. **Components**: Keep components small and focused
4. **State**: Use Zustand for global state, React state for local state
5. **API**: Use React Query for server state management
6. **Forms**: Use React Hook Form with Zod validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run check-all`
5. Commit with conventional commit message
6. Push and create a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Join the [Next.js Discord](https://discord.gg/nextjs)

---

Made with ❤️ by [Your Name]
