# ConsultasPilaWebApi.ConsultaMasivaApi

All URIs are relative to *https://consultaspila.achcolombia.com.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultasMasivasPersonasJuridicasPost**](ConsultaMasivaApi.md#consultasMasivasPersonasJuridicasPost) | **POST** /consultas/masivas/personas/juridicas/ | Consulta masiva de personas juridicas
[**consultasMasivasPersonasJuridicasUuidEstadoGet**](ConsultaMasivaApi.md#consultasMasivasPersonasJuridicasUuidEstadoGet) | **GET** /consultas/masivas/personas/juridicas/{uuid}/estado | Consulta estado consulta masiva de personas juridicas
[**consultasMasivasPersonasJuridicasUuidGet**](ConsultaMasivaApi.md#consultasMasivasPersonasJuridicasUuidGet) | **GET** /consultas/masivas/personas/juridicas/{uuid} | Consulta resultado consulta masiva de personas juridicas
[**consultasMasivasPersonasNaturalesPost**](ConsultaMasivaApi.md#consultasMasivasPersonasNaturalesPost) | **POST** /consultas/masivas/personas/naturales/ | Consulta masiva de personas naturales
[**consultasMasivasPersonasNaturalesUuidEstadoGet**](ConsultaMasivaApi.md#consultasMasivasPersonasNaturalesUuidEstadoGet) | **GET** /consultas/masivas/personas/naturales/{uuid}/estado | Consulta estado consulta masiva de personas naturales
[**consultasMasivasPersonasNaturalesUuidGet**](ConsultaMasivaApi.md#consultasMasivasPersonasNaturalesUuidGet) | **GET** /consultas/masivas/personas/naturales/{uuid} | Consulta resultado consulta masiva de personas naturales


<a name="consultasMasivasPersonasJuridicasPost"></a>
# **consultasMasivasPersonasJuridicasPost**
> Consulta consultasMasivasPersonasJuridicasPost(body, opts)

Consulta masiva de personas juridicas

Habilita la opción de crear una solicitud de consulta masiva de personas juridicas de manera asincrona

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var body = new ConsultasPilaWebApi.EstadoConsultaMasiva(); // EstadoConsultaMasiva | 

var opts = { 
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
apiInstance.consultasMasivasPersonasJuridicasPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EstadoConsultaMasiva**](EstadoConsultaMasiva.md)|  | 
 **user** | **String**| Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;. | [optional] 
 **ip** | **String**| Ip origen de la petición. si no se envia se obtendra del request. | [optional] 

### Return type

[**Consulta**](Consulta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasMasivasPersonasJuridicasUuidEstadoGet"></a>
# **consultasMasivasPersonasJuridicasUuidEstadoGet**
> EstadoConsultaMasiva consultasMasivasPersonasJuridicasUuidEstadoGet(uuid)

Consulta estado consulta masiva de personas juridicas

Ofrece el estado actual de la consulta masiva, con su adelanto de ejecucción.   El formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var uuid = "uuid_example"; // String | Identificador unico de la consulta masiva


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasMasivasPersonasJuridicasUuidEstadoGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identificador unico de la consulta masiva | 

### Return type

[**EstadoConsultaMasiva**](EstadoConsultaMasiva.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasMasivasPersonasJuridicasUuidGet"></a>
# **consultasMasivasPersonasJuridicasUuidGet**
> ResultadoConsultaMasivaJuridica consultasMasivasPersonasJuridicasUuidGet(uuid, contentType)

Consulta resultado consulta masiva de personas juridicas

Ofrece el resultado de la consulta masiva solo estará disponible cuando el estado de la consulta sea &#39;FINALIZADA&#39;, el formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var uuid = "uuid_example"; // String | Identificador unico de la consulta masiva

var contentType = "contentType_example"; // String | Formato en el cual se espera obtener la respuesta de la consulta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasMasivasPersonasJuridicasUuidGet(uuid, contentType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identificador unico de la consulta masiva | 
 **contentType** | **String**| Formato en el cual se espera obtener la respuesta de la consulta | 

### Return type

[**ResultadoConsultaMasivaJuridica**](ResultadoConsultaMasivaJuridica.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasMasivasPersonasNaturalesPost"></a>
# **consultasMasivasPersonasNaturalesPost**
> EstadoConsultaMasiva consultasMasivasPersonasNaturalesPost(body, opts)

Consulta masiva de personas naturales

Habilita la opción de crear una solicitud de consulta masiva de personas naturales de manera asincrona

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var body = new ConsultasPilaWebApi.ConsultaMasiva(); // ConsultaMasiva | 

var opts = { 
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
apiInstance.consultasMasivasPersonasNaturalesPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConsultaMasiva**](ConsultaMasiva.md)|  | 
 **user** | **String**| Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;. | [optional] 
 **ip** | **String**| Ip origen de la petición. si no se envia se obtendra del request. | [optional] 

### Return type

[**EstadoConsultaMasiva**](EstadoConsultaMasiva.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasMasivasPersonasNaturalesUuidEstadoGet"></a>
# **consultasMasivasPersonasNaturalesUuidEstadoGet**
> EstadoConsultaMasiva consultasMasivasPersonasNaturalesUuidEstadoGet(uuid)

Consulta estado consulta masiva de personas naturales

Ofrece el estado actual de la consulta masiva, con su adelanto de ejecucción.   El formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var uuid = "uuid_example"; // String | Identificador unico de la consulta masiva


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasMasivasPersonasNaturalesUuidEstadoGet(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identificador unico de la consulta masiva | 

### Return type

[**EstadoConsultaMasiva**](EstadoConsultaMasiva.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultasMasivasPersonasNaturalesUuidGet"></a>
# **consultasMasivasPersonasNaturalesUuidGet**
> ResultadoConsultaMasivaNatural consultasMasivasPersonasNaturalesUuidGet(uuid, contentType)

Consulta resultado consulta masiva de personas naturales

Ofrece el resultado de la consulta masiva solo estará disponible cuando el estado de la consulta sea &#39;FINALIZADA&#39;, el formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 

### Example
```javascript
var ConsultasPilaWebApi = require('consultas-pila-web-api');

var apiInstance = new ConsultasPilaWebApi.ConsultaMasivaApi();

var uuid = "uuid_example"; // String | Identificador unico de la consulta masiva

var contentType = "contentType_example"; // String | Formato en el cual se espera obtener la respuesta de la consulta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consultasMasivasPersonasNaturalesUuidGet(uuid, contentType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identificador unico de la consulta masiva | 
 **contentType** | **String**| Formato en el cual se espera obtener la respuesta de la consulta | 

### Return type

[**ResultadoConsultaMasivaNatural**](ResultadoConsultaMasivaNatural.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

