(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Consulta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Consulta'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ConsultaMasiva = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.Consulta);
  }
}(this, function(ApiClient, Consulta) {
  'use strict';




  /**
   * The ConsultaMasiva model module.
   * @module model/ConsultaMasiva
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ConsultaMasiva</code>.
   * @alias module:model/ConsultaMasiva
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ConsultaMasiva</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultaMasiva} obj Optional instance to populate.
   * @return {module:model/ConsultaMasiva} The populated <code>ConsultaMasiva</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('historico')) {
        obj['historico'] = ApiClient.convertToType(data['historico'], 'Number');
      }
      if (data.hasOwnProperty('contenido')) {
        obj['contenido'] = ApiClient.convertToType(data['contenido'], [Consulta]);
      }
    }
    return obj;
  }

  /**
   * Describe la cantidad de meses a consultar
   * @member {Number} historico
   */
  exports.prototype['historico'] = undefined;
  /**
   * @member {Array.<module:model/Consulta>} contenido
   */
  exports.prototype['contenido'] = undefined;




  return exports;
}));


