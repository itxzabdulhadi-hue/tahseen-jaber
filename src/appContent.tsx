import { useEffect, useState } from "react";

type Language = "en" | "ar";

const logoUrl = "https://tahseenjaber-cold-storage-logistics.vercel.app/tahseenjaber-logo.jpeg";

const images = {
  hero: "https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&w=2200",
  exterior: "https://tahseenjaber-cold-storage-logistics.vercel.app/images/facility-exterior-wide.png",
  operations: "https://tahseenjaber-cold-storage-logistics.vercel.app/images/services-customized.jpg",
  coldRoom: "https://tahseenjaber-cold-storage-logistics.vercel.app/images/service-cold-storage-leasing.webp",
  loading: "https://images.pexels.com/photos/1267327/pexels-photo-1267327.jpeg?auto=compress&cs=tinysrgb&w=1600",
  storage: "https://images.pexels.com/photos/4170172/pexels-photo-4170172.jpeg?auto=compress&cs=tinysrgb&w=1600",
  produce: "https://images.pexels.com/photos/24517725/pexels-photo-24517725.jpeg?auto=compress&cs=tinysrgb&w=1200",
  protein: "https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg?auto=compress&cs=tinysrgb&w=1200",
  seafood: "https://images.pexels.com/photos/19789770/pexels-photo-19789770.jpeg?auto=compress&cs=tinysrgb&w=1200",
  frozen: "https://images.pexels.com/photos/29834274/pexels-photo-29834274.jpeg?auto=compress&cs=tinysrgb&w=1200",
  pharma: "https://images.pexels.com/photos/37912780/pexels-photo-37912780.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const copy = {
  en: {
    nav: [["Home", "#home"], ["About Us", "#about"], ["Facilities", "#facilities"], ["Solutions", "#solutions"], ["Industries", "#industries"], ["Contact", "#contact"]],
    discuss: "Discuss Your Requirements",
    menu: "Open menu",
    closeMenu: "Close menu",
    heroKicker: "TAHSEEN JABER · COLD STORAGE & LOGISTICS",
    heroTitle: ["Preserving Quality.", "Protecting What Matters."],
    heroText: "Reliable temperature-controlled storage solutions designed to protect product quality, preserve freshness, and support the movement of essential goods.",
    facilities: "Explore Our Facilities",
    solutionsCta: "Discover Our Solutions",
    scroll: "Scroll to explore",
    introLabel: "OUR APPROACH",
    introTitle: "A Higher Standard of Cold Storage.",
    introText: "At Tahseen Jaber Cold Storage, preserving product quality begins with the right environment, dependable infrastructure, and a commitment to operational excellence. We support businesses that depend on appropriate storage conditions to protect their goods throughout the supply chain.",
    introCaption: "Built for the careful movement of temperature-sensitive goods.",
    solutionsLabel: "STORAGE SOLUTIONS",
    solutionsTitle: "Designed Around What You Need to Preserve.",
    solutionsText: "We work with you to understand the product, its handling needs, and the storage environment that is appropriate for it.",
    conditionNote: "Storage conditions are considered according to the product and its specific requirements.",
    facilityLabel: "OUR FACILITIES",
    facilityTitle: "Infrastructure That Supports Careful Handling.",
    facilityText: "A considered environment for receiving, storing, and moving essential products with care.",
    precisionLabel: "PRECISION & PRESERVATION",
    precisionTitle: "Every Degree Has a Purpose.",
    precisionText: "Appropriate storage conditions play an essential role in preserving product quality. Our approach focuses on providing storage environments suited to the needs of the goods entrusted to us.",
    industriesLabel: "INDUSTRIES WE SERVE",
    industriesTitle: "For Products That Cannot Compromise.",
    industriesText: "Storage needs vary by product. We support a range of temperature-sensitive categories with considered cold-storage solutions.",
    contactLabel: "START A CONVERSATION",
    contactTitle: "Let's Build a More Reliable Cold Chain.",
    contactText: "Tell us about your products, storage requirements, and operational needs. Our team can help you explore the appropriate storage options.",
    contactTeam: "Contact Our Team",
    callTeam: "Call Our Team",
    phone: "Phone",
    email: "Email",
    location: "Location",
    footer: "Cold storage & logistics · Baghdad, Iraq",
    services: [
      ["Chilled Storage", "Temperature-controlled space for products that require chilled conditions as part of their storage plan."],
      ["Frozen Storage", "Dedicated storage for frozen goods, planned around the needs of the product and its handling process."],
      ["Fresh Produce", "Storage support for fruit and vegetables where careful conditions help protect freshness and quality."],
      ["Protein & Seafood", "Cold-storage options for meat, chicken, and seafood, with requirements discussed for each category."],
      ["Temperature-Sensitive Products", "Suitable storage options for pharmaceutical and other sensitive products, subject to product requirements."],
    ],
    principles: [
      ["01", "Appropriate Temperature Conditions", "Storage environments considered around the needs of the goods."],
      ["02", "Organized Storage Operations", "Clear handling practices that support an orderly storage environment."],
      ["03", "Product Quality & Protection", "A focused approach to helping preserve the condition of entrusted products."],
    ],
    industries: [
      ["Agriculture & Fresh Produce", "Support for fruit and vegetables in their appropriate storage environment."],
      ["Meat & Poultry", "Cold-storage considerations for meat and poultry products."],
      ["Seafood", "Storage options for seafood products with product needs in mind."],
      ["Frozen Food Supply", "Space for frozen goods within a considered handling process."],
      ["Pharmaceuticals", "Options for temperature-sensitive pharmaceutical products."],
    ],
    gallery: [
      ["Storage environments", "Organized space for product care."],
      ["Receiving & handling", "Designed around the flow of goods."],
      ["Cold-room infrastructure", "Built to support appropriate conditions."],
    ],
  },
  ar: {
    nav: [["الرئيسية", "#home"], ["من نحن", "#about"], ["المنشآت", "#facilities"], ["الحلول", "#solutions"], ["القطاعات", "#industries"], ["تواصل", "#contact"]],
    discuss: "ناقش متطلباتك",
    menu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    heroKicker: "تحسين جابر · التخزين البارد والخدمات اللوجستية",
    heroTitle: ["نحافظ على الجودة.", "ونحمي ما يهم."],
    heroText: "حلول تخزين موثوقة ومتحكم بدرجات حرارتها، صممت لحماية جودة المنتجات والحفاظ على طزاجتها ودعم حركة السلع الأساسية.",
    facilities: "استكشف منشآتنا",
    solutionsCta: "اكتشف حلولنا",
    scroll: "اسحب للاستكشاف",
    introLabel: "نهجنا",
    introTitle: "مستوى أعلى من التخزين البارد.",
    introText: "في تحسين جابر للتخزين البارد، تبدأ المحافظة على جودة المنتج من البيئة المناسبة والبنية التحتية الموثوقة والالتزام بالتميز التشغيلي. ندعم الشركات التي تعتمد على ظروف تخزين ملائمة لحماية بضائعها طوال سلسلة التوريد.",
    introCaption: "مصمم للحركة الدقيقة للمنتجات الحساسة لدرجات الحرارة.",
    solutionsLabel: "حلول التخزين",
    solutionsTitle: "مصممة لما تحتاج إلى الحفاظ عليه.",
    solutionsText: "نعمل معك لفهم المنتج ومتطلبات مناولته وبيئة التخزين الملائمة له.",
    conditionNote: "تحدد ظروف التخزين بحسب المنتج ومتطلباته الخاصة.",
    facilityLabel: "منشآتنا",
    facilityTitle: "بنية تحتية تدعم المناولة الدقيقة.",
    facilityText: "بيئة مدروسة لاستلام وتخزين ونقل المنتجات الأساسية بعناية.",
    precisionLabel: "الدقة والحفظ",
    precisionTitle: "لكل درجة غاية.",
    precisionText: "تؤدي ظروف التخزين الملائمة دورا أساسيا في الحفاظ على جودة المنتج. يركز نهجنا على توفير بيئات تخزين تناسب احتياجات البضائع الموكلة إلينا.",
    industriesLabel: "القطاعات التي نخدمها",
    industriesTitle: "للمنتجات التي لا تقبل المساومة.",
    industriesText: "تختلف احتياجات التخزين بحسب المنتج. ندعم مجموعة من الفئات الحساسة للحرارة بحلول تخزين بارد مدروسة.",
    contactLabel: "ابدأ محادثة",
    contactTitle: "لنبن سلسلة تبريد أكثر موثوقية.",
    contactText: "أخبرنا عن منتجاتك ومتطلبات التخزين واحتياجاتك التشغيلية. يمكن لفريقنا مساعدتك في استكشاف خيارات التخزين الملائمة.",
    contactTeam: "تواصل مع فريقنا",
    callTeam: "اتصل بفريقنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    footer: "التخزين البارد والخدمات اللوجستية · بغداد، العراق",
    services: [
      ["التخزين المبرد", "مساحة متحكم بدرجات حرارتها للمنتجات التي تتطلب ظروف تبريد ضمن خطة تخزينها."],
      ["التخزين المجمد", "تخزين مخصص للسلع المجمدة، يخطط له بحسب احتياجات المنتج وعملية مناولته."],
      ["المنتجات الزراعية الطازجة", "دعم تخزين الفواكه والخضروات حيث تساعد الظروف الدقيقة على الحفاظ على الجودة والطزاجة."],
      ["اللحوم والدواجن والمأكولات البحرية", "خيارات تخزين بارد للحوم والدجاج والمأكولات البحرية، مع مناقشة متطلبات كل فئة."],
      ["المنتجات الحساسة للحرارة", "خيارات تخزين مناسبة للمنتجات الدوائية وغيرها من المنتجات الحساسة، وفق متطلبات المنتج."],
    ],
    principles: [
      ["01", "ظروف حرارة ملائمة", "بيئات تخزين تراعي احتياجات البضائع."],
      ["02", "عمليات تخزين منظمة", "ممارسات مناولة واضحة تدعم بيئة تخزين مرتبة."],
      ["03", "جودة المنتج وحمايته", "نهج مركز يساعد على الحفاظ على حالة المنتجات الموكلة إلينا."],
    ],
    industries: [
      ["الزراعة والمنتجات الطازجة", "دعم للفواكه والخضروات ضمن بيئة تخزين ملائمة."],
      ["اللحوم والدواجن", "اعتبارات التخزين البارد لمنتجات اللحوم والدواجن."],
      ["المأكولات البحرية", "خيارات تخزين للمأكولات البحرية تراعي احتياجات المنتج."],
      ["سلاسل توريد الأغذية المجمدة", "مساحة للمنتجات المجمدة ضمن عملية مناولة مدروسة."],
      ["الأدوية", "خيارات للمنتجات الدوائية الحساسة لدرجات الحرارة."],
    ],
    gallery: [
      ["بيئات التخزين", "مساحة منظمة للعناية بالمنتج."],
      ["الاستلام والمناولة", "مصممة حول حركة البضائع."],
      ["بنية الغرف الباردة", "مصممة لدعم الظروف الملائمة."],
    ],
  },
} as const;

