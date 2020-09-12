const hostHome = 'https://wakanda-home-ng.herokuapp.com';
const backEnd = "https://localhost:8080/wakanda/app/v1";
module.exports = {
  production: false,
  hostHome: hostHome,
  signUpUrl: `${hostHome}/signUp`,
  loginUrl: `${hostHome}/login`,
  preCadUrl: `${backEnd}/public/wakander/pre-registrattion`,
};