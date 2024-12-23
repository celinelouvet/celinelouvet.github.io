import {
  chakra,
  type HeadingProps as ChakraHeadingProps,
  defineRecipe,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";

type H4HeadingVariantProps = RecipeVariantProps<typeof h4HeadingRecipe>;

export interface H4HeadingProps
  extends Omit<ChakraHeadingProps, "size">,
    React.PropsWithChildren<H4HeadingVariantProps> {}

export const H4Heading = React.forwardRef<HTMLHeadingElement, H4HeadingProps>(
  function H4Heading(props, ref) {
    const { size, children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h4HeadingRecipe });
    const styles = recipe({ size });

    return (
      <chakra.h4 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h4>
    );
  }
);

export const h4HeadingRecipe = defineRecipe({
  base: {
    fontFamily: "PT Sans Narrow",
    fontWeight: "400",
  },
  variants: {
    size: {
      md: {
        fontSize: "1.25em",
      },
      lg: {
        fontSize: "1.5em",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
