import { z } from 'zod';

export enum ViewTypes {
  content = 'content',
  notes = 'notes',
  print = 'print',
  printNotes = 'printNotes',
}

const BaseSchema = z.object({
  slides: z.array(z.any()),
});

const ContentSchema = BaseSchema.merge(
  z.object({
    view: z.literal(ViewTypes.content),
    messageRoot: z.string(),
  }),
);

const NotesSchema = BaseSchema.merge(
  z.object({
    view: z.literal(ViewTypes.notes),
    messageRoot: z.string(),
  }),
);

const PrintSchema = BaseSchema.merge(
  z.object({
    view: z.literal(ViewTypes.print),
  }),
);

const PrintNotesSchema = BaseSchema.merge(
  z.object({
    view: z.literal(ViewTypes.printNotes),
  }),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AllSchema = z.discriminatedUnion('view', [
  ContentSchema,
  NotesSchema,
  PrintSchema,
  PrintNotesSchema,
]);

export type All = z.infer<typeof AllSchema>;
export type Content = z.infer<typeof ContentSchema>;
export type Notes = z.infer<typeof NotesSchema>;
export type Print = z.infer<typeof PrintSchema>;
export type PrintNotes = z.infer<typeof PrintNotesSchema>;
