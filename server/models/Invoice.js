const invoice=`CREATE TABLE invoice (
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE ,
    Phone VARCHAR(11) NOT NULL UNIQUE , 
    TotalAmount VARCHAR(200) NOT NULL , 
    Date DATE    
    
   )`
module.exports=invoice;