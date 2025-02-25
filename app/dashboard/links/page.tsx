"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "lucide-react"
import { createLink, getLinks } from "@/lib/materials"
import { getCurrentUser } from "@/lib/auth"

export default function Links() {
  const [links, setLinks] = useState([])
  const [userId, setUserId] = useState(null)
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser()
      if (user) {
        setUserId(user.$id)
        fetchLinks(user.$id)
      }
    }
    fetchUser()
  }, [])

  const fetchLinks = async (id) => {
    try {
      const fetchedLinks = await getLinks(id)
      setLinks(fetchedLinks)
    } catch (error) {
      console.error("Error fetching links:", error)
    }
  }

  const handleCreateLink = async (e) => {
    e.preventDefault()
    if (userId) {
      try {
        await createLink(userId, url, title)
        setUrl("")
        setTitle("")
        fetchLinks(userId)
      } catch (error) {
        console.error("Error creating link:", error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Web Links</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateLink} className="space-y-4">
            <Input placeholder="Link Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
            <Button type="submit">
              <Link className="mr-2 h-5 w-5" />
              Add Link
            </Button>
          </form>
        </CardContent>
      </Card>

      {links.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Card key={link.$id}>
              <CardHeader>
                <CardTitle>{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {link.url}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Web Links</CardTitle>
            <CardDescription>You haven't saved any links yet. Start by adding a new link!</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}

