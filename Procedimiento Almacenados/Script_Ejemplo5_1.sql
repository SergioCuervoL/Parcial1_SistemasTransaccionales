CREATE PROCEDURE EJEMPLO_5_1 @DATO VARCHAR(45) OUTPUT
AS 
BEGIN
	DECLARE @HM VARCHAR(45) = '�Hola '
	PRINT @HM +' '+@DATO+'!'
END

EXEC EJEMPLO_5_1 'Sergio'
EXEC EJEMPLO_5_1 'Alejandro' 
EXEC EJEMPLO_5_1 'Rusia :V'