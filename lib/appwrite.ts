import { Client, Account, Databases, Storage } from "appwrite"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("67bdd5af001c2044ef7a") // Set your project ID

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export { ID } from "appwrite"

