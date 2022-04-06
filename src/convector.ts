// import { join, resolve } from "path";
import { keyStore, identityName, channel, chaincode, networkProfile, identityId,mspOrg } from './env';
import * as fs from 'fs';
import { Gateway, Wallets } from 'fabric-network';
const FabricCAServices = require('fabric-ca-client');
// import { FabricCAServices } from 'fabric-ca-client';

// const { Gateway, Wallets } = require('fabric-network');
// const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const { buildCAClient, registerAndEnrollUser, enrollAdmin } = require('../../../../test-application/javascript/CAUtil.js');
const { buildCCPOrg1, buildWallet } = require('../../../../test-application/javascript/AppUtil.js');
const walletPath = path.join(__dirname, 'wallet');
const org1UserId = 'appUser';
export var FabcarControllerBackEnd

async function main() {
    try {
        const ccp = buildCCPOrg1();
        const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');
        const wallet = await buildWallet(Wallets, walletPath);
        await enrollAdmin(caClient, wallet, mspOrg);
        await registerAndEnrollUser(caClient, wallet, mspOrg, org1UserId, 'org1.department1');
        const gateway = new Gateway();

        try {
            console.log(wallet)
            await gateway.connect(ccp, {
                wallet: wallet,
                identity: org1UserId,
                discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
            });

            const network = await gateway.getNetwork(channel);

            FabcarControllerBackEnd = network.getContract(chaincode);
            
            
        } finally {
            gateway.disconnect();
        }
    } catch (error) {
        console.error(`******** FAILED to run the application: ${error}`);
    }
    
}

main()