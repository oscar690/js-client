(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.EstadoConsultaMasiva = factory(root.ConsultasPilaWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EstadoConsultaMasiva model module.
   * @module model/EstadoConsultaMasiva
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>EstadoConsultaMasiva</code>.
   * @alias module:model/EstadoConsultaMasiva
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>EstadoConsultaMasiva</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstadoConsultaMasiva} obj Optional instance to populate.
   * @return {module:model/EstadoConsultaMasiva} The populated <code>EstadoConsultaMasiva</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroSolicitud')) {
        obj['numeroSolicitud'] = ApiClient.convertToType(data['numeroSolicitud'], 'String');
      }
      if (data.hasOwnProperty('fecha')) {
        obj['fecha'] = ApiClient.convertToType(data['fecha'], 'String');
      }
      if (data.hasOwnProperty('fechaExpiracion')) {
        obj['fechaExpiracion'] = ApiClient.convertToType(data['fechaExpiracion'], 'String');
      }
      if (data.hasOwnProperty('estado')) {
        obj['estado'] = ApiClient.convertToType(data['estado'], 'String');
      }
      if (data.hasOwnProperty('totalRegistros')) {
        obj['totalRegistros'] = ApiClient.convertToType(data['totalRegistros'], 'Number');
      }
      if (data.hasOwnProperty('totalExitosos')) {
        obj['totalExitosos'] = ApiClient.convertToType(data['totalExitosos'], 'Number');
      }
      if (data.hasOwnProperty('totalNoEncontrados')) {
        obj['totalNoEncontrados'] = ApiClient.convertToType(data['totalNoEncontrados'], 'Number');
      }
      if (data.hasOwnProperty('totalNoValidos')) {
        obj['totalNoValidos'] = ApiClient.convertToType(data['totalNoValidos'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Identificador único de la consulta masiva
   * @member {String} numeroSolicitud
   */
  exports.prototype['numeroSolicitud'] = undefined;
  /**
   * Fecha de la petición
   * @member {String} fecha
   */
  exports.prototype['fecha'] = undefined;
  /**
   * Fecha de la expiración de la consulta. Solo estará disponible si el estado de la consulta es 'FINALIZADA'.
   * @member {String} fechaExpiracion
   */
  exports.prototype['fechaExpiracion'] = undefined;
  /**
   * Estado de la consulta masiva [\"EN EJECUCCION\", \"FINALIZADA\"]
   * @member {String} estado
   */
  exports.prototype['estado'] = undefined;
  /**
   * Cantidad total de registros
   * @member {Number} totalRegistros
   */
  exports.prototype['totalRegistros'] = undefined;
  /**
   * Cantidad reales a consultar
   * @member {Number} totalExitosos
   */
  exports.prototype['totalExitosos'] = undefined;
  /**
   * Cantidad reales a consultar
   * @member {Number} totalNoEncontrados
   */
  exports.prototype['totalNoEncontrados'] = undefined;
  /**
   * Cantidad reales a consultar
   * @member {Number} totalNoValidos
   */
  exports.prototype['totalNoValidos'] = undefined;




  return exports;
}));


