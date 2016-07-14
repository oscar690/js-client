(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PersonaNatural'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonaNatural'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ConsultaConResultadoNatural = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.PersonaNatural);
  }
}(this, function(ApiClient, PersonaNatural) {
  'use strict';




  /**
   * The ConsultaConResultadoNatural model module.
   * @module model/ConsultaConResultadoNatural
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ConsultaConResultadoNatural</code>.
   * @alias module:model/ConsultaConResultadoNatural
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ConsultaConResultadoNatural</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultaConResultadoNatural} obj Optional instance to populate.
   * @return {module:model/ConsultaConResultadoNatural} The populated <code>ConsultaConResultadoNatural</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tipoDocumento')) {
        obj['tipoDocumento'] = ApiClient.convertToType(data['tipoDocumento'], 'String');
      }
      if (data.hasOwnProperty('numDocumento')) {
        obj['numDocumento'] = ApiClient.convertToType(data['numDocumento'], 'String');
      }
      if (data.hasOwnProperty('resultado')) {
        obj['resultado'] = ApiClient.convertToType(data['resultado'], [PersonaNatural]);
      }
    }
    return obj;
  }

  /**
   * Describe el tipo de documento a consultar
   * @member {String} tipoDocumento
   */
  exports.prototype['tipoDocumento'] = undefined;
  /**
   * Describe el número de documento a consultar
   * @member {String} numDocumento
   */
  exports.prototype['numDocumento'] = undefined;
  /**
   * @member {Array.<module:model/PersonaNatural>} resultado
   */
  exports.prototype['resultado'] = undefined;




  return exports;
}));


