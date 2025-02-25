"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"
import { uploadPDF, getPDFs } from "@/lib/materials"
import { getCurrentUser } from "@/lib/auth"
import { storage } from "@/lib/appwrite"

export default function PDFs() {
  const [pdfs, setPDFs] = useState([])
  const [userId, setUserId] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser()
      if (user) {
        setUserId(user.$id)
        fetchPDFs(user.$id)
      }
    }
    fetchUser()
  }, [])

  const fetchPDFs = async (id) => {
    try {
      const fetchedPDFs = await getPDFs(id)
      setPDFs(fetchedPDFs)
    } catch (error) {
      console.error("Error fetching PDFs:", error)
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (userId && file) {
      try {
        await uploadPDF(userId, file)
        setFile(null)
        fetchPDFs(userId)
      } catch (error) {
        console.error("Error uploading PDF:", error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">PDF Documents</h1>
        <form onSubmit={handleUpload}>
          <Input type="file" onChange={handleFileChange} accept=".pdf" required />
          <Button type="submit">
            <Upload className="mr-2 h-5 w-5" />
            Upload PDF
          </Button>
        </form>
      </div>

      {pdfs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pdfs.map((pdf) => (
            <Card key={pdf.$id}>
              <CardHeader>
                <CardTitle>{pdf.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() =>
                    window.open(storage.getFileView(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, pdf.file_id), "_blank")
                  }
                >
                  View PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your PDF Documents</CardTitle>
            <CardDescription>You haven't uploaded any PDFs yet. Start by uploading a new PDF!</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}

