const buildingInfo=`CREATE TABLE buildingInfo (
    BuildingID VARCHAR(200) UNIQUE,
    Type VARCHAR(30),
    Availability INTEGER,
    BuildingName VARCHAR(30),
    RoomNO INTEGER UNIQUE,
    PRIMARY KEY(BuildingID,RoomNO))`
    module.exports=buildingInfo;