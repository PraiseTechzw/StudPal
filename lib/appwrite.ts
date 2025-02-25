import { Client, Account, Databases, Storage, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("67bdd5af001c2044ef7a"); // Your Project ID

// Export instances for authentication, databases, and storage
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };

// Export client for direct access if needed
export default client;
