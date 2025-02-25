"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react"
import { createNote, getNotes } from "@/lib/materials"
import { getCurrentUser } from "@/lib/auth"

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser()
      if (user) {
        setUserId(user.$id)
        fetchNotes(user.$id)
      }
    }
    fetchUser()
  }, [])

  const fetchNotes = async (id) => {
    try {
      const fetchedNotes = await getNotes(id)
      setNotes(fetchedNotes)
    } catch (error) {
      console.error("Error fetching notes:", error)
    }
  }

  const handleCreateNote = async (e) => {
    e.preventDefault()
    if (userId) {
      try {
        await createNote(userId, title, content)
        setTitle("")
        setContent("")
        fetchNotes(userId)
      } catch (error) {
        console.error("Error creating note:", error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Text Notes</h1>
        <Button onClick={() => setShowCreateForm(true)}>
          <PlusCircle className="mr-2 h-5 w-5" />
          New Note
        </Button>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Note</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateNote} className="space-y-4">
              <div>
                <Input placeholder="Note Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <Textarea
                  placeholder="Note Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Create Note</Button>
            </form>
          </CardContent>
        </Card>
      )}

      {notes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.$id}>
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{note.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Notes</CardTitle>
            <CardDescription>You haven't created any notes yet. Start by creating a new note!</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}

