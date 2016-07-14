(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/HistoricoConsulta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/HistoricoConsulta'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.EstadisticasYTarifacinApi = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.Error, root.ConsultasPilaWebApi.HistoricoConsulta);
  }
}(this, function(ApiClient, Error, HistoricoConsulta) {
  'use strict';

  /**
   * EstadisticasYTarifacin service.
   * @module api/EstadisticasYTarifacinApi
   * @version 1.3.0
   */

  /**
   * Constructs a new EstadisticasYTarifacinApi. 
   * @alias module:api/EstadisticasYTarifacinApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the estadisticasHistoricosEntidadGet operation.
     * @callback module:api/EstadisticasYTarifacinApi~estadisticasHistoricosEntidadGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoricoConsulta>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta historicos de consultas realizadas para las entidades
     * Ofrece el historico de las consultas realizadas detallando su resultado final en un rango de tiempo (no mayor a 31 dias). El resultado podrá ser obtenido en &#39;application/json&#39; y &#39;text/csv&#39;. 
     * @param {String} entidad Identificador unico de la entidad
     * @param {String} fechaInicio Fecha incio para el filtro YYYY-MM-DD
     * @param {String} fechaFin Fecha fin para el filtro YYYY-MM-DD
     * @param {module:api/EstadisticasYTarifacinApi~estadisticasHistoricosEntidadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/HistoricoConsulta>}
     */
    this.estadisticasHistoricosEntidadGet = function(entidad, fechaInicio, fechaFin, callback) {
      var postBody = null;

      // verify the required parameter 'entidad' is set
      if (entidad == undefined || entidad == null) {
        throw "Missing the required parameter 'entidad' when calling estadisticasHistoricosEntidadGet";
      }

      // verify the required parameter 'fechaInicio' is set
      if (fechaInicio == undefined || fechaInicio == null) {
        throw "Missing the required parameter 'fechaInicio' when calling estadisticasHistoricosEntidadGet";
      }

      // verify the required parameter 'fechaFin' is set
      if (fechaFin == undefined || fechaFin == null) {
        throw "Missing the required parameter 'fechaFin' when calling estadisticasHistoricosEntidadGet";
      }


      var pathParams = {
        'entidad': entidad
      };
      var queryParams = {
        'fechaInicio': fechaInicio,
        'fechaFin': fechaFin
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [HistoricoConsulta];

      return this.apiClient.callApi(
        '/estadisticas/historicos/{entidad}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
