window._config = {
  cognito: {
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID, // Will be replaced
    userPoolClientId: process.env.REACT_APP_COGNITO_CLIENT_ID, // Will be replaced
    region: process.env.REACT_APP_AWS_REGION // Will be replaced
  },
  api: {
    invokeUrl: process.env.REACT_APP_API_INVOKE_URL // Will be replaced
  }
};
