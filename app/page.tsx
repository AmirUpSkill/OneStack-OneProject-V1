import { ThemeToggle } from "@/components/theme-toggle";
import { Logo, LogoIcon } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  CheckSquare, 
  Sparkles, 
  Plus, 
  MoreHorizontal,
  User,
  Settings,
  LogOut,
  Moon,
  Sun
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Landing Page Style Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Right side: Theme Toggle + Sign In */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section Preview */}
        <section className="text-center space-y-6 py-12">
          <h1 className="text-5xl font-bold tracking-tight">
            Manage Your Tasks with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The smartest way to organize your work and boost productivity
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            Get Started for Free
          </Button>
        </section>

        {/* Component Showcase in Context */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Core UI Components in Context</h2>
            <p className="text-muted-foreground">
              See how your components will look in the actual SaaS product
            </p>
          </div>

          {/* Todo Card Preview */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-primary" />
                    Today's Tasks
                  </span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Task
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Sample Todo Items */}
                <div className="flex items-center gap-3 p-3 rounded-md bg-secondary/50">
                  <Checkbox id="task1" />
                  <label htmlFor="task1" className="flex-1 cursor-pointer">
                    Build landing page with hero section
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-secondary/50">
                  <Checkbox id="task2" checked />
                  <label htmlFor="task2" className="flex-1 cursor-pointer line-through text-muted-foreground">
                    Setup authentication with Clerk
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Add Task Input */}
                <div className="flex items-center gap-2 pt-2">
                  <Input placeholder="Add a new task..." className="flex-1" />
                  <Button size="icon" className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Theme System Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Theme System
                </CardTitle>
                <CardDescription>
                  Dark mode with coral accents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Background</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#2B2B2B] border border-border"></div>
                    <code className="text-xs bg-muted px-2 py-1 rounded">#2B2B2B</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Card Background</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#1E1E1E] border border-border"></div>
                    <code className="text-xs bg-muted px-2 py-1 rounded">#1E1E1E</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Input Background</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#3A3A3A] border border-border"></div>
                    <code className="text-xs bg-muted px-2 py-1 rounded">#3A3A3A</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Accent Color</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#E07856] border border-border"></div>
                    <code className="text-xs bg-muted px-2 py-1 rounded">#E07856</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-primary" />
                  Component Status
                </CardTitle>
                <CardDescription>
                  Layer 2 components ready
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Theme Toggle
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Logo Component
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Card Component
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Input Component
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Checkbox Component
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Dropdown Menu
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* User Menu Preview */}
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  User Menu Preview
                </CardTitle>
                <CardDescription>
                  How the authenticated header will look
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-3 border border-border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                      JD
                    </div>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}