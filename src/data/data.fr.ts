import { type Convention, type Resume, type TalkSubject } from './models';

const talkSubjects = new Map<string, TalkSubject>([
  ['gcp_datastore_search', { topic: 'Google Datastore & Search API' }],
  ['rex_polymer', { topic: 'Retour d’expérience: Polymer chez Deloitte' }],
  [
    'haskell_in_prod',
    {
      topic: 'Votre mission ? Découvrir Haskell et le mettre en prod',
      descriptions: [
        'On entend parler de Haskell de plus en plus, mais il parait souvent bien compliqué de se lancer. Haskell fait peur, avec ses Monades, Monoïdes et autres gros mots.',
        'On verra ensemble que vous n‘avez absolument pas besoin de savoir ce que ces termes signifient pour vous lancer. Je vous propose de regarder ce dont vous aurez besoin pour créer une petite API, avec de la sécurité et de la gestion de données, soit de quoi mettre une petite application en prod.',
      ],
    },
  ],
  [
    'interview_shirley_almosni_chiche',
    {
      topic: 'Build RH: Entretien avec Shirley Almosni Chiche',
      descriptions: [
        'Sur mon expérience professionnelle, en tant que femme dans le monde du développement et sur ma conception du mentorat.',
      ],
    },
  ],
  [
    'interview_philippe_charriere',
    {
      topic: 'Live avec Philippe Charrière',
      descriptions: [
        'Sur la gestion des permissions en système distribué, notamment dans le milieu bancaire.',
      ],
    },
  ],
  [
    'podcast_punkin_dev',
    {
      topic: 'Podcast Punkin Dev: Dev? Lead? Architecte? Non! ARCHIDEV',
      descriptions: [
        'Épisode 12 de la saison 3 des podcast de Punkin Dev, sur mon expérience professionnelle, l‘architecture et le mentorat.',
      ],
    },
  ],
  [
    'event_driven_buzzword',
    {
      topic: 'Event Driven, qu‘est-ce donc ?! Un nouveau buzzword ?',
      descriptions: [
        'On entend, de plus en plus, parler d‘Event Driven Systems. C‘est un peu le nouveau truc à la mode, mais en quoi ça consiste réellement ? Pour le comprendre, nous repartirons des fondamentaux, pour progressivement voir ce que peut nous apporter le modèle événementiel publisher / subscriber, ses avantages et ses inconvénients. Nous verrons comment l‘utiliser dans certains cas fréquents.',
        'Par le passé, j‘ai eu à travailler sur un SI qui a grossi au fil du temps. A chaque nouveau service ajouté, à chaque nouvelle fonctionnalité ajoutée, de la complexité s‘est cumulée jusqu‘à rendre des évolutions impossibles, voire dangereuses. De plus, soyons honnête, parfois de fausses "bonnes" idées ont pu empirer la situation. Nous allons nous inspirer de ce SI tout au long de cette présentation pour voir ce que nous pourrions y apporter.',
        'Pour chaque situation, nous pourrons voir les besoins auxquels elle répond, ses avantages ainsi que ses défauts, défauts que nous essayerons de corriger ensuite. Notre objectif ? Des services moins interdépendants et qui y gagneront en performance et en stabilité !',
      ],
    },
  ],
  [
    'permissions_mysteries',
    {
      topic: 'Les mystères des permissions',
      descriptions: [
        'Au début de votre projet, vous avez simplement géré l‘authentification de votre utilisateur, puis petit à petit, vous avez ajouté une notion de rôles utilisateur. Et plus le temps passe, plus votre product manager vous demande d’affiner cette gestion et moins cette gestion par rôle va suffire.',
        'Peut-être avez-vous eu déjà eu l’impression que la gestion des permissions est quelque d’assez obscure ou complexe. On sait qu’on doit le faire, mais on ne sait pas trop comment, ni même pourquoi. Parfois, on confond même avec l‘authentification. Mais alors, en quoi ça consiste rellement et comment on peut l‘appliquer ?',
        'A chaque situation, sa solution. Nous pourrons voir comment répondre aux besoins les plus fréquents, ainsi que leurs avantages et leurs inconvénients. Notre objectif ? Avoir la gestion des permissions adaptée à notre situation, sans pour autant ajouter une masse de complexité dans toute notre application.',
      ],
    },
  ],
  [
    'tired_women_revolution',
    {
      topic: 'La révolution des fatiguées',
      descriptions: [
        'Table ronde avec Angi Guyard et Sonia Prévost. Nous aborderons l‘expérience des femmes dans la tech et nous vous expliquerons pourquoi nous sommes "fatiguées" par ces stéréotypes.',
      ],
    },
  ],
  [
    'podcast_developer_experience',
    {
      topic:
        'Podcast Developer Experience: 18 ans d‘exploration technique et humaine dans l‘informatique',
      descriptions: [
        'Par Donatien Léon, sur ma recherche de l‘expérience parfaite pour moi, mon expérience, l‘architecture et le mentorat.',
      ],
    },
  ],
  [
    'podcast_avocado_growth',
    {
      topic: 'Avocado Growth : Portrait Tech',
      descriptions: [
        'Épisode 18 des podcasts de Mansour Mahamat-salle, sur mon parcours dans la tech, notamment comment je suis arrivée où je suis aujourd‘hui.',
      ],
    },
  ],
  [
    'highway_to_fail',
    {
      topic: 'Highway to fail, ou l‘histoire d‘un échec prévisible',
      descriptions: [
        'Vous hésitez à vous lancer dans l‘aventure la startup ? Vous vous verriez bien créer votre propre société, mais vous n‘osez pas ? En effet, on le sait maintenant, 90 % des start-up font faillite, dont 10 % dès la première année.',
        'Fin 2018, je rejoignais 2 autres cofondateurs pour créer notre première startup. Et mi-2020, nous mettions la clé sous la porte. Pourquoi ? Entre produit, technique, business et humain, il est parfois difficile d‘ajuster le curseur.',
        'A travers mon retour d‘expérience entrepreneuriale, je souhaite revenir sur certaines de nos erreurs et voir s‘il aurait été possible de faire autrement. Peut-être que cette introspection pleine d‘honnêteté pourra vous permettre d‘éviter certains écueils.',
      ],
    },
  ],
]);

