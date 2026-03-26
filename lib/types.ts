export type Cluster = {
  id: string;
  title: string;
  topicId: string;
  summary: string;
  directionLabel: "elevated" | "mixed" | "stabilizing";
  dateRange: string;
  articleIds: string[];
  entityIds: string[];
  sectorIds: string[];
  regionIds: string[];
  exposureIds: string[];
  caveats: string[];
};

export type Article = {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  topicIds: string[];
  sectorIds: string[];
  regionIds: string[];
  entityIds: string[];
  summary: string;
  sentimentLabel: "watch" | "pressure" | "supportive";
};

export type Topic = {
  id: string;
  name: string;
  description: string;
  trendLabel: "rising" | "mixed" | "cooling";
  summary: string;
  clusterIds: string[];
  relatedTopicIds: string[];
};

export type Sector = {
  id: string;
  name: string;
  summary: string;
  relatedTopicIds: string[];
  commonEntityIds: string[];
};

export type Region = {
  id: string;
  name: string;
  type: string;
  summary: string;
  relatedSectorIds: string[];
};

export type Entity = {
  id: string;
  name: string;
  type: string;
  summary: string;
};

export type Exposure = {
  id: string;
  clusterId: string;
  sectorId: string;
  regionId: string;
  label: string;
  rationale: string;
};
