(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Consulta', 'model/ConsultaConResultadoNatural'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Consulta'), require('./ConsultaConResultadoNatural'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ResultadoConsultaMasivaNatural = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.Consulta, root.ConsultasPilaWebApi.ConsultaConResultadoNatural);
  }
}(this, function(ApiClient, Consulta, ConsultaConResultadoNatural) {
  'use strict';




  /**
   * The ResultadoConsultaMasivaNatural model module.
   * @module model/ResultadoConsultaMasivaNatural
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ResultadoConsultaMasivaNatural</code>.
   * @alias module:model/ResultadoConsultaMasivaNatural
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ResultadoConsultaMasivaNatural</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultadoConsultaMasivaNatural} obj Optional instance to populate.
   * @return {module:model/ResultadoConsultaMasivaNatural} The populated <code>ResultadoConsultaMasivaNatural</code> instance.
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
      if (data.hasOwnProperty('listaExitosos')) {
        obj['listaExitosos'] = ApiClient.convertToType(data['listaExitosos'], [ConsultaConResultadoNatural]);
      }
      if (data.hasOwnProperty('listaNoEncontrados')) {
        obj['listaNoEncontrados'] = ApiClient.convertToType(data['listaNoEncontrados'], [Consulta]);
      }
      if (data.hasOwnProperty('listaNoValidos')) {
        obj['listaNoValidos'] = ApiClient.convertToType(data['listaNoValidos'], [Consulta]);
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
  /**
   * Cantidad de registros que ya se consultaron
   * @member {Array.<module:model/ConsultaConResultadoNatural>} listaExitosos
   */
  exports.prototype['listaExitosos'] = undefined;
  /**
   * Cantidad de registros que ya se consultaronaron
   * @member {Array.<module:model/Consulta>} listaNoEncontrados
   */
  exports.prototype['listaNoEncontrados'] = undefined;
  /**
   * Cantidad de registros que ya se consultaron
   * @member {Array.<module:model/Consulta>} listaNoValidos
   */
  exports.prototype['listaNoValidos'] = undefined;




  return exports;
}));