const possibleTalkSubjects = [
  'event_driven_buzzword',
  'permissions_mysteries',
  'highway_to_fail',
];

const conventions = new Map<string, Convention>([
  ['sfeir_nosql', { name: 'SFEIR - Soirée NoSQL', language: 'FR' }],
  [
    'paris_WebComponents',
    { name: 'Meetup Paris-WebComponents', language: 'FR' },
  ],
  ['scala_io_2018', { name: 'Scala.io 2018', language: 'FR' }],
  ['devfest_toulouse_2018', { name: 'DevFest Toulouse 2018', language: 'FR' }],
  ['codeurs_en_seine_2018', { name: 'Codeurs en Seine 2018', language: 'FR' }],
  [
    'functional_programming_montpellier',
    { name: 'Functional programming Montpellier', language: 'FR' },
  ],
  ['web2day_2019', { name: 'Web2Day 2019', language: 'FR' }],
  [
    'voxxed_days_luxembourg_2019',
    { name: 'Voxxed Days Luxembourg 2019', language: 'FR' },
  ],
  ['online_shirley', { name: 'En ligne', language: 'FR' }],
  ['online_k33g', { name: 'En ligne', language: 'FR' }],
  ['online_punkin_dev', { name: 'En ligne', language: 'FR' }],
  ['devfest_lille_2023', { name: 'DevFest Lille 2023', language: 'FR' }],
  [
    'camping_des_speakers_2023',
    { name: 'Camping des Speakers 2023', language: 'FR' },
  ],
  ['cloud_est_2023', { name: 'Cloud Est 2023', language: 'FR' }],
  ['breizhcamp_2023', { name: 'BreizhCamp 2023', language: 'FR' }],
  ['paattern_talks_2023', { name: 'Paattern Talks 2023', language: 'FR' }],
  ['online_developer_experience', { name: 'En ligne', language: 'FR' }],
  ['online_avocado_growth', { name: 'En ligne', language: 'FR' }],
]);

