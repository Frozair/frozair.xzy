'use client';

import { ArrowRight, Twitch, Youtube, Instagram, Check, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Building. Streaming. Creating.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Hey, I'm Frozair. A mobile app developer, content creator, and music engineer. I build apps, share knowledge, and go live to bring ideas to life. Let's make something great together.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/apps"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://twitch.tv/fr0zair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#6441a5] text-white hover:opacity-90 transition-opacity"
              >
                <Twitch className="mr-2 h-4 w-4" />
                Twitch
              </a>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I started my journey in music engineering, shaping sounds in urban genres before transitioning into mobile app development. Now, I build Kotlin-based mobile apps, share my knowledge through content, and live stream my development process.
                  </p>
                  <p>
                    By day, I develop apps that solve real-world problems. By night, I go live to code, connect, and share what I learn. I know the struggles of balancing passion, family, and mental health, and I use my platform to inspire others pushing through their own battles.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Tech I Love</h3>
                      <p className="text-muted-foreground">Kotlin, Kotlin Multiplatform, Jetpack Compose</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Music Background</h3>
                      <p className="text-muted-foreground">Audio Engineering, Production, Mixing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 relative aspect-square max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-card border rounded-2xl overflow-hidden transform -rotate-3">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    {/* <span className="text-muted-foreground">Profile Image</span> */}
                    <img src="https://i.imgur.com/8r82yUh.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 order-2 md:order-1">
                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <iframe 
                    src="https://player.twitch.tv/?fr0zair&parent=stackblitz.com" 
                    height="100%" 
                    width="100%" 
                    className="w-full h-full"
                    title="Twitch Stream"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              
              <div className="flex-1 order-1 md:order-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Live Streaming
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Let's Build Together!</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join the stream – Let's talk code, music, and life. I share my development process, answer questions, and build in public to help others learn and grow.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://twitch.tv/fr0zair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[#6441a5] text-white hover:opacity-90 transition-opacity"
                  >
                    <Twitch className="mr-2 h-4 w-4" />
                    Follow on Twitch
                  </a>
                  
                  <a
                    href="https://youtube.com/@Frozair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-secondary border border-border hover:bg-secondary/80 transition-colors"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                My Projects
              </div>
              <h2 className="text-4xl font-bold mb-4">Apps I'm Building</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's what I've been working on. Every app is built with a mix of passion and purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in my apps, want to collaborate, or just want to say hi, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://twitch.tv/fr0zair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#6441a5] text-white hover:opacity-90 transition-opacity"
              >
                <Twitch className="mr-2 h-4 w-4" />
                Twitch
              </a>
              <a
                href="https://youtube.com/@Frozair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
              >
                <Youtube className="mr-2 h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://instagram.com/Frozair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90 transition-opacity"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://tiktok.com/@Frozair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition-opacity"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.133 5.133 0 0 1-1.537-3.168h-3.464v13.576a2.5 2.5 0 0 1-4.338 1.706 2.5 2.5 0 0 1 0-3.412 2.5 2.5 0 0 1 3.877.309 2.5 2.5 0 0 1 .461 1.397V9.838a8.334 8.334 0 0 0-1.65-.165 8.412 8.412 0 0 0-5.941 2.46 8.419 8.419 0 0 0 0 11.883 8.412 8.412 0 0 0 11.882 0 8.412 8.412 0 0 0 2.46-5.942V8.238a8.528 8.528 0 0 0 5.134 1.721v-3.47a5.134 5.134 0 0 1-3.47-.927Z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}