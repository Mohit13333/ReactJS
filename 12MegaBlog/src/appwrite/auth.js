// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";


// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
            
//     }

//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 // call another method
//                 return this.login({email, password});
//             } else {
//                return  userAccount;
//             }
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({email, password}) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite serive :: getCurrentUser :: error", error);
//         }

//         return null;
//     }

//     async logout() {

//         try {
//             await this.account.deleteSession();
//         } catch (error) {
//             console.log("Appwrite serive :: logout :: error", error);
//         }
//     }
// }

import conf from '../conf/conf.js';  // Ensure this file has the correct values
import { Client, Account, ID } from 'appwrite';  // Make sure the version matches the SDK

export class AuthService {
  client = new Client();
  account;

  constructor() {
    // Configure Appwrite client
    this.client
      .setEndpoint(conf.appwriteUrl)  // Appwrite endpoint from config
      .setProject(conf.appwriteProjectId);  // Project ID from config

    this.account = new Account(this.client);  // Initialize the account
    console.log(this.account);  // Ensure account is initialized
  }

  // Method to create a new user
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // Log the user in after creating the account
        return this.login({ email, password });
      } else {
        throw new Error('Failed to create user account');
      }
    } catch (error) {
      console.error("Error in createAccount:", error.message);
      throw error;
    }
  }

  // Method to log in a user (with SDK version check)
  async login({ email, password }) {
    try {
      // Create session for the user
      if (typeof this.account.createEmailSession === 'function') {
        // For Appwrite SDK v0.13 or later
        return await this.account.createEmailSession(email, password);
      } else if (typeof this.account.createSession === 'function') {
        // For older SDK versions
        return await this.account.createSession(email, password);
      } else {
        throw new Error("createEmailSession or createSession is not available in this Appwrite SDK version");
      }
    } catch (error) {
      console.error("Error in login:", error.message);
      throw error;
    }
  }

  // Method to get the current user session
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error in getCurrentUser:", error.message);
      return null;
    }
  }

  // Method to log out the user
  async logout() {
    try {
      await this.account.deleteSession('current');  // Log out from the current session
    } catch (error) {
      console.error("Error in logout:", error.message);
    }
  }
}
const authService = new AuthService();

export default authService

