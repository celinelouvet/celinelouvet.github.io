import type { TalkSubject } from '../models';
import { survey as highwayToFailSurveyFr } from '../talks/highwayToFail/survey.fr';

export const talkSubjects_fr = new Map<string, TalkSubject>([
  [
    'gcp_datastore_search',
    { topic: 'Google Datastore & Search API', availableForCfp: false },
  ],
  [
    'rex_polymer',
    {
      topic: 'Retour d’expérience: Polymer chez Deloitte',
      availableForCfp: false,
    },
  ],
  [
    'haskell_in_prod',
    {
      topic: 'Votre mission ? Découvrir Haskell et le mettre en prod',
      summary: 'Découverte de Haskell et comment l’utiliser pour créer une API',
      descriptions: [
        'On entend parler de Haskell de plus en plus, mais il parait souvent bien compliqué de se lancer. Haskell fait peur, avec ses Monades, Monoïdes et autres gros mots.',
        'On verra ensemble que vous n’avez absolument pas besoin de savoir ce que ces termes signifient pour vous lancer. Je vous propose de regarder ce dont vous aurez besoin pour créer une petite API, avec de la sécurité et de la gestion de données, soit de quoi mettre une petite application en prod.',
      ],
      availableForCfp: false,
    },
  ],

  [
    'event_driven_buzzword',
    {
      topic: 'Event Driven, qu’est‑ce donc ?! Un nouveau buzzword ?',
      summary:
        'Appels asynchrones, architecture événementielle, pub/sub, avantages et inconvénients de chaque solution',
      descriptions: [
        'On entend, de plus en plus, parler d’Event Driven Systems. C’est un peu le nouveau truc à la mode, mais en quoi ça consiste réellement ? Pour le comprendre, nous repartirons des fondamentaux, pour progressivement voir ce que peut nous apporter le modèle événementiel publisher / subscriber, ses avantages et ses inconvénients. Nous verrons comment l’utiliser dans certains cas fréquents.',
        'Par le passé, j’ai eu à travailler sur un SI qui a grossi au fil du temps. A chaque nouveau service ajouté, à chaque nouvelle fonctionnalité ajoutée, de la complexité s’est cumulée jusqu’à rendre des évolutions impossibles, voire dangereuses. De plus, soyons honnête, parfois de fausses "bonnes" idées ont pu empirer la situation. Nous allons nous inspirer de ce SI tout au long de cette présentation pour voir ce que nous pourrions y apporter.',
        'Pour chaque situation, nous pourrons voir les besoins auxquels elle répond, ses avantages ainsi que ses défauts, défauts que nous essayerons de corriger ensuite. Notre objectif ? Des services moins interdépendants et qui y gagneront en performance et en stabilité !',
      ],
      availableForCfp: true,
    },
  ],
  [
    'permissions_mysteries',
    {
      topic: 'Les mystères des permissions',
      summary:
        'Principes de gestion des permissions des utilisateurs et types d’autorisations possibles',
      descriptions: [
        'Au début de votre projet, vous avez simplement géré l’authentification de votre utilisateur, puis petit à petit, vous avez ajouté une notion de rôles utilisateur. Et plus le temps passe, plus votre product manager vous demande d’affiner cette gestion et moins cette gestion par rôle va suffire.',
        'Peut‑être avez‑vous eu déjà eu l’impression que la gestion des permissions est quelque d’assez obscure ou complexe. On sait qu’on doit le faire, mais on ne sait pas trop comment, ni même pourquoi. Parfois, on confond même avec l’authentification. Mais alors, en quoi ça consiste rellement et comment on peut l’appliquer ?',
        'A chaque situation, sa solution. Nous pourrons voir comment répondre aux besoins les plus fréquents, ainsi que leurs avantages et leurs inconvénients. Notre objectif ? Avoir la gestion des permissions adaptée à notre situation, sans pour autant ajouter une masse de complexité dans toute notre application.',
      ],
      availableForCfp: true,
    },
  ],
  [
    'tired_women_revolution',
    {
      topic: 'La révolution des fatiguées',
      summary:
        'Table ronde avec Angi Guyard et Sonia Prévost sur l’expérience des femmes dans la tech',
      descriptions: [
        'Table ronde avec Angi Guyard et Sonia Prévost. Nous aborderons l’expérience des femmes dans la tech et nous vous expliquerons pourquoi nous sommes "fatiguées" par ces stéréotypes.',
      ],
      availableForCfp: false,
    },
  ],

  [
    'highway_to_fail',
    {
      topic: 'Highway to fail, ou l’histoire d’un échec prévisible',
      summary:
        'Retour d’expérience sur la création d’une startup, avec ses erreurs et ses écueils',
      descriptions: [
        'Vous hésitez à vous lancer dans l’aventure de la startup ? Vous vous verriez bien créer votre propre société, mais vous n’osez pas ? En effet, on le sait maintenant, 90 % des start‑ups font faillite, dont 10 % dès la première année.',
        'Fin 2017, je rejoignais 2 autres cofondateurs pour créer notre première startup. Et mi‑2019, nous mettions la clé sous la porte. Pourquoi ? Entre produit, technique, business et humain, il est parfois difficile d’ajuster le curseur.',
        'A travers mon retour d’expérience entrepreneuriale, je souhaite revenir sur certaines de nos erreurs et voir s’il aurait été possible de faire autrement. Peut‑être que cette introspection pleine d’honnêteté pourra vous permettre d’éviter certains écueils.',
      ],
      survey: highwayToFailSurveyFr,
      availableForCfp: true,
    },
  ],

  [
    'choice_must_go_on',
    {
      topic: 'The choice must go on, le bon (de préférence)',
      summary:
        'Approche heuristique pour affiner les besoins et faire un choix',
      descriptions: [
        'Vous avez déjà subi un mauvais choix ? Ou vous avez vous‑même fait un mauvais choix ? En effet, qu’il ait été fait pour une raison technique, produit ou encore méthodo, on a été nombreux et nombreuses à vivre ce moment où on se dit « mais quelle idiotie ?! » ou encore « Mais que c’est tordu !!! ».',
        'On le sait, faire le bon choix est parfois très difficile. Celui qui a fonctionné une fois ne sera pas forcément pertinent ailleurs. De plus, un mauvais choix peut avoir un impact désastreux, tant sur la qualité du résultat produit que sur les équipes.',
        'Je vous proposerai une approche personnelle pour que ça se passe au mieux possible. Peut‑être qu’elle pourra vous permettre d’éviter certains écueils.',
      ],
      availableForCfp: true,
    },
  ],
]);

