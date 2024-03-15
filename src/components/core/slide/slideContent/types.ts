import { z } from 'zod';

export enum SlideContentTypes {
  title = 'title',
}

const ContentTitleSchema = z.object({
  type: z.literal(SlideContentTypes.title),
  title: z.string(),
  author: z.string(),
});

const ContentsSchema = z.discriminatedUnion('type', [ContentTitleSchema]);

export type ContentTitle = z.infer<typeof ContentTitleSchema>;
export type Contents = z.infer<typeof ContentsSchema>;
