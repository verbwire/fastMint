const express = require('express')
var parseUrl = require('body-parser')

const API_KEY = 'YOUR API KEY GOES HERE';
const app = express()
let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/image', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})

app.post('/image', encodeUrl, (req, res) => { 
  
  console.log('Request body:', req.body) 
  const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');

sdk.auth(API_KEY);
sdk.post('/nft/mint/quickMintFromFile', {
  allowPlatformToOperateToken: req.body.allowPlatformToOperateToken,
  chain: req.body.chain, 
  filePath:  req.body.Image, 
  name: req.body.name,
  description: req.body.name,
  recipientAddress: req.body.recipientAddress,
}, {accept: 'application/json'})
  .then(resp => res.send(resp))
  .catch(err => console.error(err)); 
})

app.get('/url', (req, res) => {
    res.sendFile(__dirname + '/form2.html')
  })
  
  app.post('/url', encodeUrl, (req, res) => {
    console.log('Form request:', req.body)
   
	const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');
  
  sdk.auth(API_KEY);
  sdk.post('/nft/mint/quickMintFromMetadataUrl', {
    allowPlatformToOperateToken: req.body.allowPlatformToOperateToken,
    chain: req.body.chain,
    metadataUrl: req.body.url,
    description: req.body.name,
    recipientAddress: req.body.recipientAddress,
  }, {accept: 'application/json'})
    .then(resp => res.send(resp))
    .catch(err => console.error(err)); 
  })
app.listen(8080)
