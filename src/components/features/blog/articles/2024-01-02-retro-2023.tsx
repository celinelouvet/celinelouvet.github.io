import {
  Center,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { type FC } from 'react';

import {
  ExternalLink,
  H3Heading,
  H4Heading,
  InternalLink,
} from '@/components/core';

import { ArticleContent, ArticleSummary } from './Article';

export const Retro2023Summary: FC<{ link: string }> = ({ link }) => {
  const image = {
    src: '/talks/devfestlille2023-Event_driven.jpg',
    alt: 'Event Driven, au DevFest Lille 2023',
  };

  return (
    <ArticleSummary
      link={link}
      title="Rétrospective 2023"
      when="2024-01-02"
      image={image}
    >
      <Stack spacing="0">
        <Text>
          Il parait que c’est le moment de faire une rétrospective sur ce qu’il
          s’est passé cette année. L’année a été riche en rebondissements
          positifs et négatifs et en nouvelles rencontres.
        </Text>
        <Text>
          Je vais donc profiter du lancement de mon nouveau site pour faire un
          article.
        </Text>
        <Text>
          <Text as="b">TLDR: </Text>une refonte du site, un début chez Shine,
          des conférences et des podcasts, des rencontres, des hobbies.
        </Text>
      </Stack>
    </ArticleSummary>
  );
};

export const Retro2023Content: FC = () => (
  <ArticleContent title="Rétrospective 2023" when="2024-01-02">
    <>
      <Stack spacing="0">
        <Text>
          Il parait que c’est le moment de faire une rétrospective sur ce qu’il
          s’est passé cette année. L’année a été riche en rebondissements
          positifs et négatifs et en nouvelles rencontres.
        </Text>
        <Text>
          Je vais donc profiter du lancement de mon nouveau site pour faire un
          article.
        </Text>
        <Text>
          <Text as="b">TLDR: </Text>une refonte du site, un début chez Shine,
          des conférences et des podcasts, des rencontres, des hobbies.
        </Text>
      </Stack>

      <Stack spacing="2">
        <H3Heading>Le nouveau site</H3Heading>

        <Stack spacing="0">
          <Text>
            Eh oui ! Je ne sais pas si vous l’avez remarqué, mais ce site est
            une nouvelle version faite en React, avec Next.js et Chakra UI. Ça a
            été l’occasion pour moi de rafraichir mes connaissances en React, et
            de découvrir Next.js et Chakra UI. Il y a certainement des bugs, il
            manque des choses, mais je suis contente de ce que j’ai pu faire.
          </Text>
          <Text>
            J’ai aussi profité de ce rafraichissement pour ajouter une section
            de blog. J’espère l’utiliser sérieusement cette année.
          </Text>
          <Text>Je reviendrai en détail dessus dans un prochain article.</Text>
        </Stack>
      </Stack>

      <Stack spacing="2">
        <H3Heading>Côté pro</H3Heading>

        <Stack spacing="0">
          <Text>
            En décembre 2022, je quittais Pyxo, après 7 mois chez eux.
          </Text>
          <Text>
            Puis, début février 2023, je commençais chez Shine, en tant que lead
            dev/senior backend dev. J’y ai rejoint l’équipe User Success, qui
            s’occupe de répondre aux besoins des opérateurs de Shine. Nous
            fournissons un back-office, ainsi que des outils divers pour
            répondre à la réglementation bancaire.
          </Text>
          <Text>
            J’y ai découvert une équipe très soudée, avec des personnes très
            compétentes et bienveillantes. L’ambiance Shine est à l’entraide et
            au travail bien fait en commun. De plus, certaines décisions
            techniques sont prises de concert par tous les devs, en mode
            démocratique. C’est très agréable de voir des gens échanger
            calmement sur des sujets qui habituellement auraient déclenché de
            batailles d’égo. Les gens cherchent à apprendre des autres, et à
            faire avancer les choses ensemble.
          </Text>
          <Text>Shine a été une très belle découverte.</Text>
        </Stack>
      </Stack>

      <Stack spacing="2">
        <H3Heading>Côté conférences</H3Heading>

        <Stack spacing="2">
          <H4Heading>En spectatrice</H4Heading>

          <Stack spacing="0">
            <Text>
              A côté de ça, j’ai profité d’être à Lyon pour assister au Tremplin
              MixIT, puis à MixIT.
            </Text>
            <Text>
              Si vous ne connaissez pas le Tremplin, c’est un événement organisé
              par Craft Records, qui permet à des nouvelles/nouveaux
              speakeuses/speakers de se lancer tout en étant accompagnées par
              des mentors. Le public vote pour ses talks préférés et les 2
              meilleurs sont sélectionnés pour MixIT.
            </Text>
            <Text>
              Concernant MixIT, cette conférence est vraiment différente des
              autres. On y trouve des talks techniques, mais aussi beaucoup de
              talks non techniques. J’ai pu y assister à des talks très
              intéressants. Je ne vais en lister qu’un, car sinon, je listerai
              les 3/4 des talks du programme !
            </Text>
            <Text>
              <ExternalLink href="https://mixitconf.org/2023/pour-une-ecologie-decoloniale-du-numerique">
                “Pour une écologie décoloniale du numérique“
              </ExternalLink>
              <Text as="em" marginLeft="1">
                par David Maenda Kithoko.
              </Text>
            </Text>
            <Text>
              Tous les talks de MixIT 2023 :
              <ExternalLink
                href="https://mixitconf.org/2023/medias"
                marginLeft="1"
              >
                https://mixitconf.org/2023/medias
              </ExternalLink>
            </Text>
          </Stack>
        </Stack>

        <Stack spacing="2">
          <H4Heading>En conférencière</H4Heading>

          <Stack spacing="2">
            <Stack spacing="0">
              <Text>
                Certaines confériencières m’ont donné envie de me relancer dans
                les conférences. J’ai donc profité de mon arrivée chez Shine
                pour proposer de nouveaux sujets.
              </Text>
              <Text>
                J’ai eu la chance de présenter 3 sujets différents, “Event
                Driven, qu’est-ce donc ?! Un nouveau buzzword ?“, “Les mystères
                des permissions“ ainsi qu’une table ronde avec
                <ExternalLink
                  href="https://www.linkedin.com/in/d%C3%A9borah-guyard/"
                  marginLeft="1"
                  marginRight="1"
                >
                  Angi Guyard
                </ExternalLink>
                et
                <ExternalLink
                  href="https://www.linkedin.com/in/soniaprevost/"
                  marginLeft="1"
                >
                  Sonia Prévost
                </ExternalLink>
                , intitulée “La révolution des fatiguées“.
              </Text>
            </Stack>

            <Stack spacing="0">
              <Text as="span">
                J’ai pu découvrir des conférences, dont certaines que je ne
                connaissais que de nom :
              </Text>
              <UnorderedList paddingLeft="4">
                <ListItem>DevFest Lille,</ListItem>
                <ListItem>BreizhCamp,</ListItem>
                <ListItem>Camping de Speakers,</ListItem>
                <ListItem>
                  ainsi que Cloud Est, qui vient d’être créée.
                </ListItem>
              </UnorderedList>
            </Stack>

            <Stack spacing="0">
              <Text as="span">
                J’ai aussi eu l’occasion d’échanger avec différentes personnes
                pour des podcasts avec :
              </Text>
              <UnorderedList paddingLeft="4">
                <ListItem>
                  <ExternalLink href="https://www.linkedin.com/in/shirley-almosni-chiche/">
                    Shirley Almosni Chiche
                  </ExternalLink>
                  , pour son podcast Build RH
                </ListItem>
                <ListItem>
                  <ExternalLink href="https://www.linkedin.com/in/phcharriere/">
                    Philippe Charrière
                  </ExternalLink>
                  , sur sa chaine Twitch
                </ListItem>
                <ListItem>
                  <ExternalLink href="https://www.linkedin.com/in/sylvain-coudert-punkindev/">
                    Sylvain Coudert
                  </ExternalLink>
                  , pour son podcast Punkin Dev
                </ListItem>
                <ListItem>
                  <ExternalLink href="https://www.linkedin.com/in/donatien-d/">
                    Donatien Léon
                  </ExternalLink>
                  , pour son podcast Developer Experience.
                </ListItem>
              </UnorderedList>
            </Stack>

            <Text>
              Pour plus de détails sur mes interventions, je vous propose
              d’aller sur la page
              <InternalLink href="/talks" marginLeft="1">
                Conférences
              </InternalLink>
              .
            </Text>

            <Wrap spacing="8" align="center" justify="center">
              <WrapItem>
                <Center maxH="200px">
                  <Image
                    maxH="200"
                    objectFit="cover"
                    src="/talks/paatternTalks2023-Tired_women_revolution.jpg"
                    alt="La révolution des fatiguées, avec Angi Guyard et Sonia Prévost"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center maxH="200px">
                  <Image
                    maxH="200"
                    objectFit="cover"
                    src="/talks/devfestlille2023-Event_driven.jpg"
                    alt="Event Driven, au DevFest Lille 2023"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center maxH="200px">
                  <Image
                    maxH="200"
                    objectFit="cover"
                    src="/talks/breizhcamp2023-Permissions.jpg"
                    alt="Le mystère des permissions, au Breizhcamp 2023"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing="2">
        <H3Heading>Côté personnel</H3Heading>

        <Stack spacing="2">
          <H4Heading>Et la santé ?</H4Heading>

          <Stack spacing="0">
            <Text>
              D’un point de vue santé, l’année n’a pas été entièrement rose.
              J’ai eu des hauts et des bas, mais j’ai pu compter sur mes proches
              pour m’aider à remonter la pente. Je suis d’ailleurs ravie des
              rencontres que j’ai pu faire cette année. Elles m’ont beaucoup
              apportées. Elles se reconnaitront si elles lisent cet article.
            </Text>
            <Text>
              L’avantage d’avoir plus de temps pour moi, c’est que j’ai pu en
              profiter pour faire ce que je n’avais pas le temps de faire,
              avant.
            </Text>
            <Text>
              Je me suis donc lancée dans un apprentissage du Japonais. J’en
              avais fait 6 mois en fin d’école d’ingénieur. J’ai donc repris
              depuis le début. J’espère pouvoir maintenir ça.
            </Text>
          </Stack>
        </Stack>

        <Stack spacing="2">
          <H4Heading>Côté hobbies</H4Heading>
          <Stack spacing="0">
            <Text>
              J’aime tout ce qui a attrait à l’art. J’ai toujours l’envie
              d’essayer divers médium. Cette année a été l’occasion de tester
              des choses. J’aime découvrir ou perfectionner des techniques
              artistiques.
            </Text>
            <Text>
              Je me suis donc lancée dans la création de carnet de notes /
              dessins. J’ai aussi fait de l’inktober à l’aquarelle, ainsi que
              des dessins aux marqueurs à alcool (type Copic)
            </Text>
          </Stack>

          <Wrap spacing="8" align="center" justify="center">
            <WrapItem>
              <Center maxH="200px">
                <Image
                  maxH="200"
                  objectFit="cover"
                  src="/others/1-retro2023/reliure-1.jpg"
                  alt="Carnet fait main, au format A5, avec une couverture en tissu gris et un fil bleu foncé. Vue du carnet fermé, de la tranche"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center maxH="200px">
                <Image
                  maxH="200"
                  objectFit="cover"
                  src="/others/1-retro2023/reliure-2.jpg"
                  alt="Carnet fait main, au format A5, avec une couverture en tissu gris et un fil bleu foncé. Vue du carnet ouvert"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center maxH="200px">
                <Image
                  maxH="200"
                  objectFit="cover"
                  src="/others/1-retro2023/inktober_hermit.jpg"
                  alt="Bernard l’ermite, dessiné à l’encre de chine et à l’aquarelle"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center maxH="200px">
                <Image
                  maxH="200"
                  objectFit="cover"
                  src="/others/1-retro2023/street_copics.jpg"
                  alt="Une rue, dessinée aux marqueurs à alcool"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
          </Wrap>
        </Stack>
      </Stack>

      <Stack spacing="2">
        <H3Heading>Et maintenant, en 2024 ?</H3Heading>

        <Stack spacing="0">
          <Text>
            Pour cette nouvelle année, je vais essayer de continuer sur ma
            lancée en termes de conférences. J’ai déjà quelques propositions en
            cours, dont j’attends les retours. J’ai participé à l’enregistrement
            d’un podcast, qui devrait sortir prochainement et je vais participer
            à un article pour 50inTech en Janvier.
          </Text>
          <Text>
            Il me reste encore des améliorations à faire pour ce site, telles
            que le blog et remettre la génération automatique du PDF de mon CV.
          </Text>
        </Stack>
      </Stack>

      <Text>
        Voilà, j’ai fait le grand tour. Merci d’avoir pris le temps de lire
        cette rétrospective. Je vous souhaite une bonne année 2024, avec une
        excellente santé et que vos projets se réalisent !
      </Text>
      <Stack spacing="2" alignItems="center">
        <Text fontSize="xl">Bonne année</Text>
        <Image
          boxSize="200"
          objectFit="cover"
          src="/others/1-retro2023/fireworks.jpg"
          alt="Un feu d’artifice"
          loading="lazy"
        />
      </Stack>
    </>
  </ArticleContent>
);
