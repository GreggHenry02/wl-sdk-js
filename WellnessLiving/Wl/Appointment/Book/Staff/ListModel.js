/**
 * An endpoint that retrieves information about staff members for the current service.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Staff_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service,dt_date,is_unavailable,id_role,k_appointment_ignore,k_timezone";

  /**
   * A list of staff members with information about them.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_staff = undefined;

  /**
   * Determines whether unavailable staff members can be booked.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_unavailable_staff = undefined;

  /**
   * The date/time of the appointment selected by user in the location's time zone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Determines whether to select the staff member's gender for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_gender = undefined;

  /**
   * Determines whether to select staff member(s) for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_staff = undefined;

  /**
   * The role of the user who's performing the API call.
   *
   * @get get
   * @type {number}
   */
  this.id_role = 2;

  /**
   * Determines whether the staff member list has male and female members.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gender_different = undefined;

  /**
   * `true` - returns service categories that have no staff members available to conduct them.
   *
   * `false` - returns only service categories that have staff members available to conduct them.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

  /**
   * The appointment key that must be ignored when searching for available staff members.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment_ignore = "0";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The service key to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The client's time zone.
   *
   * This will be `null` if not set yet or if the location's time zone is ued.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Staff_ListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Staff_ListModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"can_book_unavailable_staff": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"has_gender": {"get": {"result": true}},"has_staff": {"get": {"result": true}},"id_role": {"get": {"get": true}},"is_gender_different": {"get": {"result": true}},"is_unavailable": {"get": {"get": true}},"k_appointment_ignore": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Staff_ListModel.instanceGet
 * @param {string} k_location The key of a location.
 * @param {string} k_service The key of a service for which to show information.
 * @param {string} dt_date The date/time of the appointment selected by user, in the location's time zone.
 * @param {boolean} is_unavailable `true` - returns service categories that have no staff members available to conduct them. `false` - returns only service categories that have staff members available to conduct them.
 * @param {number} id_role User role by whom this api called. For different roles different results might be generated.
 * @param {string} k_appointment_ignore Key of appointment which must be ignored when searches available staff.
 * @param {?string} k_timezone User's timezone primary key in {@link \AGeoTimezoneSql} table. <tt>null</tt> until initialized or to use location timezone.
 * @returns {Wl_Appointment_Book_Staff_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */