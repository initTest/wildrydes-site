window._config = {
  cognito: {
    userPoolId: window._env?.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolClientId: window._env?.REACT_APP_COGNITO_CLIENT_ID,
    region: window._env?.REACT_APP_AWS_REGION
  },
  api: {
    invokeUrl: window._env?.REACT_APP_API_INVOKE_URL
  }
};
