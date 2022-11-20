import { Resume } from "./models";

const resume: Resume = {
  firstname: "Céline",
  lastname: "Louvet",
  birthdate: "1980-12-02",
  firstExperience: "2006-02-01",
  email: "celine.louvet@gmail.com",
  website: "https://celine.louvet.me",
  title: "Staff engineer / Senior lead developer",
  location: "Lyon",
  zipCode: "69006",
  remotes: [
    { type: "FULLTIME", where: "France / Europe" },
    { type: "HYBRID", where: "Lyon" },
  ],
  hobbies: "Dessins, peinture, modelage, sport",
  descriptions: [
    "Développeuse Backend Senior, en Typescript, avec une appétence aux langages fonctionnels.",
    "Plusieurs expériences de lead developer, avec management d’une équipe de développeurs.",
    "Plusieurs expériences de Technical Leader, avec reprise de legacy ou de création en partant de zéro, architecture et de mises en place de méthodes de travail.",
  ],
  skills: [
    "Phase de build, avec objectif stabilité & qualité",
    "Accompagnement",
    "Architecture cloud (GCP & AWS)",
    "Typescript",
    "NodeJs",
    "Google Cloud Platform (GCP)",
    "Tests & automatisation",
  ],
  socials: [
    { name: "twitter", handle: "celine_louvet", link: "https://twitter.com/celine_louvet" },
    { name: "linkedin", handle: "celinelouvet", link: "https://www.linkedin.com/in/celinelouvet" },
    { name: "mastodon", handle: "celine_louvet@pouet.chapril.org", link: "https://pouet.chapril.org/@celine_louvet" },
  ],
  experiences: [
    {
      company: "Pyxo",
      from: "2022-05-02",
      role: "Backend developer",
      descriptions: [
        "Developpeuse backend sur une architecture microservices, fortement évènementielle.",
        "Mise en place de méthodologies pour réduire les frictions avec l’équipe produit, améliorer le suivi des initiatives projet et de leurs phase de QA.",
      ],
      remote: "HYBRID",
      projects: [
        {
          name: "Pyxo",
          description: "Solution B2B2C permettant d’effectuer des prêts et retours de contenants réutilisables, auprès des restaurateurs clients.",
        },
      ],
      stacks: [
        {
          type: "Infrastructure",
          technos: [{ type: "AWS", technos: ["CloudFormation", "DynamoDB", "RDS", "CacheCluster", "SQS", "Lambda", "S3", "Cloudfront", "VPC"] }],
        },
        { type: "Landings", technos: ["VanillaJs", "Preact"] },
        { type: "Backend API", technos: ["Node", "Typescript", "Serverless"] },
      ],
    },
    {
      company: "Hubside",
      from: "2021-01-01",
      to: "2022-04-25",
      role: "Staff engineer / Senior Lead developer",
      descriptions: [
        "Tech lead avec un rôle de mid-management et une implication au niveau entreprise.",
        "Accompagnement de managers. Accompagnement d’un junior en reconversion.",
        "La répartition entre développement et lead/management est de 40-60%.",
      ],
      remote: "FULLTIME",
      projects: [
        {
          name: "Hubside Photos",
          description: "Service B2C permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.",
        },
      ],
      tasks: [
        {
          name: "Au niveau Hubside",
          subtasks: [
            { name: "Mise en place d’un référencement de la dette technique existante" },
            { name: "Définition de roadmap technique" },
            { name: "Accompagnement des autres managers" },
          ],
        },
        {
          name: "Au niveau équipe Photos",
          subtasks: [
            { name: "Définition de roadmap technique" },
            { name: "Choix d’architecture et de stack" },
            { name: "Développements backend / PoC" },
            { name: "Management RH des développeurs" },
            { name: "Accompagnement et formation d’un développeur junior en reconversion" },
          ],
        },
      ],
      stacks: [
        {
          type: "Infrastructure",
          technos: [{ type: "GCP", technos: ["AppEngine", "Datastore", "FileStorage", "Pub/Sub", "Cloud Run", "Compute Engine"] }],
        },
        { type: "Frontend", technos: ["PWA", "ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)", "Storybook"] },
        { type: "Backend", technos: ["Node", "Typescript", "GraphQL (Apollo Server)"] },
        { type: "Print", technos: ["Node", "Typescript", "REST", "Express", "Puppeteer"] },
      ],
    },
    {
      company: "Freelance",
      from: "2019-03-01",
      to: "2020-12-31",
      jobs: [
        {
          company: "Hubside",
          from: "2019-08-01",
          to: "2020-12-31",
          role: "Fullstack developer / Tech lead",
          descriptions: [
            "Développeuse fullstack dans un premier temps, puis reprise du rôle de tech lead après le départ du lead précédent.",
            "La répartition entre développement et lead/management est de 70-30%.",
          ],
          projects: [
            {
              name: "Hubside Photos",
              description: "Service B2C permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.",
            },
          ],
          stacks: [
            {
              type: "Infrastructure",
              technos: [{ type: "GCP", technos: ["AppEngine", "Datastore", "FileStorage", "Compute Engine"] }],
            },
            { type: "Frontend", technos: ["ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)", "Storybook"] },
            { type: "Backend", technos: ["Node", "Typescript", "REST", "Express", "GraphQL (Apollo Server)"] },
          ],
        },
        {
          company: "Foncia Stark",
          from: "2019-03-01",
          to: "2019-08-10",
          role: "Back-end developer",
          descriptions: ["Développeuse backend sur des traitements asynchrones récurrents."],
          projects: [{ name: "Foncia Stark", description: "Refonte de l’application de gestion locative" }],
          stacks: [{ type: "Backend", technos: ["Javascript", "Node", "REST", "Express", "Jest"] }],
        },
      ],
    },
    {
      company: "Fairvioo",
      from: "2017-12-01",
      to: "2019-06-15",
      role: "CTO & co-founder",
      descriptions: [
        "Incubateur Université Dauphine.",
        "Solution de récolte d’avis clients post-achat à impact positif, sur le principe de 1 avis consommateur = 1 don à une association.",
        "Choix stratégiques et levée de fond. Développements, recrutement et accompagnement d’un stagiaire",
      ],
      projects: [
        { name: "Vitrine", description: "Site B2B de présentation du produit à destination des commerçants" },
        { name: "Solution", description: "Application web B2C pour visualiser les avis déposés et en ajouter" },
        { name: "AddOn Prestashop", description: "AddOn permettant à un commerçant d’afficher et administrer les avis reçus" },
      ],
      stacks: [
        { type: "Vitrine", technos: ["VueJS", "Firebase"] },
        { type: "Solution", technos: ["VueJS", "Haskell", "PostgreSQL", "Clever Cloud", "SendInBlue"] },
        { type: "AddOn Prestashop", technos: ["PHP", "Prestashop 1.6.x"] },
      ],
    },
    {
      company: "Captain Contrat",
      from: "2017-06-21",
      to: "2017-11-20",
      role: "CTO",
      descriptions: [
        "Management d’une petite équipe de développeurs, nécessitant un changement de méthodes de travail, afin de sortir de la phase de PoC initiale.",
        "Recrutement (recherche, suivi et embauche)",
      ],
      projects: [{ name: "Captain contrat", description: "Site B2C facilitant la création de documents légaux" }],
      stacks: [
        { type: "Legacy", technos: ["Ruby on Rails", "MySQL", "Amazon RDS", "Amazon EC2"] },
        { type: "Module client", technos: ["ReactJs", "Amazon S3"] },
      ],
    },
    {
      company: "SFEIR",
      from: "2011-05-01",
      to: "2017-06-20",
      role: "Team Leader, Technical Leader & développeuse",
      descriptions: [
        "Management et suivi de carrière d’une quinzaine de personnes. Réalisation d’entretiens techniques hebdomadaires.",
        "Amélioration continue des processus internes de SFEIR.",
        "Animation technique de la communauté SFEIR (organisation de journées Codingame, etc).",
      ],
      jobs: [
        {
          company: "SG Private Banking",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Fullstack developer & accompagnement technique",
          descriptions: [
            "Développeuse fullstack avec un rôle d’accompagnement technique (architecture et AngularJs), afin d’anticiper les problèmes rencontrés.",
          ],
          projects: [
            {
              name: "Active Advisory",
              description: "Application B2C d’aide à l’achat et à la vente de produits financiers recommandés par la banque",
            },
            {
              name: "Digital DAA",
              description: "Application B2B de répartition du patrimoine financier suivant la performance et le risque souhaité",
            },
          ],
          stacks: [{ type: "", technos: ["AngularJs", "Java 8", "PostgreSQL", "MongoDB"] }],
        },
        {
          company: "Deloitte France",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Développeuse & Technical Leader & Accompagnement technique à la transition numérique",
          descriptions: [
            "Création d’une équipe dédiée à la réalisation d’applications Cloud, pour initier la transition numérique de l’entité France.",
            "Accompagnement technique pour l’architecture, accompagnement fonctionnel et technique lors des phases de design des applications.",
            "Formation de développeurs juniors.",
            "Animation de workshops utilisateurs. Avant-ventes, chiffrages et réponses à appel d’offres.",
          ],
          projects: [
            {
              name: "EasyRisk",
              description: "Outil B2B d’analyse et d’évaluation des risques majeurs (GRC - Governance, risk management, and compliance)",
            },
            { name: "Goals", description: "Outil B2B de suivi des prévisions budgétaires" },
            { name: "CMS", description: "Outil B2B de réponse à appel d’offres" },
          ],
          stacks: [
            { type: "EasyRisk", technos: ["Polymer", "PostgreSQL", "Scala"] },
            { type: "Goals & CMS", technos: ["AngularJs", "NodeJs", "MongoDB"] },
          ],
        },
        {
          company: "Valeo",
          from: "2013-01-01",
          to: "2015-03-01",
          role: "Développeuse Java/AngularJs & Technical Leader",
          descriptions: [
            "Responsable des projets Valeo chez SFEIR, en liaison avec 5 PMs et le DSI Cloud.",
            "Technical Leader sur tous les projets et développement backend sur les projets les plus importants (Newscenter, Roadmap, QnP).",
            "Accompagnement des développeurs. Animation de workshops utilisateurs. Avant-ventes, chiffrages et réponses à appel d’offres.",
          ],
          projects: [
            { name: "Roadmap", description: "Outil de suivi de la progression de la maturité des processus" },
            { name: "ISPM", description: "Outil de suivi d’indicateurs des projets" },
            { name: "HUB", description: "Portail de connexion à la plateforme Valeo / Google" },
            { name: "Newscenter", description: "Outil de publication de news à destination des employés" },
            { name: "QnP", description: "Outil de suivi des alertes des chaînes de production" },
            { name: "Cloud Services", description: "Outils transverses" },
            { name: "Contact Search", description: "Outil de recherche d’employés" },
            { name: "Organization Search", description: "Outil de recherche des informations d’organisation Valeo" },
            { name: "Roles Search", description: "Outil de recherche des personnes ayant un rôle spécifique" },
          ],
          stacks: [
            { type: "Front-ends", technos: ["GWT", "AngularJs"] },
            { type: "Back-ends", technos: ["Java", { type: "GCP", technos: ["AppEngine", "FileStorage", "SearchAPI", "Datastore"] }] },
          ],
        },
        {
          company: "CA-CIB",
          from: "2012-07-01",
          to: "2012-12-31",
          role: "Développeuse Java",
          summarize: true,
          descriptions: ["Dévelopements, optimisations et automatisation. Evolutions effectuées dans le cadre des changements pour Bâle III."],
          projects: [
            {
              name: "CNR",
              description:
                "Application WEB permettant d’effectuer, de manière automatique, des tests de non régression fonctionnelle sur la librairie de calcul des risques de contreparties sur les opérations de marché",
            },
          ],
          stacks: [{ type: "", technos: ["JEE5", "JSP", "Sybase"] }],
        },
        {
          company: "I-CDC",
          from: "2012-01-01",
          to: "2012-07-01",
          role: "Architecte junior & Développeuse Java / GWT",
          summarize: true,
          descriptions: [
            "Intégration à la cellule d’architecture développant un socle technique. Développement d’un socle technique pour les autres équipes.",
          ],
          stacks: [
            { type: "Socle technique", technos: ["JEE5", "Tomcat"] },
            { type: "POC Liferay", technos: ["Liferay 6.1", "HTML5", "Javascript", "JQuery", "Twitter Bootstrap", "JEE5"] },
            { type: "IHM admin", technos: ["GWT2.4", "Twitter Bootstrap", "Framework DEI", "Tomcat"] },
          ],
        },
        {
          company: "THALES Théresis",
          from: "2011-11-01",
          to: "2011-12-31",
          role: "Développeuse Java/GWT & ScrumMaster",
          summarize: true,
          descriptions: [
            "Application primée en interne pour sa simplicité d’utilisation.",
            "Réalisation des développements d’une application, dans le cadre d’une formation interne THALES.",
          ],
          projects: [
            {
              name: "AnaisHD",
              description:
                "Application WEB permettant d’effectuer la comparaison et la démonstration de matériel de surveillance longue distance, avec la prise de contrôle à distance de caméras HD et d’objectifs Angénieux HD",
            },
          ],
          stacks: [{ type: "", technos: ["GWT2.4", "Apache Mina", "Tomcat"] }],
        },
        {
          company: "Storeforce",
          from: "2011-06-01",
          to: "2011-10-31",
          role: "Développeuse Java/GWT",
          descriptions: ["Développeuse junior"],
          summarize: true,
          projects: [
            {
              name: "StoreForce",
              description:
                "Application WEB permettant à une chaîne de magasins de Grande Distribution de planifier les tâches des employés en fonction des stocks et des livraisons",
            },
          ],
          stacks: [{ type: "", technos: ["GWT2.3", { type: "GCP", technos: ["AppEngine", "Datastore"] }] }],
        },
      ],
    },
    {
      company: "Alten SIR",
      from: "2007-05-01",
      to: "2011-05-31",
      role: "Opérationnelle & développeuse",
      summarize: true,
      jobs: [
        {
          company: "SGCIB",
          from: "2010-10-01",
          to: "2011-03-31",
          role: "Développeuse Java/GWT & Technical Leader",
          descriptions: [
            "Mise en place de l’intégration continue sur BACARDI, via des chaînes automatiques de validation des livraisons en intégration, à destination de la MOA",
          ],
          projects: [
            {
              name: "BACARDI",
              description: "Application Back-Office dédiée à l’analyse de risques pour les produits dérivés",
            },
          ],
          stacks: [
            { type: "BACARDI", technos: ["Java JEE 6", "Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"] },
            { type: "Autres", technos: ["Java JEE 6", "API XStream", "GWT", "Git"] },
          ],
        },
        {
          company: "SGCIB",
          from: "2007-05-01",
          to: "2010-02-28",
          role: "Ingénieur opérationnel",
          descriptions: ["SysAdmin et ops. Livraisons en intégration, assurance de la qualité des livraisons et mise en production."],
          projects: [
            {
              name: "EPROM",
              description: "Application Back-Office servant de référentiel des produits dérivés",
            },
          ],
          stacks: [{ type: "", technos: ["Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"] }],
        },
      ],
    },
    {
      company: "Altran Technologies",
      from: "2006-02-01",
      to: "2007-05-31",
      role: "Ingénieur tests automatiques",
      summarize: true,
      jobs: [
        {
          company: "Bouygues Télécom",
          from: "2006-06-01",
          to: "2007-05-31",
          role: "Ingénieur tests automatiques",
          descriptions: [
            "Assurance de la qualité du logiciel et de la documentation projet. Réalisation de tests fonctionnels, techniques et performance.",
          ],
          projects: [{ name: "Gestion du Client", description: "Système de gestion des dossiers mobiles des clients (Forfaits, options…)" }],
          stacks: [{ type: "", technos: ["Oracle 9i", "LIGIS de MetaMicro", "Scripts", "PL/SQL"] }],
        },
        {
          company: "France Télécom / Wanadoo",
          from: "2006-02-01",
          to: "2006-05-31",
          role: "Ingénieur tests automatiques",
          descriptions: ["Dans le cadre de la fusion Wanadoo / Orange. Réalisation de tests fonctionnels."],
          projects: [{ name: "Gestion du Client", description: "Système de gestion des clients et de leur identité (compte email, téléphone etc.)" }],
          stacks: [{ type: "", technos: ["Corba", "Sybase", "Oracle 9i", "Scripts", "PL/SQL"] }],
        },
      ],
    },
  ],
  talks: [
    {
      topic: "Votre mission ? Découvrir Haskell et le mettre en prod",
      link: "https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994",
      where: [
        { name: "Voxxed Days Luxembourg", when: "2019-06-21" },
        { name: "Web2Day", when: "2019-06-05" },
        { name: "Functional programming Montpellier", when: "2019-01-15" },
        { name: "Codeurs en Seine", when: "2018-11-22" },
        { name: "DevFest Toulouse", when: "2018-11-08" },
        { name: "Scala.io", when: "2018-10-31" },
      ],
    },
    {
      topic: "Retour d’expérience: Polymer chez Deloitte",
      link: "https://www.slideshare.net/celine_louvet/rex-polymer-50365257",
      where: [{ name: "Meetup Paris-WebComponents", when: "2015-07-09" }],
    },
    {
      topic: "Google Datastore & Search API",
      link: "https://www.slideshare.net/celine_louvet/google-datastore-search-api-93079759",
      where: [{ name: "SFEIR - Soirée NoSQL", when: "2014-12-16" }],
    },
  ],
  educations: [
    {
      from: "2002",
      to: "2005",
      school: "EPSI Paris",
      diploma: "Ingénieur en informatique",
      speciality: "Génie logiciel",
    },
    {
      from: "2000",
      to: "2002",
      school: "ENSEA",
      fullname: "Ecole Nationale Supérieure de l’Electronique et de ses Applications",
    },
  ],
  trainings: [{ topic: "Mid-management", company: "Sparring Partners", when: "2021" }],
  certifications: [
    { topic: "Polymer 200", company: "SFEIR", when: "2016-07-01" },
    { topic: "AngularJs 200", company: "SFEIR", when: "2016-01-01" },
    { topic: "Google Cloud Platform CP300", company: "Google", when: "2013-06-01" },
    { topic: "Google Cloud Platform CP200", company: "Google", when: "2013-03-01" },
  ],
};

export default resume;
