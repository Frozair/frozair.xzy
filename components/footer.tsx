import Link from 'next/link';
import { Twitch, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              Frozair
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Mobile app developer, content creator, and music engineer passionate about building innovative apps and sharing knowledge with the community.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitch.tv/fr0zair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#6441a5] transition-colors"
                aria-label="Twitch"
              >
                <Twitch className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@Frozair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/Frozair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/apps/beby" className="text-muted-foreground hover:text-foreground transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://twitch.tv/fr0zair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitch
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@Frozair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Frozair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@Frozair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Frozair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}