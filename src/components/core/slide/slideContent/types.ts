import { z } from 'zod';

export enum SlideContentTypes {
  title = 'title',
  content2Columns = 'content2Columns',
  introduction = 'introduction',
  endTitle = 'endTitle',
}

export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

const WithColorMode = z.object({
  colormode: z.nativeEnum(ColorMode).default(ColorMode.light),
});

const ContentTitleSchema = z.object({
  type: z.literal(SlideContentTypes.title),
  title: z.string(),
  author: z.string(),
});

const Content2ColumnsSchema = z
  .object({
    type: z.literal(SlideContentTypes.content2Columns),
    column1: z.any(),
  })
  .merge(WithColorMode);

const socialSchema = z.object({
  name: z.string(),
  handle: z.string(),
});

const ContentIntroductionSchema = z.object({
  type: z.literal(SlideContentTypes.introduction),
  author: z.string(),
  descriptions: z.array(z.string()),
  socials: z.array(socialSchema),
});

const ContentEndTitleSchema = z.object({
  type: z.literal(SlideContentTypes.endTitle),
});

const ContentsSchema = z.discriminatedUnion('type', [
  ContentTitleSchema,
  Content2ColumnsSchema,
  ContentIntroductionSchema,
  ContentEndTitleSchema,
]);

export type ContentTitle = z.infer<typeof ContentTitleSchema>;
export type Content2Columns = z.infer<typeof Content2ColumnsSchema>;
export type ContentIntroduction = z.infer<typeof ContentIntroductionSchema>;
export type ContentEndTitle = z.infer<typeof ContentEndTitleSchema>;
export type Contents = z.infer<typeof ContentsSchema>;
