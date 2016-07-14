(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EstadoConsultaMasiva', 'model/Consulta', 'model/Error', 'model/ResultadoConsultaMasivaJuridica', 'model/ConsultaMasiva', 'model/ResultadoConsultaMasivaNatural'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstadoConsultaMasiva'), require('../model/Consulta'), require('../model/Error'), require('../model/ResultadoConsultaMasivaJuridica'), require('../model/ConsultaMasiva'), require('../model/ResultadoConsultaMasivaNatural'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ConsultaMasivaApi = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.EstadoConsultaMasiva, root.ConsultasPilaWebApi.Consulta, root.ConsultasPilaWebApi.Error, root.ConsultasPilaWebApi.ResultadoConsultaMasivaJuridica, root.ConsultasPilaWebApi.ConsultaMasiva, root.ConsultasPilaWebApi.ResultadoConsultaMasivaNatural);
  }
}(this, function(ApiClient, EstadoConsultaMasiva, Consulta, Error, ResultadoConsultaMasivaJuridica, ConsultaMasiva, ResultadoConsultaMasivaNatural) {
  'use strict';

  /**
   * ConsultaMasiva service.
   * @module api/ConsultaMasivaApi
   * @version 1.3.0
   */

  /**
   * Constructs a new ConsultaMasivaApi. 
   * @alias module:api/ConsultaMasivaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultasMasivasPersonasJuridicasPost operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consulta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta masiva de personas juridicas
     * Habilita la opción de crear una solicitud de consulta masiva de personas juridicas de manera asincrona
     * @param {module:model/EstadoConsultaMasiva} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.user Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;.
     * @param {String} opts.ip Ip origen de la petición. si no se envia se obtendra del request.
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Consulta}
     */
    this.consultasMasivasPersonasJuridicasPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling consultasMasivasPersonasJuridicasPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'User': opts['user'],
        'Ip': opts['ip']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Consulta;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/juridicas/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasMasivasPersonasJuridicasUuidEstadoGet operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasUuidEstadoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstadoConsultaMasiva} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta estado consulta masiva de personas juridicas
     * Ofrece el estado actual de la consulta masiva, con su adelanto de ejecucción.   El formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). 
     * @param {String} uuid Identificador unico de la consulta masiva
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasUuidEstadoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstadoConsultaMasiva}
     */
    this.consultasMasivasPersonasJuridicasUuidEstadoGet = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw "Missing the required parameter 'uuid' when calling consultasMasivasPersonasJuridicasUuidEstadoGet";
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = EstadoConsultaMasiva;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/juridicas/{uuid}/estado', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasMasivasPersonasJuridicasUuidGet operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultadoConsultaMasivaJuridica} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta resultado consulta masiva de personas juridicas
     * Ofrece el resultado de la consulta masiva solo estará disponible cuando el estado de la consulta sea &#39;FINALIZADA&#39;, el formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 
     * @param {String} uuid Identificador unico de la consulta masiva
     * @param {String} contentType Formato en el cual se espera obtener la respuesta de la consulta
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasJuridicasUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultadoConsultaMasivaJuridica}
     */
    this.consultasMasivasPersonasJuridicasUuidGet = function(uuid, contentType, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw "Missing the required parameter 'uuid' when calling consultasMasivasPersonasJuridicasUuidGet";
      }

      // verify the required parameter 'contentType' is set
      if (contentType == undefined || contentType == null) {
        throw "Missing the required parameter 'contentType' when calling consultasMasivasPersonasJuridicasUuidGet";
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = ResultadoConsultaMasivaJuridica;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/juridicas/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasMasivasPersonasNaturalesPost operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstadoConsultaMasiva} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta masiva de personas naturales
     * Habilita la opción de crear una solicitud de consulta masiva de personas naturales de manera asincrona
     * @param {module:model/ConsultaMasiva} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.user Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;.
     * @param {String} opts.ip Ip origen de la petición. si no se envia se obtendra del request.
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstadoConsultaMasiva}
     */
    this.consultasMasivasPersonasNaturalesPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling consultasMasivasPersonasNaturalesPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'User': opts['user'],
        'Ip': opts['ip']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = EstadoConsultaMasiva;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/naturales/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasMasivasPersonasNaturalesUuidEstadoGet operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesUuidEstadoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstadoConsultaMasiva} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta estado consulta masiva de personas naturales
     * Ofrece el estado actual de la consulta masiva, con su adelanto de ejecucción.   El formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). 
     * @param {String} uuid Identificador unico de la consulta masiva
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesUuidEstadoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstadoConsultaMasiva}
     */
    this.consultasMasivasPersonasNaturalesUuidEstadoGet = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw "Missing the required parameter 'uuid' when calling consultasMasivasPersonasNaturalesUuidEstadoGet";
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = EstadoConsultaMasiva;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/naturales/{uuid}/estado', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasMasivasPersonasNaturalesUuidGet operation.
     * @callback module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultadoConsultaMasivaNatural} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta resultado consulta masiva de personas naturales
     * Ofrece el resultado de la consulta masiva solo estará disponible cuando el estado de la consulta sea &#39;FINALIZADA&#39;, el formato de fechas se encuentra en [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 
     * @param {String} uuid Identificador unico de la consulta masiva
     * @param {String} contentType Formato en el cual se espera obtener la respuesta de la consulta
     * @param {module:api/ConsultaMasivaApi~consultasMasivasPersonasNaturalesUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultadoConsultaMasivaNatural}
     */
    this.consultasMasivasPersonasNaturalesUuidGet = function(uuid, contentType, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw "Missing the required parameter 'uuid' when calling consultasMasivasPersonasNaturalesUuidGet";
      }

      // verify the required parameter 'contentType' is set
      if (contentType == undefined || contentType == null) {
        throw "Missing the required parameter 'contentType' when calling consultasMasivasPersonasNaturalesUuidGet";
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = ResultadoConsultaMasivaNatural;

      return this.apiClient.callApi(
        '/consultas/masivas/personas/naturales/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
