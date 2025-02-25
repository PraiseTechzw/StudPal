import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-navy-blue">
                StudPal
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login">
              <Button variant="ghost" className="text-navy-blue">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" className="ml-4 bg-teal text-white">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

