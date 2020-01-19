const hydra = require("../hydra/HydraService");
const constants = require("../constants");

exports.register = async (challenge, login) => {
  try {
    await hydra.acceptLoginRequest(challenge, { subject: login });

    return {
      code: constants.REDIRECT,
      redirect_to
    };
  } catch {
    console.log(error);
  }
};
