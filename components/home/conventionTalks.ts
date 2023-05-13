import { Convention, Talk } from "~/models";

export type ConventionTalk = Talk & Convention;

export const asConventionTalks = (talks: Talk[]): ConventionTalk[] => talks.map((talk: Talk) => talkToConvention(talk)).flat();

const talkToConvention = ({ topic, description, where = [], ...talk }: Talk): ConventionTalk[] => {
  return where.map(({ name, ...convention }: Convention) => ({
    topic,
    name,
    description,
    when: convention.when ?? talk.when,
    language: convention.language ?? talk.language,
    links: convention.links ?? talk.links,
  }));
};
