import httpClientConfig from './http-client-config';

const END_POINT = 'jsonMockData/master/voteMockData.json';

const getVotes = () => httpClientConfig.get(END_POINT);

export default getVotes;
