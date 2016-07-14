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
    root.ConsultasPilaWebApi.PersonaNatural = factory(root.ConsultasPilaWebApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PersonaNatural model module.
   * @module model/PersonaNatural
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PersonaNatural</code>.
   * @alias module:model/PersonaNatural
   * @class
   */
  var exports = function() {
    var _this = this;




























  };

  /**
   * Constructs a <code>PersonaNatural</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonaNatural} obj Optional instance to populate.
   * @return {module:model/PersonaNatural} The populated <code>PersonaNatural</code> instance.
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
      if (data.hasOwnProperty('tipoDocumentoUsuario')) {
        obj['tipoDocumentoUsuario'] = ApiClient.convertToType(data['tipoDocumentoUsuario'], 'String');
      }
      if (data.hasOwnProperty('numeroDocumentoUsuario')) {
        obj['numeroDocumentoUsuario'] = ApiClient.convertToType(data['numeroDocumentoUsuario'], 'String');
      }
      if (data.hasOwnProperty('primerNombre')) {
        obj['primerNombre'] = ApiClient.convertToType(data['primerNombre'], 'String');
      }
      if (data.hasOwnProperty('segundoNombre')) {
        obj['segundoNombre'] = ApiClient.convertToType(data['segundoNombre'], 'String');
      }
      if (data.hasOwnProperty('primerApellido')) {
        obj['primerApellido'] = ApiClient.convertToType(data['primerApellido'], 'String');
      }
      if (data.hasOwnProperty('segundoApellido')) {
        obj['segundoApellido'] = ApiClient.convertToType(data['segundoApellido'], 'String');
      }
      if (data.hasOwnProperty('periodoCotizacion')) {
        obj['periodoCotizacion'] = ApiClient.convertToType(data['periodoCotizacion'], 'String');
      }
      if (data.hasOwnProperty('codTipoCotizante')) {
        obj['codTipoCotizante'] = ApiClient.convertToType(data['codTipoCotizante'], 'String');
      }
      if (data.hasOwnProperty('descTipoCotizante')) {
        obj['descTipoCotizante'] = ApiClient.convertToType(data['descTipoCotizante'], 'String');
      }
      if (data.hasOwnProperty('codTipoPlanilla')) {
        obj['codTipoPlanilla'] = ApiClient.convertToType(data['codTipoPlanilla'], 'String');
      }
      if (data.hasOwnProperty('descTipoPlanilla')) {
        obj['descTipoPlanilla'] = ApiClient.convertToType(data['descTipoPlanilla'], 'String');
      }
      if (data.hasOwnProperty('ingreso')) {
        obj['ingreso'] = ApiClient.convertToType(data['ingreso'], 'String');
      }
      if (data.hasOwnProperty('retiro')) {
        obj['retiro'] = ApiClient.convertToType(data['retiro'], 'String');
      }
      if (data.hasOwnProperty('salarioBasico')) {
        obj['salarioBasico'] = ApiClient.convertToType(data['salarioBasico'], 'Number');
      }
      if (data.hasOwnProperty('salarioIntegral')) {
        obj['salarioIntegral'] = ApiClient.convertToType(data['salarioIntegral'], 'String');
      }
      if (data.hasOwnProperty('ingresoBaseCotizacionPension')) {
        obj['ingresoBaseCotizacionPension'] = ApiClient.convertToType(data['ingresoBaseCotizacionPension'], 'Number');
      }
      if (data.hasOwnProperty('ingresoBaseCotizacionSalud')) {
        obj['ingresoBaseCotizacionSalud'] = ApiClient.convertToType(data['ingresoBaseCotizacionSalud'], 'Number');
      }
      if (data.hasOwnProperty('ingresoBaseCotizacionSubFamiliar')) {
        obj['ingresoBaseCotizacionSubFamiliar'] = ApiClient.convertToType(data['ingresoBaseCotizacionSubFamiliar'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Razon social del cliente consultado.
   * @member {String} razonSocial
   */
  exports.prototype['razonSocial'] = undefined;
  /**
   * Tipo documento Aportante del cliente consultado.
   * @member {String} tipoDocumentoAportante
   */
  exports.prototype['tipoDocumentoAportante'] = undefined;
  /**
   * Número documento Aportante del cliente consultado.
   * @member {String} numeroDocumentoAportante
   */
  exports.prototype['numeroDocumentoAportante'] = undefined;
  /**
   * Código  actividad economica del cliente consultado.
   * @member {String} codActividadEconomica
   */
  exports.prototype['codActividadEconomica'] = undefined;
  /**
   * Descripción actividad Economica del cliente consultado.
   * @member {String} desActividadEconomica
   */
  exports.prototype['desActividadEconomica'] = undefined;
  /**
   * Código ClaseAportante del cliente consultado.
   * @member {String} codClaseAportante
   */
  exports.prototype['codClaseAportante'] = undefined;
  /**
   * Descripción ClaseAportante del cliente consultado.
   * @member {String} desClaseAportante
   */
  exports.prototype['desClaseAportante'] = undefined;
  /**
   * Código TipoAportante del cliente consultado.
   * @member {String} codTipoAportante
   */
  exports.prototype['codTipoAportante'] = undefined;
  /**
   * Descripción TipoAportante del cliente consultado.
   * @member {String} desTipoAportante
   */
  exports.prototype['desTipoAportante'] = undefined;
  /**
   * Tipo documento Usuario.
   * @member {String} tipoDocumentoUsuario
   */
  exports.prototype['tipoDocumentoUsuario'] = undefined;
  /**
   * Número documento Usuario.
   * @member {String} numeroDocumentoUsuario
   */
  exports.prototype['numeroDocumentoUsuario'] = undefined;
  /**
   * Primer nombre del cliente consultado.
   * @member {String} primerNombre
   */
  exports.prototype['primerNombre'] = undefined;
  /**
   * Segundo nombre del cliente consultado.
   * @member {String} segundoNombre
   */
  exports.prototype['segundoNombre'] = undefined;
  /**
   * Primer apellido del cliente consultado.
   * @member {String} primerApellido
   */
  exports.prototype['primerApellido'] = undefined;
  /**
   * Segundo apellido del cliente consultado.
   * @member {String} segundoApellido
   */
  exports.prototype['segundoApellido'] = undefined;
  /**
   * Periodo de Cotizacion (YYYY-MM).
   * @member {String} periodoCotizacion
   */
  exports.prototype['periodoCotizacion'] = undefined;
  /**
   * Código TipoCotizante del cliente consultado.
   * @member {String} codTipoCotizante
   */
  exports.prototype['codTipoCotizante'] = undefined;
  /**
   * Descripción TipoCotizante del cliente consultado.
   * @member {String} descTipoCotizante
   */
  exports.prototype['descTipoCotizante'] = undefined;
  /**
   * Código TipoPlanilla del cliente consultado.
   * @member {String} codTipoPlanilla
   */
  exports.prototype['codTipoPlanilla'] = undefined;
  /**
   * Descripción TipoPlanilla del cliente consultado.
   * @member {String} descTipoPlanilla
   */
  exports.prototype['descTipoPlanilla'] = undefined;
  /**
   * Novedad del cliente consultado.
   * @member {String} ingreso
   */
  exports.prototype['ingreso'] = undefined;
  /**
   * Novedad del cliente consultado.
   * @member {String} retiro
   */
  exports.prototype['retiro'] = undefined;
  /**
   * salarioBasico del cliente consultado.
   * @member {Number} salarioBasico
   */
  exports.prototype['salarioBasico'] = undefined;
  /**
   * salarioIntegral del cliente consultado.
   * @member {String} salarioIntegral
   */
  exports.prototype['salarioIntegral'] = undefined;
  /**
   * ingresoBaseCotizacionPension del cliente consultado.
   * @member {Number} ingresoBaseCotizacionPension
   */
  exports.prototype['ingresoBaseCotizacionPension'] = undefined;
  /**
   * ingresoBaseCotizacionSalud del cliente consultado.
   * @member {Number} ingresoBaseCotizacionSalud
   */
  exports.prototype['ingresoBaseCotizacionSalud'] = undefined;
  /**
   * ingresoBaseCotizacionSub Familiar del cliente consultado.
   * @member {Number} ingresoBaseCotizacionSubFamiliar
   */
  exports.prototype['ingresoBaseCotizacionSubFamiliar'] = undefined;




  return exports;
}));


