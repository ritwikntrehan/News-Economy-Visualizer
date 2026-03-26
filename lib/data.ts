import articles from "@/data/articles.json";
import clusters from "@/data/clusters.json";
import entities from "@/data/entities.json";
import exposures from "@/data/exposures.json";
import regions from "@/data/regions.json";
import sectors from "@/data/sectors.json";
import topics from "@/data/topics.json";
import { Article, Cluster, Entity, Exposure, Region, Sector, Topic } from "./types";

export const db = {
  articles: articles as Article[],
  clusters: clusters as Cluster[],
  entities: entities as Entity[],
  exposures: exposures as Exposure[],
  regions: regions as Region[],
  sectors: sectors as Sector[],
  topics: topics as Topic[],
};

export const indexById = <T extends { id: string }>(arr: T[]) => Object.fromEntries(arr.map((x) => [x.id, x]));
