<div align="center">
    <img alt="verbwire" src="resources/rocketLauncher_.gif"/>
</div>

# fastMint
This simple minting app was built using the Verbwire API. The app lets you mint an NFT from a simple image file, or metadata file. You can mint on any of the 14 supported blockchains (7 testnets and 7 mainnets). For more details on using the Verbwire API you can access the full API docs [here](https://docs.verbwire.com/docs)

## Requirements
1. You'll need a Verbwire API Key. You can get a free API key [HERE](https://www.verbwire.com/auth/register)

## Steps to run program locally
1. In the file, fastMint.js, replace the text "YOUR API KEY GOES HERE" with your actual API key. See image in the additional section below.

2. From you command prompt, type in *npm i* to install node modules

3. From you command prompt, type in *node fastMint.js* to start the program 

4. Open your browser and goto localhost:8080/url to mint directly from a metadata file, or localhost:8080/image to mint directly from an image file. See Additional info section below for screenshots.


## Additional Info:
### Minting from a metadata file
1. To see the program working you can test with this sample metadatafile: https://ipfs.io/ipfs/bafyreia3gktjytjez7vgj4wnshdthsagh4lz2tgib4in2xiirbibziga6e/metadata.json

2. You can create your own metadatafile very easily by using the Verbwire endpoint, *Upload local file as metadata to IPFS*, [HERE](https://docs.verbwire.com/reference/post_nft-store-metadatafromimage). Simply upload your file and you'll get a metadata .json link returned.

<div align="center">
    <img alt="metaDataFileImg" src="resources/upload_file_as_metadata_to_ipfs.jpg"/>
</div>

### Showing where to input your API Key
<div align="center">
    <img alt="inputApiKeyHere" src="resources/input_API_key.jpg"/>
</div>

### Screenshots of the app
1. Mint from metadata file
<div align="center">
    <img alt="mintFromMetadata" src="resources/fastMint_from_metadata_screenshot.jpg"/>
</div>


2. Mint from image file
<div align="center">
    <img alt="mintFromImage" src="resources/fastMint_from_image_screenshot.jpg"/>
</div>

