window._config = {
    cognito: {
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID ,
        userPoolClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        region: process.env.REACT_APP_AWS_REGION
    },
    api: {
        invokeUrl: process.env.REACT_APP_API_INVOKE_URL
    }
};
