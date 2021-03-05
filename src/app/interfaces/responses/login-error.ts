export interface LoginError {
  error: Error;
}

export interface Error {
  code: number;
  message: string;
  errors: ErrorList[];
}

export interface ErrorList {
  message: string;
  domain: string;
  reason: string;
}
