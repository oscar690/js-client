# ConsultasPilaWebApi.EstadisticasYTarifacinApi

All URIs are relative to *https://consultaspila.achcolombia.com.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estadisticasHistoricosEntidadGet**](EstadisticasYTarifacinApi.md#estadisticasHistoricosEntidadGet) | **GET** /estadisticas/historicos/{entidad} | Consulta historicos de consultas realizadas para las entidades


<a name="estadisticasHistoricosEntidadGet"></a>
# **estadisticasHistoricosEntidadGet**
> [HistoricoConsulta] estadisticasHistoricosEntidadGet(entidad, fechaInicio, fechaFin)

Consulta historicos de consultas realizadas para las entidades

Ofrece el historico de las consultas realizadas detallando su resultado final en un rango de tiempo (no mayor a 31 dias). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.EstadisticasYTarifacinApi();

var entidad = "entidad_example"; // String | Identificador unico de la entidad

var fechaInicio = "fechaInicio_example"; // String | Fecha incio para el filtro YYYY-MM-DD

var fechaFin = "fechaFin_example"; // String | Fecha fin para el filtro YYYY-MM-DD


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.estadisticasHistoricosEntidadGet(entidad, fechaInicio, fechaFin, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entidad** | **String**| Identificador unico de la entidad | 
 **fechaInicio** | **String**| Fecha incio para el filtro YYYY-MM-DD | 
 **fechaFin** | **String**| Fecha fin para el filtro YYYY-MM-DD | 

### Return type

[**[HistoricoConsulta]**](HistoricoConsulta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

