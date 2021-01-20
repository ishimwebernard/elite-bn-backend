import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import welcomeRoute from './welcome';
import Badroute from './badroute';
import swaggerDocs from '../swagger/swagger';
import user from './api/usersRoutes';
import passportSetup from '../config/passportSetup';

const router = Router();

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
router.use('/', welcomeRoute);
router.use('/users', user);

router.use('/', Badroute);

export default router;
