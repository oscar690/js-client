# ConsultasPilaWebApi.ConsultaIndividualApi

All URIs are relative to *https://consultaspila.achcolombia.com.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet**](ConsultaIndividualApi.md#consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet) | **GET** /consultas/individuales/personas/juridicas/{tipoDocumento}{numeroDocumento} | Consulta Individual persona juridica
[**consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet**](ConsultaIndividualApi.md#consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet) | **GET** /consultas/individuales/personas/naturales/{tipoDocumento}{numeroDocumento} | Consulta individual persona natural


<a name="consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet"></a>
# **consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet**
> [PersonaJuridica] consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet(tipoDocumento, numeroDocumento, contentType, opts)

Consulta Individual persona juridica

La consulta individual de persona juridica retorna el número meses historicos ingresados, del tipo y número de documento de una persona juridica. La respuesta incluye los datos basicos de la persona, información totalizada de los aportes realizados (IBC) en cada periodo consultado a los subsistemas de salud, pensión y/o caja. El resultado podrá ser obtenido con cualquiera de los siguientes Content-Types [&#39;application/json&#39;, &#39;text/html&#39;, &#39;application/pdf&#39;]. 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaIndividualApi();

var tipoDocumento = "tipoDocumento_example"; // String | Tipo de documento del aportante. [CC,CE,NI]

var numeroDocumento = 3.4; // Number | Número de documento del aportante (sin puntos, ni comas, ni caracteres especiales).

var contentType = "contentType_example"; // String | Formato en el cual se espera obtener la respuesta de la consulta

var opts = { 
  'historico': 3.4, // Number | Número de meses a buscar, no > 24 por defecto 24
  'user': "user_example", // String | Usuario que realiza la petición. si no se envia se marca como 'default'.
  'ip': "ip_example" // String | Ip origen de la petición. si no se envia se obtendra del request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet(tipoDocumento, numeroDocumento, contentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoDocumento** | **String**| Tipo de documento del aportante. [CC,CE,NI] | 
 **numeroDocumento** | **Number**| Número de documento del aportante (sin puntos, ni comas, ni caracteres especiales). | 
 **contentType** | **String**| Formato en el cual se espera obtener la respuesta de la consulta | 
 **historico** | **Number**| Número de meses a buscar, no &gt; 24 por defecto 24 | [optional] 
 **user** | **String**| Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;. | [optional] 
 **ip** | **String**| Ip origen de la petición. si no se envia se obtendra del request. | [optional] 

### Return type

[**[PersonaJuridica]**](PersonaJuridica.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet"></a>
# **consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet**
> [PersonaNatural] consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet(tipoDocumento, numeroDocumento, contentType, opts)

Consulta individual persona natural

La consulta individual de persona natural retorna el número de periodos de cotización correspondiente al valor de historico ingresado y al tipo y número de documento de la persona natural consultada. La respuesta incluye los datos basicos de la persona, información de su aportante y los aportes realizados (IBC) en cada periodo consultado a los subsistemas de salud, pensión y/o caja. El resultado podrá ser obtenido con cualquiera de los siguientes Content-Types [&#39;application/json&#39;, &#39;text/html&#39;, &#39;application/pdf&#39;]. 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaIndividualApi();

var tipoDocumento = "tipoDocumento_example"; // String | Tipo de documento del cotizante [CC,CE,CD, PA, RC, TI].

var numeroDocumento = 3.4; // Number | Número de documento del cotizante (sin puntos, ni comas, ni caracteres especiales).

var contentType = "contentType_example"; // String | Formato en el cual se espera obtener la respuesta de la consulta

var opts = { 
  'historico': 3.4, // Number | Número de meses a buscar, no > 24 por defecto 24
  'user': "user_example", // String | Usuario que realiza la petición. si no se envia se marca como 'default'.
  'ip': "ip_example" // String | Ip origen de la petición. si no se envia se obtendra del request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet(tipoDocumento, numeroDocumento, contentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoDocumento** | **String**| Tipo de documento del cotizante [CC,CE,CD, PA, RC, TI]. | 
 **numeroDocumento** | **Number**| Número de documento del cotizante (sin puntos, ni comas, ni caracteres especiales). | 
 **contentType** | **String**| Formato en el cual se espera obtener la respuesta de la consulta | 
 **historico** | **Number**| Número de meses a buscar, no &gt; 24 por defecto 24 | [optional] 
 **user** | **String**| Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;. | [optional] 
 **ip** | **String**| Ip origen de la petición. si no se envia se obtendra del request. | [optional] 

### Return type

[**[PersonaNatural]**](PersonaNatural.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

