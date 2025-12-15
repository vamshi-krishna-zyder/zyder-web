import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                Z
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                ZYDER
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The operating system for modern logistics. Unifying workforce, operations, and payments in one platform.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-violet-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-violet-400 transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-violet-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-violet-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/company" className="hover:text-violet-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-violet-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-violet-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-violet-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
                aria-label="Email address"
              />
              <button
                type="button"
                className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Zyder Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
