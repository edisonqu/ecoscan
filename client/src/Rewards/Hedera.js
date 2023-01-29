const { Client, TokenCreateTransaction, TokenType,TokenSupplyType, PrivateKey,TokenMintTransaction} = require("@hashgraph/sdk");
// require("dotenv").config();

async function mint() {

    const myAccountId = "0.0.363785"
    const myPrivateKey = "556eca9271720b8db79c692843b15382b8bb0f3244c60ed57e064ae165161148"
    const client = Client.forTestnet()
        .setOperator(myAccountId, myPrivateKey);
    const supplyKey = PrivateKey.generate()
    const adminKey = PrivateKey.generate()

    let nftCreate = await new TokenCreateTransaction()
        .setTokenName("EcoScan")
        .setTokenSymbol("ECO")
        .setTokenType(TokenType.NonFungibleUnique)
        .setDecimals(0)
        .setInitialSupply(0)
        .setTreasuryAccountId(myAccountId)
        .setSupplyType(TokenSupplyType.Finite)
        .setMaxSupply(250)
        .setAdminKey(adminKey)
        .setSupplyKey(supplyKey)
        .freezeWith(client);

    //Sign the transaction with the treasury key
    let nftCreateTxSign = await nftCreate.sign(adminKey);

    //Submit the transaction to a Hedera network
    let nftCreateSubmit = await nftCreateTxSign.execute(client);

    //Get the transaction receipt
    let nftCreateRx = await nftCreateSubmit.getReceipt(client);

    //Get the token ID
    let tokenId = nftCreateRx.tokenId;

    //Log the token ID
    console.log(`- Created NFT with Token ID: ${tokenId} \n`);

    const CID = 'QmSV5S1gyho9Mskoqs5M9YEZzqFgLkyvHg1rCFHcUm396L'

    let mintTx = await new TokenMintTransaction()
        .setTokenId(tokenId)
        .setMetadata([Buffer.from(CID)])
        .freezeWith(client);
    //Sign the transaction with the supply key
    let mintTxSign = await mintTx.sign(supplyKey);

//Submit the transaction to a Hedera network
    let mintTxSubmit = await mintTxSign.execute(client);

//Get the transaction receipt
    let mintRx = await mintTxSubmit.getReceipt(client);

//Log the serial number
    return(`- Created NFT ${tokenId} with serial: ${mintRx.serials[0].low} \n`);
}
// mint().catch(err => console.error(err));