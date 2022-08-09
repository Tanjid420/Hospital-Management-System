const availableSeats=`CREATE TABLE availableSeats (
   
    Type VARCHAR(30),
    
    BuildingName VARCHAR(30),
    RoomNo INTEGER,
    BedNo INTEGER,
    Availability VARCHAR(5),
    PRIMARY KEY(RoomNo))`
    module.exports=availableSeats;