import { Box, Grid } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from 'src/data';

import { Content } from './Content';
import { MainTitle } from './MainTitle';
import { Menu } from './Menu';
import { Summary } from './Summary';

type ResumeContentProps = {
  resume: Resume;
};

export const ResumeContent: React.FC<ResumeContentProps> =
  function ResumeContent({ resume }) {
    function scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    React.useEffect(() => {
      const scrollMenu = document.getElementById('scroll_menu');
      if (!scrollMenu) {
        return;
      }
      const height = scrollMenu.clientHeight;
      scrollMenu.style.top = `calc(50vh - ${height / 2}px)`;
    }, []);

    return (
      <Grid
        templateColumns="{spacing.summary.space} auto"
        columnGap="6"
        padding="6"
        position="relative"
      >
        <Box gridColumn="1 / span 2" bgGradient="brand" padding="6">
          <MainTitle resume={resume} />
        </Box>

        <Summary resume={resume} height="100%" />
        <Content resume={resume} />

        <Box id="scroll_menu" position="fixed" top="45vh" right="0" zIndex="10">
          <Menu resume={resume} onClick={scrollTo} />
        </Box>
      </Grid>
    );
  };
