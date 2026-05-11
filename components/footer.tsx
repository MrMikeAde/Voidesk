import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-4 py-12 sm:px-8 sm:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold tracking-tight text-foreground">Voidesk</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The professional discovery hub for high-performance productivity tools. Curated for builders, by builders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/#tools" className="hover:text-foreground transition-colors">Tools</Link></li>
                <li><Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Voidesk. Built for the modern web.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
