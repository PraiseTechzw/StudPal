import { account, ID, databases } from "./appwrite";

const DATABASE_ID = "67be1ae50033fad4461f";
const COLLECTION_ID = "67be1b200025298f6a0f";


// Create an account
export async function signUp(email: string, password: string, name: string, major: string) {
  try {
    console.log("🚀 Signing up user...");
    console.log("📩 Email:", email);
    console.log("🔑 Password:", password);
    console.log("👤 Name:", name);
    console.log("📚 Major:", major);

    // Create user in Appwrite Authentication
    const user = await account.create(ID.unique(), email, password, name);
    console.log("✅ User created in Auth:", user);

    // Save user details to Firestore
    console.log("📝 Saving user to database...");
    await saveUserToDB(user.$id, name, email, major);

    console.log("🎉 User successfully saved in database!");
    return user;
  } catch (error: any) {
    console.error("❌ Error signing up:", error.message || error);
    throw error;
  }
}
export async function saveUserToDB(userId: string, name: string, email: string, major: string) {
  try {
    console.log("📡 Sending request to save user in database...");
    console.log("🆔 User ID:", userId);
    console.log("👤 Name:", name);
    console.log("📩 Email:", email);
    console.log("📚 Major:", major);

    // Create document in Appwrite Database
    const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      userId, // Ensure this field exists in Appwrite schema
      name,
      email,
      major,
    });

    console.log("✅ User saved successfully in database:", response);
    return response;
  } catch (error: any) {
    console.error("❌ Error saving user to database:", error.message || error);
    throw error;
  }
}

// Login Function
export async function login(email: string, password: string) {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error?.message || "Invalid login credentials.");
  }
}

// Logout Function
export async function logout() {
  try {
    await account.deleteSession("current");
  } catch (error: any) {
    console.error("Logout error:", error);
    throw new Error("Failed to log out. Please try again.");
  }
}

// Get the currently logged-in user
export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error: any) {
    console.error("Get user error:", error);
    return null;
  }
}
