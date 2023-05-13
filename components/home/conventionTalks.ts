import { Convention, Talk } from "~/models";

export type ConventionTalk = Talk & Convention;

export const asConventionTalks = (talks: Talk[]): ConventionTalk[] => talks.map((talk: Talk) => talkToConvention(talk)).flat();

const talkToConvention = ({ topic, description, where, ...talk }: Talk): ConventionTalk[] => {
  if (!where) {
    return [{ topic, description, name: "", pictureId: talk.pictureId, when: talk.when ?? "", language: talk.language, links: talk.links }];
  }
  return where.map(({ name, pictureId, ...convention }: Convention) => ({
    topic,
    name,
    description,
    pictureId,
    when: convention.when ?? talk.when,
    language: convention.language ?? talk.language,
    links: convention.links ?? talk.links,
  }));
};
