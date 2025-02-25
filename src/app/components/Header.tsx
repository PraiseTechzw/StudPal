import { Search, Bell } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-navy-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">StudPal</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>
          <button className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-teal">
            <Bell />
          </button>
        </div>
      </div>
    </header>
  )
}

