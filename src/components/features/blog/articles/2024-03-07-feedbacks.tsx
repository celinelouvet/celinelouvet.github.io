import {
  Center,
  Flex,
  Icon,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

import { ExternalLink, H3Heading, H4Heading } from '@/components/core';

import { ArticleContent, ArticleSummary } from './Article';

export const FeedbackSummary: FC<{ link: string }> = ({ link }) => {
  const image = {
    src: '/others/2-feedbacks/want-your-feedback.png',
    alt: 'I wan your feedback',
  };

  return (
    <ArticleSummary
      link={link}
      title="Feedbacks"
      when="2024-03-07"
      image={image}
    >
      <Stack spacing={0}>
        <Text>
          Suite à la publication du précédent article, j‘ai eu des retours très
          pertinents. J‘ai donc appliqué ceux qui étaient facilement
          réalisables. Je vous explique comment j‘ai fait ça.
        </Text>
        <Text>
          <Text as="b">TLDR: </Text>des feedbacks et une nouvelle version.
        </Text>
      </Stack>
    </ArticleSummary>
  );
};

export const FeedbackContent: FC = () => (
  <ArticleContent title="Feedbacks" when="2024-03-07">
    <>
      <Stack spacing={0}>
        <Text>
          Suite à la publication du précédent article, j‘ai eu des retours très
          pertinents. J‘ai donc appliqué ceux qui étaient facilement
          réalisables. Je vous explique comment j‘ai fait ça.
        </Text>
        <Text>
          <Text as="b">TLDR: </Text>des feedbacks et une nouvelle version.
        </Text>
      </Stack>

      <Stack spacing={4}>
        <H3Heading>Les feedbacks</H3Heading>

        <Stack spacing={2}>
          <Stack spacing={0}>
            <Text as="span">
              Quand j‘ai annoncé la publication de la refonte, j‘ai reçu ces
              feedbacks :
            </Text>
            <UnorderedList paddingLeft={4}>
              <ListItem>Le chargement du site était rapide,</ListItem>
              <ListItem>Le poids trop élevé de certaines images,</ListItem>
              <ListItem>
                Le manque d‘accessibilité du menu de navigation,
              </ListItem>
              <ListItem>Une police majoritairement trop petite,</ListItem>
              <ListItem>
                La difficulté à voir ou comprendre le bouton &ldquo;plus de
                détails&rdquo; sur la page CV.
              </ListItem>
            </UnorderedList>
          </Stack>

          <Text>
            J‘ai aussi reçu une demande d‘ajout de fonctionnalité: un flux RSS.
          </Text>
          <Text>
            Merci à toutes les personnes qui ont pris le temps de me faire ces
            retours. Ça fait chaud au cœur.
          </Text>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>Rapidité de chargement du site</H4Heading>

          <Stack spacing={0}>
            <Text>
              Je ne pense pas y être pour grand-chose. C‘est surtout la stack
              choisie qui permet tout ça.
            </Text>
            <Text>
              Je me suis appuyée au départ sur
              <ExternalLink href="https://start-ui.com" marginX={1}>
                Start UI de BearStudio
              </ExternalLink>
              que j‘ai un peu purgé pour supprimer ce qui ne m‘était pas
              nécessaire.
            </Text>
          </Stack>

          <Stack spacing={0}>
            <Text as="span">La stack est donc :</Text>

            <UnorderedList paddingLeft={4}>
              <ListItem>Typescript,</ListItem>
              <ListItem>
                <ExternalLink href="https://nextjs.org" marginX={1}>
                  NextJs
                </ExternalLink>
                pour le framework web. Il permet de profiter de composants React
                et il apporte une grande partie de l‘optimisation,
              </ListItem>
              <ListItem>
                <ExternalLink href="https://chakra-ui.com" marginX={1}>
                  Chakra UI
                </ExternalLink>
                pour la librairie de composants. Elle fournit des composants
                accessibles, avec des modes light et dark, un Design System.
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={2}>
            <Stack spacing={0}>
              <Text as="span">
                J‘ai choisi de déployer le résultat sur
                <ExternalLink
                  href="https://cloud.google.com/appengine?hl=en"
                  marginX={1}
                >
                  GCP AppEngine
                </ExternalLink>
                .
              </Text>
              <UnorderedList paddingLeft={4}>
                <ListItem>
                  C‘est gratuit tant que l‘usage reste en-dessous d‘un quota, ce
                  qui est parfait pour un petit site perso.
                </ListItem>
                <ListItem>
                  On peut très facilement y déployer du Nodejs, ce qui me
                  convient parfaitement.
                </ListItem>
                <ListItem>
                  C‘est entièrement géré par GCP, donc je peux me concentrer sur
                  mon travail, le développement.
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing={0}>
              <Text>
                J‘ai configuré mon instance pour qu‘elle soit up en permanence,
                ce qui permet d‘éviter de subir trop de cold start.
              </Text>
              <Text>
                Néanmoins le gros souci du déploiement sur AppEngine, c‘est le
                temps de déploiement en tant que tel. Il varie entre
                <strong>2 minutes et 7-8 minutes</strong>.
              </Text>
            </Stack>
          </Stack>

          <Text>
            Pour la CI/CD, j‘utilise Github Actions, car il y a des actions
            existantes pour GCP.
          </Text>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>Poids trop élevé des images</H4Heading>

          <Stack spacing={0}>
            <Text>
              Je n‘avais clairement pas réfléchi à ce problème avant le feedback
              et c‘est idiot de ma part 😂
            </Text>
            <Text>
              J‘ai donc réduit la taille des images pour qu‘elles ne soient pas
              plus grandes que nécessaire. Ça ne sert à rien d‘avoir une image
              2000 x 1000 px, si c‘est pour l‘afficher en 200 x 100 px ! Pire
              que ça, ça ralentit le browser qui doit les réduire pour les
              afficher. Ça m‘a permis déjà de diminuer grandement le poids de
              celles ci.
            </Text>
            <Text>
              De plus, à cette taille, autant les passer en JPG, si elles ne
              contiennent pas de transparence. Ça permet parfois de diviser le
              poids par 2.
            </Text>
            <Text>Donc maintenant la plupart de ces images font 10-20 ko.</Text>
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>Manque d‘accessibilité du menu de navigation</H4Heading>

          <Stack spacing={0} marginBottom="6">
            <Text>
              Mon menu manquait très clairement d‘accessibilité. Il était très
              difficile de voir quelle page était sélectionnée.
            </Text>
            <Text>
              Je l‘ai donc revu pour utiliser directement des boutons afin qu‘il
              soit plus accessible pour les lecteurs. J‘ai aussi aligné les
              boutons à gauche pour pouvoir ajouter d‘autres pages dans le
              futur.
            </Text>

            <Wrap spacing="8" align="center" justify="center">
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Ancienne version</Text>
                <Center maxH="200px">
                  <Image
                    maxH={200}
                    objectFit="cover"
                    src="/others/2-feedbacks/desktop-before.jpg"
                    alt="Le menu avant modification, le texte est juste souligné"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Icon as={FaChevronCircleRight} boxSize="6" />
              </WrapItem>
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Nouvelle version</Text>
                <Center maxH="200px">
                  <Image
                    maxH={200}
                    objectFit="cover"
                    src="/others/2-feedbacks/desktop-after.jpg"
                    alt="Le nouveau menu, avec des boutons de couleur"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>

          <Stack spacing={0}>
            <Text>
              Au passage, j‘ai créé une vraie version pour mobile qui j‘espère
              sera mieux. J‘ai enlevé le précédent menu pour ajouter un panneau
              menu.
            </Text>

            <Wrap spacing="8" align="center" justify="center">
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Ancienne version</Text>
                <Center maxH="200px">
                  <Image
                    maxH={200}
                    objectFit="cover"
                    src="/others/2-feedbacks/mobile-before.jpg"
                    alt="Le menu avant modification, les boutons sont tassés"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Icon as={FaChevronCircleRight} boxSize="6" />
              </WrapItem>
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Nouvelle version</Text>
                <Flex>
                  <Center maxH="200px">
                    <Image
                      maxH={200}
                      objectFit="cover"
                      src="/others/2-feedbacks/mobile-after-1.jpg"
                      alt="Le nouveau menu, avec un bouton menu"
                      loading="lazy"
                    />
                  </Center>
                  <Center maxH="200px">
                    <Image
                      maxH={200}
                      objectFit="cover"
                      src="/others/2-feedbacks/mobile-after-2.jpg"
                      alt="Le panneau menu"
                      loading="lazy"
                    />
                  </Center>
                </Flex>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>Police majoritairement trop petite</H4Heading>

          <Stack spacing={0} marginBottom="6">
            <Text>
              Ma police était bien trop petite. J‘utilisais du 14px en taille
              par défaut et parfois, je descendais jusqu‘à 10px. Maintenant, la
              police par défaut est 16px, mais je pense qu‘elle est encore
              parfois trop petite... Je reverrais ça à nouveau.
            </Text>
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>
            Bouton &ldquo;plus de détails&rdquo; sur la page CV
          </H4Heading>

          <Stack spacing={0} marginBottom="6">
            <Text>
              J‘avais ajouté un toggle sur le CV afin d‘adapter le contenu à la
              personne qui le lit. Quand ce toggle est actif, les expériences
              affichaient plus de détails.
            </Text>
            <Text>
              A la place, j‘ai mis une section dépliable par expérience, suite à
              une suggestion.
            </Text>

            <Wrap spacing="8" align="center" justify="center">
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Ancienne version</Text>
                <Center maxH="200px">
                  <Image
                    maxH={200}
                    objectFit="cover"
                    src="/others/2-feedbacks/details-before.jpg"
                    alt="Le toggle principal"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Icon as={FaChevronCircleRight} boxSize="6" />
              </WrapItem>
              <WrapItem flexDirection="column" alignItems="center">
                <Text>Nouvelle version</Text>
                <Center maxH="200px">
                  <Image
                    maxH={200}
                    objectFit="cover"
                    src="/others/2-feedbacks/details-after.jpg"
                    alt="La section dépliable par expérience"
                    loading="lazy"
                  />
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <H4Heading>Ajouter un flux RSS</H4Heading>

          <Stack spacing={0}>
            <Text>
              Désolée, mais je n‘ai vraiment pas eu le temps d‘attaquer ça.
              Peut-être en juin ?
            </Text>
            <Text>
              Si vous connaissez des librairies qui vont ça facilement en JS /
              TS, je suis très preneuse, encore plus s‘il s‘agit de librairies
              plug ‘n‘ play en nextJs !
            </Text>
          </Stack>
        </Stack>

        <Stack spacing={0}>
          <Text>
            Si vous voulez voir les différences, je vais garder la version
            précédente pendant encore quelques temps.
          </Text>

          <ExternalLink
            href="https://v2-0-0-dot-celinelouvet-cv.ew.r.appspot.com"
            marginX={1}
          >
            Ancienne version
          </ExternalLink>
        </Stack>
      </Stack>

      <Stack spacing={4}>
        <H3Heading>Et c‘est tout ?!</H3Heading>

        <Text>
          Non, ce n‘est pas tout. J‘en ai profité pour apporter 2-3 autres
          choses.
        </Text>

        <Text as="span">J‘ai fait :</Text>
        <UnorderedList paddingLeft={4} marginBottom="6">
          <ListItem>
            une mise à jour de la stack: les packages sont à jour et l‘instance
            tourne sur du node 20 maintenant !
          </ListItem>
          <ListItem>
            du ménage dans le design system et dans les stories storybook
          </ListItem>
          <ListItem>
            un micro-tracking maison: j‘enregistre au fil de votre navigation
            les infos suivantes
            <UnorderedList paddingLeft={4}>
              <ListItem>la langue utilisée,</ListItem>
              <ListItem>le mode couleur (dark/light mode),</ListItem>
              <ListItem>la page où vous allez,</ListItem>
              <ListItem>si vous cliquez sur des zones dépliables.</ListItem>
              <ListItem>
                Et c‘est tout ! Pas d‘identifiant, pas d‘IP, rien de personnel.
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>

        <Text>
          Si vous avez des doutes sur vos données, n‘hésitez pas à aller faire
          un tour dans le
          <ExternalLink
            href="https://github.com/celinelouvet/celinelouvet.github.io"
            marginX={1}
          >
            code sur Github
          </ExternalLink>
          !
        </Text>
        <Text>Il me reste encore beaucoup à faire !</Text>
      </Stack>

      <Stack spacing={2} alignItems="center">
        <Text>
          Et n‘hésitez pas, je suis toujours preneuse de vos feedbacks, tant
          qu‘ils sont constructifs 🙂
        </Text>
        <Image
          boxSize={200}
          objectFit="cover"
          src="/others/2-feedbacks/want-your-feedback-bigger.png"
          alt="Je veux votre feedback"
          loading="lazy"
        />
      </Stack>
    </>
  </ArticleContent>
);
