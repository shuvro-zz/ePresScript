//const env = process.env.NODE_ENV;

//const baseURL = `http://${env === 'production' ? 'api.stority-services.com/api' : 'testapi.stority-services.com'}`;
const baseURL =`http://a416e0.online-server.cloud`;
const API_CONFIG = {
  CLIENT_ID: 'desktop_application',
  CLIENT_SECRET: 'CLOUD.COMP[E_PRESCRIPTION]!$',

  LOGIN:`${baseURL}/auth`,
  PROFILE: `${baseURL}/api/v1/user/profile`,
  MEDICINE: `${baseURL}/api/v1/medicine`,
  TREATMENT: `${baseURL}/api/v1/treatment`,
};

export default API_CONFIG;
