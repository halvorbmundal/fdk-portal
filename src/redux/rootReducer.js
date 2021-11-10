import { combineReducers } from 'redux';
import { publishersReducer } from './modules/publishers';
import { settingsReducer } from './modules/settings';
import { catalogsReducer } from './modules/catalogs';
import { referenceDataReducer } from './modules/referenceData';
import { conceptsCompareReducer } from './modules/conceptsCompare';
import { datasetsReducer } from './modules/datasets';
import { dataServicesReducer } from './modules/dataservices';
import { conceptReducer } from './modules/concepts';
import { informationModelsReducer } from './modules/informationModels';
import DatasetReducer from '../components/with-dataset/redux/reducer';
import ReferenceDataReducer from '../components/with-reference-data/redux/reducer';
import ConceptsReducer from '../components/with-concepts/redux/reducer';
import ConceptReducer from '../components/with-concept/redux/reducer';
import DatasetsReducer from '../components/with-datasets/redux/reducer';
import DataServicesReducer from '../components/with-data-services/redux/reducer';
import DataServiceReducer from '../components/with-data-service/redux/reducer';
import EntitiesReducer from '../components/with-entities/redux/reducer';
import OrganizationsReducer from '../components/with-organizations/redux/reducer';
import OrganizationReducer from '../components/with-organization/redux/reducer';
import ReportReducer from '../components/with-report/redux/reducer';
import AssessmentReducer from '../components/with-assessment/redux/reducer';
import AssessmentsReducer from '../components/with-assessments/redux/reducer';
import InformationModelReducer from '../components/with-information-model/redux/reducer';
import InformationModelsReducer from '../components/with-information-models/redux/reducer';
import OrganizationsCatalogReducer from '../components/with-organizations-catalog/redux/reducer';
import PublicServicesReducer from '../components/with-public-services/redux/reducer';
import PublicServiceReducer from '../components/with-public-service/redux/reducer';
import PublicServicesAndEventsReducer from '../components/with-public-services-and-events/redux/reducer';
import EventReducer from '../components/with-event/redux/reducer';
import EventsReducer from '../components/with-events/redux/reducer';
import KartverketReducer from '../components/with-kartverket/redux/reducer';
import EventTypesReducer from '../components/with-event-types/redux/reducer';
import CommunityReducer from '../components/with-community/redux/reducer';
import DatasetPreviewReducer from '../components/with-dataset-preview/redux/reducer';

export const rootReducer = combineReducers({
  publishers: publishersReducer,
  settings: settingsReducer,
  catalogs: catalogsReducer,
  referenceData: referenceDataReducer,
  conceptsCompare: conceptsCompareReducer,
  datasets: datasetsReducer,
  dataServices: dataServicesReducer,
  concepts: conceptReducer,
  informationModels: informationModelsReducer,
  DatasetReducer,
  ReferenceDataReducer,
  ConceptsReducer,
  ConceptReducer,
  DatasetsReducer,
  DataServicesReducer,
  DataServiceReducer,
  EntitiesReducer,
  OrganizationsReducer,
  OrganizationReducer,
  ReportReducer,
  AssessmentReducer,
  AssessmentsReducer,
  InformationModelReducer,
  InformationModelsReducer,
  OrganizationsCatalogReducer,
  PublicServicesReducer,
  PublicServiceReducer,
  PublicServicesAndEventsReducer,
  EventReducer,
  EventsReducer,
  KartverketReducer,
  EventTypesReducer,
  CommunityReducer,
  DatasetPreviewReducer
});
