import { CV } from "./models";

const cv: CV = {
  firstname: "Céline",
  lastname: "Louvet",
  birthdate: "1980-12-02",
  firstExperience: "2006-02-01",
  email: "celine.louvet@gmail.com",
  website: "https://celine.louvet.me/en",
  title: "Senior lead developer",
  location: "Lyon",
  zipCode: "69006",
  remotes: [
    { type: "FULLTIME", where: "France / Europe" },
    { type: "HYBRID", where: "Lyon" },
  ],
  hobbies: "Drawing, painting, clay modeling, sports",
  descriptions: [
    "Backend Senior Developer, in Typescript, with a liking for functional languages.",
    "Several experiences as lead developer or staff engineer, with developers teams managment.",
    "Several experiences as Technical Leader, with legacy rework or from scratch creation, architecture and methodology practices set up.",
  ],
  skills: [
    "Build phase, wih stability and qulity as a goal",
    "Cloud architecture (GCP & AWS)",
    "Typescript",
    "NodeJs",
    "Google Cloud Platform (GCP)",
    "Tests & automation",
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
      description: "Backend developer on a microservices architecture, highly event-driven.",
      remote: false,
      projects: [
        { name: "Pyxo", description: "B2B2C solution allowing to track returnable containers the customers have borrowed, in restaurants." },
      ],
      tasks: [
        { name: "Implementation of a PoC for a demonstration to respond to a call to tender" },
        { name: "Implementation of a landing with a QR code that identifies an anonymous customer for a loan" },
        {
          name: "Implementation of loyalty program",
          subtasks: [{ name: "Functional analysis" }, { name: "Technical design" }, { name: "Backend developments" }],
        },
        {
          name: "Implementation of a referral program",
          subtasks: [{ name: "Functional analysis" }, { name: "Technical design" }, { name: "Backend developments" }],
        },
      ],
      stacks: [
        { type: "Infrastructure", technos: ["AWS DynamoDB", "AWS RDS", "AWS CacheCluster", "AWS SQS", "AWS function"] },
        { type: "Landing", technos: ["VanillaJs"] },
        { type: "Backend API", technos: ["Node", "Typescript", "Serverless"] },
      ],
    },
    {
      company: "Hubside",
      from: "2021-01-01",
      to: "2022-04-25",
      role: "Staff engineer / Senior Lead developer",
      description:
        "Technical leader with a mid-managment role and a strategic involvement, while being glue for the team, and developing backend features. The workload distribution between development and lead/management was 60-40%.",
      remote: true,
      projects: [
        {
          name: "Hubside Photos",
          description:
            "B2C solution dedicated, for the customers, to photos sharing and photobooks printing with layout designs and photo manipulations.",
        },
      ],
      tasks: [
        { name: "Architecture and stack designs" },
        { name: "Technical roadmap definition" },
        { name: "Set up of a system to catalog and handle existing technical debt, company-wide" },
        {
          name: "Backend developments / PoC",
          subtasks: [
            { name: "Photos upload" },
            { name: "Shared album creation" },
            { name: "Photo printing" },
            { name: "Photobook creation and printing" },
          ],
        },
        { name: "HR Management of a team of developers." },
      ],
      stacks: [
        { type: "Infrastructure", technos: ["GCP AppEngine", "GCP Datastore", "GCP FileStorage", "GCP Pub/Sub", "GCP Cloud Run"] },
        { type: "Frontend", technos: ["PWA", "ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)", "Storybook"] },
        { type: "Backend", technos: ["Node", "Typescript", "GraphQL (Apollo Server)"] },
        { type: "API", technos: ["Node", "Typescript", "REST", "Express"] },
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
          role: "Fullstack developer / Technical leader",
          description: "Fullstack developer at the begining, then take over of the technical leadership after the departure of the previous leader.",
          projects: [
            {
              name: "Hubside Photos",
              description:
                "B2C solution dedicated, for the customers, to photos sharing and photobooks printing, with layout designs and photo manipulations.",
            },
          ],
          tasks: [
            { name: "Photos upload" },
            { name: "Shared album creation" },
            { name: "Photo printing" },
            { name: "Photobook creation and printing" },
          ],
          stacks: [
            { type: "Common", technos: ["GCP AppEngine", "GCP Datastore", "GCP FileStorage", "GCP Pub/Sub", "GCP Cloud Run"] },
            { type: "Frontend", technos: ["ReactJs", "Typescript", "Jest", "Cypress", "GraphQL (Apollo Client)", "Storybook"] },
            { type: "Backend", technos: ["Node", "Typescript", "REST", "Express", "GraphQL (Apollo Server)"] },
          ],
        },
        {
          company: "Foncia Stark",
          from: "2019-03-01",
          to: "2019-08-10",
          role: "Backend developer",
          description: "Backend developer on recurring asynchronous processes.",
          projects: [{ name: "Foncia Stark", description: "Rework of the internal rental management software" }],
          tasks: [
            {
              name: "Asynchronous workers development",
              subtasks: [{ name: "Incoming and outgoing letters" }, { name: "Incoming wire transfers for rents" }, { name: "Outgoing bank debits" }],
            },
          ],
          stacks: [{ type: "Backend", technos: ["Javascript", "Node", "REST", "Express", "Jest"] }],
        },
      ],
    },
    {
      company: "Fairvioo",
      from: "2017-12-01",
      to: "2019-06-15",
      role: "CTO & co-founder",
      description:
        "Startup incubator at Paris Dauphine University. Solution to collect customers review after a purchase, with a positive impact based on thr principle of 1 customer review  = 1 donation to an organization.",
      projects: [
        { name: "Showcase site", description: "B2B site dedicated to showcasing the product to the retailers" },
        { name: "Solution", description: "B2C web application dedicated, for the customers, to listing, searching and adding new reviews" },
        { name: "Prestashop AddOn", description: "AddOn dedicated, for the retailer, to managing and embed the received reviews" },
      ],
      tasks: [
        { name: "Strategy and fundraising" },
        { name: "Architecture" },
        { name: "Features developments" },
        { name: "Intern hiring and mentorship" },
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
      description: "Management of a small team of developers, needing a change in the working habits, in order to scale-up.",
      projects: [{ name: "Captain contrat", description: "B2C site dedicated to creating legal documents with forms help" }],
      tasks: [
        { name: "Technical choices for a new customer module" },
        {
          name: "Methods set-up in order to",
          subtasks: [
            { name: "Increase the team eficiency and focus" },
            { name: "Increasing the produced code quality" },
            { name: "Reduce all frictions with the product and sales teams" },
          ],
        },
        { name: "HR management of a team of 3 developers" },
        { name: "Hiring: search, followup and signature" },
      ],

      stacks: [
        { type: "Legacy", technos: ["Ruby on Rails", "MySQL", "Amazon RDS", "Amazon EC2"] },
        { type: "Module client", technos: ["ReactJs", "Amazon S3"] },
      ],
    },
    {
      company: "SFEIR",
      from: "2011-05-01",
      to: "2017-06-20",
      role: "Team Leader, Technical Leader & developer",
      tasks: [
        { name: "HR management of about 15 developers" },
        { name: "Realisation, every week, of technical hiring interviews" },
        { name: "Continous improvments of SFEIR internal processes" },
        { name: "SFEIR community technical animation (Codingame events organization, etc)" },
      ],
      jobs: [
        {
          company: "SG Private Banking",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Fullstack developer & technical consulting",
          description: "Fullstack developer with a technical consulting role, in order to proactively respond to risks.",
          projects: [
            {
              name: "Active Advisory",
              description: "B2C web application dedicated to the customers, in order to give advices for financial products buying or sale",
            },
            {
              name: "Digital DAA",
              description:
                "B2B web application dedicated to the advisors, to distribute the financial assets depending on efficiency and risks selected",
            },
          ],
          tasks: [
            { name: "Technical consulting on the architecture" },
            { name: "Technical consulting on AngularJs" },
            { name: "Feature developments" },
          ],
          stacks: [{ type: "", technos: ["AngularJs", "Java 8", "PostgreSQL", "MongoDB"] }],
        },
        {
          company: "Deloitte France",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Developer & Technical Leader & Technical consulting for digital transformation",
          description:
            "Creation of a team dedicated to Cloud-hosted applications, in order to start the french entity's digital transformation. Technical consulting on architecture, recruitments, and mentorship. Functional and technical consulting on all design steps.",
          projects: [
            {
              name: "EasyRisk",
              description:
                "B2B web application dedicated to catalog, analyze and evaluation all risks (GRC - Governance, risk management, and compliance)",
            },
            { name: "Goals", description: "B2B web application dedicated to manage and follow all budget forecasts" },
            { name: "CMS", description: "B2B web application dedicated to respond to calls to tenders" },
          ],
          tasks: [
            { name: "User workshop animation" },
            { name: "Pre-sales" },
            { name: "Needs analysis and figures calculation" },
            { name: "Features and bug developments" },
            { name: "QA followups" },
            { name: "Releases" },
          ],
          stacks: [
            { type: "EasyRisk", technos: ["Polymer", "PostgreSQL", "Scala"] },
            { type: "Goals & CMS", technos: ["AngularJs", "NodeJs", "MongoDB"] },
          ],
        },
        {
          company: "Valeo",
          from: "2014-03-01",
          to: "2015-03-01",
          role: "Java/AngularJs developer & Technical Leader",
          description:
            "Projects manager for Valeo at SFEIR. Architect, technical Leader and being glue on all projects, while developing backend features on the most crucial projects. Several interactions with 5 POs and Cloud CIO.",
          projects: [
            {
              name: "Roadmap",
              description: "Web application dedicated to follow and estimate the maturity levels of all internal processes, company-wide (CMMI)",
            },
            { name: "ISPM", description: "Web application dedicated for the management, to help follow projects KPIs" },
            { name: "HUB", description: "Login portal to Valeo / Google platform" },
            { name: "Newscenter", description: "Web application dedicated to publish communication and news to all Valeo employees" },
            { name: "QnP", description: "Web application dedicated for quality management, to help follow all production incidents" },
            { name: "Cloud Services", description: "Common transversal tools and services" },
            { name: "Contact Search", description: "Microservice dedicated to search for employees" },
            { name: "Organization Search", description: "Microservice dedicated to search for Valeo organization informations" },
            { name: "Roles Search", description: "Microservice dedicated to search for employes with a specific role" },
          ],
          tasks: [
            { name: "Architecture choice for the group and implementation" },
            { name: "Developers follow-up and mentorship" },
            { name: "User workshops animation" },
            { name: "Pre-sales" },
            { name: "Needs analysis and figures calculation" },
          ],
          sideRoles: [
            {
              company: "QnP",
              from: "2014-07-01",
              to: "2014-12-31",
              description: "PoC, API and backend features implementation",
            },
            {
              company: "Roadmap",
              from: "2013-06-01",
              to: "2014-02-28",
              description: "PoC, API and backend features implementation",
            },
            {
              company: "Newscenter",
              from: "2013-01-01",
              to: "2013-06-30",
              description: "PoC, API and backend features implementation",
            },
          ],
          stacks: [
            { type: "Front-ends", technos: ["GWT", "AngularJs"] },
            { type: "Back-ends", technos: ["Java", "GCP AppEngine", "GCP FileStorage", "GCP SearchAPI", "GCP Datastore"] },
          ],
        },
        {
          company: "CA-CIB",
          from: "2012-07-01",
          to: "2012-12-31",
          role: "Java developer",
          summarize: true,
          description: "Features implemented for Bâle III requirements.",
          projects: [
            {
              name: "CNR",
              description:
                "Web application used to automaticaly run functional non-regression tests on the library doing counterparty risks estimations on market transactions",
            },
          ],
          tasks: [
            { name: "Needs analysis" },
            { name: "Architecture choices and improvements" },
            {
              name: "Implementation of database consistency tests",
              subtasks: [{ name: "Risk indicators computation (Loan Equivalent, Borrowing Equivalent, MtM, AaR, Global Risk, etc.)" }],
            },
            {
              name: "Implementation of non regression tests between contexts",
              subtasks: [{ name: "FpML files parsing" }, { name: "Comparison between market data" }],
            },
            { name: "Implementation of tests generating UAT reports" },
            { name: "Application optimisation" },
            { name: "Unit tests implementation" },
            { name: "Production server infra " },
          ],
          stacks: [{ type: "", technos: ["JEE5", "JSP", "Sybase"] }],
        },
        {
          company: "I-CDC",
          from: "2012-01-01",
          to: "2012-07-01",
          role: "Junior architect & Java / GWT developer",
          summarize: true,
          description: "Integrated in a team of architects providing a technical platform. Several PoC were implemented.",
          tasks: [
            { name: "Building a technical platform in JEE for developer's use" },
            {
              name: "Creation of a web application in HTML5 / JQuery for CDC portal",
              subtasks: [{ name: "Liferay portal embedding" }, { name: "Portlets implementation" }, { name: "Velocity themes implementations" }],
            },
            {
              name: "Creation of a GWT web application for the deployment factory, used to manage all users and their roles, between SVN, Continuum and Archiva",
              subtasks: [
                { name: "Needs analysis" },
                { name: "Screens implementation" },
                { name: "Business layer implementation" },
                { name: "Connection to Archiva WS" },
                { name: "Connection to Continuum WS" },
                { name: "SVN administration files parsing and update" },
              ],
            },
          ],
          stacks: [
            { type: "Technical platform", technos: ["JEE5", "Tomcat"] },
            { type: "POC Liferay", technos: ["Liferay 6.1", "HTML5", "Javascript", "JQuery", "Twitter Bootstrap", "JEE5"] },
            { type: "Admin UI", technos: ["GWT2.4", "Twitter Bootstrap", "Framework DEI", "Tomcat"] },
          ],
        },
        {
          company: "THALES Théresis",
          from: "2011-11-01",
          to: "2011-12-31",
          role: "Java/GWT developer & ScrumMaster",
          summarize: true,
          description:
            "Application awarded internally for its usage's simplicity. THALES employees needed to, in order to receive an internal certification, take part in the development of a project. I was the fullstack developer delivering the application for this project.",
          projects: [
            {
              name: "AnaisHD",
              description:
                "Web application used to demonstrate and compare several long range monitoring equipments, produced by THALES Angénieux, with the capacity to remotely control the cameras and HD lenses",
            },
          ],
          tasks: [
            { name: "Needs analysis" },
            { name: "Screens implementation" },
            { name: "Business layer implementation" },
            { name: "Cameras socket client implementation" },
            { name: "QA follow-up" },
            { name: "Icons design" },
          ],
          stacks: [{ type: "", technos: ["GWT2.4", "Apache Mina", "Tomcat"] }],
        },
        {
          company: "Storeforce",
          from: "2011-06-01",
          to: "2011-10-31",
          role: "Java/GWT developer",
          description: "Junior developer",
          summarize: true,
          projects: [
            {
              name: "StoreForce",
              description: "Web application used by a retail store chain, to plan their employees' daily tasks depending on stocks and deliveries",
            },
          ],
          tasks: [
            { name: "Needs analysis" },
            { name: "Screens implementation" },
            { name: "Business layer implementation" },
            { name: "Automated planning algorithm implementation" },
            { name: "QA follow-up" },
          ],
          stacks: [{ type: "", technos: ["GWT2.3", "GCP AppEngine", "GCP Datastore"] }],
        },
      ],
    },
    {
      company: "Alten SIR",
      from: "2007-05-01",
      to: "2011-05-31",
      role: "IT operations engineer & developer",
      summarize: true,
      jobs: [
        {
          company: "SGCIB",
          from: "2010-10-01",
          to: "2011-03-31",
          role: "Java/GWT developer & Technical Leader",
          description:
            "Creation and set up of software factory and continuous integration on BACARDI, where all functional tests are created by the product owners.",
          projects: [{ name: "BACARDI", description: "Back-office application dedicated to risk analysis on derivative products" }],
          tasks: [
            {
              name: "Implementation of an automated functional workflow, consumer of BACARDI, used by the product owners",
              subtasks: [
                { name: "Automated execution, depending of the developments done on BACARDI" },
                { name: "Fixtures generation (data sets and injection)" },
              ],
            },
            { name: "Set up of a Software factory (Automated deployments, data refresh, automated functional tests)" },
            { name: "Implementation of automation tools" },
            { name: "Creation of a web application used to submit data refresh requests for an integration environment" },
            { name: "Beta tests and configuration on a migration from ClearCase to Git" },
          ],
          stacks: [
            { type: "BACARDI", technos: ["Java JEE 6", "Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"] },
            { type: "Others", technos: ["Java JEE 6", "API XStream", "GWT", "Git"] },
          ],
        },
        {
          company: "SGCIB",
          from: "2007-05-01",
          to: "2010-02-28",
          role: "IT operations engineer",
          description:
            "System and operations engineer. Deliveries on integration environments, quality checks on releases and deiveries to production environment.",
          projects: [
            { name: "EPROM", description: "Back-office application dedicated to derivative products, used as a refential by the others services" },
          ],
          tasks: [
            { name: "Environment manager" },
            { name: "Implementation of tools used to manage the environments" },
            { name: "QA on deployment scripts" },
            { name: "Coordination of technical teams during releases" },
            { name: "Set up of international physical infrastructure (integration and production)" },
            { name: "Set up of international monitoring processes" },
            { name: "Coordination with US and Japan based teams" },
          ],
          stacks: [{ type: "", technos: ["Oracle 10g", "Sybase", "PL/SQL", "Scripts", "ClearCase"] }],
        },
      ],
    },
    {
      company: "Altran Technologies",
      from: "2006-02-01",
      to: "2007-05-31",
      role: "QA engineer",
      summarize: true,
      jobs: [
        {
          company: "Bouygues Télécom",
          from: "2006-06-01",
          to: "2007-05-31",
          role: "QA engineer",
          description: "Software and documentation quality. Functional, technical and performance tests.",
          projects: [{ name: "Gestion du Client", description: "Service dedicated to managing all phone customers' contract (package, options…)" }],
          tasks: [
            { name: "Test strategy definition" },
            { name: "Technical and functional QA" },
            { name: "Writing project docs (test plans, technical and functional QA reports, delivery plan)" },
            { name: "Production bug follow-up" },
          ],
          stacks: [{ type: "", technos: ["Oracle 9i", "LIGIS de MetaMicro", "Scripts", "PL/SQL"] }],
        },
        {
          company: "France Télécom / Wanadoo",
          from: "2006-02-01",
          to: "2006-05-31",
          role: "QA engineer",
          description: "For the merger between Wanadoo and Orange.",
          projects: [
            { name: "Gestion du Client", description: "Service dedicated to managing all clients profile and identity (email, phone etc.)" },
          ],
          tasks: [],
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
  certifications: [
    { topic: "Polymer 200", company: "SFEIR", when: "2016-07-01" },
    { topic: "AngularJs 200", company: "SFEIR", when: "2016-01-01" },
    { topic: "Google Cloud Platform CP300", company: "Google", when: "2013-06-01" },
    { topic: "Google Cloud Platform CP200", company: "Google", when: "2013-03-01" },
  ],
};

export default cv;
