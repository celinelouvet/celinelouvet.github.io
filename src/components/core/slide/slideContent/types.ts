import { z } from 'zod';

export enum SlideContentTypes {
  title = 'title',
  fullContent = 'fullContent',
  content2Columns = 'content2Columns',
  introduction = 'introduction',
  sectionTitle = 'sectionTitle',
  sectionTitleWithThinColumn = 'sectionTitleWithThinColumn',
  titleWithContent = 'titleWithContent',
  titleWith2Columns = 'titleWith2Columns',
  titleWithThinColumn = 'titleWithThinColumn',
  titleWithThin2Columns = 'titleWithThin2Columns',
  endTitle = 'endTitle',
  promotion = 'promotion',
  abstract = 'abstract',
}

export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

const WithColorMode = z.object({
  colormode: z.nativeEnum(ColorMode).default(ColorMode.light),
});

const WithTopRightCorner = z.object({
  topRightCorner: z.string().optional(),
});

const ContentTitleSchema = z.object({
  type: z.literal(SlideContentTypes.title),
  title: z.string(),
  author: z.string(),
});

const ContentFullContentSchema = z
  .object({
    type: z.literal(SlideContentTypes.fullContent),
  })
  .merge(WithColorMode);

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

const ContentSectionTitleSchema = z.object({
  type: z.literal(SlideContentTypes.sectionTitle),
  title: z.string(),
});

const ContentSectionTitleWithThinColumnSchema = z
  .object({
    type: z.literal(SlideContentTypes.sectionTitleWithThinColumn),
    title: z.string(),
    column1: z.any(),
  })
  .merge(WithTopRightCorner);

const ContentTitleWithContentSchema = z
  .object({
    type: z.literal(SlideContentTypes.titleWithContent),
    title: z.string(),
  })
  .merge(WithTopRightCorner);

const ContentTitleWith2ColumnsSchema = z
  .object({
    type: z.literal(SlideContentTypes.titleWith2Columns),
    title: z.string(),
    column1: z.any(),
  })
  .merge(WithTopRightCorner);

const ContentTitleWithThinColumnSchema = z
  .object({
    type: z.literal(SlideContentTypes.titleWithThinColumn),
    title: z.string(),
    column1: z.any(),
  })
  .merge(WithTopRightCorner);

const ContentTitleWithThin2ColumnsSchema = z
  .object({
    type: z.literal(SlideContentTypes.titleWithThin2Columns),
    title: z.string(),
    column1: z.any(),
    column2: z.any(),
  })
  .merge(WithTopRightCorner);

const ContentEndTitleSchema = z.object({
  type: z.literal(SlideContentTypes.endTitle),
});

const ContentPromotionSchema = z.object({
  type: z.literal(SlideContentTypes.promotion),
  author: z.string(),
  title: z.string(),
  convention: z.string(),
  time: z.string().optional(),
  room: z.string().optional(),
});

const ContentAbstractSchema = z.object({
  type: z.literal(SlideContentTypes.abstract),
  topic: z.string(),
  descriptions: z.array(z.string()),
});

const ContentsSchema = z.discriminatedUnion('type', [
  Content2ColumnsSchema,
  ContentAbstractSchema,
  ContentEndTitleSchema,
  ContentFullContentSchema,
  ContentIntroductionSchema,
  ContentPromotionSchema,
  ContentSectionTitleSchema,
  ContentSectionTitleWithThinColumnSchema,
  ContentTitleSchema,
  ContentTitleWith2ColumnsSchema,
  ContentTitleWithContentSchema,
  ContentTitleWithThin2ColumnsSchema,
  ContentTitleWithThinColumnSchema,
]);

export type ContentTitle = z.infer<typeof ContentTitleSchema>;
export type ContentFullContent = z.infer<typeof ContentFullContentSchema>;
export type Content2Columns = z.infer<typeof Content2ColumnsSchema>;
export type ContentIntroduction = z.infer<typeof ContentIntroductionSchema>;
export type ContentSectionTitle = z.infer<typeof ContentSectionTitleSchema>;
export type ContentSectionTitleWithThinColumn = z.infer<
  typeof ContentSectionTitleWithThinColumnSchema
>;
export type ContentTitleWithContent = z.infer<
  typeof ContentTitleWithContentSchema
>;
export type ContentTitleWith2Columns = z.infer<
  typeof ContentTitleWith2ColumnsSchema
>;
export type ContentTitleWithThinColumn = z.infer<
  typeof ContentTitleWithThinColumnSchema
>;
export type ContentTitleWithThin2Columns = z.infer<
  typeof ContentTitleWithThin2ColumnsSchema
>;
export type ContentEndTitle = z.infer<typeof ContentEndTitleSchema>;
export type ContentPromotion = z.infer<typeof ContentPromotionSchema>;
export type ContentAbstract = z.infer<typeof ContentAbstractSchema>;

export type Contents = z.infer<typeof ContentsSchema>;
