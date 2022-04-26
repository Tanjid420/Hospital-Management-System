const buildings=`CREATE TABLE Buildings (
    BuildingId_fk VARCHAR(200),
    Room_fk INTEGER,
    Id_fk VARCHAR(200),
    FOREIGN KEY(Id_fk) REFERENCES User(ID),
    FOREIGN KEY(BuildingId_fk,Room_fk) REFERENCES BuildingInfo(BuildingID,RoomNO))`
    module.exports=buildings;
