import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              We are committed to protecting your privacy. This policy outlines how we handle your data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">1. Data Collection</h2>
            <p>
              This platform is a static directory and discovery hub. We do not require account creation, and we do not collect, store, or process any personal data. We do not use cookies or tracking scripts.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">2. Third-Party Links</h2>
            <p>
              Our website contains links to third-party tools and websites. Once you click on these links, you are leaving our site. We do not have control over these third-party sites and are not responsible for their privacy practices. We encourage you to read the privacy policies of any website you visit.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">3. Analytics</h2>
            <p>
              We may use privacy-friendly, anonymous analytics (like Vercel Analytics) to monitor site traffic and performance. This data is not linked to any personally identifiable information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">4. Security</h2>
            <p>
              Since we do not collect personal data, the risk of data breaches on our end is minimal. However, we use industry-standard security measures to protect the integrity of our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">5. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out via GitHub.
            </p>

            <p className="pt-12 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
