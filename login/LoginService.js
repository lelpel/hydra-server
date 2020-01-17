const hydra = require("../hydra/HydraService");
const constants = require("../constants");

exports.login = async challenge => {
  try {
    const { skip, subject, redirect_to } = await hydra.getLoginRequest(
      challenge
    );

    if (skip) {
      // if logging not first time
      await hydra.acceptLoginRequest(challenge, { subject });

      return {
        code: constants.REDIRECT,
        redirect_to
      };
    } else {
      // if logging first time
      return {
        code: constants.NOT_LOGGED_IN,
        challenge
      };
    }
  } catch {
    console.log(error);
  }
};
