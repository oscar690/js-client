# ConsultasPilaWebApi.ResultadoConsultaMasivaJuridica

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeroSolicitud** | **String** | Identificador único de la consulta masiva | [optional] 
**fecha** | **String** | Fecha de la petición | [optional] 
**fechaExpiracion** | **String** | Fecha de la expiración de la consulta. | [optional] 
**estado** | **String** | Estado de la consulta masiva [\&quot;EN EJECUCCION\&quot;, \&quot;FINALIZADA\&quot;] | [optional] 
**totalRegistros** | **Number** | Cantidad total de registros | [optional] 
**totalExitosos** | **Number** | Cantidad reales a consultar | [optional] 
**totalNoEncontrados** | **Number** | Cantidad reales a consultar | [optional] 
**totalNoValidos** | **Number** | Cantidad reales a consultar | [optional] 
**listaExitosos** | [**[ConsultaConResultadJuridica]**](ConsultaConResultadJuridica.md) | Cantidad de registros que ya se consultaron | [optional] 
**listaNoEncontrados** | [**[Consulta]**](Consulta.md) | Cantidad de registros que ya se consultaronaron | [optional] 
**listaNoValidos** | [**[Consulta]**](Consulta.md) |  | [optional] 


