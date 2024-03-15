import { z } from 'zod';

export enum SlideContentTypes {
  title = 'title',
  content2Columns = 'content2Columns',
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

const ContentsSchema = z.discriminatedUnion('type', [
  ContentTitleSchema,
  Content2ColumnsSchema,
]);

export type ContentTitle = z.infer<typeof ContentTitleSchema>;
export type Content2Columns = z.infer<typeof Content2ColumnsSchema>;
export type Contents = z.infer<typeof ContentsSchema>;
