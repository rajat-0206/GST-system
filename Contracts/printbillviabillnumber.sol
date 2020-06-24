pragma solidity >=0.4.22 <0.7.0;
 
contract printbill{
    
        string billno;
        string gstno;
        string phoneno;
        string billamnt;
        string gstamnt;
    
        
        
        constructor(string memory _billno ,string memory _gstno ,string memory _phoneno ,string memory _billamnt ,string memory _gstamnt ) public{
        billno=_billno;
        gstno=_gstno;
        phoneno=_phoneno;
        billamnt=_billamnt;
        gstamnt=_gstamnt;
        }
        
      function getDetails(string memory _billgenerator) public view returns(string memory ,string memory,string memory,string memory) {
          if (_billgenerator == billno){
        return (gstno,phoneno,billamnt,gstamnt);
             }
      }
        
        
}
