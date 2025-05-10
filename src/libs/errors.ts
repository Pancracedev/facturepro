// lib/errors/CredentialsSigninError.ts
export class CredentialsSigninError extends Error {
    code: string;
  
    constructor(message: string = "Identifiants invalides") {
      super(message);
      this.name = "CredentialsSignin";
      this.code = "credentials";
    }
  }
  