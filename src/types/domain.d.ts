import { DataFormat } from './enums';

export interface InformationModelDocument {
  id: string;
  identifier?: string;
  publisher?: Partial<Publisher>;
  harvestSourceUri?: string;
  harvest?: Partial<Harvest>;
  title?: Partial<TextLanguage>;
  name?: Partial<TextLanguage>;
  version?: string;
  schema?: string;
  objectTypes?: Partial<Node>[];
  codeTypes?: Partial<Node>[];
  dataTypes?: Partial<Node>[];
  simpleTypes?: Partial<Node>[];
  description?: Partial<TextLanguage>;
  modelDescription?: Partial<TextLanguage>;
  isDescribedByUri?: string;
  concept?: Partial<Concept>;
  themes?: any;
}

export interface Node {
  identifier: string;
  name: Partial<TextLanguage>;
  roles: Partial<Property>[];
  attributes: Partial<Property>[];
  properties: Partial<Property>[];
  isSubclassOf?: Partial<Type>;
  modelElementType: string;
  isDescribedByUri: string;
  typeDefinitionReference: string;
  concept?: Partial<Concept>;
  codeListReference?: string;
}

export interface TextLanguage {
  nb: string;
  nn: string;
  en: string;
}

export interface Publisher {
  uri: string;
  id: string;
  name: string;
  orgPath: string;
  prefLabel: Partial<TextLanguage>;
}

export interface Harvest {
  firstHarvested: string;
  lastHarvested: string;
}

export interface LosTheme {
  uri: string;
  name: Partial<TextLanguage>;
  losPaths?: string[];
}

export interface EuTheme {
  id: string;
  title: Partial<TextLanguage>;
  code?: string;
}

export interface Type {
  identifier: string;
  name: Partial<TextLanguage>;
}

export interface Property {
  identifier: string;
  name: Partial<TextLanguage>;
  parameters: any;
  type: Partial<Type>;
  isDescribedByUri: string;
  concept?: Partial<Concept>;
}

export interface Concept {
  id: string;
  uri: string;
  identifier: string;
  prefLabel: Partial<TextLanguage>;
  definition: any;
  publisher: Partial<Publisher>;
  example: Partial<TextLanguage>;
}

interface Provenance {
  code: string;
  prefLabel: Partial<TextLanguage>;
}

interface AccessRights {
  code: string;
}

interface ContactPoint {
  email: string;
  organizationUnit: string;
  hasURL: string;
  hasTelephone: string;
}

interface SpatialRestriction {
  code: string;
  prefLabel: Partial<TextLanguage>;
  uri: string;
}

interface TemporalRestriction {
  startDate: string;
  endDate: string;
}

interface ReferenceType {
  uri: string;
  code: string;
  prefLabel: Partial<TextLanguage>;
}

interface DatasetReference {
  referenceType: ReferenceType;
  source: { uri: string };
}

interface Annotation {
  hasBody: Partial<TextLanguage>;
}

interface AccrualPeriodicity {
  prefLabel: Partial<TextLanguage>;
}

interface Sample {
  description?: Partial<TextLanguage>;
  format: DataFormat[];
  accessURL: string[];
}

interface LegalBasis {
  uri: string;
  prefLabel: Partial<TextLanguage>;
}

export interface Dataset {
  id: string;
  type: string;
  uri: string;
  publisher: Partial<Publisher>;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  descriptionFormatted: Partial<TextLanguage>;
  objective: Partial<TextLanguage>;
  keyword: Partial<TextLanguage>[];
  theme: string[];
  issued: string;
  modified: string;
  distribution: Distribution[];
  accessRights?: AccessRights;
  accrualPeriodicity?: AccrualPeriodicity;
  provenance?: Provenance;
  harvest: Partial<Harvest>;
  contactPoint: Partial<ContactPoint>[];
  spatial?: SpatialRestriction[];
  temporal?: TemporalRestriction[];
  references?: DatasetReference[];
  subject?: Partial<Concept>[];
  hasRelevanceAnnotation?: Partial<Annotation>;
  hasCompletenessAnnotation?: Partial<Annotation>;
  hasAccuracyAnnotation?: Partial<Annotation>;
  hasAvailabilityAnnotation?: Partial<Annotation>;
  hasCurrentnessAnnotation?: Partial<Annotation>;
  sample?: Sample[];
  legalBasisForRestriction?: LegalBasis[];
  legalBasisForProcessing?: LegalBasis[];
  legalBasisForAccess?: LegalBasis[];
  conformsTo: ConformsTo[];
  informationModel?: Partial<ReferenceType>[];
  language?: Partial<ReferenceType>[];
  landingPage: string[];
}

export interface Api {
  id: string;
  uri: string;
  publisher: Partial<Publisher>;
  title: Partial<TextLanguage>;
  description?: Partial<TextLanguage>;
  descriptionFormatted?: Partial<TextLanguage>;
  nationalComponent: boolean;
  isOpenAccess: boolean;
  isOpenLicense: boolean;
  isFree: boolean;
}

export interface DataService extends Api {}

interface License {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface ConformsTo {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface Page {
  uri: string;
}

export interface Distribution {
  uri: string;
  type: string;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  format: DataFormat[];
  license: License;
  openLicense: boolean;
  accessURL: string[];
  downloadURL: string[];
  conformsTo: ConformsTo[];
  page?: Page[];
  accessService?: any;
}

export interface ReferenceData {
  los?: LosTheme[];
  themes?: EuTheme[];
  referencetypes?: ReferenceType[];
}

export interface Link {
  href: string;
}
export interface Links {
  next: Link;
  self: Link;
}

export interface NewsItemAttributes {
  title?: string;
  created?: string;
  changed?: string;
  field_ingress?: string;
  body?: string;
  video_link?: string;
  field_modules: any;
}

export interface News extends NewsItemAttributes {
  type: string;
  id: string;
  links: Partial<Links>;
}
