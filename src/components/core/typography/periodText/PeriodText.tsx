import {
  chakra,
  type TextProps,
  defineRecipe,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { type Period } from "@/data";
import { DateText } from "../dateText";

type PeriodTextVariantProps = RecipeVariantProps<typeof periodTextRecipe> & {
  period: Period;
};

export interface PeriodTextProps
  extends Omit<TextProps, "children">,
    React.PropsWithChildren<PeriodTextVariantProps> {}

export const PeriodText = React.forwardRef<HTMLSpanElement, PeriodTextProps>(
  function PeriodText(props, ref) {
    const { period, size, ...restProps } = props;

    const recipe = useRecipe({ recipe: periodTextRecipe });
    const styles = recipe({ size });

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <DateText when={period.from} dateFormat="MMM YYYY" marginRight="1" />
        <chakra.span marginRight="1">-</chakra.span>
        <ToComponent period={period} />
      </chakra.span>
    );
  }
);

export const periodTextRecipe = defineRecipe({
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

const ToComponent: FC<PeriodTextProps> = ({ period }) => {
  const { t } = useTranslation("common", { keyPrefix: "dates" });

  if (!period.to) {
    return <chakra.span>{t("today")}</chakra.span>;
  }

  return <DateText when={period.to} dateFormat="MMM YYYY" as="span" />;
};
