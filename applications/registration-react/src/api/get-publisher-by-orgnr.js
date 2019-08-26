import { searchApiGet } from './search-api/host';
import { getConfig } from '../config';

export const getPublisherByOrgNr = orgNr =>
  searchApiGet({
    url: `${getConfig().publisherApi.host}/publishers/${orgNr}`,
    authorization: getConfig().publisherApi.authorization
  });
