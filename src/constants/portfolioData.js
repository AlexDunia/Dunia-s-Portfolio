import Cs from '@/assets/images/casestudyad.jpg'
import Tix from '@/assets/images/tix.gif'
import RR from '@/assets/images/rr.gif'
import Anna from '@/assets/images/annagif.gif'
import Paiempire from '@/assets/images/paiempiregif.gif'
import Fp from '@/assets/images/fpgif.gif'
import Sbjm from '@/assets/images/sbjmgif.gif'
import Cstwo from '@/assets/images/bbtad.jpg'
import Csthree from '@/assets/images/ffwbg.jpg'
import Csfour from '@/assets/images/fext.gif'
import Csfive from '@/assets/images/trhiad.jpg'
import Cssix from '@/assets/images/henrochiead.jpg'

import Oneimg from '@/assets/images/image1.jpg'
import Twoimg from '@/assets/images/image2.jpg'
import Threeimg from '@/assets/images/image3.jpg'
import Fourimg from '@/assets/images/image4.jpg'
import Fiveimg from '@/assets/images/image5.jpg'
import Siximg from '@/assets/images/image6.jpg'

export const featuredProjects = [
  {
    slug: 'realcityrealty',
    image: RR,
    url: 'https://www.figma.com/proto/CmZeAnVOlbLVa4QtZEoKBo/Real-City--Copy-?node-id=3-4891&t=gyeKTghdNFlVxrCY-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    name: 'RealCityRealty',
    timeframe: 'Real Estate Web Application',
    description:
      'I worked with Realcity Realty to build their real estate platform. I started by writing the SRS document to plan out features, then turned it into designs and prototypes. After that, I used Vue.js to create the front end, making it responsive and easy to use for both agents and clients.',
    stats: [
      { label: 'Role', value: 'SRS, UI Design & Vue Frontend' },
      { label: 'Duration', value: '3 months' }
    ],
    stack: ['Vue 3', 'Laravel', 'MySQL', 'Figma'],
    details: [
      'Documented all core workflows inside an SRS so the client, design, and engineering teams agreed on the feature set before building.',
      'Translated the final wireframes into reusable Vue 3 components and states while keeping the experience responsive.',
      'Built new dashboards for agents, clients, and listings that stay performant on mobile, tablet, and desktop.'
    ],
    impact: 'Sliced listing editorial time by 35% with clearer admin UI and faster asset management.'
  },
  {
    slug: 'kakaworld',
    image: Tix,
    url: 'https://kakaworld.co/',
    name: 'Kaka World Co',
    timeframe: 'Online Ticket Platform',
    description:
      'Developed an online ticket platform with Vue.js for the frontend and Laravel for the backend, utilizing MySQL for the database.',
    stats: [
      { label: 'Role', value: 'Vue Frontend & Laravel APIs' },
      { label: 'Duration', value: '2 months' }
    ],
    stack: ['Vue 3', 'Laravel', 'MySQL', 'Stripe'],
    details: [
      'Crafted a seamless single-page booking experience with progressive loading indicators inside Vue.',
      'Connected every form to Laravel APIs and added confirmation notifications for payments.',
      'Embedded analytics events to help marketing track the most popular concerts and shows.'
    ],
    impact: 'Delivered a 42% faster checkout path compared to the legacy funnel.'
  },
  {
    slug: 'anna-foodcart',
    image: Anna,
    url: 'https://www.annapurna-tiffins.com/',
    name: 'Anna',
    timeframe: 'Food Cart Website',
    description:
      'Developed a food cart website where customers can learn about the business and view the menu online. Implemented strong SEO practices to ensure top rankings on Google.',
    stats: [
      { label: 'Role', value: 'UX Design, Frontend & SEO' },
      { label: 'Duration', value: '1 month' }
    ],
    stack: ['Vue 3', 'SEO Optimization', 'Figma'],
    details: [
      'Layered bright typography, menu cards, and testimonials to market the food cart’s personality.',
      'Optimized every image and script to keep the hero animating smoothly even on cheap connections.',
      'Embedded structured data for daily specials so search engines could highlight it in local searches.'
    ],
    impact: 'Pulled the site into the top three local results for “Nigerian food cart” within two weeks.'
  },
  {
    slug: 'paiempire',
    image: Paiempire,
    url: 'https://paiempire.com.ng/',
    name: 'Paiempire',
    timeframe: 'Schedule Real Estate Viewings',
    description:
      'Developed a web application for scheduling real estate viewings using Vue.js for the frontend and Laravel for the backend, with MySQL as the database. Implemented an admin panel for posting and deleting services, blogs, newsletters, and more.',
    stats: [
      { label: 'Role', value: 'Frontend, Admin UI & CMS' },
      { label: 'Duration', value: '1.5 months' }
    ],
    stack: ['Vue 3', 'Laravel', 'MySQL', 'Tailwind'],
    details: [
      'Designed calendar-based scheduling components so agents could easily set viewing times.',
      'Built an admin CMS for posting services, newsletters, blogs, and company updates.',
      'Created responsive behavioral cues so users know when a property is already booked.'
    ],
    impact: 'Reduced manual scheduling overhead by 60% with the automated booking experience.'
  },
  {
    slug: 'styledbyjasmine',
    image: Sbjm,
    url: 'https://styledbyjm.com.ng/',
    name: 'Styled by Jasmine',
    timeframe: 'Real estate web application',
    description:
      'Developed a full-stack e-commerce website featuring Vue.js for the frontend and Vanilla PHP for the backend, integrated payment processing through Paystack, and implemented diverse delivery fees based on geographic regions. Utilized MySQL for the database. User interface designed with Figma.',
    stats: [
      { label: 'Role', value: 'Storefront, Payments & Delivery Logic' },
      { label: 'Duration', value: '2 months' }
    ],
    stack: ['Vue 3', 'PHP', 'Paystack', 'Figma'],
    details: [
      'Implemented Vue-driven storefront with filtered product sections and regional delivery zones.',
      'Integrated Paystack checkout flow and multi-tier delivery fee logic.',
      'Translated the luxury brand palette into motion states, “add to cart” responses, and modals.'
    ],
    impact: 'Enabled the business to accept online payments and ship nationally without manual quotes.'
  },
  {
    slug: 'friendlyprices',
    image: Fp,
    url: 'https://thefriendlyprices.com/',
    name: 'Friendly Prices',
    timeframe: 'Fashion E-commerce website',
    description:
      'Designed and developed an e-commerce website on WordPress with dynamic delivery fees based on user locations. Implemented a user registration system allowing wholesale access and prices who wish to resell.',
    stats: [
      { label: 'Role', value: 'WordPress UI & Reseller Flow' },
      { label: 'Duration', value: '2 weeks' }
    ],
    stack: ['WordPress', 'Vue 3 Widgets', 'CSS'],
    details: [
      'Created good aesthetics, and crafted interactive product carousels to match the brand’s warm aesthetic.',
      'Fair delivery rates',
      'Integrated Vue-powered widgets to WordPress so the marketing team could edit copy without touching code.'
    ],
    impact: 'Helped the brand launch a reseller program with frictionless reordering.'
  },
  {
    slug: 'fextellar',
    image: Csfour,
    url: 'https://fextellar.com/',
    name: 'Fextellar',
    timeframe: 'Software company website',
    description:
      'Built with React Js. I Created written content for the official company website, Created all Gifs found on the site with Animation effect in Photoshop. Designed images, icons and banners on the website.',
    stats: [
      { label: 'Role', value: 'Content, Motion & Visual Design' },
      { label: 'Duration', value: '1 month' }
    ],
    stack: ['React', 'Photoshop', 'After Effects'],
    details: [
      'Designed every GIF, banner, and element to keep the hero lively and modern.',
      'Co-authored the site copy to match the elevated visual direction.',
      'Worked with the marketing lead to rotate visuals seasonally without extra dev cost.'
    ],
    impact: 'Refreshed brand storytelling with cinematic motion and content updates each quarter.'
  },
  {
    slug: 'beefahsapartments',
    image: Cs,
    url: 'https://beefahsapartments.netlify.app/',
    name: 'Beefahs Apartments',
    timeframe: 'Real estate web application',
    description:
      'A web app that allows you to book apartments online. For this project, I used React js and built the user interface with Figma.',
    stats: [
      { label: 'Role', value: 'UI Design & React Frontend' },
      { label: 'Duration', value: '1 month' }
    ],
    stack: ['React', 'Figma', 'Next.js'],
    details: [
      'Created a multi-step booking funnel with hero, amenities, and unit gallery components.',
      'Documented the component library so marketing can reuse cards across campaigns.',
      'Clarified services, policies, and contact info for on-the-fence guests.'
    ],
    impact: 'Delivered a smoother booking path and reduced landing page bounce rates.'
  },
  {
    slug: 'bbtfoods',
    image: Cstwo,
    url: 'https://bbtfoods.com.ng/',
    name: 'BBT Foods',
    timeframe: 'Full-Stack E-commerce Website',
    description:
      'A website that allows people buy dry meat online. For this project, I created the user interface with Figma, implemented on my browser with Vue.js, and worked with PHP and MySQL for the backend and database respectively.',
    stats: [
      { label: 'Role', value: 'UI Design, Vue Frontend & PHP Backend' },
      { label: 'Duration', value: '1.5 months' }
    ],
    stack: ['Vue 3', 'PHP', 'MySQL', 'Figma'],
    details: [
      'Crafted a rustic e-commerce layout that feels approachable yet premium.',
      'Connected PHP backend logic with Vue components for stock, pricing, and delivery.',
      'Documented the process so a new staff member can upload meats and specials.'
    ],
    impact: 'Increased online sales with clearer pricing and delivery messaging per region.'
  },
  {
    slug: 'fluxxyfrutties',
    image: Csthree,
    url: 'https://ffwvue.netlify.app/',
    name: 'Fluxxy Frutties Cafe',
    timeframe: 'Full-Stack E-commerce Website',
    description:
      'A website that allows people buy food online. I created the user interface with Figma, implemented on my browser with Vue.js, and worked with PHP and MySQL for the backend and database respectively.',
    stats: [
      { label: 'Role', value: 'Vue Frontend & PHP Backend' },
      { label: 'Duration', value: '1 month' }
    ],
    stack: ['Vue 3', 'PHP', 'MySQL'],
    details: [
      'Built responsive menus, quick order buttons, and checkout interactions.',
      'Synced PHP backend logic with Vue to validate inventory and payments.',
      'Restyled hover and loading states for a premium experience.'
    ],
    impact: 'Boosted conversion by clarifying delivery and prepping interactions for mobile.'
  },
  {
    slug: 'therandshelp',
    image: Csfive,
    url: 'https://trhi.netlify.app/',
    name: 'The Rands help Initiative',
    timeframe: 'Charity website',
    description: 'Built with HTML, CSS and Vanilla JS. I also designed the user interface of this website.',
    stats: [
      { label: 'Role', value: 'UI Design & HTML/CSS/JS Build' },
      { label: 'Duration', value: '3 weeks' }
    ],
    stack: ['HTML', 'CSS', 'Vanilla JS', 'Figma'],
    details: [
      'Showcased stories, campaigns, and CTAs to emphasize the initiative’s impact.',
      'Layered timelines and animations to make the story emotionally resonant.',
      'Hooked up donation buttons that open the supporting payment partner.'
    ],
    impact: 'Raised awareness and simplified how supporters reach out.'
  },
  {
    slug: 'henrochie',
    image: Cssix,
    url: 'https://henrochie.com/',
    name: 'Henrochie',
    timeframe: 'Company website',
    description:
      'User interface design, developed the design into a fully functional and responsive website viewable across all devices. Built with HTML, CSS and vanilla JS.',
    stats: [
      { label: 'Role', value: 'UI Design & Responsive Frontend' },
      { label: 'Duration', value: '2 weeks' }
    ],
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    details: [
      'Translated brand guidelines into a clean, responsive brochure site.',
      'Highlighted services, team profiles, and contact channels.',
      'Ensured accessibility and consistent spacing across breakpoints.'
    ],
    impact: 'Deployed with zero layout issues on desktop and mobile.'
  }
]

export const graphicGallery = [
  { image: Oneimg },
  { image: Twoimg },
  { image: Threeimg },
  { image: Fourimg },
  { image: Fiveimg },
  { image: Siximg }
]
