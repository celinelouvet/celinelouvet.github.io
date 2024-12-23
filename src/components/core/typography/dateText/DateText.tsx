import {
  chakra,
  type TextProps,
  RecipeVariantProps,
  defineRecipe,
  useRecipe,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import * as React from "react";

type DateTextVariantProps = RecipeVariantProps<typeof dateTextRecipe> & {
  when: string;
  dateFormat: string;
};

export interface DateTextProps
  extends Omit<TextProps, "children">,
    React.PropsWithChildren<DateTextVariantProps> {}

export const DateText = React.forwardRef<HTMLSpanElement, DateTextProps>(
  function DateText(props, ref) {
    const { dateFormat, size, visual, when, ...restProps } = props;

    const recipe = useRecipe({ recipe: dateTextRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        {dayjs(when).format(dateFormat)}
      </chakra.span>
    );
  }
);

export const dateTextRecipe = defineRecipe({
  base: {
    fontFamily: "Nunito",
  },
  variants: {
    visual: {
      basic: {
        color: "gray.500",

        _dark: {
          color: "gray.400",
        },
      },
      slide: {
        fontSize: "1em",
      },
    },
    size: {
      lg: {
        fontSize: "lg",
      },
      md: {
        fontSize: "md",
      },
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
    visual: "basic",
  },
});
