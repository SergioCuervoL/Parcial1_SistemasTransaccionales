CREATE PROCEDURE EJEMPLO_5(
	@HM VARCHAR(45) = '�Hola Mundo!'
)
AS
BEGIN
	PRINT @HM
END

EXEC EJEMPLO_5