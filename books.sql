   

CREATE DATABASE Examen_candidato;

USE  Examen_candidato;

CREATE TABLE books (
    id int IDENTITY(1,1) PRIMARY KEY,
    titulo varchar(255) NOT NULL,
    numero_volumen varchar(255),
    estante varchar(20),
	librero varchar(20),
	posicion varchar(20),
	sala varchar(20)
);



CREATE PROCEDURE save_book 
  @titulo NVARCHAR(20),
  @numero_volumen NVARCHAR(20),
  @estante NVARCHAR(20),
  @sala NVARCHAR(20),
  @librero NVARCHAR(20),
  @posicion NVARCHAR(20)
AS
BEGIN
    INSERT INTO books (titulo, numero_volumen, estante, librero, posicion, sala)
	VALUES (@titulo, @numero_volumen, @estante, @librero,@posicion, @sala)
   
END


  CREATE PROCEDURE GetBooks
  AS
  BEGIN

   SELECT * FROM books;

  END