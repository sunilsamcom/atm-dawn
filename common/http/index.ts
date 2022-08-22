import Http from 'axios'
import {
  IHTTPRequestOptions,
  IHTTPRequestResponse
} from './interfaces'

export function HttpRequest (options: IHTTPRequestOptions): Promise<IHTTPRequestResponse>  {
  const {
    // can be still enhance here,
    ..._options
  } = options || {}
  return Http({
    ..._options
  })
}
