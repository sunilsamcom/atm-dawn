export interface IHTTPRequestOptions {
  baseUrl?: string
  url?: string
  headers?: any
  data?: any
  method: "GET"|"POST"|"PUT"|"PATCH"|"DELETE" // can be convert to enum variable if necessary
}
export interface IHTTPRequestResponse {
  data: any,
  status: any,
}