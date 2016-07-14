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
    root.ConsultasPilaWebApi.PersonaJuridica = factory(root.ConsultasPilaWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PersonaJuridica model module.
   * @module model/PersonaJuridica
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PersonaJuridica</code>.
   * @alias module:model/PersonaJuridica
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>PersonaJuridica</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonaJuridica} obj Optional instance to populate.
   * @return {module:model/PersonaJuridica} The populated <code>PersonaJuridica</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('razonSocial')) {
        obj['razonSocial'] = ApiClient.convertToType(data['razonSocial'], 'String');
      }
      if (data.hasOwnProperty('tipoDocumentoAportante')) {
        obj['tipoDocumentoAportante'] = ApiClient.convertToType(data['tipoDocumentoAportante'], 'String');
      }
      if (data.hasOwnProperty('numeroDocumentoAportante')) {
        obj['numeroDocumentoAportante'] = ApiClient.convertToType(data['numeroDocumentoAportante'], 'String');
      }
      if (data.hasOwnProperty('codActividadEconomica')) {
        obj['codActividadEconomica'] = ApiClient.convertToType(data['codActividadEconomica'], 'String');
      }
      if (data.hasOwnProperty('desActividadEconomica')) {
        obj['desActividadEconomica'] = ApiClient.convertToType(data['desActividadEconomica'], 'String');
      }
      if (data.hasOwnProperty('codClaseAportante')) {
        obj['codClaseAportante'] = ApiClient.convertToType(data['codClaseAportante'], 'String');
      }
      if (data.hasOwnProperty('desClaseAportante')) {
        obj['desClaseAportante'] = ApiClient.convertToType(data['desClaseAportante'], 'String');
      }
      if (data.hasOwnProperty('codTipoAportante')) {
        obj['codTipoAportante'] = ApiClient.convertToType(data['codTipoAportante'], 'String');
      }
      if (data.hasOwnProperty('desTipoAportante')) {
        obj['desTipoAportante'] = ApiClient.convertToType(data['desTipoAportante'], 'String');
      }
      if (data.hasOwnProperty('periodoCotizacionOtrosSistemas')) {
        obj['periodoCotizacionOtrosSistemas'] = ApiClient.convertToType(data['periodoCotizacionOtrosSistemas'], 'String');
      }
      if (data.hasOwnProperty('periodoCotizacionSalud')) {
        obj['periodoCotizacionSalud'] = ApiClient.convertToType(data['periodoCotizacionSalud'], 'String');
      }
      if (data.hasOwnProperty('codTipoPlanilla')) {
        obj['codTipoPlanilla'] = ApiClient.convertToType(data['codTipoPlanilla'], 'String');
      }
      if (data.hasOwnProperty('descTipoPlanilla')) {
        obj['descTipoPlanilla'] = ApiClient.convertToType(data['descTipoPlanilla'], 'String');
      }
      if (data.hasOwnProperty('cantidadCotizantes')) {
        obj['cantidadCotizantes'] = ApiClient.convertToType(data['cantidadCotizantes'], 'Number');
      }
      if (data.hasOwnProperty('valorAproximado')) {
        obj['valorAproximado'] = ApiClient.convertToType(data['valorAproximado'], 'Number');
      }
    }
    return obj;
  }

  /**
   * razonSocial cliente consultado.
   * @member {String} razonSocial
   */
  exports.prototype['razonSocial'] = undefined;
  /**
   * Tipo documento Aportante cliente consultado.
   * @member {String} tipoDocumentoAportante
   */
  exports.prototype['tipoDocumentoAportante'] = undefined;
  /**
   * numero documento Aportante cliente consultado.
   * @member {String} numeroDocumentoAportante
   */
  exports.prototype['numeroDocumentoAportante'] = undefined;
  /**
   * Código actividad Economica cliente consultado.
   * @member {String} codActividadEconomica
   */
  exports.prototype['codActividadEconomica'] = undefined;
  /**
   * Descripción de actividad Economica cliente consultado.
   * @member {String} desActividadEconomica
   */
  exports.prototype['desActividadEconomica'] = undefined;
  /**
   * Código Clase Aportante cliente consultado.
   * @member {String} codClaseAportante
   */
  exports.prototype['codClaseAportante'] = undefined;
  /**
   * Descripción de Clase Aportante cliente consultado.
   * @member {String} desClaseAportante
   */
  exports.prototype['desClaseAportante'] = undefined;
  /**
   * Código Tipo Aportante cliente consultado.
   * @member {String} codTipoAportante
   */
  exports.prototype['codTipoAportante'] = undefined;
  /**
   * Descripción de Tipo Aportante cliente consultado.
   * @member {String} desTipoAportante
   */
  exports.prototype['desTipoAportante'] = undefined;
  /**
   * Período CotizacionOtrosSistemas cliente consultado (YYYY-MM).
   * @member {String} periodoCotizacionOtrosSistemas
   */
  exports.prototype['periodoCotizacionOtrosSistemas'] = undefined;
  /**
   * Período CotizacionSalud cliente consultado (YYYY-MM).
   * @member {String} periodoCotizacionSalud
   */
  exports.prototype['periodoCotizacionSalud'] = undefined;
  /**
   * Código Tipo Planilla cliente consultado.
   * @member {String} codTipoPlanilla
   */
  exports.prototype['codTipoPlanilla'] = undefined;
  /**
   * Descripción Tipo Planilla cliente consultado.
   * @member {String} descTipoPlanilla
   */
  exports.prototype['descTipoPlanilla'] = undefined;
  /**
   * Cantidad de Cotizantes del cliente consultado.
   * @member {Number} cantidadCotizantes
   */
  exports.prototype['cantidadCotizantes'] = undefined;
  /**
   * Valor aproximado de la planilla para el período de cotización.
   * @member {Number} valorAproximado
   */
  exports.prototype['valorAproximado'] = undefined;




  return exports;
}));