export const talkSubjects_en = new Map<string, TalkSubject>([
  [
    'gcp_datastore_search',
    { topic: 'Google Datastore & Search API', availableForCfp: false },
  ],
  [
    'rex_polymer',
    { topic: 'Case study: Polymer at Deloitte', availableForCfp: false },
  ],
  [
    'haskell_in_prod',
    {
      topic: 'Your mission? Discover Haskell and use it in production',
      summary: 'Discovering Haskell and how to use it to create an API',
      descriptions: [
        'We hear about Haskell now and then, but it often seems to be complicated to start using it. Haskell can be scary with its Monads, Monoids and other cursing words.',
        'We’ll see together that you don’t really need to understand all this principles to use it. What I suggest is to see what you need to create a small API, with some security and data managment, in simpler words, what you need for a small production application.',
      ],
      availableForCfp: false,
    },
  ],
  [
    'event_driven_buzzword',
    {
      topic: 'Event Driven, but what is it?! A new buzzword ?',
      summary:
        'Asynchronous calls, event-driven architecture, pub/sub, advantages and disadvantages of each solution',
      descriptions: [
        'We hear about Event Driven Systems, now and then. That’s a kind of hype, but what is it exactly? To understand it, we’ll start with the basics, to gradually see what can bring us the publish - subscribe model, his pros and cons. We’ll see how to use in some common cases.',
        'In the past, I worked on a platform that had to grow fast. At each new added service, at each new added feature, complexity was pilled until making any change would become impossible, even dangerous. And, let’s be honest, sometimes, some ill‑advised good ideas made the situation even worst. We’ll use this platform for this presentation and see what we could improve.',
        'For each situation, we’ll see what needs are answered, its advantages and even its flaws, flaws that we will then try to correct. Our goal? To have less dependently services, services that will gain in performance and stability!',
      ],
      availableForCfp: true,
    },
  ],
  [
    'permissions_mysteries',
    {
      topic: 'The authorization mysteries',
      summary:
        'Principles of user permission management and possible types of authorizations',
      descriptions: [
        'At the begin of your project, you simplify handle the user authentication, then little by little, you added some kind of user roles. And then, with time passes, your product manager asks you to refine this management and those user roles won’t be enough.',
        'Maybe you already had the impression that authorization management is something quite unclear or complex. We know we should do it, but we often don’t know how to do it, or even why. Sometimes, we even mix it with authentication. But then, what is authorizations and how do we handle it?',
        'To each situation, its solution. We’ll how to answer to the most common cases, with their pros and cons. Our goal? To handle authorizations for our situation, without adding a lot of complexity to our application.',
      ],
      availableForCfp: true,
    },
  ],
  [
    'tired_women_revolution',
    {
      topic: 'The tired women’s revolution',
      summary:
        'Round table with Angi Guyard and Sonia Prévost on the experience of women in tech',
      descriptions: [
        'Round table discussions with Angi Guyard and Sonia Prévost. We’ll look at the experience of women in tech and explain why we’re so "tired" of these stereotypes.',
      ],
      availableForCfp: false,
    },
  ],
  [
    'highway_to_fail',
    {
      topic: 'Highway to fail',
      summary:
        'Experience feedback on creating a startup, with its mistakes and pitfalls',
      descriptions: [
        'You want to venture into entrepreneurship, but are still undecided? You would see yourself creating your own startup, but don’t dare? You might be right, since, as we now know it, 90 % of the startups will go bankrupt, with 10 % during the first year.',
        'At the end of 2017, I joined 2 co-founders to create our first startup. And towards June 2019, we closed down for good. Why ? Between product, technics, business and human factors, sometimes, it can be hard to find the balance.',
        'Through my own entrepreneurial journey, I want to come back to some of our mistakes and if we could have prevented it. Maybe this honest self‑reflection will help you prevent some pitfalls.',
      ],
      survey: highwayToFailSurveyFr,
      availableForCfp: true,
    },
  ],
  [
    'choice_must_go_on',
    {
      topic: 'The choice must go on, the good (if possible)',
      summary: 'Heuristic approach to refine requirements and make a choice',
      descriptions: [
        'Have you ever suffered from a bad choice? Or made one yourself? Whether it was made for technical, product or methodological reasons, many of us have experienced that moment when we say to ourselves, « What kind of idiocy is this?! ».',
        'As we all know, making the right choice can be very difficult. What worked once may not work elsewhere. Moreover, the wrong decision can have a disastrous impact, not only on the quality of the result produced, but also on the teams involved.',
        'I’ll suggest a very personal approach to make it as smooth as possible. Perhaps it will help you steer away from some pitfalls.',
      ],
      availableForCfp: true,
    },
  ],
]);
