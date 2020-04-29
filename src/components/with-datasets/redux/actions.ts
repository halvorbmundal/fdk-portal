import {
  GET_DATASETS_REQUESTED,
  GET_DATASETS_SUCCEEDED,
  GET_DATASETS_FAILED
} from './action-types';

import { Dataset } from '../../../types';

interface GetDatasetsParams {
  uris?: string;
}

export function getDatasetsRequested(params: GetDatasetsParams) {
  return {
    type: GET_DATASETS_REQUESTED,
    payload: {
      params
    }
  };
}

export function getDatasetsSucceeded(datasets: Dataset[]) {
  return {
    type: GET_DATASETS_SUCCEEDED,
    payload: {
      datasets
    }
  };
}

export function getDatasetsFailed(message: string) {
  return {
    type: GET_DATASETS_FAILED,
    payload: {
      message
    }
  };
}
