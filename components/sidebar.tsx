"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Book, FileText, LinkIcon, Calendar, Users, Settings, LogOut } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Book },
  { name: "Text Notes", href: "/dashboard/notes", icon: FileText },
  { name: "PDF Documents", href: "/dashboard/pdfs", icon: FileText },
  { name: "Web Links", href: "/dashboard/links", icon: LinkIcon },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Study Groups", href: "/dashboard/groups", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-primary">StudPal</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start", pathname === item.href ? "bg-secondary" : "")}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-100">
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </div>
    </div>
  )
}

