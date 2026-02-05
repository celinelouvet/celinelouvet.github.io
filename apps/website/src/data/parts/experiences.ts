import type { Experience } from '../models';

const experiences = {
  shine: {
    company: 'Shine',
    from: '2023-02-06',
    remote: 'FULLTIME',
    stacks: [
      {
        type: 'Infrastructure',
        technos: [
          {
            type: 'GCP',
            technos: [
              'AppEngine',
              'Cloud Run',
              'Cloud Function',
              'Spanner',
              'FileStorage',
              'Pub/Sub',
              'CloudSQL / PostgreSQL',
            ],
          },
        ],
      },
      {
        type: 'Services',
        technos: ['Node', 'Typescript', 'Express / Fastify'],
      },
      {
        type: 'Frontends',
        technos: ['Typescript', 'React'],
      },
      {
        type: 'Patterns',
        technos: ['DDD', 'CQRS', 'Event Sourcing', 'Hexagonal Architecture'],
      },
    ],
  },

  pyxo: {
    company: 'Pyxo',
    from: '2022-05-02',
    to: '2022-12-05',
    remote: 'HYBRID',
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

  hubside: {
    company: 'Hubside',
    from: '2021-01-01',
    to: '2022-04-25',
    remote: 'FULLTIME',
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

  freelance: {
    company: 'Freelance',
    from: '2019-03-01',
    to: '2020-12-31',
  },

  freelance_hubside: {
    company: 'Hubside',
    from: '2019-08-01',
    to: '2020-12-31',
    remote: 'NONE',
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

  freelance_foncia_stark: {
    company: 'Foncia Stark',
    from: '2019-03-01',
    to: '2019-08-10',
    remote: 'NONE',
    stacks: [
      {
        type: 'Backend',
        technos: ['Javascript', 'Node', 'REST', 'Express', 'Jest'],
      },
    ],
  },

  fairvioo: {
    company: 'Fairvioo',
    from: '2017-12-01',
    to: '2019-06-15',
    remote: 'HYBRID',
  },

  captain_contrat: {
    company: 'Captain Contrat',
    from: '2017-06-21',
    to: '2017-11-20',
    remote: 'NONE',
  },

  sfeir: {
    company: 'SFEIR',
    from: '2011-05-01',
    to: '2017-06-20',
  },

  sfeir_sg_private_banking: {
    company: 'SG Private Banking',
    from: '2016-09-01',
    to: '2017-06-20',
    stacks: [
      {
        type: '',
        technos: ['AngularJs', 'Java 8', 'PostgreSQL', 'MongoDB'],
      },
    ],
  },

  sfeir_deloitte_france: {
    company: 'Deloitte France',
    from: '2015-04-01',
    to: '2016-08-31',
    stacks: [
      { type: 'EasyRisk', technos: ['Polymer', 'PostgreSQL', 'Scala'] },
      {
        type: 'Goals & CMS',
        technos: ['AngularJs', 'NodeJs', 'MongoDB'],
      },
    ],
  },

  sfeir_valeo: {
    company: 'Valeo',
    from: '2013-01-01',
    to: '2015-03-01',
    stacks: [
      { type: 'Front‑ends', technos: ['GWT', 'AngularJs'] },
      {
        type: 'Back‑ends',
        technos: [
          'Java',
          {
            type: 'GCP',
            technos: ['AppEngine', 'FileStorage', 'SearchAPI', 'Datastore'],
          },
        ],
      },
    ],
  },

  sfeir_ca_cib: {
    company: 'CA‑CIB',
    from: '2012-07-01',
    to: '2012-12-31',
    summarize: true,
    stacks: [{ type: '', technos: ['JEE5', 'JSP', 'Sybase'] }],
  },

  sfeir_i_cdc: {
    company: 'I‑CDC',
    from: '2012-01-01',
    to: '2012-07-01',
    summarize: true,
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
        technos: ['GWT2.4', 'Twitter Bootstrap', 'Framework DEI', 'Tomcat'],
      },
    ],
  },

  sfeir_thales_theresis: {
    company: 'THALES Théresis',
    from: '2011-11-01',
    to: '2011-12-31',
    summarize: true,
    stacks: [{ type: '', technos: ['GWT2.4', 'Apache Mina', 'Tomcat'] }],
  },

  sfeir_storeforce: {
    company: 'Storeforce',
    from: '2011-06-01',
    to: '2011-10-31',
    summarize: true,
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

  alten_sir: {
    company: 'Alten SIR',
    from: '2007-05-01',
    to: '2011-05-31',
    summarize: true,
  },

  alten_sir_sgcib_dev: {
    company: 'SGCIB',
    from: '2010-10-01',
    to: '2011-03-31',
  },

  alten_sir_sgcib_ops: {
    company: 'SGCIB',
    from: '2007-05-01',
    to: '2010-02-28',
    stacks: [
      {
        type: '',
        technos: ['Oracle 10g', 'Sybase', 'PL/SQL', 'Scripts', 'ClearCase'],
      },
    ],
  },

  altran: {
    company: 'Altran Technologies',
    from: '2006-02-01',
    to: '2007-05-31',
    summarize: true,
  },

  altran_bouygues_telecom: {
    company: 'Bouygues Télécom',
    from: '2006-06-01',
    to: '2007-05-31',
    summarize: true,
    stacks: [
      {
        type: '',
        technos: ['Oracle 9i', 'LIGIS de MetaMicro', 'Scripts', 'PL/SQL'],
      },
    ],
  },

  altran_france_telecom: {
    company: 'France Télécom / Wanadoo',
    from: '2006-02-01',
    to: '2006-05-31',
    summarize: true,
    stacks: [
      {
        type: '',
        technos: ['Corba', 'Sybase', 'Oracle 9i', 'Scripts', 'PL/SQL'],
      },
    ],
  },
} satisfies Record<
  string,
  Omit<Experience, 'role' | 'descriptions' | 'projects' | 'tasks'>
>;

export const experiences_fr = [
  // Shine
  {
    ...experiences.shine,
    role: 'Senior Lead developer',
    descriptions: [
      'Développeuse fullstack sur une architecture microservices, fortement évènementielle.',
      'Accompagnement de développeuses juniors en reconversion.',
      'Développement d’une nouvelle architecture orientée CQRS.',
      'Dans le cadre du rachat de Shine par Ageras, avec une réorganisation lourde des équipes et des produits.',
    ],
    projects: [
      {
        name: 'Team User Success',
        description:
          'Mise en place de solutions pour rendre le support client plus efficace.',
      },
      {
        name: 'Team Core Banking',
        description:
          'Développement du nouveau cœur bancaire destiné à devenir un Banking‑as‑a‑Service (PSP, ledger, audit, etc.).',
      },
    ],
    tasks: [
      {
        name: 'Au niveau Shine',
        subtasks: [
          { name: 'Définition du système d’autorisation' },
          {
            name: 'Harmonisation des outils, méthodologies et processus suite à la fusion avec Ageras',
          },
        ],
      },
      {
        name: 'User success',
        subtasks: [
          { name: 'Interface avec des APIs externes (Intercom, Pappers etc)' },
          {
            name: 'Mise en place d’un système de vigilance des compagnies pour la compliance',
          },
        ],
      },
      {
        name: 'Core banking',
        subtasks: [
          {
            name: 'Mise en place de système de release candidate pour les déploiements',
          },
          {
            name: 'Génération automatique de schémas fonctionnels, à partir du code',
          },
          {
            name: 'Design et implémentation du ledger, avec l’enregistrement des opérations en double comptabilité',
          },
          {
            name: 'Déploiement, monitoring et alerting, en production',
          },
        ],
      },
    ],
  },

  // Pyxo
  {
    ...experiences.pyxo,
    role: 'Backend developer',
    descriptions: [
      'Développeuse backend sur une architecture microservices, fortement évènementielle.',
      'Mise en place de méthodologies pour réduire les frictions avec l’équipe produit, améliorer le suivi des initiatives projet et de leurs phase de QA.',
    ],
    projects: [
      {
        name: 'Pyxo',
        description:
          'Solution B2B2C permettant d’effectuer des prêts et retours de contenants réutilisables, auprès des restaurateurs clients.',
      },
    ],
  },

  // Hubside
  {
    ...experiences.hubside,
    role: 'Staff engineer / Senior Lead developer',
    descriptions: [
      'Tech lead avec un rôle de mid‑management et une implication au niveau entreprise.',
      'Accompagnement de managers. Accompagnement d’un junior en reconversion.',
      'La répartition entre développement et lead/management est de 40‑60%.',
    ],
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
  },

  // Freelance
  {
    ...experiences.freelance,

    subjobs: [
      {
        ...experiences.freelance_hubside,
        role: 'Fullstack developer / Tech lead',
        descriptions: [
          'Développeuse fullstack dans un premier temps, puis reprise du rôle de tech lead après le départ du lead précédent.',
          'La répartition entre développement et lead/management est de 70‑30%.',
        ],
        projects: [
          {
            name: 'Hubside Photos',
            description:
              'Service B2C permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.',
          },
        ],
      },
      {
        ...experiences.freelance_foncia_stark,
        role: 'Back‑end developer',
        descriptions: [
          'Développeuse backend sur des traitements asynchrones récurrents.',
        ],
        projects: [
          {
            name: 'Foncia Stark',
            description: 'Refonte de l’application de gestion locative',
          },
        ],
      },
    ],
  },

  // Fairvioo
  {
    ...experiences.fairvioo,
    role: 'CTO & co‑founder',
    descriptions: [
      'Incubateur Université Dauphine.',
      'Solution de récolte d’avis clients post‑achat à impact positif, sur le principe de 1 avis consommateur = 1 don à une association.',
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

  // Captain Contrat
  {
    ...experiences.captain_contrat,
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

  // SFEIR
  {
    ...experiences.sfeir,
    role: 'Team Leader, Technical Leader & développeuse',
    descriptions: [
      'Management et suivi de carrière d’une quinzaine de personnes. Réalisation d’entretiens techniques hebdomadaires.',
      'Amélioration continue des processus internes de SFEIR.',
      'Animation technique de la communauté SFEIR (organisation de journées Codingame, etc).',
    ],
    subjobs: [
      // SG Private Banking
      {
        ...experiences.sfeir_sg_private_banking,
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
      },

      // Deloitte France
      {
        ...experiences.sfeir_deloitte_france,
        role: 'Développeuse & Technical Leader & Accompagnement technique à la transition numérique',
        descriptions: [
          'Création d’une équipe dédiée à la réalisation d’applications Cloud, pour initier la transition numérique de l’entité France.',
          'Accompagnement technique pour l’architecture, accompagnement fonctionnel et technique lors des phases de design des applications.',
          'Formation de développeurs juniors.',
          'Animation de workshops utilisateurs. Avant‑ventes, chiffrages et réponses à appel d’offres.',
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
      },

      // Valeo
      {
        ...experiences.sfeir_valeo,
        role: 'Développeuse Java/AngularJs & Technical Leader',
        descriptions: [
          'Responsable des projets Valeo chez SFEIR, en liaison avec 5 PMs et le DSI Cloud.',
          'Technical Leader sur tous les projets et développement backend sur les projets les plus importants (Newscenter, Roadmap, QnP).',
          'Accompagnement des développeurs. Animation de workshops utilisateurs. Avant‑ventes, chiffrages et réponses à appel d’offres.',
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
            description: 'Portail de connexion à la plateforme Valeo / Google',
          },
          {
            name: 'Newscenter',
            description:
              'Outil de publication de news à destination des employés',
          },
          {
            name: 'QnP',
            description: 'Outil de suivi des alertes des chaînes de production',
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
      },

      // CA‑CIB
      {
        ...experiences.sfeir_ca_cib,
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
      },

      // I‑CDC
      {
        ...experiences.sfeir_i_cdc,
        role: 'Architecte junior & Développeuse Java / GWT',
        descriptions: [
          'Intégration à la cellule d’architecture développant un socle technique. Développement d’un socle technique pour les autres équipes.',
        ],
      },

      // Thales Théresis
      {
        ...experiences.sfeir_thales_theresis,
        role: 'Développeuse Java/GWT & ScrumMaster',
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
      },

      // Storeforce
      {
        ...experiences.sfeir_storeforce,
        role: 'Développeuse Java/GWT',
        descriptions: ['Développeuse junior'],
        projects: [
          {
            name: 'StoreForce',
            description:
              'Application WEB permettant à une chaîne de magasins de Grande Distribution de planifier les tâches des employés en fonction des stocks et des livraisons',
          },
        ],
      },
    ],
  },

  // Alten SIR
  {
    ...experiences.alten_sir,
    role: 'Opérationnelle & développeuse',
    subjobs: [
      // SGCIB dev
      {
        ...experiences.alten_sir_sgcib_dev,

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

      // SGCIB ops
      {
        ...experiences.alten_sir_sgcib_ops,
        role: 'Ingénieur opérationnel',
        descriptions: [
          'SysAdmin et ops. Livraisons en intégration, assurance de la qualité des livraisons et mise en production.',
        ],
        projects: [
          {
            name: 'EPROM',
            description:
              'Application Back‑Office servant de référentiel des produits dérivés',
          },
        ],
      },
    ],
  },

  // Altran Technologies
  {
    ...experiences.altran,
    role: 'Ingénieur tests automatiques',
    summarize: true,
    subjobs: [
      // Bouygues Telecom
      {
        ...experiences.altran_bouygues_telecom,
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
      },

      // France Télécom / Wanadoo
      {
        ...experiences.altran_france_telecom,

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
      },
    ],
  },
] satisfies Experience[];

export const experiences_en = [
  // Shine
  {
    ...experiences.shine,
    role: 'Senior Lead developer',
    descriptions: [
      'Fullstack developer on a highly event-driven microservices architecture.',
      'Mentoring junior developers in career transition.',
      'Development of a new CQRS-oriented architecture.',
      'As part of the acquisition of Shine by Ageras, involving major reorganization of teams and products.',
    ],
    projects: [
      {
        name: 'Team User Success',
        description:
          'Implementation of solutions to make customer support more efficient.',
      },
      {
        name: 'Team Core Banking',
        description:
          'Development of the new banking core intended to become Banking‑as‑a‑Service (PSP, ledger, audit, etc.).',
      },
    ],
    tasks: [
      {
        name: 'Shine level',
        subtasks: [
          { name: 'Definition of the authorization system' },
          {
            name: 'Harmonization of tools, methodologies, and processes following the merger with Ageras',
          },
        ],
      },
      {
        name: 'User success level',
        subtasks: [
          { name: 'Interface with external APIs (Intercom, Pappers, etc.)' },
          {
            name: 'Implementation of a company monitoring system for compliance',
          },
        ],
      },
      {
        name: 'Core banking level',
        subtasks: [
          {
            name: 'Implementation of a release candidate system for deployments',
          },
          { name: 'Automatic generation of functional diagrams, from code' },
          {
            name: 'Design and implementation of the ledger, in order to record operations in double-entry accounting',
          },
          {
            name: 'Application deployment, monitoring and alerting, in production',
          },
        ],
      },
    ],
  },

  // Pyxo
  {
    ...experiences.pyxo,
    role: 'Backend developer',
    descriptions: [
      'Backend developer on a microservices architecture, highly event‑driven.',
      'Several methodologies set up to reduce frictions with the product team and improve projects and QA follow‑ups.',
    ],
    projects: [
      {
        name: 'Pyxo',
        description:
          'B2B2C solution allowing to track returnable containers the customers have borrowed, in restaurants.',
      },
    ],
  },

  // Hubside
  {
    ...experiences.hubside,
    role: 'Staff engineer / Senior Lead developer',
    descriptions: [
      'Technical leader with a mid‑management role and a strategic involvement, while being glue for the team, and developing backend features.',
      'Mentoring of other managers. Mentoring of a junior developer in career change.',
      'The workload distribution between development and lead/management was 40‑60%.',
    ],
    projects: [
      {
        name: 'Hubside Photos',
        description:
          'B2C solution dedicated, for the customers, to share photo albums and print them as individual prints or photo books.',
      },
    ],
    tasks: [
      {
        name: 'Hubside level',
        subtasks: [
          {
            name: 'Set up of a system to catalog and handle existing technical debt, company‑wide',
          },
          { name: 'Technical roadmap definition' },
          { name: 'Mentoring of other managers' },
        ],
      },
      {
        name: 'Photos team level',
        subtasks: [
          { name: 'Technical roadmap definition' },
          { name: 'Architecture and stack designs' },
          { name: 'Backend developments / PoC' },
          { name: 'HR Management of a team of developers.' },
          { name: 'Mentoring of a junior developer in career change' },
        ],
      },
    ],
  },

  // Freelance
  {
    ...experiences.freelance,
    subjobs: [
      {
        ...experiences.freelance_hubside,
        role: 'Fullstack developer / Technical leader',
        descriptions: [
          'Fullstack developer at the beginning, then take over of the technical leadership after the departure of the previous leader.',
          'The workload distribution between development and lead/management was 70‑30%.',
        ],
        projects: [
          {
            name: 'Hubside Photos',
            description:
              'B2C solution dedicated, for the customers, to photos sharing and photobooks printing, with layout designs and photo manipulations.',
          },
        ],
      },
      {
        ...experiences.freelance_foncia_stark,
        role: 'Backend developer',
        descriptions: [
          'Backend developer on recurring asynchronous processes.',
        ],
        projects: [
          {
            name: 'Foncia Stark',
            description: 'Rework of the internal rental management software',
          },
        ],
      },
    ],
  },

  // Fairvioo
  {
    ...experiences.fairvioo,
    role: 'CTO & co‑founder',
    descriptions: [
      'Startup incubator at Paris Dauphine University.',
      'Solution to collect customers review after a purchase, with a positive impact based on thr principle of 1 customer review  = 1 donation to an organization.',
      'Strategy and fundraising. Feature developments, hiring and mentorship of an intern.',
    ],
    projects: [
      {
        name: 'Showcase site',
        description:
          'B2B site dedicated to showcasing the product to the retailers',
      },
      {
        name: 'Solution',
        description:
          'B2C web application dedicated, for the customers, to listing, searching and adding new reviews',
      },
      {
        name: 'Prestashop AddOn',
        description:
          'AddOn dedicated, for the retailer, to managing and embed the received reviews',
      },
    ],
    stacks: [
      { type: 'Showcase site', technos: ['VueJS', 'Firebase'] },
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

  // Captain Contrat
  {
    ...experiences.captain_contrat,
    role: 'CTO',
    descriptions: [
      'Management of a small team of developers, needing a change in the working habits, in order to scale‑up.',
      'Hiring (search, follow‑up and signature)',
    ],
    projects: [
      {
        name: 'Captain contrat',
        description:
          'B2C site dedicated to creating legal documents with forms help',
      },
    ],
    stacks: [
      {
        type: 'Legacy',
        technos: ['Ruby on Rails', 'MySQL', 'Amazon RDS', 'Amazon EC2'],
      },
      { type: 'Client app', technos: ['ReactJs', 'Amazon S3'] },
    ],
  },

  // SFEIR
  {
    ...experiences.sfeir,
    role: 'Team Leader, Technical Leader & developer',
    descriptions: [
      'HR management of about 15 developers',
      'Realisation, every week, of technical hiring interviews',
      'Continous improvments of SFEIR internal processes',
      'SFEIR community technical animation (Codingame events organization, etc)',
    ],
    subjobs: [
      // SG Private Banking
      {
        ...experiences.sfeir_sg_private_banking,
        role: 'Fullstack developer & technical consulting',
        descriptions: [
          'Fullstack developer with a technical consulting role (architecture & AngularJs), in order to proactively respond to risks.',
        ],
        projects: [
          {
            name: 'Active Advisory',
            description:
              'B2C web application dedicated to the customers, in order to give advices for financial products buying or sale',
          },
          {
            name: 'Digital DAA',
            description:
              'B2B web application dedicated to the advisors, to distribute the financial assets depending on efficiency and risks selected',
          },
        ],
      },

      // Deloitte France
      {
        ...experiences.sfeir_deloitte_france,
        role: 'Developer & Technical Leader & Technical consulting for digital transformation',
        descriptions: [
          'Creation of a team dedicated to Cloud‑hosted applications, in order to start the french entity’s digital transformation.',
          'Technical consulting on architecture, recruitments, and mentorship. Functional and technical consulting on all design steps.',
          'User workshop animations. Pre‑sales, Needs analysis and figures calculation.',
        ],
        projects: [
          {
            name: 'EasyRisk',
            description:
              'B2B web application dedicated to catalog, analyze and evaluation all risks (GRC - Governance, risk management, and compliance)',
          },
          {
            name: 'Goals',
            description:
              'B2B web application dedicated to manage and follow all budget forecasts',
          },
          {
            name: 'CMS',
            description:
              'B2B web application dedicated to respond to calls to tenders',
          },
        ],
      },

      // Valeo
      {
        ...experiences.sfeir_valeo,
        role: 'Java/AngularJs developer & Technical Leader',
        descriptions: [
          'Projects manager for Valeo at SFEIR, in liaison with 5 PMs and Cloud CIO.',
          'Architect, technical Leader and being glue on all projects, while developing backend features on the most crucial projects (Newscenter, Roadmap, QnP).',
          'Developers mentorship. User workshops animation. Pre‑sales, needs analysis and figures calculation',
        ],
        projects: [
          {
            name: 'Roadmap',
            description:
              'Web application dedicated to follow and estimate the maturity levels of all internal processes, company‑wide (CMMI)',
          },
          {
            name: 'ISPM',
            description:
              'Web application dedicated for the management, to help follow projects KPIs',
          },
          {
            name: 'HUB',
            description: 'Login portal to Valeo / Google platform',
          },
          {
            name: 'Newscenter',
            description:
              'Web application dedicated to publish communication and news to all Valeo employees',
          },
          {
            name: 'QnP',
            description:
              'Web application dedicated for quality management, to help follow all production incidents',
          },
          {
            name: 'Cloud Services',
            description: 'Common transversal tools and services',
          },
          {
            name: 'Contact Search',
            description: 'Microservice dedicated to search for employees',
          },
          {
            name: 'Organization Search',
            description:
              'Microservice dedicated to search for Valeo organization informations',
          },
          {
            name: 'Roles Search',
            description:
              'Microservice dedicated to search for employees with a specific role',
          },
        ],
      },

      // CA‑CIB
      {
        ...experiences.sfeir_ca_cib,
        role: 'Java developer',
        summarize: true,
        descriptions: [
          'Feature developments, optimizations & automation. Features implemented for Bâle III requirements.',
        ],
        projects: [
          {
            name: 'CNR',
            description:
              'Web application used to automatically run functional non‑regression tests on the library doing counterparty risks estimations on market transactions',
          },
        ],
      },

      // I‑CDC
      {
        ...experiences.sfeir_i_cdc,
        role: 'Junior architect & Java / GWT developer',
        descriptions: [
          'Integrated in a team of architects providing a technical platform. Implementation of a technical platform for developers’ use.',
        ],
      },

      // Thales Théresis
      {
        ...experiences.sfeir_thales_theresis,
        role: 'Java/GWT developer & ScrumMaster',
        descriptions: [
          'Application awarded internally for its usage’s simplicity.',
          'THALES employees needed to, in order to receive an internal certification, take part in the development of a project. I was the fullstack developer delivering the application for this project.',
        ],
        projects: [
          {
            name: 'AnaisHD',
            description:
              'Web application used to demonstrate and compare several long range monitoring equipments, produced by THALES Angénieux, with the capacity to remotely control the cameras and HD lenses',
          },
        ],
      },

      // Storeforce
      {
        ...experiences.sfeir_storeforce,
        role: 'Java/GWT developer',
        descriptions: ['Junior developer'],
        projects: [
          {
            name: 'StoreForce',
            description:
              'Web application used by a retail store chain, to plan their employees’ daily tasks depending on stocks and deliveries',
          },
        ],
      },
    ],
  },

  // Alten SIR
  {
    ...experiences.alten_sir,
    role: 'IT operations engineer & developer',
    subjobs: [
      {
        ...experiences.alten_sir_sgcib_dev,
        role: 'Java/GWT developer & Technical Leader',
        descriptions: [
          'Creation and set up of software factory and continuous integration on BACARDI, where all functional tests are created by the product owners.',
        ],
        projects: [
          {
            name: 'BACARDI',
            description:
              'Back‑office application dedicated to risk analysis on derivative products',
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
            type: 'Others',
            technos: ['Java JEE 6', 'API XStream', 'GWT', 'Git'],
          },
        ],
      },
      {
        ...experiences.alten_sir_sgcib_ops,
        role: 'IT operations engineer',
        descriptions: [
          'System and operations engineer. Deliveries on integration environments, quality checks on releases and deliveries to production environment.',
        ],
        projects: [
          {
            name: 'EPROM',
            description:
              'Back‑office application dedicated to derivative products, used as a refential by the others services',
          },
        ],
      },
    ],
  },

  // Altran Technologies
  {
    ...experiences.altran,
    role: 'QA engineer',
    summarize: true,
    subjobs: [
      // Bouygues Télécom
      {
        ...experiences.altran_bouygues_telecom,
        role: 'QA engineer',
        descriptions: [
          'Software and documentation quality. Functional, technical and performance testing.',
        ],
        projects: [
          {
            name: 'Gestion du Client',
            description:
              'Service dedicated to managing all phone customers’ contract (package, options…)',
          },
        ],
        stacks: [
          {
            type: '',
            technos: ['Oracle 9i', 'LIGIS by MetaMicro', 'Scripts', 'PL/SQL'],
          },
        ],
      },

      // France Télécom / Wanadoo
      {
        ...experiences.altran_france_telecom,
        role: 'QA engineer',
        descriptions: [
          'For the merger between Wanadoo and Orange. Functional testing.',
        ],
        projects: [
          {
            name: 'Gestion du Client',
            description:
              'Service dedicated to managing all clients profile and identity (email, phone etc.)',
          },
        ],
      },
    ],
  },
] satisfies Experience[];
