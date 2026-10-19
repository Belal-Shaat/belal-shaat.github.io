
import { useState } from 'react'
import { ArrowUpRight, Globe2, Hammer, Mail, Sparkles } from 'lucide-react'

type Language = 'en' | 'ar'

const content = {
  en: {
    badge: 'A little work in progress',
    title: 'Something better is',
    accent: 'under construction.',
    description:
      "I'm refreshing my personal website to share more about my work, projects, and the systems I build. Please check back soon.",
    status: 'Website refresh in progress',
    note: 'Thanks for your patience.',
    contact: 'Get in touch',
    language: 'العربية',
    footer: 'Belal Shaat · Senior .NET Backend Developer',
  },
  ar: {
    badge: 'نعمل على تحسين الموقع',
    title: 'نعمل على تطوير',
    accent: 'موقعنا قريبًا.',
    description:
      'أعمل حاليًا على تحديث موقعي الشخصي لمشاركة خبراتي ومشاريعي والحلول التقنية التي أطورها. يسعدني أن تعود لزيارته قريبًا.',
    status: 'تحديث الموقع جارٍ',
    note: 'شكرًا لزيارتك وصبرك.',
    contact: 'تواصل معي',
    language: 'English',
    footer: 'بلال شعت · مطوّر Backend أول باستخدام .NET',
  },
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en')
  const t = content[language]
  const rtl = language === 'ar'

  return (
    <main
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-10 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,234,254,0.65),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(224,231,255,0.45),transparent_40%)]" />

      <button
        type="button"
        onClick={() => setLanguage(rtl ? 'en' : 'ar')}
        className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 sm:right-8 sm:top-8"
      >
        <Globe2 size={16} />
        {t.language}
      </button>

      <section className="relative z-0 mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-100 bg-white text-blue-600 shadow-xl shadow-blue-900/5 sm:h-24 sm:w-24">
          <div className="relative">
            <Hammer size={38} strokeWidth={1.6} />
            <Sparkles
              size={17}
              className="absolute -right-4 -top-3 text-amber-500"
            />
          </div>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 sm:text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
          </span>
          {t.badge}
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {t.title}
          <span className="mt-1 block text-blue-600">
            {t.accent}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:mt-7 sm:text-lg">
          {t.description}
        </p>

        <div className="mx-auto mt-9 flex max-w-sm items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-start shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Sparkles size={21} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-slate-800">
              {t.status}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {t.note}
            </p>
          </div>
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        </div>

        <a
          href="mailto:hello@belalshaat.site"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <Mail size={17} />
          {t.contact}
          <ArrowUpRight size={16} />
        </a>

        <div className="mx-auto mt-12 h-px w-16 bg-slate-200" />
        <p className="mt-5 text-xs leading-6 text-slate-500">
          {t.footer}
        </p>
      </section>
    </main>
  )
}
