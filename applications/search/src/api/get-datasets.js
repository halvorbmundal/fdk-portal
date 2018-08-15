import _ from 'lodash';
import axios from 'axios';

import { addOrReplaceParam } from '../lib/addOrReplaceUrlParam';

export const getDatasets = async search => {
  const datasetsUrl = `/datasets${search}`;
  const url = addOrReplaceParam(datasetsUrl, 'size', '50');

  const response = await axios
    .get(url)
    .catch(e => console.error(JSON.stringify(e))); // eslint-disable-line no-console

  return response && response.data;
};

function createNestedListOfPublishers(listOfPublishers) {
  const nestedListOfPublishers = _(listOfPublishers).forEach(publisherItem => {
    const filteredChildrenOfParentPublishers = _(listOfPublishers)
      .filter(
        g => g.key.substring(0, g.key.lastIndexOf('/')) === publisherItem.key
      )
      .value();

    filteredChildrenOfParentPublishers.forEach(item => {
      const retVal = item;
      retVal.hasParent = true;
      return retVal;
    });

    const retVal = publisherItem;
    retVal.children = filteredChildrenOfParentPublishers;
    return retVal;
  });

  return _(nestedListOfPublishers)
    .filter(f => !f.hasParent)
    .value();
}

export const extractPublisherCounts = datasetsSearchResponse =>
  createNestedListOfPublishers(
    datasetsSearchResponse.aggregations.orgPath.buckets
  );
