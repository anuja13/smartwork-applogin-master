export const environment = {
    production: false,
    backend: {
      endpoints:{
        savePasswordUrl: "http://localhost:8014/login/app_credentials",
        validateTokenUrl: 'http://localhost:8014/login/validate_token'
      }
    }
  };