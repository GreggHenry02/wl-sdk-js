/**
 * An endpoint that adds a relationship to a client profile during the booking process.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The date/time to use for checking the session booking's availability.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * The relationship type.
   * One of the {@link Wl_Family_Relation_RelationSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_relation = 0;

  /**
   * This will be `true` if the linked client profile (relationship) uses the email of <var>uid_from</var>.
   * Otherwise, this will be `false` if they have their own email.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail_inherit = false;

  /**
   * This will `true` if the linked client profile (relationship) pays for their own purchases.
   * Otherwise, this will be `false` if <var>uid_from</var> pays for the linked profile's purchases.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay_self = false;

  /**
   * The business in which <var>uid_from</var> records the new relationship.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The session booking to check availability for.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The linked client profile's (relationship) email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The linked client profile's (relationship) first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * The linked client profile's (relationship) last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  /**
   * The newly added relationship.
   *
   * @post result
   * @type {string}
   */
  this.uid_create = undefined;

  /**
   * The user (client profile) who's adding the linked client profile (relationship).
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Relation_RelationModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Relation_RelationModel.prototype.config=function()
{
  return {"a_field": {"dtu_date": {"get": {"get": true}},"id_relation": {"post": {"post": true}},"is_mail_inherit": {"post": {"post": true}},"is_pay_self": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true}},"text_mail": {"post": {"post": true}},"text_name_first": {"post": {"post": true}},"text_name_last": {"post": {"post": true}},"uid_create": {"post": {"result": true}},"uid_from": {"get": {"get": true},"post": {"get": true}}}};
};