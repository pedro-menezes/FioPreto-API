const { StatusCodes } = require('http-status-codes');

const { schedulingRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const schedulingExists = await schedulingRepository.get({
    date: new Date(params.date),
    time: params.time,
    salon_id: params.salon_id,
  });
  if (schedulingExists) {
    throw new ApplicationError(messages.alreadyExists('scheduling'), StatusCodes.CONFLICT);
  }

  return schedulingRepository.create(params);
};
