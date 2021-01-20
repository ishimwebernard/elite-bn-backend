import { Op } from 'sequelize';
import models from '../models';

const { User } = models;
/**
 * @exports
 * @class UserService
 */
class UserService {
  /**
   * create new user
   * @static createuser
   * @param {object} newuser
   * @memberof userService
   * @returns {object} data
   */
  static createuser(newUser) {
    return User.create(newUser);
  }

  /**
   * Find a User in storage using login credentials.
   * @param {*} prop HTTP request
   * @returns {*} JSON data
   */
  static findByEmail(prop) {
    return User.findOne({
      where: { email: prop },
    });
  }
  static updateAtt(set, prop) {
    return User.update(set, {
      where: prop,
    });
  }
}
export default UserService;
