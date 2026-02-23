"use client";

import Link from "next/link";
import { Code2, FacebookIcon, Github, Linkedin, Twitter } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <FadeIn className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Scode Station
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering developers and businesses with cutting-edge tech
              solutions and education.
            </p>
          </FadeIn>

          {/* Product Links */}
          <FadeIn delay={0.1} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/agency"
                  className="hover:text-primary transition-colors"
                >
                  Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="hover:text-primary transition-colors"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/scodestation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </FadeIn>

          {/* Company Links */}
          <FadeIn delay={0.2} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.3} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/scodestation"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sahidulislam05"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Scode Station. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
