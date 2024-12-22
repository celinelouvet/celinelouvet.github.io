import { z } from "zod";

const NextSchema = z.union([z.literal("submit"), z.string()]);

const WithInitialStateSchema = z.object({
  initialState: z.boolean(),
  optional: z.boolean(),
});

const SurveyPollChoiceSchema = z.object({
  text: z.string(),
  value: z.enum(["yes", "no"]),
  next: NextSchema,
  color: z.string(),
});

const SurveyPollChoiceQuestionSchema = z
  .object({
    type: z.literal("choice"),
    title: z.string(),
    choices: z.array(SurveyPollChoiceSchema),
  })
  .merge(WithInitialStateSchema);

const SurveyPollTextQuestionSchema = z
  .object({
    type: z.literal("text"),
    title: z.string(),
    next: NextSchema,
  })
  .merge(WithInitialStateSchema);

const SurveyPollSubmitQuestionSchema = z
  .object({
    type: z.literal("submit"),
  })
  .merge(WithInitialStateSchema);

const SurveyPollQuestionSchema = z.discriminatedUnion("type", [
  SurveyPollChoiceQuestionSchema,
  SurveyPollTextQuestionSchema,
  SurveyPollSubmitQuestionSchema,
]);

const SurveyByConventionSchema = z.object({
  name: z.string(),
  opensAt: z.string(),
  closesAt: z.string(),
  show: z.boolean(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SurveyPollSchema = z.object({
  title: z.string(),
  questions: z.map(z.string(), SurveyPollQuestionSchema),
  surveys: z.array(SurveyByConventionSchema),
});

export type SurveyPollChoice = z.infer<typeof SurveyPollChoiceSchema>;
export type SurveyPollChoiceQuestion = z.infer<
  typeof SurveyPollChoiceQuestionSchema
>;
export type SurveyPollTextQuestion = z.infer<
  typeof SurveyPollTextQuestionSchema
>;
export type SurveyPollSubmitQuestion = z.infer<
  typeof SurveyPollSubmitQuestionSchema
>;
export type SurveyPollQuestion = z.infer<typeof SurveyPollQuestionSchema>;
export type SurveyPoll = z.infer<typeof SurveyPollSchema>;
export type SurveyByConvention = z.infer<typeof SurveyByConventionSchema>;
