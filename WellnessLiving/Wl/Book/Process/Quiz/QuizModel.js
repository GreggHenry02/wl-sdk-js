/**
 * An endpoint that manages quizzes (questionnaires) for a class or event, along with a selected Purchase Option,
 * during the booking process.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Quiz_QuizModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,uid,a_purchase_item,dt_date_gmt,id_mode";

  /**
   * The keys of a user's activities.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * A list of purchase items. Each element has the format <tt>[id_purchase_item]::[k_id]</tt>, where: <dl>
   *  <dt>int <var>id_purchase_item</var></dt>
   *  <dd>The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.</dd>
   *  <dt>string <var>k_id</var></dt>
   *  <dd>The key of the item. This depends on <var>id_purchase_item</var> of this array.</dd>
   * </dl>
   *
   * This will be empty if no purchases are made for the booking.
   *
   * @get get
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Determines whether the quiz is required and can't be skipped.
   * @property {string} k_quiz The quiz key.
   */

  /**
   * A list of quizzes. Each element has the next structure:<dl>
   *  <dt>bool <var>is_require</var></dt>
   *  <dd>Determines whether the quiz is required and can't be skipped.</dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>The quiz key.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = [];

  /**
   * A list of quiz response keys.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_repeat
   * @property {*} a_week The days of the week when the appointment repeats. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when appointment's repeat cycle stop. This will be empty if the repeat cycle doesn't
   * stop on a fixed date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a fixed number of occurrences.
   * @property {number} i_period The frequency at which the appointment repeats.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month This will be `true` if the appointment doesn't repeat monthly at the same date.
   * Otherwise, this will be `false` if the appointment repeats monthly at the same date or `null` if the appointment
   * doesn't repeat monthly.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of the week when the appointment repeats. One of the {@link ADateWeekSid} constants. This will be
   *     empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when appointment's repeat cycle stop. This will be empty if the repeat cycle doesn't stop on a
   *     fixed date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops. This will be empty if the
   *     repeat cycle doesn't stop after a fixed number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency at which the appointment repeats.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     This will be `true` if the appointment doesn't repeat monthly at the same date. Otherwise, this will
   *     be `false` if the appointment repeats monthly at the same date or `null` if the appointment
   *     doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if this isn't a recurring booking.
   *
   * @post post
   * @type {?Wl_Book_Process_Quiz_QuizModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_resource
   * @property {number} i_index The order number of the asset (possibly from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * Selected assets.
   *
   * Every element has the next keys:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The order number of the asset (possibly from 1 to the asset quantity).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Quiz_QuizModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * The selected sessions.
   *
   * Keys refer to the class period keys and values refer to a list of dates/times when the session occurred (in MySQL format and GMT).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * The selected unpaid sessions on the wait list.
   *
   * Keys refer to session IDs and values refer to index arrays of dates/times when the session occurred (in MySQL format and GMT).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of the bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * Determines whether the class/event can be booked at this step or not.
   *
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * The date/time the session is booked for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * This will be `true` if the user pressed 'Pay later'. Otherwise, this will be `false` if the user pressed
   * 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * This will be `true` next steps of booking wizard are required (something needs to be purchased to book the
   * selected session). Otherwise, this will be `false` if no additional steps are required (no additional purchases
   * required).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Th login promotion (Purchase Option) used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The session pass to be used to book the class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The key of the user making the booking.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_purchase_item": {"get": {"get": true}},"a_quiz": {"get": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Quiz_QuizModel.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} uid The key of the user making the booking.
 * @param {string[]} a_purchase_item A list of purchase items. Each element has the format
 * <tt>[id_purchase_item]::[k_id]</tt>, where: <dl>
 *   <dt>int <var>id_purchase_item</var></dt>
 *   <dd>The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.</dd>
 *   <dt>string <var>k_id</var></dt>
 *   <dd>The key of the item. This depends on <var>id_purchase_item</var> of this array.</dd>
 * </dl>
 * * This will be empty if no purchases are made for the booking.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */