import {
  Center,
  Icon,
  Image,
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { FaHandPointLeft } from 'react-icons/fa';

import { ExternalLink, H3Heading, Question, Quote } from '@/components/core';

import { ArticleContent, ArticleSummary } from './Article';

export const March8Summary: FC<{ link: string }> = ({ link }) => {
  const image = {
    src: '/others/3-march8/Présence après 35 ans.png',
    alt: `Présence après 35 ans: 8% de femmes et 92% d'hommes`,
  };
  return (
    <ArticleSummary
      link={link}
      title="Non, mais la situation est meilleure, hein ?"
      when="2024-03-08"
      image={image}
    >
      <Stack spacing={0}>
        <Text>
          En podcast, on me demande régulièrement si la situation des femmes
          s’est améliorée dans la tech. A cette question, j’ai souvent une
          réponse en demi-teinte où j’utilise une expression québécoise:
        </Text>
        <Quote>C’est moins pire, oui.</Quote>
        <Text>
          En effet, ça s’est amélioré sur certains points, mais on partait de
          tellement loin, c’est comme si la barre était au sol. Difficile de
          faire pire, non ?
        </Text>
        <Text>
          Le sexisme actuel simplement est différent de celui que j’ai pu vivre
          au début de ma carrière en 2005.
        </Text>
      </Stack>
    </ArticleSummary>
  );
};

export const March8Content: FC = () => (
  <ArticleContent
    title="Non, mais la situation est meilleure, hein ?"
    when="2024-03-08"
  >
    <>
      <Stack spacing={0}>
        <Text>
          En podcast, on me demande régulièrement si la situation des femmes
          s’est améliorée dans la tech. A cette question, j’ai souvent une
          réponse en demi-teinte où j’utilise une expression québécoise:
        </Text>
        <Quote>C’est moins pire, oui.</Quote>
        <Text>
          En effet, ça s’est amélioré sur certains points, mais on partait de
          tellement loin, c’est comme si la barre était au sol. Difficile de
          faire pire, non ?
        </Text>
        <Text>
          Le sexisme actuel simplement est différent de celui que j’ai pu vivre
          au début de ma carrière en 2005.
        </Text>
      </Stack>

      <Stack spacing={4}>
        <H3Heading>A quoi ça ressemblait avant ?</H3Heading>

        <Stack spacing={4}>
          <Text>
            En 2005, le sexisme était ancré dans le quotidien et totalement
            décomplexé. On m’a régulièrement dit explicitement que je n’avais
            rien à faire là ou que je n’étais pas compétente.
          </Text>
          <Text>Voici quelques exemples de ce que j’ai pu vivre.</Text>
          <Stack spacing="8">
            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                Je passe les entretiens pour être embauchée dans une grande ESN,
                en tant que développeuse.
              </Text>
              <Text>Le recruteur m’a dit, en toute décontraction :</Text>
              <Quote>
                Vous savez, en tant que femme, vous ne ferez jamais un bon
                développeur. Faites plutôt de la MOA.
              </Quote>
              <Text as="span">
                Pour contexte, j’ai fait une école d’ingénieurs en informatique,
                avec une spécialisation sur le développement logiciel.
              </Text>
              <Text>
                Vous n’imaginez pas le sentiment ressenti à ce moment-là. Je
                viens de passer plusieurs années de ma vie et on me dit ça n’a
                servi à rien...
              </Text>
            </StackItem>

            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                Je suis en ESN. Le commercial a organisé un entretien client, où
                nous sommes 3 candidats en même temps, 2 hommes et moi, tous
                sortant d’école. Nous sommes tous les 3 debouts devant son
                bureau.
              </Text>
              <Text>
                Dès le début de l’entretien, le client me regarde, agacé, puis
                me dit :
              </Text>
              <Quote>
                Vous, je ne vous pose pas de question technique, ça ne sert à
                rien. Je ne vais pas perdre mon temps avec vous.
              </Quote>
              <Text>
                Je passe donc l’heure de l’entretien, en mode potiche, debout, à
                connaitre une bonne part des réponses aux questions qu’il va
                poser à ces messieurs.
              </Text>
            </StackItem>

            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                Je suis en préparation d’entretien pour une mission, avec mon
                commercial. On répète ce que je dois dire.
              </Text>
              <Text>
                Puis à la fin, le commercial me dit, en toute décontraction :
              </Text>
              <Quote>
                Déboutonnes un peu plus ta chemise, ça t’aidera à garder
                l’attention du client.
              </Quote>
              <Text>
                Ça m’avait choquée, mais je n’avais pas su réagir à ça. Pire !
                Je l’ai fait, car je pensais qu’il avait raison !
              </Text>
            </StackItem>

            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                Je suis en mission chez un opérateur mobile. Je donne tout pour
                montrer que je suis compétente. Je ne rechigne sur rien, les
                heures, l’implication.
              </Text>
              <Text>Au bout de quelques semaines, le client me dit :</Text>
              <Quote>
                Il faut vraiment que tu t’investisses plus, car là, tu as l’air
                moins compétente que tes collègues masculins.
              </Quote>
              <Text as="span">
                Vous n’imaginez pas l’état d’énervement dans lequel j’étais.
              </Text>
              <Text>
                Suite à ça, je l’ai pris à contrepieds et je me suis investie
                exactement comme mes collègues. Car en effet, jusqu’à sa
                remarque, j’en faisais nettement plus qu’eux.
              </Text>
              <Text>
                Il en est ressorti une question que je me pose encore
                régulièrement :
              </Text>
              <Question marginBottom="6">
                Pourquoi m’investir plus, si ce n’est pas reconnu ? Que j’en
                fasse plus ou moins, ils me considèreront toujours comme moins
                compétente que les hommes. Autant en faire moins et arrêtez de
                m’épuiser pour rien, non ?!
              </Question>
            </StackItem>
          </Stack>
          <Text>
            Malgré tout ça, j’ai persisté dans le métier. On m’a poussé
            régulièrement à faire autre chose que du développement, mais j’ai
            fini par y arriver. Il m’aura fallu 6 ans, en début de carrière,
            pour enfin faire du développement.
          </Text>
        </Stack>
      </Stack>

      <Stack spacing={4}>
        <H3Heading>Et maintenant ?</H3Heading>

        <Stack spacing={4}>
          <Text>
            En comparaison, c’est nettement plus insidieux. En effet, suite aux
            divers mouvements de ces dernières années, <strong>#meToo</strong>,{' '}
            <strong>#BalanceTonPorc</strong> ou autres, les gens savent que si
            c’est trop visible, ils se feront dénoncer. Il reste néanmoins
            beaucoup trop de choses.
          </Text>
          <Text>
            Voici quelques exemples de ce que j’ai pu vivre ces quelques
            dernières années.
          </Text>
          <Stack spacing="8">
            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                À problème technique spécifique, je propose une solution en
                laquelle j’ai une très forte confiance qu’elle va résoudre le
                problème. Je rédige un document qui explique les tenants et
                aboutissants et pourquoi cette proposition résout notre
                problème.
              </Text>
              <Text>Mon responsable me répond après l’avoir lu :</Text>
              <Quote>
                Ok mais je veux que tu démontres ce que tu expliques, car j’ai
                des doutes.
              </Quote>
              <Text>
                Ah une phrase avec un &ldquo;Oui, mais&rdquo;, mes préférées ⸮
                <Icon as={FaHandPointLeft} marginX="2" />
                <em>Ceci un point d’ironie, si vous ne connaissiez pas.</em>
              </Text>
              <Text as="span">
                Je vais donc coder un POC pour tester ça. En quelques jours, la
                démonstration est faite par A+B que oui, c’est bien la solution.
              </Text>
              <Text>Je la présente à mon responsable. Il me répond:</Text>
              <Quote>
                Oui ça y répond, mais peux-tu approfondir les tests, car j’ai
                encore des doutes.
              </Quote>
              <Text>Oh encore un &ldquo;Oui, mais&rdquo; !</Text>
              <Text as="span">
                Et ainsi de suite. Au final, je vais passer 3 mois à lui
                démontrer que c’est la solution au problème, jusqu’à ce qu’il ne
                puisse plus esquiver.
              </Text>
              <Text>
                Et vous savez quoi ? L’implémentation finale ne me prendra que{' '}
                <strong>une semaine</strong> à la faire. Le POC, lui, nous a mis
                en retard de <strong>2mois</strong>.
              </Text>
            </StackItem>

            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text>
                À un problème fonctionnel, je propose une solution. Mon lead dev
                me répond, sans plus d’explication :
              </Text>
              <Quote>Non, ce n’est pas une bonne solution.</Quote>
              <Text as="span">
                Jusque là, aucun souci à mes yeux, même si ça manque
                d’explications. Le problème arrivera plus tard.
              </Text>
              <Text>
                En effet, quelques jours plus tard, en daily, je l’entends
                s’auto-congratuler d’avoir trouvé une solution au problème.
                Quand il l’explique, il s’avère que c’est la mienne. À aucun
                moment, il ne va me mentionner. C’est suffisamment discret pour
                me faire douter de lui avoir expliqué ma solution.
              </Text>
              <Text>
                Ça a un nom appelle, c’est
                <ExternalLink
                  href="https://fr.wikipedia.org/wiki/Effet_Matilda"
                  marginLeft="1"
                >
                  l’effet Matilda
                </ExternalLink>
                .
              </Text>
            </StackItem>

            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text as="span">
                Dans les réunions techniques, personne ne m’écoute. Je remonte
                des points, des idées etc. A chaque fois, je me fais couper la
                parole par quelqu’un d’autre, souvent un homme.
              </Text>
              <Text>Je finis par dire, énervée :</Text>
              <Quote>
                Vous allez me laisser finir mes phrases, oui ou non ?!
              </Quote>
              <Text as="span">
                Ils ont tous fait les choqués, mais la réunion a pu être plus
                sereine pour moi ensuite.
              </Text>
              <Text>
                Je viens d’ailleurs de découvrir qu’une étude a trouvé que quand
                les femmes ne parlent que 15% du temps, les hommes ont
                l’impression qu’elles ont parlé 50% du temps.
                <ExternalLink
                  href="https://allthingslinguistic.com/post/145374253955/do-women-talk-too-much-hint-science-says-no"
                  marginLeft="1"
                >
                  L’étude en question
                </ExternalLink>
                .
              </Text>
              <Text as="span">
                Quand ce n’est pas une interruption, je suis simplement ignorée,
                comme si je n’ai rien dit, ou encore on me dit que ce n’est pas
                le sujet. Pour tester, je demande par écrit à un collègue, que
                je connais bien, de répéter ce que je viens de dire. Il se plie
                à cette demande, curieux.
              </Text>
              <Text>
                On voit un effet immédiat. Soudainement l’idée qu’il propose, la
                mienne donc, devient bonne.
              </Text>
              <Text>
                J’ai fini par m’appuyer sur cette technique régulièrement. Si un
                message est vital à passer, je vais demander à mon collègue de
                le faire passer.
              </Text>
              <Question marginBottom="6">
                Vu qu’on ne m’écoute pas, pourquoi continuer à m’acharner à
                parler ?
              </Question>
            </StackItem>
          </Stack>
          <Text>
            Comme ces exemples le montrent, c’est nettement plus insidieux. Il
            faut vraiment se pencher sur la répétition et faire un retour sur
            l’histoire pour comprendre que OUI, c’est du sexisme. Sauf qu’il y a
            de fortes chances que ces personnes ne se rendent même pas compte
            qu’ils en font.
          </Text>

          <Text>
            Et il reste bien sur le sexisme de base, celui qui se voit de loin.
          </Text>
          <Stack spacing="8">
            <StackItem
              paddingLeft="4"
              borderLeft="2px solid"
              borderLeftColor="brand.500"
              borderLeftRadius="4"
            >
              <Text>
                Je poste sur Twitter le dernier podcast enregistré avec Mansour.
                Je reçois plusieurs réponses, dont la suivante :
              </Text>
              <Quote>Céline vous avez du charme a revendre</Quote>
              <Text>
                On pourrait se dire &ldquo;C’est juste un compliment&rdquo;,
                mais, en réalité, c’est très similaire au harcèlement de rue.
                C’est totalement déplacé et non sollicité. Avec cette simple
                phrase, j’ai été suis résumée à mon physique, alors que je
                parlais de mon parcours professionnel.
              </Text>
              <Text>
                Soyons honnête, ça ne se serait jamais produit si ça avait été
                un homme à ma place.
              </Text>
              <Center maxH="400px">
                <Image
                  maxH={400}
                  objectFit="cover"
                  src="/others/3-march8/screenshot_anonyme.jpg"
                  alt="Screenshot anonymisé d'un commentaire sur Twitter: Céline vous avez du charme à revendre"
                  loading="lazy"
                />
              </Center>
            </StackItem>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={4}>
        <H3Heading>C’est dans ta tête, tout ça !</H3Heading>

        <Stack spacing={4}>
          <Text>Eh bien non, car on a des statistiques sur le sujet.</Text>
          <Text>
            <ExternalLink
              href="https://www.haut-conseil-egalite.gouv.fr/parite/travaux-du-hce/article/rapport-la-femme-invisible-dans-le-numerique-le-cercle-vicieux-du-sexisme"
              marginX="1"
            >
              Un rapport
            </ExternalLink>
            a été publié le 7 novembre 2023. En 2020, seulement 29% des
            effectifs de la tech en France sont des femmes, dont 16% seulement
            sont à des postes techniques.
          </Text>
          <Text>
            <ExternalLink
              href="https://www.accenture.com/in-en/about/corporate-citizenship/tech-culture-reset"
              marginX="1"
            >
              Un autre rapport
            </ExternalLink>
            a montré que près d’une femme sur deux quitte la tech après 35 ans,
            ce qui nous amène à, seulement, 8% de femmes de plus de 35 ans dans
            la tech à des postes techniques.
          </Text>

          <Wrap spacing="8" align="center" justify="center">
            <WrapItem flexDirection="column" alignItems="center">
              <Text as="span">Présence dans la tech,</Text>
              <Text>en France, en 2020</Text>
              <Center maxH="200px">
                <Image
                  maxH={200}
                  objectFit="cover"
                  src="/others/3-march8/Présence dans la tech.png"
                  alt="Présence dans la tech: 29% de femmes et 71% d'hommes"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
            <WrapItem flexDirection="column" alignItems="center">
              <Text as="span">Présence à des postes techniques,</Text>
              <Text>en France, en 2020</Text>
              <Center maxH="200px">
                <Image
                  maxH={200}
                  objectFit="cover"
                  src="/others/3-march8/Présence à des postes techniques.png"
                  alt="Présence à des postes techniques: 16% de femmes et 84% d'hommes"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
            <WrapItem flexDirection="column" alignItems="center">
              <Text as="span">Présence après 35 ans,</Text>
              <Text>en France, en 2020</Text>
              <Center maxH="200px">
                <Image
                  maxH={200}
                  objectFit="cover"
                  src="/others/3-march8/Présence après 35 ans.png"
                  alt="Présence après 35 ans: 8% de femmes et 92% d'hommes"
                  loading="lazy"
                />
              </Center>
            </WrapItem>
          </Wrap>

          <Text>
            Pourquoi me direz vous ?! Parce qu’on nous fait fuir en nous forçant
            à lutter en permanence ou à nous remettre constamment en question.
          </Text>

          <Text>Elles sont nombreuses à en parler, en conférence :</Text>
          <UnorderedList paddingLeft={4}>
            <ListItem>
              Marcy Ericka Charollois,
              <ExternalLink
                href="https://www.youtube.com/watch?v=6g0quTQqpr8&ab_channel=DevoxxFR"
                marginLeft="1"
              >
                Pourquoi vous n’attirerez et ne retiendrez pas les femmes dans
                vos équipes tech !
              </ExternalLink>
            </ListItem>
            <ListItem>
              Sonia Prévost,
              <ExternalLink
                href="https://mixitconf.org/2023/pourquoi-quitter-la-tech-"
                marginLeft="1"
              >
                Pourquoi quitter la tech ?
              </ExternalLink>
            </ListItem>
            <ListItem>Et encore bien d’autres.</ListItem>
          </UnorderedList>
        </Stack>
      </Stack>

      <Text>
        Juste un instant, imaginez tout ce qu’on pourrait faire, si on nous
        laissait simplement travailler ?! Toute cette énergie est perdue à
        lutter contre le statu quo, le sexisme.
      </Text>
    </>
  </ArticleContent>
);
