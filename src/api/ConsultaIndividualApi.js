(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/PersonaJuridica', 'model/PersonaNatural'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PersonaJuridica'), require('../model/PersonaNatural'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ConsultaIndividualApi = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.Error, root.ConsultasPilaWebApi.PersonaJuridica, root.ConsultasPilaWebApi.PersonaNatural);
  }
}(this, function(ApiClient, Error, PersonaJuridica, PersonaNatural) {
  'use strict';

  /**
   * ConsultaIndividual service.
   * @module api/ConsultaIndividualApi
   * @version 1.3.0
   */

  /**
   * Constructs a new ConsultaIndividualApi. 
   * @alias module:api/ConsultaIndividualApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet operation.
     * @callback module:api/ConsultaIndividualApi~consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PersonaJuridica>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta Individual persona juridica
     * La consulta individual de persona juridica retorna el número meses historicos ingresados, del tipo y número de documento de una persona juridica. La respuesta incluye los datos basicos de la persona, información totalizada de los aportes realizados (IBC) en cada periodo consultado a los subsistemas de salud, pensión y/o caja. El resultado podrá ser obtenido con cualquiera de los siguientes Content-Types [&#39;application/json&#39;, &#39;text/html&#39;, &#39;application/pdf&#39;]. 
     * @param {String} tipoDocumento Tipo de documento del aportante. [CC,CE,NI]
     * @param {Number} numeroDocumento Número de documento del aportante (sin puntos, ni comas, ni caracteres especiales).
     * @param {String} contentType Formato en el cual se espera obtener la respuesta de la consulta
     * @param {Object} opts Optional parameters
     * @param {Number} opts.historico Número de meses a buscar, no &gt; 24 por defecto 24
     * @param {String} opts.user Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;.
     * @param {String} opts.ip Ip origen de la petición. si no se envia se obtendra del request.
     * @param {module:api/ConsultaIndividualApi~consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PersonaJuridica>}
     */
    this.consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet = function(tipoDocumento, numeroDocumento, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tipoDocumento' is set
      if (tipoDocumento == undefined || tipoDocumento == null) {
        throw "Missing the required parameter 'tipoDocumento' when calling consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet";
      }

      // verify the required parameter 'numeroDocumento' is set
      if (numeroDocumento == undefined || numeroDocumento == null) {
        throw "Missing the required parameter 'numeroDocumento' when calling consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet";
      }

      // verify the required parameter 'contentType' is set
      if (contentType == undefined || contentType == null) {
        throw "Missing the required parameter 'contentType' when calling consultasIndividualesPersonasJuridicasTipoDocumentonumeroDocumentoGet";
      }


      var pathParams = {
        'tipoDocumento': tipoDocumento,
        'numeroDocumento': numeroDocumento
      };
      var queryParams = {
        'historico': opts['historico']
      };
      var headerParams = {
        'Content-Type': contentType,
        'User': opts['user'],
        'Ip': opts['ip']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [PersonaJuridica];

      return this.apiClient.callApi(
        '/consultas/individuales/personas/juridicas/{tipoDocumento}{numeroDocumento}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet operation.
     * @callback module:api/ConsultaIndividualApi~consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PersonaNatural>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta individual persona natural
     * La consulta individual de persona natural retorna el número de periodos de cotización correspondiente al valor de historico ingresado y al tipo y número de documento de la persona natural consultada. La respuesta incluye los datos basicos de la persona, información de su aportante y los aportes realizados (IBC) en cada periodo consultado a los subsistemas de salud, pensión y/o caja. El resultado podrá ser obtenido con cualquiera de los siguientes Content-Types [&#39;application/json&#39;, &#39;text/html&#39;, &#39;application/pdf&#39;]. 
     * @param {String} tipoDocumento Tipo de documento del cotizante [CC,CE,CD, PA, RC, TI].
     * @param {Number} numeroDocumento Número de documento del cotizante (sin puntos, ni comas, ni caracteres especiales).
     * @param {String} contentType Formato en el cual se espera obtener la respuesta de la consulta
     * @param {Object} opts Optional parameters
     * @param {Number} opts.historico Número de meses a buscar, no &gt; 24 por defecto 24
     * @param {String} opts.user Usuario que realiza la petición. si no se envia se marca como &#39;default&#39;.
     * @param {String} opts.ip Ip origen de la petición. si no se envia se obtendra del request.
     * @param {module:api/ConsultaIndividualApi~consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PersonaNatural>}
     */
    this.consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet = function(tipoDocumento, numeroDocumento, contentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tipoDocumento' is set
      if (tipoDocumento == undefined || tipoDocumento == null) {
        throw "Missing the required parameter 'tipoDocumento' when calling consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet";
      }

      // verify the required parameter 'numeroDocumento' is set
      if (numeroDocumento == undefined || numeroDocumento == null) {
        throw "Missing the required parameter 'numeroDocumento' when calling consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet";
      }

      // verify the required parameter 'contentType' is set
      if (contentType == undefined || contentType == null) {
        throw "Missing the required parameter 'contentType' when calling consultasIndividualesPersonasNaturalesTipoDocumentonumeroDocumentoGet";
      }


      var pathParams = {
        'tipoDocumento': tipoDocumento,
        'numeroDocumento': numeroDocumento
      };
      var queryParams = {
        'historico': opts['historico']
      };
      var headerParams = {
        'Content-Type': contentType,
        'User': opts['user'],
        'Ip': opts['ip']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [PersonaNatural];

      return this.apiClient.callApi(
        '/consultas/individuales/personas/naturales/{tipoDocumento}{numeroDocumento}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
