import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your Next.js starter template dashboard
              </p>
            </div>
            <LogoutButton />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              description="Learn how to use this template effectively"
              href="/docs/getting-started"
              title="Getting Started"
            />
            <DashboardCard
              description="Browse available UI components"
              href="/docs/components"
              title="Components"
            />
            <DashboardCard
              description="Connect your backend API"
              href="/docs/api"
              title="API Integration"
            />
          </div>

          <div className="bg-card rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Create New Project</Button>
              <Button variant="outline">View Documentation</Button>
              <Button variant="outline">Settings</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <Button onClick={signOut} variant="outline">
      Sign Out
    </Button>
  );
};

const DashboardCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => (
  <div className="bg-card rounded-lg border p-6 transition-shadow hover:shadow-md">
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button asChild size="sm" variant="outline">
      <a href={href}>Learn More</a>
    </Button>
  </div>
);
