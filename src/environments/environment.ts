export const environment = {
    production: false,
    backend: {
      endpoints:{
        //savePasswordUrl: "http://localhost:8014/login/app_credentials",  //for local testing
        //validateTokenUrl: 'http://localhost:8014/login/validate_token'  //for local testing

        savePasswordUrl:  "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/login/app_credentials", //development server
        //savePasswordUrl:  "https://smartwork-prod-backend-limesurvey.idi.ntnu.no/login/app_credentials", //production server
        
        validateTokenUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/login/validate_token"   //development server
        //validateTokenUrl: "https://smartwork-prod-backend-limesurvey.idi.ntnu.no/login/validate_token", //production server
      }
    }
  };