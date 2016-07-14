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
    root.ConsultasPilaWebApi.HistoricoConsulta = factory(root.ConsultasPilaWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HistoricoConsulta model module.
   * @module model/HistoricoConsulta
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>HistoricoConsulta</code>.
   * @alias module:model/HistoricoConsulta
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>HistoricoConsulta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoConsulta} obj Optional instance to populate.
   * @return {module:model/HistoricoConsulta} The populated <code>HistoricoConsulta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entidad')) {
        obj['entidad'] = ApiClient.convertToType(data['entidad'], 'String');
      }
      if (data.hasOwnProperty('fechaConsulta')) {
        obj['fechaConsulta'] = ApiClient.convertToType(data['fechaConsulta'], 'String');
      }
      if (data.hasOwnProperty('clienteConsultado')) {
        obj['clienteConsultado'] = ApiClient.convertToType(data['clienteConsultado'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('tipoConsulta')) {
        obj['tipoConsulta'] = ApiClient.convertToType(data['tipoConsulta'], 'String');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('resultadoConsulta')) {
        obj['resultadoConsulta'] = ApiClient.convertToType(data['resultadoConsulta'], 'String');
      }
      if (data.hasOwnProperty('observacion')) {
        obj['observacion'] = ApiClient.convertToType(data['observacion'], 'String');
      }
    }
    return obj;
  }

  /**
   * Describe la entidad que generó la consulta.
   * @member {String} entidad
   */
  exports.prototype['entidad'] = undefined;
  /**
   * Describe la fecha en la que se generó la consulta.
   * @member {String} fechaConsulta
   */
  exports.prototype['fechaConsulta'] = undefined;
  /**
   * Describe el cliente Consultado que generó la consulta.
   * @member {String} clienteConsultado
   */
  exports.prototype['clienteConsultado'] = undefined;
  /**
   * Describe la ip origen donde se generó la consulta.
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * Describe la tipoConsulta que generó la consulta [masivas,individuales].
   * @member {String} tipoConsulta
   */
  exports.prototype['tipoConsulta'] = undefined;
  /**
   * Describe la usuario que generó la consulta [si no es enviado 'default'].
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;
  /**
   * Describe la resultado Consulta que generó la consulta [EXITOSO,FALLIDO].
   * @member {String} resultadoConsulta
   */
  exports.prototype['resultadoConsulta'] = undefined;
  /**
   * Describe la observacion que generó la consulta (si es exitosa viene vacia)
   * @member {String} observacion
   */
  exports.prototype['observacion'] = undefined;




  return exports;
}));


