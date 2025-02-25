import { databases, storage, ID } from "./appwrite"

const DATABASE_ID = "YOUR_DATABASE_ID"
const NOTES_COLLECTION_ID = "YOUR_NOTES_COLLECTION_ID"
const PDFS_COLLECTION_ID = "YOUR_PDFS_COLLECTION_ID"
const LINKS_COLLECTION_ID = "YOUR_LINKS_COLLECTION_ID"

export async function createNote(userId: string, title: string, content: string) {
  try {
    const response = await databases.createDocument(DATABASE_ID, NOTES_COLLECTION_ID, ID.unique(), {
      user_id: userId,
      title,
      content,
    })
    return response
  } catch (error) {
    console.error("Error creating note:", error)
    throw error
  }
}

export async function getNotes(userId: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, NOTES_COLLECTION_ID, [
      databases.equal("user_id", userId),
    ])
    return response.documents
  } catch (error) {
    console.error("Error getting notes:", error)
    throw error
  }
}

export async function uploadPDF(userId: string, file: File) {
  try {
    const uploadResponse = await storage.createFile("YOUR_BUCKET_ID", ID.unique(), file)

    const databaseResponse = await databases.createDocument(DATABASE_ID, PDFS_COLLECTION_ID, ID.unique(), {
      user_id: userId,
      file_id: uploadResponse.$id,
      name: file.name,
    })

    return databaseResponse
  } catch (error) {
    console.error("Error uploading PDF:", error)
    throw error
  }
}

export async function getPDFs(userId: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, PDFS_COLLECTION_ID, [
      databases.equal("user_id", userId),
    ])
    return response.documents
  } catch (error) {
    console.error("Error getting PDFs:", error)
    throw error
  }
}

export async function createLink(userId: string, url: string, title: string) {
  try {
    const response = await databases.createDocument(DATABASE_ID, LINKS_COLLECTION_ID, ID.unique(), {
      user_id: userId,
      url,
      title,
    })
    return response
  } catch (error) {
    console.error("Error creating link:", error)
    throw error
  }
}

export async function getLinks(userId: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, LINKS_COLLECTION_ID, [
      databases.equal("user_id", userId),
    ])
    return response.documents
  } catch (error) {
    console.error("Error getting links:", error)
    throw error
  }
}

