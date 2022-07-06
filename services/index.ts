import axios from 'axios';

type TeslaModel = 's' | '3' | 'x' | 'y'

const getModelData = async (model: TeslaModel) => {
    const { data } = await axios.get(`/api/model${model}`);
    return data;
}

export {
    getModelData
}
