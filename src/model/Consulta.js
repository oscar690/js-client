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
    root.ConsultasPilaWebApi.Consulta = factory(root.ConsultasPilaWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Consulta model module.
   * @module model/Consulta
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>Consulta</code>.
   * @alias module:model/Consulta
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Consulta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Consulta} obj Optional instance to populate.
   * @return {module:model/Consulta} The populated <code>Consulta</code> instance.
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




  return exports;
}));


