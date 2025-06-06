window._config = {
    cognito: {
        userPoolId: window.REACT_APP_COGNITO_USER_POOL_ID ,
        userPoolClientId: window.REACT_APP_COGNITO_CLIENT_ID,
        region: window.REACT_APP_AWS_REGION
    },
    api: {
        invokeUrl: window.REACT_APP_API_INVOKE_URL
    }
};
