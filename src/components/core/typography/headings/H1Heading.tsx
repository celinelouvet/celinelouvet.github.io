import {
  chakra,
  type HeadingProps as ChakraHeadingProps,
  defineRecipe,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";

type H1HeadingVariantProps = RecipeVariantProps<typeof h1HeadingRecipe>;

export interface H1HeadingProps
  extends Omit<ChakraHeadingProps, "size">,
    React.PropsWithChildren<H1HeadingVariantProps> {}

export const H1Heading = React.forwardRef<HTMLHeadingElement, H1HeadingProps>(
  function H1Heading(props, ref) {
    const { visual, size, children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h1HeadingRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.h1 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h1>
    );
  }
);

export const h1HeadingRecipe = defineRecipe({
  base: {
    fontFamily: "PT Sans Narrow",
  },
  variants: {
    visual: {
      basic: {
        textTransform: "uppercase",
        fontWeight: "400",
        paddingBottom: "3",
      },
      slide: {
        fontWeight: "700",
        paddingBottom: "4",
        lineHeight: "1.2",
      },
    },
    size: {
      sm: {
        fontSize: "2.25em",
      },
      md: {
        fontSize: "2.5em",
      },
      lg: {
        fontSize: "2.75em",
      },
    },
  },
  defaultVariants: {
    size: "md",
    visual: "basic",
  },
});
