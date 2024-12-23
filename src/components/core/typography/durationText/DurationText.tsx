import {
  chakra,
  type TextProps,
  defineRecipe,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { type FC } from "react";
import * as React from "react";

import { type Period } from "@/data";
import { useTranslation } from "@/app/i18n";

type DurationTextVariantProps = RecipeVariantProps<
  typeof durationTextRecipe
> & {
  period: Period;
};

export interface DurationTextProps
  extends Omit<TextProps, "children">,
    React.PropsWithChildren<DurationTextVariantProps> {}

export const DurationText = React.forwardRef<
  HTMLSpanElement,
  DurationTextProps
>(function DurationText(props, ref) {
  const { period, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: durationTextRecipe });
  const styles = recipe({ size });

  const from = dayjs(period.from);
  const to = period.to ? dayjs(period.to) : dayjs();

  const years = to.diff(from, "year");

  const months = to.diff(from, "month", true) - years * 12;
  const roundedMonths = Math.round(months);

  return (
    <chakra.span css={styles} {...restProps} ref={ref}>
      (<DurationContent years={years} months={roundedMonths} />)
    </chakra.span>
  );
});

export const durationTextRecipe = defineRecipe({
  base: {
    fontFamily: "Nunito",
    color: "gray.500",

    _dark: {
      color: "gray.400",
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: "sm",
      },
      xs: {
        fontSize: "xs",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type DurationContentProps = {
  years: number;
  months: number;
};

const DurationContent: FC<DurationContentProps> = async ({ years, months }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation("fr", "common", { keyPrefix: "dates" });

  const yearsText = t("years", { count: years });
  const monthsText = t("months", { count: months });

  if (years > 0 && months === 0) {
    return <>{yearsText}</>;
  }
  if (years === 0 && months > 0) {
    return <>{monthsText}</>;
  }

  return <>{`${yearsText}, ${monthsText}`}</>;
};
