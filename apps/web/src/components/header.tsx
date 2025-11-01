"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";
import { Search, Menu, X, Wrench } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { to: "/json-tools", label: "JSON Tools" },
    { to: "/pdf-tools", label: "PDF Tools" },
    { to: "/image-tools", label: "Image Tools" },
    { to: "/calculators", label: "Calculators" },
    { to: "/text-tools", label: "Text Tools" },
    { to: "/api-tools", label: "APIs" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl md:text-2xl hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary">
              <Wrench className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Forgeel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map(({ to, label }) => (
              <Link
                key={to}
                href={to as any}
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Icon */}
            <button className="md:hidden p-2 hover:bg-secondary rounded-md">
              <Search className="w-5 h-5" />
            </button>

            <ModeToggle />
            <UserMenu />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">
              {categories.map(({ to, label }) => (
                <Link
                  key={to}
                  href={to as any}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
