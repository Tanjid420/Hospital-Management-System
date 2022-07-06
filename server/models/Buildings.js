const buildings=`CREATE TABLE buildings (
    BuildingId_fk VARCHAR(200),
    Room_fk INTEGER,
    Id_fk VARCHAR(200),
    FOREIGN KEY(Id_fk) REFERENCES user(ID),
    FOREIGN KEY(BuildingId_fk,Room_fk) REFERENCES buildingInfo(BuildingID,RoomNO))`
    module.exports=buildings;
