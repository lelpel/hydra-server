const axios = require("axios");

const get = async (flow, challenge) => {
  try {
    return await axios.get(
      `/oauth2/auth/requests/${flow}?${flow}_challenge=${challenge}`
    );
  } catch (error) {
    console.log(error);
  }
};

const put = async (flow, action, challenge, body) => {
  try {
    return await axios.put(
      `/oauth2/auth/requests/${flow}/${action}?${flow}_challenge=${challenge}`,
      body
    );
  } catch (error) {
    console.log(error);
  }
};

const hydra = {
  // Fetches information on a login request.
  getLoginRequest: challenge => get("login", challenge),
  // Accepts a login request.
  acceptLoginRequest: (challenge, body) =>
    put("login", "accept", challenge, body),
  // Rejects a login request.
  rejectLoginRequest: (challenge, body) =>
    put("login", "reject", challenge, body),
  // Fetches information on a consent request.
  getConsentRequest: challenge => get("consent", challenge),
  // Accepts a consent request.
  acceptConsentRequest: (challenge, body) =>
    put("consent", "accept", challenge, body),
  // Rejects a consent request.
  rejectConsentRequest: (challenge, body) =>
    put("consent", "reject", challenge, body),
  // Fetches information on a logout request.
  getLogoutRequest: challenge => get("logout", challenge),
  // Accepts a logout request.
  acceptLogoutRequest: challenge => put("logout", "accept", challenge, {}),
  // Reject a logout request.
  rejectLogoutRequest: challenge => put("logout", "reject", challenge, {})
};

module.exports = hydra;
