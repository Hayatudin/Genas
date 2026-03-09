import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[984px]">
      <nav className="flex items-center justify-between px-3 py-2.5 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full border border-white/20 h-[61px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-7 md:w-28 md:h-8">
              <Image
                src="/images/genas-logo.png"
                alt="Genas Logo"
                fill
                className="object-contain transition-transform"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Use Cases
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link href="/#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Resources
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center space-x-4">
          <Link href="/waitlist" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </Link>
          <Link href="/waitlist">
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 py-3 text-sm h-auto transition-shadow">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