function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></svg>;
}

function MenuIcon({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{open ? <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>;
}

function Logo() {
  return <a className="brand-logo" href="#home" aria-label="Tahseen Jaber Cold Storage home"><img src={logoUrl} alt="Tahseen Jaber Cold Storage" /></a>;
}

export default function Site() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    setMenuOpen(false);
  }, [language, isArabic]);

  const serviceImages = [images.coldRoom, images.storage, images.produce, images.operations, images.loading];
  const industryImages = [images.produce, images.protein, images.seafood, images.frozen, images.pharma];

  return (
    <main className={isArabic ? "site is-rtl" : "site"} dir={isArabic ? "rtl" : "ltr"}>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
            {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button className="language-switcher" type="button" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}><span>{isArabic ? "EN" : "ع"}</span></button>
            <a className="header-cta" href="#contact">{t.discuss}<Arrow /></a>
            <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t.closeMenu : t.menu} aria-expanded={menuOpen} aria-controls="mobile-nav"><MenuIcon open={menuOpen} /></button>
          </div>
        </div>
        <div className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} id="mobile-nav">
          {t.nav.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ transitionDelay: `${index * 35}ms` }}><span>0{index + 1}</span>{label}<Arrow /></a>)}
          <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{t.discuss}</a>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-heading">
        <img className="hero-image" src={images.hero} alt={isArabic ? "ممر تخزين منظم داخل مستودع صناعي" : "Organized industrial warehouse storage aisle"} fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-light" aria-hidden="true" />
        <div className="mist mist-one" aria-hidden="true" /><div className="mist mist-two" aria-hidden="true" />
        <div className="hero-content content-width">
          <p className="eyebrow hero-eyebrow">{t.heroKicker}</p>
          <h1 id="hero-heading">{t.heroTitle[0]}<br /><span>{t.heroTitle[1]}</span></h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-actions"><a className="button button-copper" href="#facilities">{t.facilities}<Arrow /></a><a className="text-link light-link" href="#solutions">{t.solutionsCta}<Arrow /></a></div>
        </div>
        <a className="scroll-cue" href="#about" aria-label={t.scroll}><span>{t.scroll}</span><i /></a>
      </section>

      <section className="intro section-space" id="about" aria-labelledby="intro-heading">
        <div className="content-width intro-layout">
          <div className="intro-copy" data-reveal><p className="eyebrow dark-eyebrow">{t.introLabel}</p><h2 id="intro-heading">{t.introTitle}</h2><span className="copper-rule" aria-hidden="true" /><p className="body-copy">{t.introText}</p></div>
          <figure className="intro-visual" data-reveal><img src={images.exterior} alt={isArabic ? "منشأة تحسين جابر للتخزين البارد في بغداد" : "Tahseen Jaber Cold Storage facility in Baghdad"} loading="lazy" /><figcaption>{t.introCaption}</figcaption></figure>
        </div>
      </section>

      <section className="solutions section-space" id="solutions" aria-labelledby="solutions-heading">
        <div className="content-width">
          <div className="section-heading compact" data-reveal><p className="eyebrow dark-eyebrow">{t.solutionsLabel}</p><h2 id="solutions-heading">{t.solutionsTitle}</h2><p>{t.solutionsText}</p></div>
          <div className="service-list">
            {t.services.map(([name, text], index) => <article className="service-row" data-reveal key={name}><div className="service-number">0{index + 1}</div><div className="service-image-wrap"><img src={serviceImages[index]} alt={name} loading="lazy" /></div><div className="service-content"><h3>{name}</h3><p>{text}</p><span className="service-arrow"><Arrow /></span></div></article>)}
          </div>
          <p className="condition-note" data-reveal><span />{t.conditionNote}</p>
        </div>
      </section>

      <section className="facilities" id="facilities" aria-labelledby="facility-heading">
        <div className="content-width facilities-intro" data-reveal><p className="eyebrow light-eyebrow">{t.facilityLabel}</p><div><h2 id="facility-heading">{t.facilityTitle}</h2><p>{t.facilityText}</p></div></div>
        <div className="gallery-grid">
          {t.gallery.map(([title, description], index) => <figure className={`gallery-item gallery-item-${index + 1}`} data-reveal key={title}><img src={[images.storage, images.loading, images.coldRoom][index]} alt={title} loading="lazy" /><figcaption><span>0{index + 1}</span><div><strong>{title}</strong><small>{description}</small></div></figcaption></figure>)}
        </div>
      </section>

      <section className="precision section-space" aria-labelledby="precision-heading">
        <div className="precision-grid-lines" aria-hidden="true" /><div className="mist precision-mist" aria-hidden="true" />
        <div className="content-width precision-content">
          <div className="section-heading precision-heading" data-reveal><p className="eyebrow light-eyebrow">{t.precisionLabel}</p><h2 id="precision-heading">{t.precisionTitle}</h2><p>{t.precisionText}</p></div>
          <div className="principles">{t.principles.map(([number, title, description]) => <article className="principle" data-reveal key={number}><span className="principle-number">{number}</span><div className="principle-line" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="industries section-space" id="industries" aria-labelledby="industries-heading">
        <div className="content-width">
          <div className="section-heading industries-heading" data-reveal><p className="eyebrow dark-eyebrow">{t.industriesLabel}</p><h2 id="industries-heading">{t.industriesTitle}</h2><p>{t.industriesText}</p></div>
          <div className="industry-grid">{t.industries.map(([title, description], index) => <article className={`industry-tile tile-${index + 1}`} data-reveal key={title}><img src={industryImages[index]} alt={title} loading="lazy" /><div className="industry-overlay" /><div className="industry-text"><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <img className="contact-background" src={images.exterior} alt="" loading="lazy" /><div className="contact-overlay" /><div className="contact-rule" aria-hidden="true" />
        <div className="content-width contact-content">
          <div data-reveal><p className="eyebrow light-eyebrow">{t.contactLabel}</p><h2 id="contact-heading">{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-actions"><a className="button button-copper" href="mailto:info@tahseenjaber.com">{t.contactTeam}<Arrow /></a><a className="text-link light-link" href="tel:+9647768677775">{t.callTeam}<Arrow /></a></div></div>
          <address className="contact-details" data-reveal><a href="tel:+9647768677775"><span>{t.phone}</span>+964 776 867 7775</a><a href="mailto:info@tahseenjaber.com"><span>{t.email}</span>info@tahseenjaber.com</a><a href="mailto:Shuaib@tahseenjaber.com">Shuaib@tahseenjaber.com</a><p><span>{t.location}</span>Uuayrij Industrial Area, Baghdad, Iraq</p></address>
        </div>
      </section>

      <footer className="site-footer"><div className="content-width footer-inner"><Logo /><p>{t.footer}</p><p>© {new Date().getFullYear()} Tahseen Jaber Cold Storage</p></div></footer>
    </main>
  );
}