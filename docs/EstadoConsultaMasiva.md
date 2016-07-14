# ConsultasPilaWebApi.EstadoConsultaMasiva

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeroSolicitud** | **String** | Identificador único de la consulta masiva | [optional] 
**fecha** | **String** | Fecha de la petición | [optional] 
**fechaExpiracion** | **String** | Fecha de la expiración de la consulta. Solo estará disponible si el estado de la consulta es &#39;FINALIZADA&#39;. | [optional] 
**estado** | **String** | Estado de la consulta masiva [\&quot;EN EJECUCCION\&quot;, \&quot;FINALIZADA\&quot;] | [optional] 
**totalRegistros** | **Number** | Cantidad total de registros | [optional] 
**totalExitosos** | **Number** | Cantidad reales a consultar | [optional] 
**totalNoEncontrados** | **Number** | Cantidad reales a consultar | [optional] 
**totalNoValidos** | **Number** | Cantidad reales a consultar | [optional] 


