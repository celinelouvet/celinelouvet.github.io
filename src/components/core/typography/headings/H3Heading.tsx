import {
  chakra,
  type HeadingProps as ChakraHeadingProps,
  RecipeVariantProps,
  defineRecipe,
  useRecipe,
} from "@chakra-ui/react";
import * as React from "react";

type H3HeadingVariantProps = RecipeVariantProps<typeof h3HeadingRecipe>;

export interface H3HeadingProps
  extends Omit<ChakraHeadingProps, "size">,
    React.PropsWithChildren<H3HeadingVariantProps> {}

export const H3Heading = React.forwardRef<HTMLHeadingElement, H3HeadingProps>(
  function H3Heading(props, ref) {
    const { visual, size, children, ...restProps } = props;
    const recipe = useRecipe({ recipe: h3HeadingRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.h3 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h3>
    );
  }
);

export const h3HeadingRecipe = defineRecipe({
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
        marginBottom: "2",
      },
    },
    size: {
      md: {
        fontSize: "1.5em",
      },
      lg: {
        fontSize: "1.7em",
      },
    },
  },
  defaultVariants: {
    size: "md",
    visual: "basic",
  },
});
