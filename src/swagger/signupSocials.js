import dotenv from 'dotenv';

dotenv.config();
export const signupSocials = {
  '/users/signup/:provider': {
    post: {
      tags: [
        'User Registration with social media',
      ],
      summary: 'Creating account with google and facebook',
      parameters: [
        {
          name: 'User information',
          in: 'body',
          required: true,
          description: 'required information for the user being given by social medias',
          schema: {
            example: {
              firstName: 'yourname',
              lastName: 'yourname',
            },
          },
        },
      ],
      consumes: [
        'application/json',
      ],
      responses: {
        200: {
          description: 'successfully signed up',
        },
        400: {
          description: 'Account exist please verify your account',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
};
