pragma solidity ^0.6.8;


contract StructDemo{
    struct business{
        int gstin;
        string businessname;
        string aadharno;
        string phoneno;
        string pass;
        string conpass;
    }
    
    business []buss;
    
    function addBusiness(int _gstin , string memory _businessname, string memory _aadharno, string memory _phoneno, string memory _pass, string memory _conpass) public{
        business memory e = business(_gstin,_businessname,_aadharno, _phoneno , _pass , _conpass);
        buss.push(e);
        
    }
    
}
