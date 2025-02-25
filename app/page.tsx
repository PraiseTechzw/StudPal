import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Layers, Search, Users, Calendar, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-studpal-blue via-studpal-purple to-studpal-pink text-white">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          StudPal
        </Link>
        <nav>
          <Link href="/login">
            <Button variant="ghost" className="mr-4 text-white hover:text-studpal-blue hover:bg-white">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-white text-studpal-blue hover:bg-studpal-blue hover:text-white">Sign up</Button>
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Your Ultimate <span className="text-studpal-orange">Academic Companion</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Revolutionize your study habits with StudPal. Organize, collaborate, and excel in your academic journey like
            never before.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 bg-studpal-green hover:bg-studpal-blue text-white">
              Start Your Free Trial
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <div className="mt-12">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="StudPal Dashboard Preview"
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-studpal-blue">Supercharge Your Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Search className="w-12 h-12 text-studpal-blue" />}
                title="Smart Search"
                description="Find any piece of information across all your materials in seconds."
              />
              <FeatureCard
                icon={<Layers className="w-12 h-12 text-studpal-purple" />}
                title="Organize with Ease"
                description="Categorize and tag your resources for effortless retrieval."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-studpal-pink" />}
                title="Collaborate"
                description="Work together with classmates on group projects and study sessions."
              />
              <FeatureCard
                icon={<Calendar className="w-12 h-12 text-studpal-orange" />}
                title="Visual Calendar"
                description="Keep track of deadlines, exams, and study schedules in one place."
              />
              <FeatureCard
                icon={<Zap className="w-12 h-12 text-studpal-green" />}
                title="AI-Powered Insights"
                description="Get personalized study recommendations based on your learning patterns."
              />
              <FeatureCard
                icon={<Book className="w-12 h-12 text-studpal-blue" />}
                title="Multi-format Support"
                description="Manage text notes, PDFs, web links, and more in a unified platform."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-studpal-blue to-studpal-purple">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-studpal-blue">How StudPal Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-studpal-blue text-white flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p>Create your free account and set up your profile.</p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-studpal-purple text-white flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Materials</h3>
                <p>Add your study materials, notes, and resources.</p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-studpal-pink text-white flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Organize & Study</h3>
                <p>Categorize, search, and collaborate to boost your learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-studpal-blue py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Academic Life?</h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Join thousands of students who are already excelling with StudPal. Start your journey to academic success
              today!
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 bg-white text-studpal-blue hover:bg-studpal-green hover:text-white"
              >
                Get Started - It's Free
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-studpal-blue">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} StudPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    image: "/placeholder.svg?height=100&width=100",
    quote: "StudPal has completely transformed my study habits. I'm more organized and productive than ever!",
  },
  {
    name: "Samantha Lee",
    role: "Pre-med Student",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The collaboration features in StudPal have made group projects a breeze. It's a game-changer!",
  },
  {
    name: "Michael Brown",
    role: "MBA Candidate",
    image: "/placeholder.svg?height=100&width=100",
    quote: "As a busy grad student, StudPal helps me stay on top of my coursework and research. Highly recommended!",
  },
]

function TestimonialCard({ name, role, image, quote }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl text-gray-800">
      <p className="mb-4 text-lg italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

