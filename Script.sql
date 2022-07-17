CREATE TABLE tblMovie
 (  
     Id int IDENTITY(1,1) PRIMARY KEY,
     MovieName nvarchar(50) NOT NULL,
     ReviewComments varchar(200) NOT NULL,
 );
 
 Scaffold-DbContext "Server=AMITESH-PC\SQLExpress;Database=MoviesDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Entities
