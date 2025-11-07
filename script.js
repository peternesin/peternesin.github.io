const DATA = {
  name: "Peter Nesin",
  title: "Mechanical Engineer",
  tagline: "CAD • Prototyping • CNC Manufacturing • Public Installations",
  email: "n.peter@wustl.edu",
  phone: "301-452-3784",
  location: "Chicago, IL",
  linkedin: "https://linkedin.com/in/peternesin",
  resume: "assets/pdfs/PeterNesinResume.pdf",
  ucity: "assets/pdfs/UCity_Final_Documentation.pdf",
  portfolioPDF: "assets/pdfs/Portfolio.pdf",
  projects: [
    {
      title: "University City Public Art Installation — “Let’s Meet Here Again”",
      year: "2025",
      blurb: "Designed, fabricated, and installed three large-scale CNC-cut sculptures; managed proposal, budget, CAM/CNC, finishing, logistics, and installation.",
      tags: ["SolidWorks", "CNC", "Project Mgmt", "Woodworking", "Metalwork"],
      links: [{ label: "Process/Report PDF", href: "assets/pdfs/UCity_Final_Documentation.pdf" }],
      image: "assets/images/public_art_1.jpg" // optional e.g., ""
    },
    {
      title: "Pole-Climbing Robot",
      year: "2024",
      blurb: "Mechanical & fabrication lead. Owned SolidWorks design; laser-cut + 3D printed prototypes; integrated Raspberry Pi; completed full climb test.",
      tags: ["SolidWorks", "Laser Cut", "3D Print", "Raspberry Pi"],
      links: [{ label: "Portfolio PDF", href: "assets/pdfs/Portfolio.pdf" }],
      image: "assets/images/polerobot.jpg"
    },
    {
      title: "Cilia-Bots Research (WUSEF / Bayly Lab)",
      year: "2023",
      blurb: "Bio-inspired mechatronic models of cilia. Iterative CAD, flexible 3D printing, simple electronics and soldering; poster + presentation.",
      tags: ["SolidWorks", "Soft Robotics", "3D Print", "Electronics"],
      links: [{ label: "Portfolio PDF", href: "assets/pdfs/Portfolio.pdf" }],
      image: "assets/images/ciliaposter.jpg"
    }
  ],
  experience: [
    {
      role: "Senior MakerTech",
      org: "Jubel Spartan Lightmetal Makerspace — Washington University in St. Louis, MO",
      dates: "Oct 2022 – Present",
      bullets: [
        "Managed makerspace fabrication ops; maintained & upgraded 3D printer fleet (10+).",
        "Supported 250+ student projects/semester; prototyping, troubleshooting, training.",
        "Designed camera mounts & fixtures for cloud monitoring; trained 5+ new MakerTechs."
      ]
    },
    {
      role: "Undergraduate Researcher (WUSEF / Dr. Bayly Lab)",
      org: "Washington University in St. Louis, MO",
      dates: "May 2023 – Aug 2023",
      bullets: [
        "Designed/fabricated robotic analogs of cilia; SolidWorks + flexible 3D printing + electronics.",
        "Built test setups; evaluated motion; presented poster & talk at summer research symposium."
      ]
    },
    {
      role: "President & Mechanical Design Lead",
      org: "FRC Team 449 — Silver Spring, MD",
      dates: "Sept 2017 – Feb 2023",
      bullets: [
        "Led mechanical design & fabrication; oversaw CAD & machining teams; ran CNC ops.",
        "Owned climbing & object-handling mechanisms; iterated via laser cut/3D print prototypes."
      ]
    }
  ],
  education: [
    {
      school: "Washington University in St. Louis",
      degree: "B.S., Mechanical Engineering",
      details: "Minors: Robotics; Studio Art (Sculpture Concentration)",
      grad: "Dec 2025"
    },
    {
      school: "Montgomery Blair High School — Magnet Program (SMCS)",
      degree: "Diploma",
      details: "",
      grad: "May 2021"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const $ = (id) => document.getElementById(id);
  const set = (id, v) => { if ($(id)) $(id).textContent = v; };

  set('name', DATA.name);
  set('title', DATA.title);
  set('tagline', DATA.tagline);
  $('year').textContent = new Date().getFullYear();

  const loc = $('loc'); loc.textContent = DATA.location;
  const email = $('email'); email.textContent = DATA.email; email.href = 'mailto:'+DATA.email;
  const phone = $('phone'); phone.textContent = DATA.phone; phone.href = 'tel:'+DATA.phone.replace(/[^\\d+]/g,'');
  const linkedin = $('linkedin'); linkedin.href = DATA.linkedin;
  $('resume').href = DATA.resume;
  $('ucity').href = DATA.ucity;
  $('portfolioPDF').href = DATA.portfolioPDF;

  const projRoot = $('projects');
  DATA.projects.forEach(p=>{
    const card = document.createElement('article');
    card.className='card';
    card.innerHTML = `
      <div class="card__img">${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover"/>` : 'IMAGE'}</div>
      <div class="card__body">
        <div class="small muted" style="float:right">${p.year}</div>
        <h3 style="margin:0 0 8px 0">${p.title}</h3>
        <p class="small">${p.blurb}</p>
        <div class="badges">${p.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
        <div class="links">${p.links.map(l=>`<a class="chip" href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`).join('')}</div>
      </div>`;
    projRoot.appendChild(card);
  });

  const expRoot = $('experience');
  DATA.experience.forEach(e=>{
    const card = document.createElement('article');
    card.className='card';
    card.innerHTML = `
      <div class="card__body">
        <div class="small muted" style="float:right">${e.dates}</div>
        <h3 style="margin:0">${e.role}</h3>
        <div class="small" style="margin:4px 0 8px 0">${e.org}</div>
        <ul style="margin:0 0 0 18px">${e.bullets.map(b=>`<li class="small">${b}</li>`).join('')}</ul>
      </div>`;
    expRoot.appendChild(card);
  });

  const skillsRoot = $('skills');
  const groups = [
    {label:'Fabrication', items:['CNC mill','Laser cutter','3D printing','MIG welding','Manual mill','Lathe','Hand/Power tools']},
    {label:'Design & Modeling', items:['SolidWorks (CSWA)','Autodesk Inventor','CAM/CNC workflows','Technical drawing']},
    {label:'Software & Electronics', items:['MATLAB','Arduino','Soldering','Rapid prototyping']},
  ];
  groups.forEach(g=>{
    const card = document.createElement('article');
    card.className='card';
    card.innerHTML = `
      <div class="card__body">
        <h3 style="margin:0">${g.label}</h3>
        <ul style="margin:8px 0 0 18px">${g.items.map(i=>`<li class="small">${i}</li>`).join('')}</ul>
      </div>`;
    skillsRoot.appendChild(card);
  });

  const eduRoot = $('education');
  DATA.education.forEach(ed=>{
    const card = document.createElement('article');
    card.className='card';
    card.innerHTML = `
      <div class="card__body">
        <div class="small muted" style="float:right">${ed.grad}</div>
        <h3 style="margin:0">${ed.school}</h3>
        <div class="small" style="margin:4px 0 0 0">${ed.degree}</div>
        ${ed.details?`<div class="small muted">${ed.details}</div>`:''}
      </div>`;
    eduRoot.appendChild(card);
  });

  document.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('main section').forEach(s=>s.classList.add('hidden'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.remove('hidden');
    });
  });
});
