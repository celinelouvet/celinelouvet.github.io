import { Grid, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

type Given = {
  text: string;
  and?: string;
};
type When = {
  text: string;
};
type Then = {
  text: string;
  and?: string;
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
    return (
      <Grid templateColumns="1fr 3fr" columnGap="1em" rowGap="0" width="100%">
        <chakra.span {...titleStyle}>Etant donné que</chakra.span>
        <chakra.span>{props.given.text}</chakra.span>

        {props.given.and && (
          <>
            <chakra.span {...titleStyle}>Et que</chakra.span>
            <chakra.span>{props.given.and}</chakra.span>
          </>
        )}
      </Grid>
    );
  }
  function When() {
    return (
      <Grid templateColumns="1fr 3fr" columnGap="1em" rowGap="0" width="100%">
        <chakra.span {...titleStyle}>Lorsque</chakra.span>
        <chakra.span>{props.when.text}</chakra.span>
      </Grid>
    );
  }
  function Then() {
    return (
      <Grid templateColumns="1fr 3fr" columnGap="1em" rowGap="0" width="100%">
        <chakra.span {...titleStyle}>Alors</chakra.span>
        <chakra.span>{props.then.text}</chakra.span>
        {props.then.and && (
          <>
            <chakra.span {...titleStyle}>Et</chakra.span>
            <chakra.span>{props.then.and}</chakra.span>
          </>
        )}
      </Grid>
    );
  }

  return (
    <Stack width="100%" gap="1.75em">
      <Given />
      <When />
      <Then />
    </Stack>
  );
};
