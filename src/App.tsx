import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, ChevronDown, Cloud, Code2,
  Database, Github, Globe2, Layers3, Linkedin, Mail, Menu, Network,
  ServerCog, ShieldCheck, Sparkles, Workflow, X, Zap,
} from 'lucide-react'

type Language = 'en' | 'ar'

const copy = {
  en: {
    nav: ['About', 'Expertise', 'Projects', 'Contact'],
    availability: 'Open to interesting opportunities',
    eyebrow: 'SENIOR .NET BACKEND DEVELOPER',
    headlineA: 'Engineering reliable',
    headlineB: 'backend systems.',
    intro: 'I build secure APIs, scalable services, and data-driven solutions that turn complex requirements into dependable software.',
    primary: 'Explore my work',
    secondary: 'Let’s connect',
    proof: ['API & distributed systems', 'SQL performance', 'Cloud-ready architecture'],
    sectionLabel: 'WHAT I DO',
    expertiseTitle: 'Practical engineering. Built to last.',
    expertiseIntro: 'From a well-designed API to a high-throughput data layer, I focus on maintainability, performance, and real-world reliability.',
    expertise: [
      { title: 'Backend & APIs', text: 'Clean REST APIs, .NET services, authentication, integrations, and pragmatic service boundaries.', icon: 'code' },
      { title: 'Data & Performance', text: 'SQL Server query tuning, indexing, stored procedures, data access, and efficient processing.', icon: 'database' },
      { title: 'Distributed Systems', text: 'Redis caching and distributed locks, reliable workflows, idempotency, and concurrency control.', icon: 'network' },
      { title: 'Cloud & Delivery', text: 'Azure, Docker, CI/CD pipelines, observability, and deployment strategies that fit the environment.', icon: 'cloud' },
    ],
    projectsLabel: 'SELECTED WORK',
    projectsTitle: 'Projects with a purpose.',
    projectsIntro: 'A few representative problem spaces I enjoy solving. Replace these examples with public projects, demos, or case studies you can share.',
    projects: [
      { no: '01', title: 'Scalable API Platform', category: 'BACKEND ARCHITECTURE', text: 'Modular .NET APIs with clear boundaries, consistent contracts, validation, and maintainable service design.', tags: ['ASP.NET Core', 'REST API', 'Clean Architecture'] },
      { no: '02', title: 'High-Concurrency Booking', category: 'DISTRIBUTED SYSTEMS', text: 'Design patterns for protecting shared inventory, coordinating concurrent requests, and avoiding double booking.', tags: ['Redis', 'Distributed Lock', 'Idempotency'] },
      { no: '03', title: 'SQL Performance & Data', category: 'DATA ENGINEERING', text: 'Set-based data processing, query optimization, thoughtful indexing, and reliable reporting workflows.', tags: ['SQL Server', 'T-SQL', 'Performance'] },
    ],
    stackLabel: 'TECH TOOLKIT',
    stackTitle: 'Tools I work with',
    approachTitle: 'How I approach engineering',
    approachText: 'Good software is more than code that works. It should be understandable, observable, secure, and straightforward to evolve.',
    principles: ['Clear boundaries and maintainable architecture', 'Performance measured, not guessed', 'Secure defaults and resilient integrations', 'Pragmatic solutions over unnecessary complexity'],
    contactLabel: 'HAVE A CHALLENGE IN MIND?',
    contactTitle: 'Let’s build something dependable.',
    contactText: 'Have a backend problem, architecture question, or opportunity to discuss? I’d be glad to hear about it.',
    email: 'Email me',
    footer: 'Designed and built with care.',
    switch: 'العربية',
    location: 'Based in the Philippines · Working globally',
    projectLink: 'Case study coming soon',
  },
  ar: {
    nav: ['نبذة عني', 'الخبرات', 'المشاريع', 'تواصل'],
    availability: 'منفتح على فرص تقنية مميزة',
    eyebrow: 'مطور Backend أول — .NET',
    headlineA: 'أبني أنظمة خلفية',
    headlineB: 'موثوقة وقابلة للتوسع.',
    intro: 'أطوّر واجهات API آمنة وخدمات قابلة للتوسع وحلولًا تعتمد على البيانات، لتحويل المتطلبات المعقدة إلى برمجيات يمكن الاعتماد عليها.',
    primary: 'استكشف أعمالي',
    secondary: 'لنتواصل',
    proof: ['واجهات API والأنظمة الموزعة', 'تحسين أداء SQL', 'معمارية جاهزة للسحابة'],
    sectionLabel: 'ماذا أقدّم',
    expertiseTitle: 'هندسة عملية تدوم.',
    expertiseIntro: 'من تصميم واجهات API إلى طبقات البيانات عالية الأداء، أركز على سهولة الصيانة والأداء والموثوقية في الواقع العملي.',
    expertise: [
      { title: 'Backend وواجهات API', text: 'واجهات REST وخدمات .NET والمصادقة والتكاملات وتقسيم الخدمات بطريقة عملية.', icon: 'code' },
      { title: 'البيانات والأداء', text: 'تحسين استعلامات SQL Server والفهارس والإجراءات المخزنة ومعالجة البيانات بكفاءة.', icon: 'database' },
      { title: 'الأنظمة الموزعة', text: 'التخزين المؤقت والأقفال الموزعة باستخدام Redis، ومعالجة التزامن ومنع تكرار العمليات.', icon: 'network' },
      { title: 'السحابة والنشر', text: 'Azure وDocker وخطوط CI/CD والمراقبة واستراتيجيات النشر المناسبة للبيئة.', icon: 'cloud' },
    ],
    projectsLabel: 'أعمال مختارة',
    projectsTitle: 'مشاريع لحل مشكلات حقيقية.',
    projectsIntro: 'هذه أمثلة على مجالات تقنية تمثل نوع المشكلات التي أستمتع بحلها. استبدلها بمشاريع عامة أو دراسات حالة يمكنك مشاركتها.',
    projects: [
      { no: '01', title: 'منصة واجهات API قابلة للتوسع', category: 'معمارية الأنظمة الخلفية', text: 'واجهات .NET معيارية بحدود واضحة وعقود ثابتة والتحقق من المدخلات وتصميم يسهل صيانته.', tags: ['ASP.NET Core', 'REST API', 'Clean Architecture'] },
      { no: '02', title: 'نظام حجز عالي التزامن', category: 'الأنظمة الموزعة', text: 'أنماط لحماية الموارد المشتركة وتنسيق الطلبات المتزامنة ومنع الحجز المزدوج.', tags: ['Redis', 'Distributed Lock', 'Idempotency'] },
      { no: '03', title: 'أداء SQL ومعالجة البيانات', category: 'هندسة البيانات', text: 'معالجة جماعية للبيانات وتحسين الاستعلامات والفهارس وبناء عمليات تقارير موثوقة.', tags: ['SQL Server', 'T-SQL', 'Performance'] },
    ],
    stackLabel: 'الأدوات والتقنيات',
    stackTitle: 'تقنيات أعمل بها',
    approachTitle: 'كيف أتعامل مع هندسة البرمجيات',
    approachText: 'البرنامج الجيد ليس مجرد كود يعمل؛ بل يجب أن يكون واضحًا وآمنًا وقابلًا للمراقبة والتطوير.',
    principles: ['معمارية واضحة وسهلة الصيانة', 'قياس الأداء بدلًا من التخمين', 'إعدادات آمنة وتكاملات مرنة', 'حلول عملية دون تعقيد غير ضروري'],
    contactLabel: 'هل لديك تحدٍ تقني؟',
    contactTitle: 'لنبنِ شيئًا يمكن الاعتماد عليه.',
    contactText: 'إذا كان لديك تحدٍ في الأنظمة الخلفية أو سؤال معماري أو فرصة مهنية، يسعدني أن نتحدث.',
    email: 'راسلني',
    footer: 'صُمّم ونُفّذ بعناية.',
    switch: 'English',
    location: 'الفلبين · متاح للعمل عن بُعد عالميًا',
    projectLink: 'دراسة الحالة قريبًا',
  },
}

