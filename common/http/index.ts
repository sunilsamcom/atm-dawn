import Http from 'axios'
import {
  IHTTPRequestOptions,
  IHTTPRequestResponse
} from './interfaces'

export function http (options: IHTTPRequestOptions): Promise<IHTTPRequestResponse>  {
  const {
    // can be still enhance here,
    ..._options
  } = options || {}
  return Http({
    ..._options
  })
}
