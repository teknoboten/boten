const catchEmAll = {
  title: 'Catch Em All!',
  github: 'https://github.com/teknoboten/catch-em-all',
  description:
    'Simple responsive React front end and Express REST API. Added Docker containers for both server and client.',
  tags: ['Express', 'Docker', 'Material UI', 'Styled Components', 'React'],
}

const squamishGreenlaw = {
  title: 'Squamishgreenlaw.ca',
  github: 'https://github.com/teknoboten/SquamishGreenlaw',
  url: 'https://www.squamishgreenlaw.ca/',
  description:
    'Single page app built with “artisanal” HTML, CSS, Javascript, and a dash of Bootstrap. Set up continuous deployment using Netlify / GitHub and used Stripe’s API for managing donations.',
  tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Netlify', 'Github'],
}

const tripster = {
  title: 'Tripster',
  github: 'https://github.com/teknoboten/tripster',
  url: undefined,
  description:
    'Single page photo journal / map app built with React, Express, Firebase, Mapbox and SQL. Photos are parsed for exif data and added to a map as thumbnails. Responsive modals give a pleasant UX for adding / editing / viewing images.',
  tags: ['React', 'Express', 'Firebase', 'Mapbox', 'SQL', 'UX'],
}

const fetchDogs = {
  title: 'fetch Dogs',
  github: 'https://github.com/teknoboten/fetchDogs',
  url: 'https://sparkling-macaron-10cdb5.netlify.app/',
  description:
    'A silly app I made while teaching myself Redux, MaterialUI and ReactDND. ',
  tags: ['React', 'Redux', 'UX'],
}

const decisionWizard = {
  title: 'Decision Wizard',
  github: 'https://github.com/jtoguri/decision_wizard',
  url: undefined,
  description:
    'Hybrid social polling app, written with Express, EJS, jQuery and SQL. Integrated Mailgun to automate notification emails. Learned a lot about ‘git sadness’ but more importantly -  how to avoid it.',
  tags: ['Express', 'EJS', 'jQuery', 'SQL'],
}

const lightHouseLabs = {
  school: 'Lighthouse Labs',
  program: 'Diploma of Web Development',
  year: 2022,
}

const bcit = {
  school: 'British Columbia Institute of Technology',
  program: 'Certificate in Linux Administration',
  year: 2012,
}

const ccna = {
  program: 'Cisco Certified Network Analyst',
  year: 2010,
}

const winnipegTech = {
  school: 'Winnipeg Technical College',
  program: 'Diploma of Network Administration',
  year: 2006,
}

const uOfW = {
  school: 'University of Winnipeg',
  program: 'Bachelor of Social Science',
  year: 2005,
}

const skills = {
  languages: 'Typescript, Javascript, GO, CSS, HTML, SQL',
  frameworks:
    'Next.js, React.js, MaterialUI, Express, EJS, Bootstrap, framer-motion, jQuery, styled components',
  toolbox:
    'Git, Docker, DNS, Firebase, Netlify, Heroku, Mailgun, Postgres, MongoDB, Shopify, Wordpress',
}

const odns = {
  company: 'Open DNS',
  position: 'Technical Support Engineer',
  description: [
    'Worked with a small, agile team to support the development and launch of DNS-based security solutions. Tracked and tested issues with beta users and provided feedback to product management. Created content for customer facing knowledge base and support training.',
    'Also worked with the operations team to expand peering connectivity and spearheaded a project to support adoption of eDNS.',
  ],
  years: '2012 - 2014',
}

const peer1 = {
  company: 'PEER 1 Hosting',
  position: 'Network Analyst',
  description: [
    'Supported 24/7 operations of a global 0C-192 backbone network and the datacenters it connected. Assisted colocation clients with network configuration. Showed me the joy of solving a technical mystery and the value of well defined processes. Used many network debugging tools such as MTR and tcpdump.',
  ],
  years: '2009 - 2012',
}

const wardrop = {
  company: 'Wardrop Engineering',
  position: 'I.T. Specialist',
  description: [
    'Managed daily I.T. for 60-100 on-site staff. Windows XP and a fleet of temperamental plotters taught me the grit I needed to “just figure it out”, and working with engineers who could design a bridge but not log into their laptop helped me develop confidence, empathy and patience.',
  ],
  years: '2006 - 2009',
}

const recentProjects = [
  catchEmAll,
  squamishGreenlaw,
  tripster,
  fetchDogs,
  decisionWizard,
]
const education = [lightHouseLabs, bcit, ccna, winnipegTech, uOfW]
const employment = [odns, peer1, wardrop]

//writing
//support.opendns.com/hc/en-us/articles/227987647-EDNS-Client-Subnet-FAQ
//https://umbrella.cisco.com/blog/a-love-letter-to-early-adopters

export { recentProjects, education, skills, employment }
