'use strict';
// Replace these sample editorial summaries with approved, accurate case-study details.
const projects = {
  greenhorizons: {title:'Greenhorizons', lead:'Bringing a long-established turf brand into a new digital and visual era.', services:'Brand systems, website design, digital marketing, campaign creative', story:'A multi-touchpoint design practice for Greenhorizons Sod Farms and its related brands. Work spans digital experiences, campaign creative, signage and branded communication.', outcome:'Before publishing: add a precise breakdown of your contribution, approved photographs, and any outcomes you have permission to share.', image:'assets/projects/greenhorizons.jpg', fallback:'A greener perspective.'},
  jp: {title:'JP / Personal Identity',lead:'A distinctive illustrated identity with personality at its centre.',services:'Logo design, illustration, identity applications',story:'An illustrated mark developed into a versatile visual system, with applications across business cards, apparel and merchandise.',outcome:'Before publishing: include finished logo artwork, black-and-white variations and production mockups.',image:'assets/projects/jp-identity.jpg',fallback:'JP ✦'},
  youngs: {title:'Youngs Insurance',lead:'Connecting a trusted business to the right audiences through considered digital creative.',services:'Digital marketing, creative direction, campaign assets',story:'Creative and digital campaign work developed to support Youngs Insurance Brokers across multiple audience touchpoints.',outcome:'Add verified performance figures, a date range and attribution details if you wish to feature campaign results.',image:'assets/projects/youngs.jpg',fallback:'Make every impression count.'},
  christmas: {title:'Growing Joy',lead:'A seasonal design made to be experienced, not just seen.',services:'Art direction, printed collateral, specialty finishes',story:'A tactile holiday card concept pairing seasonal storytelling with print-production thinking, including foil, embossing and gloss details.',outcome:'Use production photographs when available and distinguish concept artwork from finished print.',image:'assets/projects/holiday-card.jpg',fallback:'Growing joy.'},
  review: {title:'Design Review',lead:'Making creative collaboration clearer, faster and more intentional.',services:'UX/UI design, front-end development, workflow design',story:'A purpose-built review workspace developed around project briefs, creative uploads, feedback, priorities and approvals.',outcome:'Use anonymized screenshots and describe your specific design and development role.',image:'assets/projects/design-review.jpg',fallback:'Good ideas deserve good feedback.'},
  giveback: {title:'Design for Good',lead:'Using design to help community initiatives create meaningful impact.',services:'Event identity, campaign creative, print and digital collateral',story:'Campaign and event design associated with charitable initiatives, including fundraising activations supporting community causes.',outcome:'Add approved event imagery, partner credit and verified fundraising results before publication.',image:'assets/projects/giveback.jpg',fallback:'GOOD MADE VISIBLE'}
};
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
const count = document.querySelector('.filter[data-filter="all"] span');
if (count) count.textContent = String(cards.length).padStart(2, '0');
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(filter => { const active = filter === button; filter.classList.toggle('active',active); filter.setAttribute('aria-pressed',String(active)); });
  cards.forEach(card => {card.hidden = selected !== 'all' && !card.dataset.category.split(' ').includes(selected);});
}));
const dialog = document.getElementById('case-modal');
let currentProject = null;
function openProject(id){
  const project = projects[id]; if (!project) return;
  currentProject = id;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-lead').textContent = project.lead;
  document.getElementById('modal-services').textContent = project.services;
  document.getElementById('modal-story').textContent = project.story;
  document.getElementById('modal-outcome').textContent = project.outcome;
  const image = document.getElementById('modal-image');
  image.replaceChildren();
  const picture = new Image();picture.alt = project.title + ' case study visual';picture.src=project.image;
  picture.onerror = () => {const fall=document.createElement('div');fall.className='modal-fallback';fall.textContent=project.fallback;image.replaceChildren(fall);};
  image.append(picture);
  if (!dialog.open) dialog.showModal();
  dialog.querySelector('.modal-scroll').scrollTop=0;
}
cards.forEach(card=>card.addEventListener('click',()=>openProject(card.dataset.project)));
document.getElementById('modal-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.getElementById('modal-next').addEventListener('click',()=>{const keys=Object.keys(projects);openProject(keys[(keys.indexOf(currentProject)+1)%keys.length]);});
const menuButton=document.querySelector('.menu-toggle'),mobileMenu=document.getElementById('mobile-menu');
menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Open menu':'Close menu');mobileMenu.hidden=isOpen;});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');}));
document.getElementById('year').textContent=new Date().getFullYear();
