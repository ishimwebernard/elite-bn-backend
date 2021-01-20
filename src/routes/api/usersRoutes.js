import express from 'express';
import passport from 'passport';
import { OAuth } from '../../middlewares/index';
import { getProvider } from '../../helpers/socialProvider';

const router = express.Router();
router.get('/signup/:provider', getProvider);

router.get('/signup', (req, res) => {
    res.status(200).send({ status: 200, message: 'welcome signup' });
});
router.get('/auth/google/redirect', passport.authenticate('google', { session: false }), OAuth.googleAuth);
router.get('/auth/faceook/callback', passport.authenticate('facebook', { session: false }), OAuth.facebookAuth);

module.exports = router;