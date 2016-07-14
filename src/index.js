(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Consulta', 'model/ConsultaConResultadJuridica', 'model/ConsultaConResultadoNatural', 'model/ConsultaMasiva', 'model/Error', 'model/EstadoConsultaMasiva', 'model/HistoricoConsulta', 'model/PersonaJuridica', 'model/PersonaNatural', 'model/ResultadoConsultaMasivaJuridica', 'model/ResultadoConsultaMasivaNatural', 'api/ConsultaIndividualApi', 'api/ConsultaMasivaApi', 'api/EstadisticasYTarifacinApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Consulta'), require('./model/ConsultaConResultadJuridica'), require('./model/ConsultaConResultadoNatural'), require('./model/ConsultaMasiva'), require('./model/Error'), require('./model/EstadoConsultaMasiva'), require('./model/HistoricoConsulta'), require('./model/PersonaJuridica'), require('./model/PersonaNatural'), require('./model/ResultadoConsultaMasivaJuridica'), require('./model/ResultadoConsultaMasivaNatural'), require('./api/ConsultaIndividualApi'), require('./api/ConsultaMasivaApi'), require('./api/EstadisticasYTarifacinApi'));
  }
}(function(ApiClient, Consulta, ConsultaConResultadJuridica, ConsultaConResultadoNatural, ConsultaMasiva, Error, EstadoConsultaMasiva, HistoricoConsulta, PersonaJuridica, PersonaNatural, ResultadoConsultaMasivaJuridica, ResultadoConsultaMasivaNatural, ConsultaIndividualApi, ConsultaMasivaApi, EstadisticasYTarifacinApi) {
  'use strict';

  /**
   * Consultas historicas de seguridad social.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ConsultasPilaWebApi = require('index'); // See note below*.
   * var xxxSvc = new ConsultasPilaWebApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ConsultasPilaWebApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ConsultasPilaWebApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ConsultasPilaWebApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.3.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Consulta model constructor.
     * @property {module:model/Consulta}
     */
    Consulta: Consulta,
    /**
     * The ConsultaConResultadJuridica model constructor.
     * @property {module:model/ConsultaConResultadJuridica}
     */
    ConsultaConResultadJuridica: ConsultaConResultadJuridica,
    /**
     * The ConsultaConResultadoNatural model constructor.
     * @property {module:model/ConsultaConResultadoNatural}
     */
    ConsultaConResultadoNatural: ConsultaConResultadoNatural,
    /**
     * The ConsultaMasiva model constructor.
     * @property {module:model/ConsultaMasiva}
     */
    ConsultaMasiva: ConsultaMasiva,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The EstadoConsultaMasiva model constructor.
     * @property {module:model/EstadoConsultaMasiva}
     */
    EstadoConsultaMasiva: EstadoConsultaMasiva,
    /**
     * The HistoricoConsulta model constructor.
     * @property {module:model/HistoricoConsulta}
     */
    HistoricoConsulta: HistoricoConsulta,
    /**
     * The PersonaJuridica model constructor.
     * @property {module:model/PersonaJuridica}
     */
    PersonaJuridica: PersonaJuridica,
    /**
     * The PersonaNatural model constructor.
     * @property {module:model/PersonaNatural}
     */
    PersonaNatural: PersonaNatural,
    /**
     * The ResultadoConsultaMasivaJuridica model constructor.
     * @property {module:model/ResultadoConsultaMasivaJuridica}
     */
    ResultadoConsultaMasivaJuridica: ResultadoConsultaMasivaJuridica,
    /**
     * The ResultadoConsultaMasivaNatural model constructor.
     * @property {module:model/ResultadoConsultaMasivaNatural}
     */
    ResultadoConsultaMasivaNatural: ResultadoConsultaMasivaNatural,
    /**
     * The ConsultaIndividualApi service constructor.
     * @property {module:api/ConsultaIndividualApi}
     */
    ConsultaIndividualApi: ConsultaIndividualApi,
    /**
     * The ConsultaMasivaApi service constructor.
     * @property {module:api/ConsultaMasivaApi}
     */
    ConsultaMasivaApi: ConsultaMasivaApi,
    /**
     * The EstadisticasYTarifacinApi service constructor.
     * @property {module:api/EstadisticasYTarifacinApi}
     */
    EstadisticasYTarifacinApi: EstadisticasYTarifacinApi
  };

  return exports;
}));
