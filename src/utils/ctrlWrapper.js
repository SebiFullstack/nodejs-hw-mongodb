export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export const getEnvVar = (varName, defaultValue) => {
  return process.env[varName] || defaultValue;
};
