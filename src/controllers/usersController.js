/* eslint-disable camelcase */
import { newJwtToken } from '../helpers/tokenGenerator';
import Util from '../helpers/utils';
import userService from '../services/userService';
import 'dotenv/config';

const util = new Util();
export default class user {
  static async socialSignup(userInfo, res) {
    try {
      const {
        given_name, family_name, email, provider, id,
      } = userInfo;
      const userData = {
        firstName: given_name,
        lastName: family_name,
        socialId: id,
        provider,
        email,
        isVerified: true,
      };
      const newUser = await userService.createuser(userData);
      if (newUser) {
        const payload = {
          email: newUser.email,
          userId: newUser.id,
        };
        const token = await newJwtToken(payload, '1h');
        await userService.updateAtt({ authToken: token }, { id: newUser.id });

        util.setSuccess(200, 'Account created', {
          email: newUser.email,
          userId: newUser.id,
          token,
        });
        return util.send(res);
      }
    } catch (error) {
      util.setError(500, 'Failed to create your account');
      return util.send(res);
    }
  }
}
