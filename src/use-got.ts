import { client } from "./client.mjs"

function sendRequest() {
  return client.get('https://baidu.com')
}

sendRequest().then(r => {
  console.log('r:', r)
})
