import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AppsPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Creations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apps I'm Building
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a collection of apps I've built. Each one solves a problem I've faced or seen in the creator world.
            </p>
          </div>

          {/* App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beby App */}
            <Link href="/apps/beby" className="group">
              <div className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">Beby</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Beby – The Smart Baby Tracker
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    Helping parents track and manage their baby's growth, feeding schedules, sleep patterns, and more.
                  </p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Learn More
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Coming Soon App 1 */}
            <div className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">
                  App Name 2
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  A brief description of this amazing project and its key features.
                </p>
                <div className="inline-flex items-center text-muted-foreground font-medium">
                  Coming Soon
                </div>
              </div>
            </div>
            
            {/* Coming Soon App 2 */}
            <div className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">
                  App Name 3
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  A brief description of this amazing project and its key features.
                </p>
                <div className="inline-flex items-center text-muted-foreground font-medium">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          
          {/* Development Process */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I build apps with a focus on user experience, performance, and maintainability.
                Here's how I approach each project:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Research & Planning</h3>
                <p className="text-muted-foreground">
                  I start by understanding the problem and researching existing solutions. Then I plan the architecture and design.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                <p className="text-muted-foreground">
                  I build the app using modern technologies and best practices, with continuous testing throughout the process.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch & Iteration</h3>
                <p className="text-muted-foreground">
                  After launch, I gather user feedback and continuously improve the app with new features and optimizations.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-24 bg-primary/5 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Have an App Idea?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always open to new projects and collaborations. If you have an app idea or need help with development, let's talk!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://twitch.tv/fr0zair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Connect on Twitch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}