declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string
    JWT_SECRET: string
    DATABASE_URL: string
    CLIENT_URL: string
  }
}
