import Link from 'next/link';
import { ArrowDownToLine, CheckCircle2 } from 'lucide-react';

export default function BebyPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-12">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Beby – The Smart Baby Tracker
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Helping parents track and manage their baby's growth, feeding schedules, sleep patterns, and more—all in one place!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download on Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Beby? */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Beby?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beby is a modern baby-tracking app designed to help parents stay on top of their baby's daily routines. 
              From feeding schedules to sleep tracking and growth milestones, Beby makes parenting easier by keeping 
              everything organized in one place.
            </p>

            <h3 className="text-xl font-semibold mb-4">👩‍🍼 Who is it for?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <span>New parents who want to monitor their baby's habits.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <span>Parents managing multiple babies.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <span>Caregivers and babysitters needing an easy way to log activities.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Feeding Tracker',
                description: 'Log bottle feeds, breastfeeding sessions, and solid foods.',
              },
              {
                title: 'Sleep Monitoring',
                description: 'Track naps and nighttime sleep duration.',
              },
              {
                title: 'Growth Chart',
                description: 'Monitor height, weight, and head circumference over time.',
              },
              {
                title: 'Diaper Log',
                description: 'Keep track of wet and dirty diapers to ensure baby\'s health.',
              },
              {
                title: 'Medication Reminders',
                description: 'Set alerts for vitamins, vaccines, and medications.',
              },
              {
                title: 'Sync Across Devices',
                description: 'Share data with your partner or caregivers.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🛠 Built with:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Language: Kotlin, Kotlin Multiplatform
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  UI Framework: Jetpack Compose
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Backend: Firebase for authentication & data storage
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Storage: Secure local and cloud-based storage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Changelog & Updates</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">📢 Latest Version: v1.0.0</h3>
                <p className="text-muted-foreground">Initial Release! 🎉</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">🆕 Upcoming Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                    Dark mode support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                    Customizable reminder notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                    More detailed growth tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Legal & Privacy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              🔒 Your data is private and secure. Beby does not sell or share your data.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/apps/beby/privacy-policy"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-and-conditions"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}