/* ================= NAV ================= */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open'); navLinks.classList.remove('open');
  }));
}

/* ================= SCROLL REVEAL ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ================= MODAL DATA ================= */
const PROJECTS = {
  /* ---------- Website Development ---------- */
  "sampoorna-shiksha": {
    eyebrow: "Website Development · Nonprofit",
    title: "Sampoorna Shiksha — Website Redesign",
    sub: "Gyaandaan Foundation · WordPress",
    tags: ["WordPress", "UX", "Nonprofit"],
    objective: "Give an education-focused nonprofit a website that reads as credible to donors and partners, while making its programmes easy to understand at a glance.",
    strategy: [
      "Rebuilt the About page around clear Mission / Vision card layouts",
      "Designed and built the Project Shikshalaya project page from scratch",
      "Set the visual language with Fraunces serif headings on a deep blue, yellow and sky-blue palette",
      "Added scroll-reveal animation and full-bleed section layouts for a more editorial feel",
      "Built a dedicated compliance documents section for donor transparency"
    ],
    results: "Ongoing project — pages are being rolled out module by module, with the compliance section already live for donor reference."
  },
  "pagaria-welfare": {
    eyebrow: "Website Development · Nonprofit",
    title: "Pagaria Welfare Foundation — Website Rebuild",
    sub: "Wix",
    tags: ["Wix", "UX Redesign"],
    objective: "Modernise a dated NGO website so visitors can understand the foundation's work and get to key information without digging.",
    strategy: [
      "Rebuilt the site on Wix with a cleaner, modern layout",
      "Restructured content for easier scanning",
      "Improved overall navigation and user experience"
    ],
    results: "A refreshed site that better represents the foundation's work to visitors and donors."
  },
  "getclicked": {
    eyebrow: "Website Development · Agency",
    title: "GetClicked — Full Website Build",
    sub: "Melbourne digital marketing agency · Elementor / WordPress",
    tags: ["WordPress", "Elementor", "Custom Code"],
    objective: "Build a full multi-page site for a Melbourne agency that needed to look sharp enough to sell 'we do marketing well' on first impression.",
    strategy: [
      "Built custom Elementor HTML widget code blocks across Home, Services, Contact, Blog, Case Studies and About",
      "Set a distinct type system — Playfair Display headings with Plus Jakarta Sans body copy",
      "Established a mint / blue / purple brand palette carried consistently across every page"
    ],
    results: "A cohesive, custom-coded site across six page types, built for fast iteration without touching third-party page builders' defaults."
  },
  "webatropolis-website": {
    eyebrow: "Website Development · Agency",
    title: "Webatropolis — Site Enhancements",
    sub: "Trivandrum digital marketing agency",
    tags: ["WordPress", "Conversion"],
    objective: "Sharpen an agency's own website so it converts visitors into audit requests and shows off real client work.",
    strategy: [
      "Redesigned the testimonials section for better readability and trust signal",
      "Added a client portfolio section with logo hover effects",
      "Rebuilt the newsletter section into a WhatsApp-based free audit CTA — a more direct, higher-intent action"
    ],
    results: "A homepage that now points every visitor toward one clear, low-friction next step."
  },
  "keva-haircare": {
    eyebrow: "Website Development · D2C",
    title: "Keva Hair Care — About Us Build-out",
    sub: "kevahaircare.com",
    tags: ["WordPress", "Content"],
    objective: "Flesh out a thin About Us page into something that actually builds product trust and highlights certifications.",
    strategy: [
      "Added a dedicated Neem Comb product section",
      "Built out Quality Policies content",
      "Added ISO certification section for credibility",
      "Troubleshot and fixed live layout issues across the page"
    ],
    results: "A more complete, trust-building About page live on the client's store."
  },

  /* ---------- Landing Pages ---------- */
  "miqat-uae": {
    eyebrow: "Landing Page · UAE",
    title: "Miqat — Landing Page",
    sub: "UAE-based client",
    tags: ["Landing Page", "UAE"],
    objective: "Design and build a clean, conversion-focused landing page for a UAE-based client.",
    strategy: [
      "Kept the page single-purpose and fast-loading",
      "Structured content around one clear call to action"
    ],
    results: "A focused landing page built for the client's UAE market launch."
  },
  "ttw-catalogue": {
    eyebrow: "Landing Page · WooCommerce",
    title: "The Telecom Warehouse — Catalogue Landing Page",
    sub: "thetelecomwarehouse.com.au",
    tags: ["WooCommerce", "Landing Page"],
    objective: "Give Teams headsets and speakerphones their own dedicated landing experience instead of a generic category page.",
    strategy: [
      "Built a full Teams headsets/speakerphones landing page from scratch",
      "Added tab navigation and brand filters so buyers can narrow down fast",
      "Built an FAQ accordion to handle pre-purchase questions on-page",
      "Iterated through multiple design directions to land on a clean, light, professional look"
    ],
    results: "A dedicated, filterable landing page that makes it easier for B2B buyers to find the right device."
  },
  "webatropolis-smm-packages": {
    eyebrow: "Landing Page · Agency",
    title: "Webatropolis — SMM Packages Page",
    sub: "Service landing page",
    tags: ["Landing Page", "Conversion"],
    objective: "Present social media marketing packages clearly enough that visitors can self-select and enquire.",
    strategy: [
      "Structured packages for easy side-by-side comparison",
      "Paired pricing tiers with a direct enquiry path"
    ],
    results: "A clearer path from 'browsing packages' to 'sending an enquiry.'"
  },

  /* ---------- Email Marketing (overlay) ---------- */
  "ttw-email": {
    eyebrow: "Email Marketing",
    title: "The Telecom Warehouse — Email Marketing",
    sub: "thetelecomwarehouse.com.au",
    tags: ["Email", "WooCommerce"],
    objective: "Keep TTW's customer base warm with regular, relevant email sends tied to store promotions and new stock.",
    strategy: [
      "Planned and sent ongoing campaigns aligned with store promotions",
      "Coordinated email content with site merchandising and stock updates"
    ],
    results: "A consistent email cadence supporting the wider WooCommerce store work."
  },
  "whitelemon-email": {
    eyebrow: "Email Marketing",
    title: "White Lemon — Email Marketing",
    sub: "Brand email campaigns",
    tags: ["Email", "Campaigns"],
    objective: "Support White Lemon's broader marketing presence with regular email campaigns.",
    strategy: [
      "Planned and designed campaign sends aligned with the brand's content calendar",
      "Coordinated messaging with the brand's social media activity"
    ],
    results: "A steady email presence complementing the brand's social channels."
  },

  /* ---------- Meta Ads ---------- */
  "lemans-pro": {
    eyebrow: "Meta Ads · Lead Generation",
    title: "Le Mans Pro Detailing",
    sub: "Meta Ads Lead Generation",
    tags: ["Meta Ads", "Lead Gen", "WhatsApp"],
    objective: "Increase enquiries for premium detailing services by generating qualified leads through WhatsApp and Instant Lead Forms, targeting high-intent audiences in Kerala.",
    strategy: [
      "Created dedicated campaigns for Ceramic Coating, PPF, Car Detailing Services, Seasonal Offers, geo-targeted campaigns and hiring campaigns",
      "Used Meta Lead Forms and WhatsApp Conversation Ads",
      "Tested multiple creatives and campaign objectives",
      "Optimised audiences based on campaign performance and lead quality"
    ],
    resultsList: [
      "Generated 557 qualified leads",
      "Produced 394 WhatsApp enquiries",
      "Captured 163 Lead Form submissions",
      "Maintained an average CPL of approximately ₹101",
      "Reached 340K+ people, delivered 677K+ impressions",
      "Best campaign generated 144 WhatsApp leads at ₹88.28 per lead",
      "Lowest CPL achieved: ₹42.39 (Hiring campaign)"
    ],
    stats: [["557","Qualified Leads"],["₹101","Avg. CPL"],["340K+","People Reached"],["677K+","Impressions"]]
  },
  "hotrod": {
    eyebrow: "Meta Ads · Lead Generation",
    title: "HotRod",
    sub: "Meta Ads Lead Generation",
    tags: ["Meta Ads", "Lead Gen", "WhatsApp"],
    objective: "Generate high-intent WhatsApp enquiries for automotive detailing services while increasing local brand visibility in targeted service areas.",
    strategy: [
      "Developed Meta Messaging campaigns optimised for WhatsApp conversations",
      "Targeted audiences in Trivandrum and Vyttila with location-specific creatives",
      "Optimised campaigns for cost-efficient messaging conversions",
      "Continuously monitored performance and refined targeting to maximise lead volume within budget"
    ],
    resultsList: [
      "Generated 113 qualified WhatsApp enquiries",
      "Average cost per conversation: ₹47.24",
      "Reached 32.7K+ potential customers, delivered 82.6K+ impressions",
      "Best campaign generated 70 WhatsApp conversations at ₹50.85 per conversation",
      "Lowest messaging cost achieved: ₹41.37 per conversation"
    ],
    stats: [["113","WhatsApp Enquiries"],["₹47.24","Avg. Cost / Conv."],["32.7K+","Reach"],["82.6K+","Impressions"]]
  },
  "webatropolis-leadgen": {
    eyebrow: "Meta Ads · Lead Gen & Awareness",
    title: "Webatropolis — Lead Generation & Awareness",
    sub: "Meta Ads Lead Generation | Webatropolis",
    tags: ["Meta Ads", "Lead Gen", "Awareness"],
    objective: "Generate qualified inquiries for Website Development and Social Media Marketing services while increasing website traffic and brand awareness.",
    strategy: [
      "Created separate campaigns for Website Development, SMM and All Services",
      "Optimised campaigns for WhatsApp conversations and Instant Lead Forms",
      "Built awareness campaigns to increase brand visibility",
      "Ran website traffic campaigns to drive high-intent visitors to service pages"
    ],
    resultsList: [
      "Generated 57 qualified leads",
      "Achieved an average CPL of approximately ₹94",
      "Drove 6,029 website visits at an average ₹0.81 CPC",
      "Reached 570K+ people, delivered 973K+ impressions",
      "Generated WhatsApp conversations across multiple service categories, with CPLs as low as ₹53 per lead"
    ],
    stats: [["57","Qualified Leads"],["₹94","Avg. CPL"],["570K+","People Reached"],["973K+","Impressions"]]
  },

  /* ---------- Content & Social Media ---------- */
  "whitelemon-social": {
    eyebrow: "Content & Social Media",
    title: "White Lemon — Social Media Management",
    sub: "Instagram · Content Design",
    tags: ["Social Media", "Design"],
    objective: "Run White Lemon's full social presence and keep a consistent visual identity across posts.",
    strategy: [
      "Designed 500+ Instagram posts",
      "Managed the brand's full social media presence and visual identity"
    ],
    results: "A consistent, on-brand social feed built post by post."
  },
  "ttw-linkedin": {
    eyebrow: "Content & Social Media",
    title: "The Telecom Warehouse — LinkedIn Management",
    sub: "Content strategy & page growth",
    tags: ["LinkedIn", "Content Strategy"],
    objective: "Grow TTW's LinkedIn visibility and engagement through a consistent content calendar.",
    strategy: [
      "Managed the LinkedIn content calendar and posting cadence",
      "Built an engagement strategy around company and product updates"
    ],
    resultsList: [
      "Search appearances increased by 62.5%",
      "Post impressions increased by 24.6%",
      "Page visitors increased by 40%"
    ],
    stats: [["62.5%","Search Appearances ↑"],["24.6%","Post Impressions ↑"],["40%","Page Visitors ↑"]]
  },
  "webatropolis-linkedin": {
    eyebrow: "Content & Social Media",
    title: "Webatropolis — LinkedIn Management",
    sub: "Agency page content",
    tags: ["LinkedIn", "Content Strategy"],
    objective: "Keep Webatropolis' LinkedIn page active and aligned with the agency's client work.",
    strategy: [
      "Planned and published a regular content calendar",
      "Aligned post topics with ongoing client campaigns and case studies"
    ],
    results: "A consistently active agency LinkedIn presence."
  },
  "blog-writing": {
    eyebrow: "Content & Social Media",
    title: "Blog Writing — TTW & Headset Supply Co.",
    sub: "SEO-driven blog content",
    tags: ["Blog", "Content SEO"],
    objective: "Support both stores' organic search presence with regular, SEO-aware blog content.",
    strategy: [
      "Wrote and published blog content for thetelecomwarehouse.com.au and headsetsupplyco.com.au",
      "Structured posts around search intent relevant to each store's product range"
    ],
    results: "Ongoing blog content supporting both stores' technical and product SEO."
  }
};

