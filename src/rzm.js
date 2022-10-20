const about = [
  'Full stack web developer living in the Sea to Sky corridor, with a background in technical support, network operations and communication. Passionate about learning, problem solving and iterative optimization.',
  'My super powers include creative thinking, determination, bug hunting (technical / bitey), plus the ability to make a salad that (most) people actually want to eat.',
  'Coworkers and clients have described me as patient, hard-working, clever and “pleasant to work with, as long as you don’t mind the literal LOL-ing coming from her desk”.',
]

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
  url: 'https://github.com/teknoboten/tripster',
  description:
    'Single page photo journal / map app built with React, Express, Firebase, Mapbox and SQL. Photos are parsed for exif data and added to a map as thumbnails. Responsive modals give a pleasant UX for adding / editing / viewing images.',
  tags: ['React', 'Express', 'Firebase', 'Mapbox', 'SQL', 'UX'],
}

const decisionWizard = {
  title: 'Decision Wizard',
  github: 'https://github.com/jtoguri/decision_wizard',
  url: 'https://github.com/jtoguri/decision_wizard',
  description:
    'Hybrid social polling app, written with Express, EJS, jQuery and SQL. Integrated Mailgun to automate notification emails. Learned a lot about ‘git sadness’ but more importantly -  how to avoid it.',
  tags: ['Express', 'EJS', 'jQuery', 'SQL'],
}

const lightHouseLabs = {
  school: 'Lighthouse Labs',
  program: 'Diploma of Web Development',
  year: 2022,
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
  languages: 'Javascript, CSS, HTML, SQL, Ruby',
  frameworks:
    'NodeJS, ReactJS, Express, EJS, Bootstrap, framer-motion, SASS, jQuery, styled components',
  toolbox:
    'Git, DNS, Mocha, Chai, Jest, Firebase, Netlify, Heroku, Mailgun, Mapbox, Postman, Postgres, MongoDB, Wordpress, Storybook, Figma',
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
    'Supported 24/7 operations of a global 0C-192 backbone network and the datacenters it connected. Showed me the joy of solving a technical mystery and the value of well defined processes. Used many network debugging tools such as MTR and tcpdump.',
  ],
  years: '2009 - 2012',
}

const wardrop = {
  company: 'Wardrop Engineering',
  position: 'I.T. Specialist',
  description: [
    'Managed daily I.T. for 60-100 on-site staff. Windows XP and a fleet of temperamental plotters taught me the grit I needed to “just figure it out”, and working with engineers who could design a bridge but not log into their laptop helped me develop empathy and patience.',
  ],
  years: '2009 - 2012',
}

const recentProjects = [squamishGreenlaw, tripster, decisionWizard]
const education = [lightHouseLabs, winnipegTech, uOfW]
const employment = [odns, peer1, wardrop]

//writing
//support.opendns.com/hc/en-us/articles/227987647-EDNS-Client-Subnet-FAQ
//https://umbrella.cisco.com/blog/a-love-letter-to-early-adopters

export { about, recentProjects, education, skills, employment }
