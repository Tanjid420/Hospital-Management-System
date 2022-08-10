const availableSeats=`CREATE TABLE availableSeats (
   
    
    BedId INTEGER,
    BuildingName VARCHAR(30),
    RoomNo INTEGER,
    BedNo INTEGER,
    Availability VARCHAR(5),
    Price INTEGER,
    
    PRIMARY KEY(BedId))`
    module.exports=availableSeats;