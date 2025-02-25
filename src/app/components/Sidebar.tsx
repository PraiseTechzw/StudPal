import { FileText, FileImage, Link, Calendar, Users, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 p-4 hidden md:block">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <FileText />
              <span>Text Notes</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <FileImage />
              <span>PDF Documents</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <Link />
              <span>Web Links</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <Calendar />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <Users />
              <span>Study Groups</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-navy-blue hover:bg-gray-100 p-2 rounded">
              <Settings />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