const stack = ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Redis', 'Azure', 'Docker', 'REST APIs', 'CI/CD']

function IconFor({ name }: { name: string }) {
  if (name === 'database') return <Database size={22} />
  if (name === 'network') return <Network size={22} />
  if (name === 'cloud') return <Cloud size={22} />
  return <Code2 size={22} />
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  const rtl = language === 'ar'

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <header className="sticky top-0 z-50 border-b border-slate-100/90 bg-white/90 backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2" aria-label="Belal Shaat home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">BS</span>
            <span className="text-[17px] font-bold tracking-tight">Belal <span className="text-blue-600">Shaat</span></span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {t.nav.map((item, i) => (
              <button key={item} onClick={() => goTo(['about', 'expertise', 'projects', 'contact'][i])} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage(rtl ? 'en' : 'ar')} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700" aria-label="Switch language">
              <Globe2 size={15} /> <span>{t.switch}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          {t.nav.map((item, i) => <button key={item} onClick={() => goTo(['about', 'expertise', 'projects', 'contact'][i])} className="block w-full rounded-lg px-3 py-3 text-start text-sm font-medium text-slate-700 hover:bg-blue-50">{item}</button>)}
        </nav>}
      </header>

      <main id="top">
        <section className="hero-grid relative">
          <div className="container-shell relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span></span>
                {t.availability}
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-blue-600">{t.eyebrow}</p>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-[4.5rem]">
                {t.headlineA}<br /><span className="text-blue-600">{t.headlineB}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{t.intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goTo('projects')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
                  {t.primary} {rtl ? <ArrowDownRight size={17} /> : <ArrowUpRight size={17} />}
                </button>
                <button onClick={() => goTo('contact')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  <Mail size={17} /> {t.secondary}
                </button>
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs text-slate-500"><Globe2 size={14} /> {t.location}</p>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
              <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-indigo-100/70 blur-3xl" />
              <div className="relative rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-100 px-1 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Braces size={19} /></div>
                    <div><p className="text-sm font-bold">Backend engineering</p><p className="mt-0.5 text-[11px] text-slate-500">System overview</p></div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">Production-minded</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-4">
                  <div className="rounded-2xl bg-slate-50 p-4"><ServerCog className="mb-3 text-blue-600" size={21} /><p className="text-xs font-semibold text-slate-800">API Services</p><p className="mt-1 text-[11px] text-slate-500">.NET · REST</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><Database className="mb-3 text-blue-600" size={21} /><p className="text-xs font-semibold text-slate-800">Data Layer</p><p className="mt-1 text-[11px] text-slate-500">SQL Server</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><Zap className="mb-3 text-amber-500" size={21} /><p className="text-xs font-semibold text-slate-800">Fast & Reliable</p><p className="mt-1 text-[11px] text-slate-500">Caching · Tuning</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><Cloud className="mb-3 text-blue-600" size={21} /><p className="text-xs font-semibold text-slate-800">Cloud Ready</p><p className="mt-1 text-[11px] text-slate-500">Azure · Docker</p></div>
                </div>
                <div className="rounded-2xl bg-slate-950 p-4 text-slate-100">
                  <div className="mb-3 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="text-[11px] font-medium text-slate-300">Architecture principles</span></div>
                  <div className="space-y-2 font-mono text-[11px]">
                    <p><span className="text-blue-300">01</span><span className="mx-3 text-slate-500">→</span>Clear boundaries</p>
                    <p><span className="text-blue-300">02</span><span className="mx-3 text-slate-500">→</span>Observable systems</p>
                    <p><span className="text-blue-300">03</span><span className="mx-3 text-slate-500">→</span>Measured performance</p>
                  </div>
                </div>
              </div>
              <div className={`absolute ${rtl ? '-left-5' : '-right-5'} top-24 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:flex`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><ShieldCheck size={20} /></div>
                <div><p className="text-xs font-bold">Built for reliability</p><p className="mt-1 text-[10px] text-slate-500">Maintainable by design</p></div>
              </div>
            </div>
          </div>
          <div className="container-shell pb-10">
            <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6">
              {t.proof.map((item) => <span key={item} className="flex items-center gap-2 text-xs font-medium text-slate-500"><Check size={14} className="text-blue-600" />{item}</span>)}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="container-shell grid gap-10 md:grid-cols-[.75fr_1.25fr] md:items-start">
            <div><p className="section-kicker">{t.sectionLabel}</p><h2 className="section-title mt-4">{t.expertiseTitle}</h2></div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">{t.expertiseIntro}</p>
          </div>
        </section>

        <section id="expertise" className="pb-24">
          <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.expertise.map((item, i) => <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><IconFor name={item.icon} /></div>
              <p className="mb-3 text-xs font-bold tracking-widest text-slate-400">0{i + 1}</p>
              <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>)}
          </div>
        </section>

        <section id="projects" className="section-pad bg-slate-50/80">
          <div className="container-shell">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="section-kicker">{t.projectsLabel}</p><h2 className="section-title mt-4">{t.projectsTitle}</h2></div>
              <p className="max-w-lg text-sm leading-7 text-slate-600">{t.projectsIntro}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {t.projects.map((project, i) => <article key={project.no} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-soft">
                <div className={`relative flex h-44 items-center justify-center overflow-hidden ${i === 1 ? 'bg-gradient-to-br from-blue-700 to-indigo-900' : i === 2 ? 'bg-gradient-to-br from-slate-800 to-slate-950' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '22px 22px' }} />
                  {i === 0 && <div className="relative grid grid-cols-3 gap-2">{['API', '.NET', 'DB'].map((v) => <div key={v} className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-200 bg-white/90 text-xs font-bold text-blue-700 shadow-sm">{v}</div>)}</div>}
                  {i === 1 && <div className="relative flex items-center gap-3 text-white"><Workflow size={38} /><div className="h-px w-8 bg-blue-200" /><Layers3 size={34} /><div className="h-px w-8 bg-blue-200" /><Zap size={34} /></div>}
                  {i === 2 && <div className="relative flex items-end gap-3">{[42, 70, 52, 96, 64].map((h, idx) => <div key={idx} style={{ height: `${h}px` }} className="w-7 rounded-t-md border border-blue-300/40 bg-blue-400/70" />)}</div>}
                  <span className={`absolute ${rtl ? 'left-5' : 'right-5'} top-5 text-xs font-bold ${i === 0 ? 'text-blue-500' : 'text-white/60'}`}>{project.no}</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[.18em] text-blue-600">{project.category}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">{project.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">{tag}</span>)}</div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500"><span>{t.projectLink}</span><ArrowUpRight size={16} className="text-blue-600" /></div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><p className="section-kicker">{t.stackLabel}</p><h2 className="section-title mt-4">{t.stackTitle}</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{t.approachText}</p></div>
            <div className="flex flex-wrap gap-3">{stack.map((item, i) => <span key={item} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"><span className={`h-2 w-2 rounded-full ${i % 3 === 0 ? 'bg-blue-600' : i % 3 === 1 ? 'bg-indigo-500' : 'bg-sky-400'}`} />{item}</span>)}</div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-shell">
            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300"><Sparkles size={22} /></div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.approachTitle}</h2><p className="mt-5 text-sm leading-7 text-slate-300">{t.approachText}</p></div>
                <ul className="grid gap-4 sm:grid-cols-2">{t.principles.map((principle) => <li key={principle} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm leading-6 text-slate-200"><Check className="mt-0.5 shrink-0 text-blue-300" size={17} />{principle}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad border-t border-slate-100">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">{t.contactLabel}</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-.04em] sm:text-5xl">{t.contactTitle}</h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">{t.contactText}</p>
              <a href="mailto:hello@belalshaat.site" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"><Mail size={17} />{t.email}<ArrowUpRight size={16} /></a>
              <div className="mt-7 flex justify-center gap-3">
                <a href="https://github.com/belal-shaat" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"><Github size={19} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"><Linkedin size={19} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-7">
        <div className="container-shell flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Belal Shaat. {t.footer}</p>
          <a href="#top" className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-blue-600">{rtl ? 'العودة للأعلى' : 'Back to top'} <ChevronDown className="rotate-180" size={14} /></a>
        </div>
      </footer>
    </div>
  )
}