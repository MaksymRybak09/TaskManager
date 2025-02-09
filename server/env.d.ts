declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string
    JWT_SECRET: string
    DATABASE_URL: string
    CLIENT_URL: string
    REFRESH_TOKEN_NAME: string
    EXPIRE_DAY_REFRESH_TOKEN: number
  }
}
