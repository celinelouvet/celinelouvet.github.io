import { CV } from "./models";

const cv: CV = {
  firstname: "Céline",
  lastname: "Louvet",
  birthdate: "1980-12-02",
  firstExperience: "2006-02-01",
  email: "celine.louvet@gmail.com",
  title: "Senior lead developer",
  location: "Lyon",
  zipCode: "69006",
  remote: [{type: "FULLTIME", where: "France / Europe"}, {type:"HYBRID", where: "Lyon"}],
  hobbies: "Dessins, peinture, modelage, sport",
  description:
    [
      "Développeuse Backend Senior, en Typescript, avec une appétance aux langages fonctionnels.",
      "Plusieurs expériences de lead developer, avec management d'une équipe de développeurs.",
      "Plusieurs expériences de Technical Leader, avec reprise de legacy ou de création en partant de zéro, architecture et de mises en place de méthodes de travail.",
  ],
  skills: [
    "Phase de build, avec objectif stabilité & qualité",
    "Architecture cloud",
    "Typescript",
    "NodeJs",
    "Google Cloud Platform (GCP)",
    "Tests & automatisation",
  ],
  socials: [
    {
      name: "twitter",
      handle: "celine_louvet",
      link: "https://twitter.com/celine_louvet",
    },
    {
      name: "linkedin",
      handle: "celinelouvet",
      link: "https://www.linkedin.com/in/celinelouvet",
    },
  ],
  experiences: [
    {
      company: "Pyxo",
      from: "2022-05-02",
      role: "Backend developer",
      description: "Developpeuse backend sur une architecture microservices, fortement évènementielle.",
      remote: false,
      projects: [
        {
          name: "Pyxo",
          description: "Solution permettant d'effectuer des prêts et retours de contenants réutilisables, auprès des restaurateurs clients.",
        },
      ],
      tasks: [
        { name: "Réalisation d'un POC pour une démo d'appel d'offre" },
        { name: "Développement d'une landing permettant à un utilisateur anonyme de réaliser un prêt" },
        {
          name: "Mise en place d'un programme de fidélité",
          subtasks: [
            { name: "Découpage fonctionnel" },
            { name: "Conception" },
            { name: "Développements backend" },
          ],
        },
        {
          name: "Mise en place d'un système de parrainage",
          subtasks: [
            { name: "Découpage fonctionnel" },
            { name: "Conception" },
            { name: "Développements backend" },
          ],
        },
      ],
      stacks: [
        {
          type: "Infrastructure",
          technos: ["AWS DynamoDB", "AWS RDS", "AWS CacheCluster", "AWS SQS", "AWS function"],
        },
        {
          type: "Landing",
          technos: ["VanillaJs"],
        },
        {
          type: "Backend API",
          technos: ["Node", "Typescript", "Serverless"],
        },
      ],
    },
    {
      company: "Hubside",
      from: "2021-01-01",
      to: "2022-04-25",
      role: "Senior Lead developer",
      description:
        "Tech lead avec un role de mid-management et une implication au niveau entreprise. La répartition entre développement et lead/management est de 60-40%.",
      remote: true,
      projects: [
        {
          name: "Hubside Photos",
          description: "Service permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.",
        },
      ],
      tasks: [
        { name: "Choix d’architecture et de stack" },
        { name: "Définition de roadmap tech" },
        { name: "Mise en place d’un référencement de la dette technique existante" },
        {
          name: "Développements backend / PoC",
          subtasks: [
            { name: "Upload de photos" },
            { name: "Création d’album partagé" },
            { name: "Impression de tirages unitaires" },
            { name: "Impression de livre photos" },
          ],
        },
        { name: "Management RH des développeurs." },
      ],
      stacks: [
        {
          type: "Infrastructure",
          technos: ["GCP AppEngine", "GCP Datastore", "GCP FileStorage", "GCP Pub/Sub", "GCP Cloud Run"],
        },
        {
          type: "Frontend",
          technos: ["PWA", "ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)"],
        },
        {
          type: "Backend",
          technos: ["Node", "Typescript", "GraphQL (Apollo Server)"],
        },
        {
          type: "API",
          technos: ["Node", "Typescript", "REST", "Express"],
        },
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
          description: "Développeuse fullstack dans un premier temps, puis reprise du rôle de techn lead après le départ du lead précédent.",
          projects: [
            {
              name: "Hubside Photos",
              description: "Service permettant de partager des albums et d’imprimer des photos en tirages unitaires ou livre photos.",
            },
          ],
          tasks: [
            { name: "Upload de photos" },
            { name: "Création d’album partagé" },
            { name: "Impression de tirages unitaires" },
            { name: "Impression de livre photos" },
          ],
          stacks: [
            {
              type: "Common",
              technos: ["GCP AppEngine", "GCP Datastore", "GCP FileStorage", "GCP Pub/Sub", "GCP Cloud Run"],
            },
            {
              type: "Frontend",
              technos: ["ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)"],
            },
            {
              type: "Backend",
              technos: ["Node", "Typescript", "REST", "Express", "GraphQL (Apollo Server)"],
            },
          ],
        },
        {
          company: "Foncia Stark",
          from: "2019-03-01",
          to: "2019-08-10",
          role: "Back-end developer",
          description: "Développeuse backend sur des traitements asynchrones récurrents.",
          projects: [{ name: "Foncia Stark", description: "Refonte de l’application de gestion locative" }],
          tasks: [
            {
              name: "Développement de workers",
              subtasks: [
                { name: "Courriers entrants et sortants" },
                { name: "Réception de virements pour les loyers" },
                { name: "Demande de virements auprès des banques" },
              ],
            },
          ],
          stacks: [
            {
              type: "Backend",
              technos: ["Javascript", "Node", "REST", "Express", "Jest"],
            },
          ],
        },
      ],
    },
    {
      company: "Fairvioo",
      from: "2017-12-01",
      to: "2019-06-15",
      role: "CTO & co-founder",
      description:
        "Incubateur Université Dauphine. Solution de récolte d’avis clients post-achat à impact positif, sur le principe de 1 avis consommateur = 1 don à une association.",
      projects: [
        {
          name: "Vitrine",
          description: "Site de présentation du produit à destination des commerçants",
        },
        {
          name: "Solution",
          description: "Application WEB pour visualiser les avis déposés et en ajouter",
        },
        {
          name: "AddOn Prestashop",
          description: "AddOn permettant d’afficher et administrer les avis reçus",
        },
      ],
      tasks: [
        { name: "Choix stratégiques et levée de fond" },
        { name: "Choix de la stack technique" },
        { name: "Développements" },
        { name: "Recrutement et formation / accompagnement d’un stagiaire" },
      ],
      stacks: [
        { type: "Vitrine", technos: ["VueJS", "Firebase"] },
        {
          type: "Solution",
          technos: ["VueJS", "Haskell", "PostgreSQL", "Clever Cloud", "SendInBlue"],
        },
        { type: "AddOn Prestashop", technos: ["PHP", "Prestashop 1.6.x"] },
      ],
    },
    {
      company: "Captain Contrat",
      from: "2017-06-21",
      to: "2017-11-20",
      role: "CTO",
      description:
        "Management d’une petite équipe de développeurs, nécessitant un changement de méthodes de travail, afin de sortir de la phase de PoC initiale.",
      tasks: [
        {
          name: "Choix technique et création d’un nouveau module client",
        },
        {
          name: "Mise en place de méthodes pour",
          subtasks: [
            {
              name: "Augmenter l’efficacité et la concentration de l’équipe de développement",
            },
            { name: "Augmenter la qualité technique du produit développé" },
            { name: "Réduire les frictions avec l’équipe produit" },
          ],
        },
        {
          name: "Management et suivi de carrière d’une équipe de trois développeurs",
        },
        { name: "Recrutement : recherche, suivi et embauche" },
      ],

      stacks: [
        {
          type: "Legacy",
          technos: ["Ruby on Rails", "MySQL", "Amazon RDS", "Amazon EC2"],
        },
        {
          type: "Module client",
          technos: ["ReactJs", "Amazon S3"],
        },
      ],
    },
    {
      company: "SFEIR",
      from: "2011-05-01",
      to: "2017-06-20",
      role: "Team Leader, Technical Leader & développeuse",
      tasks: [
        {
          name: "Management et suivi de carrière d’une quinzaine de personnes",
        },
        {
          name: "Réalisation d’entretiens techniques hebdomadaires",
        },
        {
          name: "Amélioration continue des processus internes de SFEIR",
        },
        {
          name: "Animation technique de la communauté SFEIR (organisation de journée Codingame, etc)",
        },
      ],
      jobs: [
        {
          company: "SG Private Banking",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Fullstack developer & accompagnement technique",
          description: "Développeuse fullstack avec un rôle d’accompagnement technique, afin d’anticiper les problèmes rencontrés.",
          projects: [
            {
              name: "Active Advisory",
              description: "Aide à l’achat et à la vente de produits financiers recommandés par la banque",
            },
            {
              name: "Digital DAA",
              description: "Outil de répartition du patrimoine financier suivant la performance et le risque souhaité",
            },
          ],
          tasks: [
            { name: "Accompagnement technique sur l’architecture" },
            { name: "Accompagnement technique en AngularJs" },
            { name: "Développements" },
          ],
          stacks: [
            {
              type: "",
              technos: ["AngularJs", "Java 8", "PostgreSQL", "MongoDB"],
            },
          ],
        },
        {
          company: "Deloitte France",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Développeuse & Technical Leader & Accompagnement technique à la transition numérique",
          description:
            "Création d’une équipe dédiée à la réalisation d’applications Cloud, pour initier la transition numérique de l’entité France. Accompagnement technique pour l’architecture, accompagnement fonctionnel et technique lors des phases de design des applications, formation de développeurs juniors.",
          projects: [
            {
              name: "EasyRisk",
              description: "Outil d’analyse et d’évaluation des risques majeurs (GRC - Governance, risk management, and compliance)",
            },
            {
              name: "Goals",
              description: "Outil de suivi des prévisions budgétaires",
            },
            {
              name: "CMS",
              description: "Outil de réponse à appel d’offres",
            },
          ],
          tasks: [
            { name: "Animation de workshops utilisateurs" },
            { name: "Avant-ventes" },
            { name: "Chiffrages, étude et analyse de besoins" },
            { name: "Développement d’évolutions et des corrections de bugs" },
            { name: "Suivi des recettes" },
            { name: "Mises en production" },
          ],
          stacks: [
            {
              type: "EasyRisk",
              technos: ["Polymer", "PostgreSQL", "Scala"],
            },
            {
              type: "Goals & CMS",
              technos: ["AngularJs", "NodeJs", "MongoDB"],
            },
          ],
        },
        {
          company: "Valeo",
          from: "2014-03-01",
          to: "2015-03-01",
          role: "Développeuse Java/AngularJs & Technical Leader & PPO",
          description:
            "Responsable des projets Valeo chez SFEIR. Technical Leader sur tous les projets et développement backend sur les projets les plus importants. Interactions permanentes avec 5 POs et le DSI Cloud.",
          projects: [
            {
              name: "Cloud Services",
              description: "Outils transverses",
            },
            {
              name: "ISPM",
              description: "Outil de suivi d’indicateurs des projets",
            },
            {
              name: "HUB",
              description: "Portail de connexion à la plateforme Valeo / Google",
            },
            {
              name: "Newscenter",
              description: "Outil de publication de news à destination des employés",
            },
            {
              name: "QnP",
              description: "Outil de suivi des alertes des chaînes de production",
            },
            {
              name: "Contact Search",
              description: "Outil de recherche d’employés",
            },
            {
              name: "Organization Search",
              description: "Outil de recherche des informations d’organisation Valeo",
            },
            {
              name: "Roles Search",
              description: "Outil de recherche des personnes ayant un rôle spécifique",
            },
            {
              name: "Roadmap",
              description: "Outil de suivi de la progression de la maturité des processus",
            },
          ],
          tasks: [
            {
              name: "Choix et mise en place de la stack technique pour le groupe",
            },
            { name: "Suivi des équipes de développement" },
            { name: "Animation de workshops utilisateurs" },
            { name: "Avant-ventes" },
            { name: "Chiffrages, étude et analyse de besoins" },
          ],
          sideRoles: [
            {
              company: "QnP",
              from: "2014-07-01",
              to: "2014-12-31",
              description: "Développement de PoC, des API et du backend",
            },
            {
              company: "Roadmap",
              from: "2013-06-01",
              to: "2014-02-28",
              description: "Développement de PoC, des API et du backend",
            },
            {
              company: "Newscenter",
              from: "2013-01-01",
              to: "2013-06-30",
              description: "Développement de PoC, des API et du backend",
            },
          ],
          stacks: [
            {
              type: "Front-ends",
              technos: ["GWT", "AngularJs"],
            },
            {
              type: "Back-ends",
              technos: ["Java", "GCP AppEngine", "GCP FileStorage", "GCP SearchAPI", "GCP Datastore"],
            },
          ],
        },
        {
          company: "CA-CIB",
          from: "2012-07-01",
          to: "2012-12-31",
          role: "Développeuse Java",
          description: "Evolutions effectuées dans le cadre des changements pour Bâle III.",
          projects: [
            {
              name: "CNR",
              description:
                "Application WEB permettant d’effectuer, de manière automatique, des tests de non régression fonctionnelle sur la librairie de calcul des risques de contreparties sur les opérations de marché",
            },
          ],
          tasks: [
            { name: "Etude et analyse du besoin" },
            { name: "Choix des évolutions de l’architecture" },
            {
              name: "Développement de contrôles effectuant des tests de cohérence sur les données en base",
              subtasks: [
                {
                  name: "Recalcul des indicateurs de risque (Loan Equivalent, Borrowing Equivalent, MtM, AaR, Global Risk, etc.)",
                },
              ],
            },
            {
              name: "Développement de contrôles effectuant des tests de non régression entre deux contextes",
              subtasks: [{ name: "Parsing des fichiers FpML" }, { name: "Comparaison des données de marché" }],
            },
            {
              name: "Développement de contrôles générant divers rapports pour les UAT",
            },
            { name: "Optimisation de l’application" },
            { name: "Mise en place de tests unitaires" },
            { name: "Mise en place du serveur d’exploitation" },
          ],
          stacks: [
            {
              type: "",
              technos: ["JEE5", "JSP", "Sybase"],
            },
          ],
        },
        {
          company: "I-CDC",
          from: "2012-01-01",
          to: "2012-07-01",
          role: "Architecte junior & Développeuse Java / GWT",
          description:
            "Intégration à la cellule d’architecture développant un socle technique. Ces développements ont nécessité le développement de POC.",
          tasks: [
            {
              name: "Développement d’un socle technique JEE à destination de développeurs",
            },
            {
              name: "Développement d’une application WEB en HTML5 / JQuery pour le portail CDC",
              subtasks: [
                { name: "Intégration à un portail Liferay" },
                { name: "Développement de portlets" },
                { name: "Développement de thèmes avec Velocity" },
              ],
            },
            {
              name: "Développement d’une application WEB en GWT pour l’usine de développement, permettant d’effectuer l’administration des utilisateurs et de leurs droits conjointement sur SVN, Continuum et Archiva",
              subtasks: [
                { name: "Etude et analyse du besoin" },
                { name: "Développement des écrans" },
                { name: "Développement des couches métier" },
                { name: "Connexion aux WS d’Archiva et Continuum" },
                {
                  name: "Parsing et écriture des fichiers d’administration SVN",
                },
              ],
            },
          ],
          stacks: [
            { type: "Socle technique", technos: ["JEE5", "Tomcat"] },
            {
              type: "POC Liferay",
              technos: ["Liferay 6.1", "HTML5", "Javascript", "JQuery", "Twitter Bootstrap", "JEE5"],
            },
            {
              type: "IHM admin",
              technos: ["GWT2.4", "Twitter Bootstrap", "Framework DEI", "Tomcat"],
            },
          ],
        },
        {
          company: "THALES Théresis",
          from: "2011-11-01",
          to: "2011-12-31",
          role: "Développeuse Java/GWT & ScrumMaster",
          description:
            "Application primée en interne pour sa simplicité d’utilisation. Réalisation des développements d’une application, dans le cadre d’une formation interne THALES.",
          projects: [
            {
              name: "AnaisHD",
              description:
                "Application WEB permettant d’effectuer la comparaison et la démonstration de matériel de surveillance longue distance, avec la prise de contrôle à distance de caméras HD et d’objectifs Angénieux HD",
            },
          ],
          tasks: [
            { name: "Etude et analyse du besoin" },
            { name: "Développement des écrans" },
            { name: "Développement des couches métier" },
            {
              name: "Développement du client Socket pour la connexion aux caméras",
            },
            { name: "Suivi de la recette" },
            { name: "Réalisation des icônes" },
          ],
          stacks: [
            {
              type: "",
              technos: ["GWT2.4", "Apache Mina", "Tomcat"],
            },
          ],
        },
        {
          company: "Storeforce",
          from: "2011-06-01",
          to: "2011-10-31",
          role: "Développeuse Java/GWT",
          description: "Développeuse junior",
          projects: [
            {
              name: "StoreForce",
              description:
                "Application WEB permettant à une chaîne de magasins de Grande Distribution de planifier les tâches des employés en fonction des stocks et des livraisons",
            },
          ],
          tasks: [
            { name: "Etude et analyse du besoin" },
            { name: "Développement des écrans" },
            { name: "Développement des couches métier" },
            {
              name: "Développement de l’algorithme de génération du planning",
            },
            { name: "Suivi de la recette" },
          ],
          stacks: [
            {
              type: "",
              technos: ["GWT2.3", "GCP AppEngine", "GCP Datastore"],
            },
          ],
        },
      ],
    },
    {
      company: "Alten SIR",
      from: "2007-05-01",
      to: "2011-05-31",
      role: "Opérationnelle & développeuse",
      jobs: [
        {
          company: "SGCIB",
          from: "2010-10-01",
          to: "2011-03-31",
          role: "Développeuse Java/GWT & Technical Leader",
          description:
            "Mise en place de l’intégration continue sur BACARDI, via des chaînes automatiques de validation des livraisons en intégration, à destination de la MOA",
          projects: [
            {
              name: "BACARDI",
              description: "Application Back-Office dédiée à l’analyse de risques pour les produits dérivés",
            },
          ],
          tasks: [
            {
              name: "Développement d’un ordonnanceur fonctionnel, client de BACARDI, à destination de la MOA",
              subtasks: [
                {
                  name: "Automatiser l’exécution de traitements fonctionnels, en fonction des impacts des développements en cours sur BACARDI",
                },
                {
                  name: "Génération automatique de jeux de données, injection des jeux et exécution séquencée",
                },
              ],
            },
            {
              name: "Mise en place d’une Software Factory (Automatisation des déploiements, des rafraîchissements de données, des tests fonctionnels)",
            },
            {
              name: "Développement d’outils d’automatisation des livraisons et de tests",
            },
            {
              name: "Développement d’une application de soumission automatique des demandes de rafraîchissement des environnements d’intégration",
            },
            {
              name: "Beta tests et configuration pour la migration de ClearCase vers Git",
            },
          ],
          stacks: [
            {
              type: "BACARDI",
              technos: ["Java JEE 6", "Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"],
            },
            {
              type: "Autres",
              technos: ["Java JEE 6", "API XStream", "GWT", "Git"],
            },
          ],
        },
        {
          company: "SGCIB",
          from: "2007-05-01",
          to: "2010-02-28",
          role: "Ingénieur opérationnel",
          description: "Assurance de la qualité des livraisons en production et de leur mise en production",
          projects: [
            {
              name: "EPROM",
              description: "Application Back-Office servant de référentiel des produits dérivés",
            },
          ],
          tasks: [
            { name: "Gestionnaire d’environnement" },
            { name: "Mise en place d’outils de gestion d’environnement" },
            {
              name: "Validation des outils de déploiement et d’industrialisation",
            },
            {
              name: "Coordination des équipes techniques lors des mises en production",
            },
            {
              name: "Mise en place de l’architecture internationale (intégration et production)",
            },
            { name: "Mise en place des procédés de monitoring internationaux" },
            {
              name: "Collaboration avec les équipes situées aux USA et au Japon",
            },
          ],
          stacks: [
            {
              type: "",
              technos: ["Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"],
            },
          ],
        },
      ],
    },
    {
      company: "Altran Technologies",
      from: "2006-02-01",
      to: "2007-05-31",
      role: "Ingénieur tests automatiques",
      jobs: [
        {
          company: "Bouygues Télécom",
          from: "2006-06-01",
          to: "2007-05-31",
          role: "Ingénieur tests automatiques",
          description: "Assurance de la qualité du logiciel et de la documentation projet",
          projects: [
            {
              name: "Gestion du Client",
              description: "Système de gestion des dossiers mobiles des clients (Forfaits, options…)",
            },
          ],
          tasks: [
            { name: "Elaboration de la stratégie de tests" },
            { name: "Qualification technique et fonctionnelle des versions" },
            {
              name: "Rédaction de documentations (Cahier de tests, PV de Recette Technique, PV de Recette Logicielle, Dossier Technique de Mise en Production)",
            },
            { name: "Support aux équipes de tests fonctionnels et aux équipes des tests de performance" },
            { name: "Support à la mise en production" },
            { name: "Suivi des anomalies de production" },
          ],
          stacks: [
            {
              type: "",
              technos: ["Oracle 9i", "LIGIS de MetaMicro", "Scripts", "PL/SQL"],
            },
          ],
        },
        {
          company: "France Télécom / Wanadoo",
          from: "2006-02-01",
          to: "2006-05-31",
          role: "Ingénieur tests automatiques",
          description:
            "Dans le cadre de la fusion Wanadoo / Orange. Qualification du Bus de Provisioning de Services (Bus de données du système de gestion de l’identité)",
          projects: [
            {
              name: "Gestion du Client",
              description: "Système de gestion des clients et de leur identité (compte email, téléphone etc.)",
            },
          ],
          tasks: [
            { name: "Mise en place de méthodologie de test" },
            { name: "Qualification des services de provisioning (1ème génération du bus, en Corba)" },
            { name: "Qualification des services de provisioning (2ème génération du bus, utilisant des WebServices)" },
            { name: "Qualification des SGBD : 2 générations de bases Sybase" },
          ],
          stacks: [
            {
              type: "",
              technos: ["Corba", "Sybase", "Oracle 9i", "Scripts", "PL/SQL"],
            },
          ],
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
  certifications: [
    {
      topic: "Polymer 200",
      company: "SFEIR",
      when: "2016-07-01",
    },
    {
      topic: "AngularJs 200",
      company: "SFEIR",
      when: "2016-01-01",
    },
    {
      topic: "Google Cloud Platform CP300",
      company: "Google",
      when: "2013-06-01",
    },
    {
      topic: "Google Cloud Platform CP200",
      company: "Google",
      when: "2013-03-01",
    },
  ],
};

export default cv;
