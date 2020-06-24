pragma solidity ^0.6.8;

contract GenerateBill{
    int private billno;
    string private gstno;
    string private phoneno;
    int private billamnt;
    int private gstamnt;
   
  
    function setBillno(int _billno) public {
        billno=_billno;
    }
    
    function setGstno(string memory _gstno) public{
        gstno=_gstno;
    }
    
    function setPhoneno(string memory _phoneno) public{
        phoneno=_phoneno;
    }
    
    function setBillamnt(int _billamnt) public{
        billamnt=_billamnt;
    }
    
    function setgstamnt(int _gstamnt) public{
        gstamnt=_gstamnt;
    }
    
    function Enter() public view returns(int){
        return billno;
    }
    
}


