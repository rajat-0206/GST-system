# GST-system
A Etherium based Dapp.

# How to setup and run the Dapp
<ol>
<li> Copy the code from contracts/gst-system.sol and paste it on Remix IDE and compile using version <b> 0.4.22 </b> compiler</li>
<li> Use the Javascript VM for deploying locally or use ganache web3 provider to setup a etherium test server.</li>
  <li> Deploy the contract by providing correct parameter for the constructor </li>
<li> After deployment, Copy and paste the Contract address in <b>scripts/cred.js</b></li>
<li> Use live server for VS code to run the DAPP or if you have firebase setup in computer then run <b>firebase serve </b> to run the dapp.
</ol>

# If you want to setup the firebase it can be done by the following method
<li> Run <b> npm install -g firebase tools</b> to install firebase </li>
<li> Then run <b> firebase login </b> and login using any google account </li>
<li> then run <b> firebase serve </b> to run the Dapp.
</ol>

# You can do these thing
1. Setup different search methods like search by gst number or mobile number for both government and business.
2. Validation in business creation so that no two business have same GST number.
3. Validation of account balance when a new bill is generated.
4. Checks on duplication of bill number.