const resume: Resume = {
  firstname: 'Céline',
  lastname: 'Louvet',
  birthdate: '1980-12-02',
  firstExperience: '2006-02-01',
  email: 'celine.louvet@gmail.com',
  website: 'https://celine.louvet.me',
  title: 'Staff engineer / Senior lead developer',
  location: 'Lyon',
  zipCode: '69006',
  remotes: [
    { type: 'FULLTIME', where: 'France / Europe' },
    { type: 'HYBRID', where: 'Lyon' },
  ],
  hobbies: 'Dessins, peinture, modelage, sport',
  biographies: [
    'Développeuse backend et passionnée, depuis 17 ans, aimant la recherche de stabilité et de qualité d‘une application.',
    'Spécialisée sur les architectures cloud, avec une appétence pour les langages fonctionnels.',
    'Actuellement lead developer chez Shine.',
  ],
  descriptions: [
    'Développeuse Backend Senior, en Typescript, avec une appétence aux langages fonctionnels.',
    'Plusieurs expériences de lead developer, avec management d’une équipe de développeurs.',
    'Plusieurs expériences de Technical Leader, avec reprise de legacy ou de création en partant de zéro, architecture et de mises en place de méthodes de travail.',
  ],
  skills: [
    'Phase de build, avec objectif stabilité & qualité',
    'Accompagnement',
    'Domain Driven Design (DDD)',
    'Architecture cloud (GCP & AWS)',
    'Typescript',
    'NodeJs',
    'Google Cloud Platform (GCP)',
    'Tests & automatisation',
  ],
  socials: [
    {
      name: 'twitter',
      handle: 'celine_louvet',
      link: 'https://twitter.com/celine_louvet',
    },
    {
      name: 'linkedin',
      handle: 'celinelouvet',
      link: 'https://www.linkedin.com/in/celinelouvet',
    },
    {
      name: 'bluesky',
      handle: 'celinelouvet.bsky.social',
      link: 'https://bsky.app/profile/celinelouvet.bsky.social',
    },
    {
      name: 'mastodon',
      handle: 'celine_louvet@pouet.chapril.org',
      link: 'https://pouet.chapril.org/@celine_louvet',
    },
  ],
  experiences: [
    {
      company: 'Shine',
      from: '2023-02-06',
      role: 'Senior Lead developer',
      remote: 'FULLTIME',
      stacks: [
        {
          type: 'Infrastructure',
          technos: [
            {
              type: 'GCP',
              technos: [
                'AppEngine',
                'Spanner',
                'FileStorage',
                'Pub/Sub',
                'Cloud function',
              ],
            },
          ],
        },
      ],
    },
    {
      company: 'Pyxo',
      from: '2022-05-02',
      to: '2022-12-05',
      role: 'Backend developer',
      descriptions: [
        'Developpeuse backend sur une architecture microservices, fortement évènementielle.',
        'Mise en place de méthodologies pour réduire les frictions avec l’équipe produit, améliorer le suivi des initiatives projet et de leurs phase de QA.',
      ],
      remote: 'HYBRID',
      projects: [
        {
          name: 'Pyxo',
          description:
            'Solution B2B2C permettant d’effectuer des prêts et retours de contenants réutilisables, auprès des restaurateurs clients.',
        },
      ],
      stacks: [
        {
          type: 'Infrastructure',
          technos: [
            {
              type: 'AWS',
              technos: [
                'CloudFormation',
                'DynamoDB',
                'RDS',
                'CacheCluster',
                'SQS',
                'Lambda',
                'S3',
                'Cloudfront',
                'VPC',
              ],
            },
          ],
        },
        { type: 'Landings', technos: ['VanillaJs', 'Preact'] },
        { type: 'Backend API', technos: ['Node', 'Typescript', 'Serverless'] },
      ],
    },
    {
      company: 'Hubside',
      from: '2021-01-01',
      to: '2022-04-25',
      role: 'Staff engineer / Senior Lead developer',
      descriptions: [
        'Tech lead avec un rôle de mid-management et une implication au niveau entreprise.',
        'Accompagnement de managers. Accompagnement d’un junior en reconversion.',
        'La répartition entre développement et lead/management est de 40-60%.',
      ],
      remote: 'FULLTIME',
      projects: [
        {
          name: 'Hubside Photos',
          description:
            'Service B2C permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.',
        },
      ],
      tasks: [
        {
          name: 'Au niveau Hubside',
          subtasks: [
            {
              name: 'Mise en place d’un référencement de la dette technique existante',
            },
            { name: 'Définition de roadmap technique' },
            { name: 'Accompagnement des autres managers' },
          ],
        },
        {
          name: 'Au niveau équipe Photos',
          subtasks: [
            { name: 'Définition de roadmap technique' },
            { name: 'Choix d’architecture et de stack' },
            { name: 'Développements backend / PoC' },
            { name: 'Management RH des développeurs' },
            {
              name: 'Accompagnement et formation d’un développeur junior en reconversion',
            },
          ],
        },
      ],
      stacks: [
        {
          type: 'Infrastructure',
          technos: [
            {
              type: 'GCP',
              technos: [
                'AppEngine',
                'Datastore',
                'FileStorage',
                'Pub/Sub',
                'Cloud Run',
                'Compute Engine',
              ],
            },
          ],
        },
        {
          type: 'Frontend',
          technos: [
            'PWA',
            'ReactJs',
            'Typescript',
            'Jest',
            'Cypress',
            'GraphQL (Apollo Client)',
            'Storybook',
          ],
        },
        {
          type: 'Backend',
          technos: ['Node', 'Typescript', 'GraphQL (Apollo Server)'],
        },
        {
          type: 'Print',
          technos: ['Node', 'Typescript', 'REST', 'Express', 'Puppeteer'],
        },
      ],
    },
    {
      company: 'Freelance',
      from: '2019-03-01',
      to: '2020-12-31',
      subjobs: [
        {
          company: 'Hubside',
          from: '2019-08-01',
          to: '2020-12-31',
          role: 'Fullstack developer / Tech lead',
          descriptions: [
            'Développeuse fullstack dans un premier temps, puis reprise du rôle de tech lead après le départ du lead précédent.',
            'La répartition entre développement et lead/management est de 70-30%.',
          ],
          projects: [
            {
              name: 'Hubside Photos',
              description:
                'Service B2C permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.',
            },
          ],
          stacks: [
            {
              type: 'Infrastructure',
              technos: [
                {
                  type: 'GCP',
                  technos: [
                    'AppEngine',
                    'Datastore',
                    'FileStorage',
                    'Compute Engine',
                  ],
                },
              ],
            },
            {
              type: 'Frontend',
              technos: [
                'ReactJs',
                'Typescript',
                'Jest',
                'Cypress',
                'GraphQL (Apollo Client)',
                'Storybook',
              ],
            },
            {
              type: 'Backend',
              technos: [
                'Node',
                'Typescript',
                'REST',
                'Express',
                'GraphQL (Apollo Server)',
              ],
            },
          ],
        },
        {
          company: 'Foncia Stark',
          from: '2019-03-01',
          to: '2019-08-10',
          role: 'Back-end developer',
          descriptions: [
            'Développeuse backend sur des traitements asynchrones récurrents.',
          ],
          projects: [
            {
              name: 'Foncia Stark',
              description: 'Refonte de l’application de gestion locative',
            },
          ],
          stacks: [
            {
              type: 'Backend',
              technos: ['Javascript', 'Node', 'REST', 'Express', 'Jest'],
            },
          ],
        },
      ],
    },
    {
      company: 'Fairvioo',
      from: '2017-12-01',
      to: '2019-06-15',
      role: 'CTO & co-founder',
      descriptions: [
        'Incubateur Université Dauphine.',
        'Solution de récolte d’avis clients post-achat à impact positif, sur le principe de 1 avis consommateur = 1 don à une association.',
        'Choix stratégiques et levée de fond. Développements, recrutement et accompagnement d’un stagiaire',
      ],
      projects: [
        {
          name: 'Vitrine',
          description:
            'Site B2B de présentation du produit à destination des commerçants',
        },
        {
          name: 'Solution',
          description:
            'Application web B2C pour visualiser les avis déposés et en ajouter',
        },
        {
          name: 'AddOn Prestashop',
          description:
            'AddOn permettant à un commerçant d’afficher et administrer les avis reçus',
        },
      ],
      stacks: [
        { type: 'Vitrine', technos: ['VueJS', 'Firebase'] },
        {
          type: 'Solution',
          technos: [
            'VueJS',
            'Haskell',
            'PostgreSQL',
            'Clever Cloud',
            'SendInBlue',
          ],
        },
        { type: 'AddOn Prestashop', technos: ['PHP', 'Prestashop 1.6.x'] },
      ],
    },
    {
      company: 'Captain Contrat',
      from: '2017-06-21',
      to: '2017-11-20',
      role: 'CTO',
      descriptions: [
        'Management d’une petite équipe de développeurs, nécessitant un changement de méthodes de travail, afin de sortir de la phase de PoC initiale.',
        'Recrutement (recherche, suivi et embauche)',
      ],
      projects: [
        {
          name: 'Captain contrat',
          description: 'Site B2C facilitant la création de documents légaux',
        },
      ],
      stacks: [
        {
          type: 'Legacy',
          technos: ['Ruby on Rails', 'MySQL', 'Amazon RDS', 'Amazon EC2'],
        },
        { type: 'Module client', technos: ['ReactJs', 'Amazon S3'] },
      ],
    },
    {
      company: 'SFEIR',
      from: '2011-05-01',
      to: '2017-06-20',
      role: 'Team Leader, Technical Leader & développeuse',
      descriptions: [
        'Management et suivi de carrière d’une quinzaine de personnes. Réalisation d’entretiens techniques hebdomadaires.',
        'Amélioration continue des processus internes de SFEIR.',
        'Animation technique de la communauté SFEIR (organisation de journées Codingame, etc).',
      ],
      subjobs: [
        {
          company: 'SG Private Banking',
          from: '2016-09-01',
          to: '2017-06-20',
          role: 'Fullstack developer & accompagnement technique',
          descriptions: [
            'Développeuse fullstack avec un rôle d’accompagnement technique (architecture et AngularJs), afin d’anticiper les problèmes rencontrés.',
          ],
          projects: [
            {
              name: 'Active Advisory',
              description:
                'Application B2C d’aide à l’achat et à la vente de produits financiers recommandés par la banque',
            },
            {
              name: 'Digital DAA',
              description:
                'Application B2B de répartition du patrimoine financier suivant la performance et le risque souhaité',
            },
          ],
          stacks: [
            {
              type: '',
              technos: ['AngularJs', 'Java 8', 'PostgreSQL', 'MongoDB'],
            },
          ],
        },
        {
          company: 'Deloitte France',
          from: '2015-04-01',
          to: '2016-08-31',
          role: 'Développeuse & Technical Leader & Accompagnement technique à la transition numérique',
          descriptions: [
            'Création d’une équipe dédiée à la réalisation d’applications Cloud, pour initier la transition numérique de l’entité France.',
            'Accompagnement technique pour l’architecture, accompagnement fonctionnel et technique lors des phases de design des applications.',
            'Formation de développeurs juniors.',
            'Animation de workshops utilisateurs. Avant-ventes, chiffrages et réponses à appel d’offres.',
          ],
          projects: [
            {
              name: 'EasyRisk',
              description:
                'Outil B2B d’analyse et d’évaluation des risques majeurs (GRC - Governance, risk management, and compliance)',
            },
            {
              name: 'Goals',
              description: 'Outil B2B de suivi des prévisions budgétaires',
            },
            {
              name: 'CMS',
              description: 'Outil B2B de réponse à appel d’offres',
            },
          ],
          stacks: [
            { type: 'EasyRisk', technos: ['Polymer', 'PostgreSQL', 'Scala'] },
            {
              type: 'Goals & CMS',
              technos: ['AngularJs', 'NodeJs', 'MongoDB'],
            },
          ],
        },
        {
          company: 'Valeo',
          from: '2013-01-01',
          to: '2015-03-01',
          role: 'Développeuse Java/AngularJs & Technical Leader',
          descriptions: [
            'Responsable des projets Valeo chez SFEIR, en liaison avec 5 PMs et le DSI Cloud.',
            'Technical Leader sur tous les projets et développement backend sur les projets les plus importants (Newscenter, Roadmap, QnP).',
            'Accompagnement des développeurs. Animation de workshops utilisateurs. Avant-ventes, chiffrages et réponses à appel d’offres.',
          ],
          projects: [
            {
              name: 'Roadmap',
              description:
                'Outil de suivi de la progression de la maturité des processus',
            },
            {
              name: 'ISPM',
              description: 'Outil de suivi d’indicateurs des projets',
            },
            {
              name: 'HUB',
              description:
                'Portail de connexion à la plateforme Valeo / Google',
            },
            {
              name: 'Newscenter',
              description:
                'Outil de publication de news à destination des employés',
            },
            {
              name: 'QnP',
              description:
                'Outil de suivi des alertes des chaînes de production',
            },
            { name: 'Cloud Services', description: 'Outils transverses' },
            {
              name: 'Contact Search',
              description: 'Outil de recherche d’employés',
            },
            {
              name: 'Organization Search',
              description:
                'Outil de recherche des informations d’organisation Valeo',
            },
            {
              name: 'Roles Search',
              description:
                'Outil de recherche des personnes ayant un rôle spécifique',
            },
          ],
          stacks: [
            { type: 'Front-ends', technos: ['GWT', 'AngularJs'] },
            {
              type: 'Back-ends',
              technos: [
                'Java',
                {
                  type: 'GCP',
                  technos: [
                    'AppEngine',
                    'FileStorage',
                    'SearchAPI',
                    'Datastore',
                  ],
                },
              ],
            },
          ],
        },
        {
          company: 'CA-CIB',
          from: '2012-07-01',
          to: '2012-12-31',
          role: 'Développeuse Java',
          summarize: true,
          descriptions: [
            'Dévelopements, optimisations et automatisation. Evolutions effectuées dans le cadre des changements pour Bâle III.',
          ],
          projects: [
            {
              name: 'CNR',
              description:
                'Application WEB permettant d’effectuer, de manière automatique, des tests de non régression fonctionnelle sur la librairie de calcul des risques de contreparties sur les opérations de marché',
            },
          ],
          stacks: [{ type: '', technos: ['JEE5', 'JSP', 'Sybase'] }],
        },
        {
          company: 'I-CDC',
          from: '2012-01-01',
          to: '2012-07-01',
          role: 'Architecte junior & Développeuse Java / GWT',
          summarize: true,
          descriptions: [
            'Intégration à la cellule d’architecture développant un socle technique. Développement d’un socle technique pour les autres équipes.',
          ],
          stacks: [
            { type: 'Socle technique', technos: ['JEE5', 'Tomcat'] },
            {
              type: 'POC Liferay',
              technos: [
                'Liferay 6.1',
                'HTML5',
                'Javascript',
                'JQuery',
                'Twitter Bootstrap',
                'JEE5',
              ],
            },
            {
              type: 'IHM admin',
              technos: [
                'GWT2.4',
                'Twitter Bootstrap',
                'Framework DEI',
                'Tomcat',
              ],
            },
          ],
        },
        {
          company: 'THALES Théresis',
          from: '2011-11-01',
          to: '2011-12-31',
          role: 'Développeuse Java/GWT & ScrumMaster',
          summarize: true,
          descriptions: [
            'Application primée en interne pour sa simplicité d’utilisation.',
            'Réalisation des développements d’une application, dans le cadre d’une formation interne THALES.',
          ],
          projects: [
            {
              name: 'AnaisHD',
              description:
                'Application WEB permettant d’effectuer la comparaison et la démonstration de matériel de surveillance longue distance, avec la prise de contrôle à distance de caméras HD et d’objectifs Angénieux HD',
            },
          ],
          stacks: [{ type: '', technos: ['GWT2.4', 'Apache Mina', 'Tomcat'] }],
        },
        {
          company: 'Storeforce',
          from: '2011-06-01',
          to: '2011-10-31',
          role: 'Développeuse Java/GWT',
          descriptions: ['Développeuse junior'],
          summarize: true,
          projects: [
            {
              name: 'StoreForce',
              description:
                'Application WEB permettant à une chaîne de magasins de Grande Distribution de planifier les tâches des employés en fonction des stocks et des livraisons',
            },
          ],
          stacks: [
            {
              type: '',
              technos: [
                'GWT2.3',
                { type: 'GCP', technos: ['AppEngine', 'Datastore'] },
              ],
            },
          ],
        },
      ],
    },
    {
      company: 'Alten SIR',
      from: '2007-05-01',
      to: '2011-05-31',
      role: 'Opérationnelle & développeuse',
      summarize: true,
      subjobs: [
        {
          company: 'SGCIB',
          from: '2010-10-01',
          to: '2011-03-31',
          role: 'Développeuse Java/GWT & Technical Leader',
          descriptions: [
            'Mise en place de l’intégration continue sur BACARDI, via des chaînes automatiques de validation des livraisons en intégration, à destination de la MOA',
          ],
          projects: [
            {
              name: 'BACARDI',
              description:
                'Application Back-Office dédiée à l’analyse de risques pour les produits dérivés',
            },
          ],
          stacks: [
            {
              type: 'BACARDI',
              technos: [
                'Java JEE 6',
                'Oracle 10g',
                'Sybase',
                'PL/SQL',
                'Scripts',
                'ClearCase',
              ],
            },
            {
              type: 'Autres',
              technos: ['Java JEE 6', 'API XStream', 'GWT', 'Git'],
            },
          ],
        },
        {
          company: 'SGCIB',
          from: '2007-05-01',
          to: '2010-02-28',
          role: 'Ingénieur opérationnel',
          descriptions: [
            'SysAdmin et ops. Livraisons en intégration, assurance de la qualité des livraisons et mise en production.',
          ],
          projects: [
            {
              name: 'EPROM',
              description:
                'Application Back-Office servant de référentiel des produits dérivés',
            },
          ],
          stacks: [
            {
              type: '',
              technos: [
                'Oracle 10g',
                'Sybase',
                'PL/SQL',
                'Scripts',
                'ClearCase',
              ],
            },
          ],
        },
      ],
    },
    {
      company: 'Altran Technologies',
      from: '2006-02-01',
      to: '2007-05-31',
      role: 'Ingénieur tests automatiques',
      summarize: true,
      subjobs: [
        {
          company: 'Bouygues Télécom',
          from: '2006-06-01',
          to: '2007-05-31',
          role: 'Ingénieur tests automatiques',
          descriptions: [
            'Assurance de la qualité du logiciel et de la documentation projet. Réalisation de tests fonctionnels, techniques et performance.',
          ],
          projects: [
            {
              name: 'Gestion du Client',
              description:
                'Système de gestion des dossiers mobiles des clients (Forfaits, options…)',
            },
          ],
          stacks: [
            {
              type: '',
              technos: ['Oracle 9i', 'LIGIS de MetaMicro', 'Scripts', 'PL/SQL'],
            },
          ],
        },
        {
          company: 'France Télécom / Wanadoo',
          from: '2006-02-01',
          to: '2006-05-31',
          role: 'Ingénieur tests automatiques',
          descriptions: [
            'Dans le cadre de la fusion Wanadoo / Orange. Réalisation de tests fonctionnels.',
          ],
          projects: [
            {
              name: 'Gestion du Client',
              description:
                'Système de gestion des clients et de leur identité (compte email, téléphone etc.)',
            },
          ],
          stacks: [
            {
              type: '',
              technos: ['Corba', 'Sybase', 'Oracle 9i', 'Scripts', 'PL/SQL'],
            },
          ],
        },
      ],
    },
  ],
  talkSubjects,
  possibleTalkSubjects,
  conventions,
  talks: [
    {
      subjectId: 'gcp_datastore_search',
      conventionId: 'sfeir_nosql',
      when: '2014-12-16',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/google-datastore-search-api-93079759',
      },
      pictureId: 'Soirée_NoSQL-GoogleDatastoreSearchAPI',
    },
    {
      subjectId: 'rex_polymer',
      conventionId: 'paris_WebComponents',
      when: '2015-07-09',
      links: {
        slides: 'https://www.slideshare.net/celine_louvet/rex-polymer-50365257',
      },
      pictureId: 'Meetup_ParisWebComponents-REX_Polymer',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'scala_io_2018',
      when: '2018-10-31',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
      },
      pictureId: 'Haskell_en_prod',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'devfest_toulouse_2018',
      when: '2018-11-08',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
        video:
          'https://www.youtube.com/watch?v=5VCIaYvWecM&ab_channel=GDGFrance',
      },
      pictureId: 'devfesttoulouse2018-Haskell_en_prod',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'codeurs_en_seine_2018',
      when: '2018-11-22',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
        video:
          'https://www.youtube.com/watch?v=9CKaeJjSKNQ&ab_channel=CodeursenSeine',
      },
      pictureId: 'codeursenseine2018-Haskell_en_prod',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'functional_programming_montpellier',
      when: '2019-01-15',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
      },
      pictureId: 'Haskell_en_prod',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'web2day_2019',
      when: '2019-06-05',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
        video: 'https://www.youtube.com/watch?v=QnS-Byrmf9c&ab_channel=Web2day',
      },
      pictureId: 'web2day2019-Haskell_en_prod',
    },
    {
      subjectId: 'haskell_in_prod',
      conventionId: 'voxxed_days_luxembourg_2019',
      when: '2019-06-21',
      links: {
        slides:
          'https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994',
        video: 'https://www.youtube.com/watch?v=Omj9RvK1TbQ',
      },
      pictureId: 'voxxeddaysluxembourg2019-Haskell_en_prod',
    },
    {
      subjectId: 'interview_shirley_almosni_chiche',
      conventionId: 'online_shirley',
      when: '2023-03-31',
      links: {
        video:
          'https://www.youtube.com/watch?v=FNStkAKsujI&ab_channel=BUILDRH-Face%C3%A0faceavecTataShishi',
      },
      pictureId: 'entretienshirleyalmosnichiche2023',
    },
    {
      subjectId: 'interview_philippe_charriere',
      conventionId: 'online_k33g',
      when: '2023-04-06',
      links: {
        video:
          'https://www.youtube.com/watch?v=psQV7zB59hQ&ab_channel=PhilippeCharri%C3%A8re',
      },
      pictureId: 'livephilippecharriere2023',
    },
    {
      subjectId: 'event_driven_buzzword',
      conventionId: 'devfest_lille_2023',
      when: '2023-05-26',
      links: {
        program:
          'https://devfest.gdglille.org/speaker-page-oyAdLXhQYzWS1j03gz79ADg2TRj2/',
        video:
          'https://www.youtube.com/watch?v=RovPh9agiFc&t=1s&ab_channel=GDGFrance',
      },
      pictureId: 'devfestlille2023-Event_driven',
    },
    {
      subjectId: 'podcast_punkin_dev',
      conventionId: 'online_punkin_dev',
      when: '2023-06-20',
      links: {
        audio:
          'https://podcast.ausha.co/punkindev/s03e12-dev-lead-architecte-non-archidev-avec-celine-louvet',
      },
      pictureId: 'podcast_punkindev2023',
    },
    {
      subjectId: 'event_driven_buzzword',
      conventionId: 'camping_des_speakers_2023',
      when: '2023-06-15',
      links: {
        program:
          'https://camping-speakers.fr/sessions/event_driven_qu_est_ce_donc/',
      },
      pictureId: 'campingdespeakers2023-Event_driven',
    },
    {
      subjectId: 'event_driven_buzzword',
      conventionId: 'breizhcamp_2023',
      when: '2023-06-29',
      links: {
        program: 'https://www.breizhcamp.org/conference/programme',
        video:
          'https://www.youtube.com/watch?v=Tq2-6jfBbOY&ab_channel=C%C3%A9lineLouvet',
      },
      pictureId: 'breizhcamp2023-Event_driven',
    },
    {
      subjectId: 'permissions_mysteries',
      conventionId: 'cloud_est_2023',
      when: '2023-06-20',
      links: {
        program: 'https://cloudest-event.fr',
        feedbacks:
          'https://openfeedback.io/lSG3Xl5ALpXqswcFPcu2/2023-05-26/fILn5VfKXqQfzKLsI4a5',
        video:
          'https://www.youtube.com/watch?v=0d-_oSqOI68&ab_channel=C%C3%A9lineLouvet',
      },
      pictureId: 'cloudest2023-Permissions',
    },
    {
      subjectId: 'permissions_mysteries',
      conventionId: 'breizhcamp_2023',
      when: '2023-06-30',
      links: {
        program: 'https://www.breizhcamp.org/conference/programme',
        feedbacks:
          'https://openfeedback.io/lSG3Xl5ALpXqswcFPcu2/2023-05-26/fILn5VfKXqQfzKLsI4a5',
        video:
          'https://www.youtube.com/watch?v=p4VT1DR2RdA&ab_channel=C%C3%A9lineLouvet',
      },
      pictureId: 'breizhcamp2023-Permissions',
    },
    {
      subjectId: 'tired_women_revolution',
      conventionId: 'paattern_talks_2023',
      when: '2023-11-30',
      links: {
        program:
          'https://www.linkedin.com/feed/update/urn:li:activity:7133839860397694977/',
      },
      pictureId: 'paatternTalks2023-Tired_women_revolution',
    },
    {
      subjectId: 'podcast_developer_experience',
      conventionId: 'online_developer_experience',
      when: '2023-12-29',
      links: {
        audio: 'https://podcast.ausha.co/developer-experience/celine-louvet',
      },
      pictureId: 'podcast_devxp2023',
    },
    {
      subjectId: 'podcast_avocado_growth',
      conventionId: 'online_avocado_growth',
      when: '2024-01-22',
      links: {
        audio:
          'https://podcast.ausha.co/avocado-growth-portrait-tech/18-parcours-tech-celine',
      },
      pictureId: 'podcast_avocadogrowth2024',
    },
  ],
  educations: [
    {
      from: '2002',
      to: '2005',
      school: 'EPSI Paris',
      diploma: 'Diplôme d‘ingénieur en informatique',
      speciality: 'Génie logiciel',
    },
    {
      from: '2000',
      to: '2002',
      school: 'ENSEA',
      fullname:
        'Ecole Nationale Supérieure de l’Electronique et de ses Applications',
    },
  ],
  trainings: [
    { topic: 'Mid-management', company: 'Sparring Partners', when: '2021' },
  ],
  certifications: [
    { topic: 'Polymer 200', company: 'SFEIR', when: '2016-07-01' },
    { topic: 'AngularJs 200', company: 'SFEIR', when: '2016-01-01' },
    {
      topic: 'Google Cloud Platform CP300',
      company: 'Google',
      when: '2013-06-01',
    },
    {
      topic: 'Google Cloud Platform CP200',
      company: 'Google',
      when: '2013-03-01',
    },
  ],
};

export default resume;
