// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const hostHome = 'https://wakanda-home-ng.herokuapp.com';
const backEnd = "https://wakanda-academy-be.herokuapp.com";
const validatedBackEnd = "/wakanda/app/v1";
module.exports = {
  production: false,
  hostHome: hostHome,
  apiUrl:backEnd,
  signUpUrl: `${hostHome}/signUp`,
  loginUrl: `${hostHome}/login`,
  preCadUrl: `${backEnd}/public/wakander/pre-registrattion`,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
