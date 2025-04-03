export const environment = {
    production: true,
    backend: {
      endpoints:{
        savePasswordUrl:  "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/login/app_credentials",  //development server
        //savePasswordUrl:  "https://smartwork-prod-backend-user.idi.ntnu.no/login/app_credentials", //production server
        validateTokenUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/login/validate_token"  //development server
        //validateTokenUrl: "https://smartwork-prod-backend-user.idi.ntnu.no/login/validate_token", //production server
      }
    }
  };