import {
  chakra,
  type HeadingProps as ChakraHeadingProps,
  RecipeVariantProps,
  defineRecipe,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";

type H2HeadingVariantProps = RecipeVariantProps<typeof h2HeadingRecipe>;

export interface H2HeadingProps
  extends Omit<ChakraHeadingProps, "size">,
    React.PropsWithChildren<H2HeadingVariantProps> {}

export const H2Heading = React.forwardRef<HTMLHeadingElement, H2HeadingProps>(
  function H2Heading(props, ref) {
    const { visual, size, children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h2HeadingRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.h2 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h2>
    );
  }
);

export const h2HeadingRecipe = defineRecipe({
  base: {
    fontFamily: "PT Sans Narrow",
  },
  variants: {
    visual: {
      basic: {
        fontWeight: "400",
        marginBottom: "2",
      },
      slide: {
        fontWeight: "400",
        lineHeight: "1.2",
      },
    },
    size: {
      md: {
        fontSize: "2em",
      },
      lg: {
        fontSize: "2.25em",
        textTransform: "uppercase",
      },
    },
  },
  defaultVariants: {
    size: "md",
    visual: "basic",
  },
});
