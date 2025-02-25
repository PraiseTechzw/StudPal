import { Client, Account, Databases, Storage } from "appwrite"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("YOUR_PROJECT_ID") // Set your project ID

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export { ID } from "appwrite"

