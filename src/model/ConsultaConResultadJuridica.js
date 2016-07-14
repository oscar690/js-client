(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PersonaJuridica'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonaJuridica'));
  } else {
    // Browser globals (root is window)
    if (!root.ConsultasPilaWebApi) {
      root.ConsultasPilaWebApi = {};
    }
    root.ConsultasPilaWebApi.ConsultaConResultadJuridica = factory(root.ConsultasPilaWebApi.ApiClient, root.ConsultasPilaWebApi.PersonaJuridica);
  }
}(this, function(ApiClient, PersonaJuridica) {
  'use strict';




  /**
   * The ConsultaConResultadJuridica model module.
   * @module model/ConsultaConResultadJuridica
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ConsultaConResultadJuridica</code>.
   * @alias module:model/ConsultaConResultadJuridica
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ConsultaConResultadJuridica</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultaConResultadJuridica} obj Optional instance to populate.
   * @return {module:model/ConsultaConResultadJuridica} The populated <code>ConsultaConResultadJuridica</code> instance.
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
        obj['resultado'] = ApiClient.convertToType(data['resultado'], [PersonaJuridica]);
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
   * @member {Array.<module:model/PersonaJuridica>} resultado
   */
  exports.prototype['resultado'] = undefined;




  return exports;
}));


