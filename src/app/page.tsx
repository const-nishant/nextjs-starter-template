import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="from-background to-muted/20 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Next.js Starter Template
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl md:text-2xl">
              A modern, production-ready Next.js starter template with
              TypeScript, Tailwind CSS, shadcn/ui, and all the tools you need to
              build amazing web applications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="px-8 py-6 text-lg" size="lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button
              asChild
              className="px-8 py-6 text-lg"
              size="lg"
              variant="outline"
            >
              <Link
                href="https://github.com/your-username/nextjs-starter"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-card rounded-lg border p-6">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fast & Modern</h3>
              <p className="text-muted-foreground">
                Built with Next.js 15, React 19, and TypeScript for optimal
                performance and developer experience.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Beautiful UI</h3>
              <p className="text-muted-foreground">
                Styled with Tailwind CSS and shadcn/ui components for a
                consistent, accessible design system.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Production Ready</h3>
              <p className="text-muted-foreground">
                Includes ESLint, Prettier, Husky, and commitlint for code
                quality and consistent development workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
