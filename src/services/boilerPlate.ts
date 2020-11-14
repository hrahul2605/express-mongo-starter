import BoilerPlateModel from '../models/boilerPlate';

const init = async () => {
  const record = await BoilerPlateModel.create({ message: 'test' });
  return { record };
};

export default { init };
