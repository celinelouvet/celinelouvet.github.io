import { Grid, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

type Given = {
  text: string;
  and?: string;
  shown: string[];
};
type When = {
  text: string;
  shown: string[];
};
type Then = {
  text: string;
  and?: string;
  shown: string[];
};

type GivenWhenThenProps = {
  given: Given;
  when: When;
  then: Then;
};

const titleStyle = {
  fontWeight: '700',
};

export const GivenWhenThen: React.FC<GivenWhenThenProps> = (props) => {
  function Given() {
    const shown = props.given.shown;
    const text = props.given.text;
    const and = props.given.and;

    return (
      <Grid
        templateColumns="1fr 3fr"
        columnGap="brand.100"
        rowGap="0"
        width="100%"
      >
        <chakra.span {...titleStyle}>Etant donné que</chakra.span>
        <chakra.span opacity={shown.includes('text') ? 1 : 0}>
          {text}
        </chakra.span>

        {and && (
          <>
            <chakra.span {...titleStyle}>Et que</chakra.span>
            <chakra.span opacity={shown.includes('and') ? 1 : 0}>
              {and}
            </chakra.span>
          </>
        )}
      </Grid>
    );
  }
  function When() {
    const shown = props.when.shown;
    const text = props.when.text;

    return (
      <Grid
        templateColumns="1fr 3fr"
        columnGap="brand.100"
        rowGap="0"
        width="100%"
      >
        <chakra.span {...titleStyle}>Lorsque</chakra.span>
        <chakra.span opacity={shown.includes('text') ? 1 : 0}>
          {text}
        </chakra.span>
      </Grid>
    );
  }
  function Then() {
    const shown = props.then.shown;
    const text = props.then.text;
    const and = props.then.and;
    return (
      <Grid
        templateColumns="1fr 3fr"
        columnGap="brand.100"
        rowGap="0"
        width="100%"
      >
        <chakra.span {...titleStyle}>Alors</chakra.span>
        <chakra.span opacity={shown.includes('text') ? 1 : 0}>
          {text}
        </chakra.span>
        {and && (
          <>
            <chakra.span {...titleStyle}>Et</chakra.span>
            <chakra.span opacity={shown.includes('and') ? 1 : 0}>
              {and}
            </chakra.span>
          </>
        )}
      </Grid>
    );
  }

  return (
    <Stack width="100%" gap="brand.175">
      <Given />
      <When />
      <Then />
    </Stack>
  );
};