/* ================= MODAL LOGIC ================= */
const overlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');

function renderModal(key) {
  const p = PROJECTS[key];
  if (!p || !modalBody) return;
  let html = `
    <div class="eyebrow red">${p.eyebrow}</div>
    <h3>${p.title}</h3>
    <p class="modal-sub">${p.sub}</p>
    <div class="modal-tags">${p.tags.map(t => `<span class="pill blue">${t}</span>`).join('')}</div>
    <div class="modal-block">
      <h4>Objective</h4>
      <p>${p.objective}</p>
    </div>
    <div class="modal-block">
      <h4>Strategy</h4>
      <ul>${p.strategy.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>
  `;
  if (p.stats) {
    html += `<div class="modal-block"><h4>Results</h4><div class="modal-stats">${p.stats.map(s => `<div class="mstat"><div class="v">${s[0]}</div><div class="l">${s[1]}</div></div>`).join('')}</div></div>`;
  } else if (p.resultsList) {
    html += `<div class="modal-block"><h4>Results</h4><ul>${p.resultsList.map(s => `<li>${s}</li>`).join('')}</ul></div>`;
  } else if (p.results) {
    html += `<div class="modal-block"><h4>Results</h4><p>${p.results}</p></div>`;
  }
  modalBody.innerHTML = html;
}

document.querySelectorAll('[data-project]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    renderModal(el.getAttribute('data-project'));
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose')?.addEventListener('click', closeModal);
overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
