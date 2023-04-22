import { Resume } from "./models";

const resume: Resume = {
  firstname: "Céline",
  lastname: "Louvet",
  birthdate: "1980-12-02",
  firstExperience: "2006-02-01",
  email: "celine.louvet@gmail.com",
  website: "https://celine.louvet.me",
  title: "Staff engineer / Senior lead developer",
  location: "Lyon",
  zipCode: "69006",
  remotes: [
    { type: "FULLTIME", where: "France / Europe" },
    { type: "HYBRID", where: "Lyon" },
  ],
  hobbies: "Drawing, painting, clay modeling, sports",
  biographies: [
    "Backend developer and passionate, for 17 years, loves reaching stabilty and quality for production applications.",
    "Specializing into cloud architectures, with a liking for functional languages.",
    "Currently lead developer at Shine.",
  ],
  descriptions: [
    "Backend Senior Developer, in Typescript, with a liking for functional languages.",
    "Several experiences as lead developer or staff engineer, with developers teams management.",
    "Several experiences as Technical Leader, with legacy rework or from scratch creation, architecture and methodology practices set up.",
  ],
  skills: [
    "Build phase, wih stability and qulity as a goal",
    "Mentoring",
    "Domain Driven Design (DDD)",
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
      company: "Shine",
      from: "2023-02-06",
      role: "Senior Lead developer",
      remote: "FULLTIME",
      stacks: [
        {
          type: "Infrastructure",
          technos: [{ type: "GCP", technos: ["AppEngine", "Spanner", "FileStorage", "Pub/Sub", "Cloud function"] }],
        },
      ],
    },
    {
      company: "Pyxo",
      from: "2022-05-02",
      to: "2022-12-05",
      role: "Backend developer",
      descriptions: [
        "Backend developer on a microservices architecture, highly event-driven.",
        "Several methodologies set up ro reduce frictions with the product team and improve projects and QA follow-ups.",
      ],
      remote: "HYBRID",
      projects: [
        { name: "Pyxo", description: "B2B2C solution allowing to track returnable containers the customers have borrowed, in restaurants." },
      ],
      stacks: [
        {
          type: "Infrastructure",
          technos: [{ type: "AWS", technos: ["DynamoDB", "RDS", "CacheCluster", "SQS", "Function", "S3", "Cloudfront", "VPC"] }],
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
        "Technical leader with a mid-management role and a strategic involvement, while being glue for the team, and developing backend features.",
        "Mentoring of other managers. Mentoring of a junior developer in career change.",
        "The workload distribution between development and lead/management was 40-60%.",
      ],
      remote: "FULLTIME",
      projects: [
        {
          name: "Hubside Photos",
          description:
            "B2C solution dedicated, for the customers, to photos sharing and photobooks printing with layout designs and photo manipulations.",
        },
      ],
      tasks: [
        {
          name: "Hubside level",
          subtasks: [
            { name: "Set up of a system to catalog and handle existing technical debt, company-wide" },
            { name: "Technical roadmap definition" },
            { name: "Mentoring of other managers" },
          ],
        },
        {
          name: "Photos team level",
          subtasks: [
            { name: "Technical roadmap definition" },
            { name: "Architecture and stack designs" },
            { name: "Backend developments / PoC" },
            { name: "HR Management of a team of developers." },
            { name: "Mentoring of a junior developer in career change" },
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
        { type: "API", technos: ["Node", "Typescript", "REST", "Express", "Puppeteer"] },
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
          descriptions: [
            "Fullstack developer at the begining, then take over of the technical leadership after the departure of the previous leader.",
            "The workload distribution between development and lead/management was 70-30%.",
          ],
          projects: [
            {
              name: "Hubside Photos",
              description:
                "B2C solution dedicated, for the customers, to photos sharing and photobooks printing, with layout designs and photo manipulations.",
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
          role: "Backend developer",
          descriptions: ["Backend developer on recurring asynchronous processes."],
          projects: [{ name: "Foncia Stark", description: "Rework of the internal rental management software" }],
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
        "Startup incubator at Paris Dauphine University.",
        "Solution to collect customers review after a purchase, with a positive impact based on thr principle of 1 customer review  = 1 donation to an organization.",
        "Strategy and fundraising. Feature developments, hiring and mentorship of a, intern.",
      ],
      projects: [
        { name: "Showcase site", description: "B2B site dedicated to showcasing the product to the retailers" },
        { name: "Solution", description: "B2C web application dedicated, for the customers, to listing, searching and adding new reviews" },
        { name: "Prestashop AddOn", description: "AddOn dedicated, for the retailer, to managing and embed the received reviews" },
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
        "Management of a small team of developers, needing a change in the working habits, in order to scale-up.",
        "Hiring (search, follow-up and signature)",
      ],
      projects: [{ name: "Captain contrat", description: "B2C site dedicated to creating legal documents with forms help" }],
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
      descriptions: [
        "HR management of about 15 developers",
        "Realisation, every week, of technical hiring interviews",
        "Continous improvments of SFEIR internal processes",
        "SFEIR community technical animation (Codingame events organization, etc)",
      ],
      jobs: [
        {
          company: "SG Private Banking",
          from: "2016-09-01",
          to: "2017-06-20",
          role: "Fullstack developer & technical consulting",
          descriptions: [
            "Fullstack developer with a technical consulting role (architecture & AngularJs), in order to proactively respond to risks.",
          ],
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
          stacks: [{ type: "", technos: ["AngularJs", "Java 8", "PostgreSQL", "MongoDB"] }],
        },
        {
          company: "Deloitte France",
          from: "2015-04-01",
          to: "2016-08-31",
          role: "Developer & Technical Leader & Technical consulting for digital transformation",
          descriptions: [
            "Creation of a team dedicated to Cloud-hosted applications, in order to start the french entity's digital transformation.",
            "Technical consulting on architecture, recruitments, and mentorship. Functional and technical consulting on all design steps.",
            "User workshop animations. Pre-sales, Needs analysis and figures calculation.",
          ],
          projects: [
            {
              name: "EasyRisk",
              description:
                "B2B web application dedicated to catalog, analyze and evaluation all risks (GRC - Governance, risk management, and compliance)",
            },
            { name: "Goals", description: "B2B web application dedicated to manage and follow all budget forecasts" },
            { name: "CMS", description: "B2B web application dedicated to respond to calls to tenders" },
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
          role: "Java/AngularJs developer & Technical Leader",
          descriptions: [
            "Projects manager for Valeo at SFEIR, in liaison with 5 PMs and Cloud CIO.",
            "Architect, technical Leader and being glue on all projects, while developing backend features on the most crucial projects (Newscenter, Roadmap, QnP).",
            "Developers mentorship. User workshops animation. Pre-sales, needs analysis and figures calculation",
          ],
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
            { name: "Roles Search", description: "Microservice dedicated to search for employees with a specific role" },
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
          role: "Java developer",
          summarize: true,
          descriptions: ["Feature developments, optimizations & automation. Features implemented for Bâle III requirements."],
          projects: [
            {
              name: "CNR",
              description:
                "Web application used to automatically run functional non-regression tests on the library doing counterparty risks estimations on market transactions",
            },
          ],
          stacks: [{ type: "", technos: ["JEE5", "JSP", "Sybase"] }],
        },
        {
          company: "I-CDC",
          from: "2012-01-01",
          to: "2012-07-01",
          role: "Junior architect & Java / GWT developer",
          summarize: true,
          descriptions: [
            "Integrated in a team of architects providing a technical platform. Implementation of a technical platform for developers' use.",
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
          descriptions: [
            "Application awarded internally for its usage's simplicity.",
            "THALES employees needed to, in order to receive an internal certification, take part in the development of a project. I was the fullstack developer delivering the application for this project.",
          ],
          projects: [
            {
              name: "AnaisHD",
              description:
                "Web application used to demonstrate and compare several long range monitoring equipments, produced by THALES Angénieux, with the capacity to remotely control the cameras and HD lenses",
            },
          ],
          stacks: [{ type: "", technos: ["GWT2.4", "Apache Mina", "Tomcat"] }],
        },
        {
          company: "Storeforce",
          from: "2011-06-01",
          to: "2011-10-31",
          role: "Java/GWT developer",
          descriptions: ["Junior developer"],
          summarize: true,
          projects: [
            {
              name: "StoreForce",
              description: "Web application used by a retail store chain, to plan their employees' daily tasks depending on stocks and deliveries",
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
      role: "IT operations engineer & developer",
      summarize: true,
      jobs: [
        {
          company: "SGCIB",
          from: "2010-10-01",
          to: "2011-03-31",
          role: "Java/GWT developer & Technical Leader",
          descriptions: [
            "Creation and set up of software factory and continuous integration on BACARDI, where all functional tests are created by the product owners.",
          ],
          projects: [{ name: "BACARDI", description: "Back-office application dedicated to risk analysis on derivative products" }],
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
          descriptions: [
            "System and operations engineer. Deliveries on integration environments, quality checks on releases and deliveries to production environment.",
          ],
          projects: [
            { name: "EPROM", description: "Back-office application dedicated to derivative products, used as a refential by the others services" },
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
          descriptions: ["Software and documentation quality. Functional, technical and performance testing."],
          projects: [{ name: "Gestion du Client", description: "Service dedicated to managing all phone customers' contract (package, options…)" }],
          stacks: [{ type: "", technos: ["Oracle 9i", "LIGIS de MetaMicro", "Scripts", "PL/SQL"] }],
        },
        {
          company: "France Télécom / Wanadoo",
          from: "2006-02-01",
          to: "2006-05-31",
          role: "QA engineer",
          descriptions: ["For the merger between Wanadoo and Orange. Functional testing."],
          projects: [
            { name: "Gestion du Client", description: "Service dedicated to managing all clients profile and identity (email, phone etc.)" },
          ],

          stacks: [{ type: "", technos: ["Corba", "Sybase", "Oracle 9i", "Scripts", "PL/SQL"] }],
        },
      ],
    },
  ],
  talks: [
    {
      topic: "Votre mission ? Découvrir Haskell et le mettre en prod",
      slidesLink: "https://www.slideshare.net/celine_louvet/haskell-en-prod-123943994",
      videoLink: "https://www.youtube.com/watch?v=Omj9RvK1TbQ",
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
      slidesLink: "https://www.slideshare.net/celine_louvet/rex-polymer-50365257",
      where: [{ name: "Meetup Paris-WebComponents", when: "2015-07-09" }],
    },
    {
      topic: "Google Datastore & Search API",
      slidesLink: "https://www.slideshare.net/celine_louvet/google-datastore-search-api-93079759",
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
