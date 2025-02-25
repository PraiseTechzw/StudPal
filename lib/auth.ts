import { account, ID } from "./appwrite"

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await account.create(ID.unique(), email, password, name)
    return response
  } catch (error) {
    console.error("Error signing up:", error)
    throw error
  }
}

export async function login(email: string, password: string) {
  try {
    const session = await account.createSession(email, password)
    return session
  } catch (error) {
    console.error("Error logging in:", error)
    throw error
  }
}

export async function logout() {
  try {
    await account.deleteSession("current")
  } catch (error) {
    console.error("Error logging out:", error)
    throw error
  }
}

export async function getCurrentUser() {
  try {
    return await account.get()
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}

