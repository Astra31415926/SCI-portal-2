/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  BookOpen, 
  Binary, 
  FileText, 
  Layers, 
  Languages, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  User, 
  Image as ImageIcon, 
  X, 
  Maximize2, 
  ChevronRight, 
  ArrowUpRight, 
  Share2,
  Info,
  Sliders,
  Eye,
  CheckCircle2,
  Clock
} from "lucide-react";

// --- Types ---
interface TestImage {
  url: string;
  titleUa: string;
  titleEn: string;
  descriptionUa: string;
  descriptionEn: string;
}

// --- Data & Translations ---
const GALLERY_IMAGES: TestImage[] = [
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/physical_artwork_01.jpeg",
    titleUa: "Фізичний відбиток",
    titleEn: "Physical Print",
    descriptionUa: "Фізичний відбиток художньої роботи з інтегральною компенсацією crosstalk за концепцією моделі SCI. Кольорові зони налаштовані для зведення ентропії до мінімуму.",
    descriptionEn: "Physical fine print artwork with integral crosstalk compensation applied according to the SCI model. Color zones are configured to minimize spectral entropy."
  },
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/ornamental_qr_00.png",
    titleUa: "Орнаментальний код QRnament",
    titleEn: "QRnament Stencil",
    descriptionUa: "Зразок багатошарового прихованого орнаментального коду для кодування двійкових даних у колірних спектрах без ризику інтерференційного шуму.",
    descriptionEn: "Sample high-density multi-layered ornamental QR stencil for encoding digital data across multiple separate spectral channels without channel-bleed."
  },
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/scanner_interface_01.jpg",
    titleUa: "Дешифрування сенсором",
    titleEn: "Sensor Decoding Interface",
    descriptionUa: "Аналіз колірної матриці в інтерфейсі цифрової камери машинного зору при зворотному скануванні та виділенні ізольованих каналів.",
    descriptionEn: "Color-space matrix diagnostic readout inside the computer vision camera application during reverse-scanning and spectral target extraction."
  },
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/model_synthesis_01.jpg",
    titleUa: "Спектральний аналіз",
    titleEn: "Spectral Synthesis Analysis",
    descriptionUa: "Теоретична модель синтезу колірного відгуку в закритій системі спектральних констант для різних хвиль спостереження.",
    descriptionEn: "Mathematical curves demonstrating response simulation and optimization curves for closing the channel system under strict illuminants."
  },
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/ornamental_qr_01.png",
    titleUa: "Багатоканальний паттерн I",
    titleEn: "Multi-channel Pattern I",
    descriptionUa: "Другий виставковий екземпляр орнаментального QR-коду з підвищеною щільністю кодування та адаптованим лімітуванням яскравості.",
    descriptionEn: "Alternative high-density multi-channel ornamental pattern showcasing balanced luminance scaling to fit contrast boundaries."
  },
  {
    url: "https://raw.githubusercontent.com/Astra31415926/spectral-color-model/main/ornamental_qr_02.png",
    titleUa: "Багатоканальний паттерн II",
    titleEn: "Multi-channel Pattern II",
    descriptionUa: "Третій виставковий зразок суміщеної стеганографічної матриці, розрахованої за алгоритмами компенсації паразитного поглинання пігментів.",
    descriptionEn: "Additional steganographic layout designed to bypass organic subtractive pigment absorption and target precise spectral matching."
  }
];

const TRANSLATIONS = {
  uk: {
    heroTitle: "SCI Universal Model",
    heroSubtitle: "Науково-прикладна концепція",
    heroConceptName: "Closed System of Spectral Constants (Spectral Channel Integrity)",
    authorLabel: "Автор концепції",
    authorName: "Mykhailo Kashkarov (Михайло Кашкаров)",
    heroDescription: "Модель лімітування та гомогенізації колірної ентропії у фізичних субтрактивних середовищах. Створена для розв'язання проблем перекриття сигналів у комп'ютерному зорі, машинописному кодуванні та високоточному друці.",
    
    navOverview: "Про концепцію",
    navTheory: "Суть моделі",
    navReversibility: "Зворотність",
    navApplications: "Застосування",
    navGallery: "Галерея рішень",
    navAuthor: "Про автора",
    navLinks: "Ресурси & Цитування",

    sec1Title: "Фізична природа Crosstalk та суть моделі SCI",
    sec1Part1Title: "1. Природа дефекту (Субтрактивна асиметрія)",
    sec1Part1Text: "Субтрактивна модель кольору (CMYK) фізично не є дзеркальним відображенням адитивної моделі (RGB). Пігменти мають обмежену здатність до селективного поглинання та відбиття світла. Жоден пігмент не поглинає цільовий спектр на 100% і не відбиває нецільовий спектр повністю.",
    sec1Part1ExtraText: "Головним деструктивним фактором є спектральна інтерференція (crosstalk) між каналами. Різні пігменти проявляють суттєво різну ефективність поглинання та різні рівні паразитного відбиття у сусідніх спектральних діапазонах. Жовтий пігмент близький до ідеалу (висока інтенсивність), тоді як пурпурний (magenta) і блакитний (cyan) (які утворюють складний фіолетовий) демонструють найвужчий динамічний діапазон і високу спектральну інтерференцію.",
    sec1Part1Impact: "Наслідок: через цей дисбаланс математично точний перенос багатоканальної інформації з екрана на папір класичними методами неможливий — пропорції каналів безповоротно спотворюються.",
    
    sec1Part2Title: "2. Суть моделі SCI",
    sec1Part2Text1: "Модель SCI не намагається порушити закони фізики та «очистити» фарбу від crosstalk. Замість цього вона гомогенізує (робить однаковим) цей недолік для всієї системи.",
    sec1Part2Text2: "Принцип лімітування: Алгоритм штучно занижує спектральні характеристики всіх «сильних» та яскравих кольорів (наприклад, жовтого) до рівня найслабшої та найтьмянішої ланки — складного фіолетового. Ми отримуємо замкнуту, збалансовану систему кольорових зон.",
    sec1Part2Text3: "Результат: візуально зображення стає менш контрастним і більш тьмяним. Але ентропія системи прямує до нуля: відносні пропорції та співвідношення між каналами зберігаються з абсолютною математичною строгістю.",
    sec1Part2FormulaCaption: "Замкнута спектральна константа для всіх колірних зон i у вибраному спектральному діапазоні випромінювання S(λ):",
    sec1Part2Quote: "Індустрія поліграфії жертвує точністю заради комерційної соковитості. SCI жертвує соковитістю заради абсолютної точністі даних.",

    sec2Title: "Зворотність процесу (Цифрова регенерація)",
    sec2Text: "Оскільки пропорції спектральних каналів на фізичному носії збережені без спотворень, процес стає математично зворотним. Фізичний відбиток може бути повторно оцифрований (сканований / знятий камерою), після чого в цифровому середовищі, шляхом лінійного нормування контрасту, зображення повертається до своїх вихідних RGB-характеристик без втрати корисного кольорового коду.",

    sec3Title: "Прикладне значення концепції",
    sec3Intro: "Для людського сприйняття тьмяна картинка — це мінус. Але для систем машинного зору та прихованого кодування даних (багатошарових кольорових QR-кодів) — це єдиний спосіб вижити.",
    sec3CrosstalkText: "При стандартному друці crosstalk змішує дані каналів, спричиняючи критичні помилки дешифрації (інформація затирається шумом). Модель SCI ізолює канали один від одного всередині субтрактивного середовища, перетворюючи колір з «декоративного елемента» на надійний, неспотворюваний контейнер для збереження двійкових даних.",
    
    sec3DirectionsTitle: "Найперспективніші напрямки застосування:",
    sec3App1Title: "Багатошарове оптичне кодування даних (стеганографія)",
    sec3App1Desc: "Створення складних візерункових штрихкодів та систем прихованого шифрування даних.",
    sec3App2Title: "Стійкі кольорові маркування для комп’ютерного зору",
    sec3App2Desc: "Розпізнавання маркерів роботизованими терміналами без помилок зчитування через хроматичні спотворення.",
    sec3App3Title: "Об'єктивний друкований контроль якостi",
    sec3App3Desc: "Моніторинг спектральних зсувів та оптичної щільності промислових фарб у вузьких зонах.",
    sec3Summary: "Модель не є універсальним рішенням для художньої поліграфії та репродукцій, а виступає інструментальним методом для суворих технічних завдань у прикладних та комп'ютерних науках.",

    sec4Title: "Про автора концепції",
    sec4Bio1: "Mykhailo Kashkarov (Михайло Кашкаров) — український художник-дослідник світла, випускник Харківського художнього училища та Харківської державної академії дизайну і мистецтв.",
    sec4Bio2: "Він є автором інноваційної RGB-техніки світлочутливого живопису. Спрямовує свої науково-практичні зусилля на вивчення взаємодії фотонів та пігментів суміжних колірних каналів, пропонуючи унікальний міст між класичним аналоговим мистецтвом та сучасним цифровим аналізом.",

    sec5Title: "Специфікації & Публікації",
    sec5Desc: "Зв'яжіться з автором або ознайомтеся з вихідним кодом і науковими матеріалами проекту за допомогою офіційних джерел:",
    sec5BtnZenodo: "Наукова праця на Zenodo",
    sec5BtnQRnament: "Генератор QRnament",
    sec5BtnSpectrum: "Транспортер Spectrum QR",
    sec5BtnGallery: "Портфоліо живопису",
    sec5BtnGithub: "SCI GitHub Репозиторій",

    bibtexTitle: "BibTeX Цитування",
    bibtexCopied: "Скопійовано!",
    copiedMessage: "Текст BibTeX скопійовано до буферу обміну",
    emailCopied: "Email скопійовано",
    phoneCopied: "Телефон скопійовано",

    contactTitle: "Контактні дані",
    contactEmailLabel: "Email для зв'язку",
    contactPhoneLabel: "Контактний телефон",
    galleryTitle: "Галерея матеріалів та випробувань",
    galleryDesc: "Фізичні репродукції, матричні QR-структури та цифрові інструменти аналізу колірних спектрів.",
    imageTapNotice: "Натисніть на зображення, щоб переглянути його в повному масштабі.",
    closeModal: "Закрити вікно"
  },
  en: {
    heroTitle: "SCI Universal Model",
    heroSubtitle: "Applied Scientific Color Concept",
    heroConceptName: "Closed System of Spectral Constants (Spectral Channel Integrity)",
    authorLabel: "Concept Author",
    authorName: "Mykhailo Kashkarov",
    heroDescription: "A mathematical framework for limiting and homogenizing color entropy in physical subtractive media. Developed to resolve spectral crosstalk issues in computer vision, machine-readable barcodes, and highly accurate graphic applications.",
    
    navOverview: "Concept Overview",
    navTheory: "Model Core",
    navReversibility: "Reversibility",
    navApplications: "Usage & Applications",
    navGallery: "Exhibit Gallery",
    navAuthor: "The Author",
    navLinks: "Data & Citation",

    sec1Title: "Physical Nature of Crosstalk and Essence of the SCI Model",
    sec1Part1Title: "1. Nature of the Defect (Subtractive Asymmetry)",
    sec1Part1Text: "The subtractive color model (CMYK) is fundamentally not a mirror reflection of the additive model (RGB). Physical organic pigments possess limited capacity for highly selective absorption and reflection of light wavelengths. No pigment absorbs its primary target spectral channel with 100% efficiency, nor does it reflect non-targeted wavelengths perfectly.",
    sec1Part1ExtraText: "The primary disruptive factor is spectral channel interference, commonly known as crosstalk. Different color pigments display drastically different levels of absorption efficiency and varying degrees of parasitic reflectance across adjacent spectral bands. Yellow pigment is close to an ideal response (high selectivity), whereas magenta and cyan components (which construct complex violet) exhibit the narrowest dynamic range and the highest spectral interference.",
    sec1Part1Impact: "Consequently, the mathematically flawless transfer of multi-channel input data from screen to paper using classical paradigms is impossible — relative proportions between channels suffer immediate and irreversible distortion.",
    
    sec1Part2Title: "2. The Essence of the SCI Model",
    sec1Part2Text1: "The Spectral Channel Integrity (SCI) model does not attempt to break the laws of physics or produce pure pigments free of crosstalk. Instead, it forms a closed system of spectral constants, mathematically constraining all color zones to uniform integrated responses within a specified narrow spectral target.",
    sec1Part2Text2: "The fundamental principle is balance through deliberate limitation: the spectral characteristics of high-performance ('strong' or intense) pigments (e.g., yellow) are algorithmically suppressed down to the baseline efficiency of the weakest channel (the complex violet overlap).",
    sec1Part2Text3: "The result is a mathematically deterministic system where the integrated spectral response across all zones within the observation channel is held strictly constant:",
    sec1Part2FormulaCaption: "Closed spectral constant constraint for all color zones i under given illuminant S(λ):",
    sec1Part2Quote: "The commercial print industry sacrifices accuracy for visual radiance. The SCI model sacrifices visual radiance for absolute mathematical data integrity.",

    sec2Title: "Process Reversibility (Digital Regeneration)",
    sec2Text: "Because relative spectral channel ratios are strictly preserved within the physical medium without asymmetrical distortion, the printing process becomes mathematically reversible. Once scanned or optically captured under calibrated conditions, the physical print can undergo linear contrast normalization in a digital environment, restoring the original RGB characteristics with minimal information loss.",

    sec3Title: "Practical Significance & Fields of Study",
    sec3Intro: "For human aesthetic perception, a desaturated, low-contrast image is a drawback. However, for specialized computer vision applications and key optical steganography (such as multi-layered colorful QR codes), this preservation is crucial for survival.",
    sec3CrosstalkText: "In standard printing processes, crosstalk blends data channels, generating severe decryption failures and wiping out high-frequency signals under a wall of noise. The SCI model insulates each channel within the subtractive domain, transforming physical color from a subjective decorative element into a reliable, uncorrupted container for binary datasets.",
    
    sec3DirectionsTitle: "Promising Fields of Implementation:",
    sec3App1Title: "Multi-layered Optical Data Encoding (Steganography)",
    sec3App1Desc: "Designing rich multi-layered ornamental barcodes and secret visual keys resistant to spectral decay.",
    sec3App2Title: "Robust Calibration Targets for Machine Vision",
    sec3App2Desc: "Allowing robotic terminals to recognize color codes without misinterpretations caused by uncontrolled atmospheric lighting.",
    sec3App3Title: "Instrumental Industrial Print Quality Analysis",
    sec3App3Desc: "Developing accurate narrow-band targets for calibrating machinery line-by-line during high-speed printing.",
    sec3Summary: "Rather than offering a generic replacement for standard commercial graphics, the SCI model functions as a highly task-oriented framework for specific optical and colorimetric applications.",

    sec4Title: "About the Concept Author",
    sec4Bio1: "Mykhailo Kashkarov is an artist, optical scholar, and color researcher. He graduated from the Kharkiv Art College and the Kharkiv State Academy of Design and Arts.",
    sec4Bio2: "He is the pioneer of the unique RGB light-sensitive painting methodology, seamlessly blending traditional artistic disciplines with rigorous academic studies in color science and wave physics.",

    sec5Title: "Specifications & Resources",
    sec5Desc: "Inquire about scientific collaboration, review source code repositories, and view theoretical documents from official archives:",
    sec5BtnZenodo: "Scientific Paper on Zenodo",
    sec5BtnQRnament: "QRnament Creator",
    sec5BtnSpectrum: "Spectrum QR Decoder",
    sec5BtnGallery: "Fine Art Gallery App",
    sec5BtnGithub: "SCI GitHub Repository",

    bibtexTitle: "BibTeX Citation Reference",
    bibtexCopied: "Copied!",
    copiedMessage: "BibTeX reference text copied to clipboard successfully.",
    emailCopied: "Email copied",
    phoneCopied: "Telephone line copied",

    contactTitle: "Contact Coordinates",
    contactEmailLabel: "Direct Email Address",
    contactPhoneLabel: "Mobile phone line",
    galleryTitle: "Exhibition Gallery",
    galleryDesc: "Diagnostic curves, custom steganography structures, and physical prints demonstrating the SCI model.",
    imageTapNotice: "Click/tap on any thumbnail below to view the image in full scale with description.",
    closeModal: "Close window"
  }
};

const BIBTEX_TEXT = `@article{kashkarov2025closed,
  author    = {Kashkarov, Mykhailo},
  title     = {Closed System of Spectral Constants (Spectral Channel Integrity / Model SCI)},
  journal   = {Zenodo Preprint Portal},
  year      = {2025},
  url       = {https://zenodo.org/records/19633526},
  doi       = {10.5281/zenodo.19633526}
}`;

export default function App() {
  const [lang, setLang] = useState<"uk" | "en">("uk");
  const [copiedBib, setCopiedBib] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedImg, setSelectedImg] = useState<TestImage | null>(null);

  const t = TRANSLATIONS[lang];

  // Auto hide toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const copyToClipboard = (text: string, message: string, setTrigger?: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setToastMessage(message);
    if (setTrigger) {
      setTrigger(true);
      setTimeout(() => setTrigger(false), 2000);
    }
  };

  // Scroll spy effect to set active tab
  useEffect(() => {
    const sections = ["overview", "theory", "reversibility", "applications", "gallery", "author", "publications"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500/20 selection:text-teal-900 font-sans leading-relaxed">
      {/* Decorative top tiny line reflecting spectral gradient */}
      <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 sticky top-0 z-50 shadow-sm" />

      {/* Main Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-1.5 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#overview" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-md bg-slate-900 flex items-center justify-center text-white shadow-sm font-semibold">
              <span className="font-mono text-sm tracking-wider">SCI</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight block text-sm sm:text-base">
                SCI SPECTRAL MODEL
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block -mt-1 hidden sm:block">
                Closed System of Spectral Constants
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setLang("uk")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  lang === "uk" 
                    ? "bg-white text-slate-950 shadow-sm font-semibold" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                УКР
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  lang === "en" 
                    ? "bg-white text-slate-950 shadow-sm font-semibold" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                ENG
              </button>
            </div>

            {/* Quick Contact Link button */}
            <a 
              href="#publications" 
              className="text-xs bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg font-medium transition-colors hidden sm:flex items-center gap-1"
            >
              <span>{lang === "uk" ? "Контакти" : "Contact"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </header>

      {/* Sub-header Navigation Rail (Horizontal Anchor menu for mobile, and indicator for desktop) */}
      <div className="bg-slate-100/80 border-b border-slate-200 sticky top-[71px] z-30 backdrop-blur-sm shadow-xs">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto whitespace-nowrap py-2.5 flex justify-start sm:justify-center gap-1 sm:gap-2 no-scrollbar">
          {[
            { id: "overview", label: t.navOverview, icon: BookOpen },
            { id: "theory", label: t.navTheory, icon: Binary },
            { id: "reversibility", label: t.navReversibility, icon: Sliders },
            { id: "applications", label: t.navApplications, icon: Layers },
            { id: "gallery", label: t.navGallery, icon: ImageIcon },
            { id: "author", label: t.navAuthor, icon: User },
            { id: "publications", label: t.navLinks, icon: FileText }
          ].map((item) => {
            const IconComponent = item.icon;
            const active = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                  active 
                    ? "bg-teal-600 text-white font-medium shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Container with Sidebar + Main content layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Nav - Desktop only sticky navigation with full index */}
        <aside className="hidden lg:block space-y-6 self-start sticky top-[130px]">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Info className="w-4 h-4 text-teal-600" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {lang === "uk" ? "Зміст порталу" : "Portal Index"}
              </h3>
            </div>
            
            <nav className="space-y-1">
              {[
                { id: "overview", label: t.navOverview },
                { id: "theory", label: t.navTheory },
                { id: "reversibility", label: t.navReversibility },
                { id: "applications", label: t.navApplications },
                { id: "gallery", label: t.navGallery },
                { id: "author", label: t.navAuthor },
                { id: "publications", label: t.navLinks }
              ].map((item) => {
                const active = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-md text-xs font-medium transition-all flex items-center justify-between ${
                      active 
                        ? "bg-teal-50 text-teal-800 border-l-2 border-teal-600 font-semibold" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <ChevronRight className="w-3 h-3 text-teal-600" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500 font-mono">
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-emerald-600 font-semibold">● ACTIVE PEER</span>
              </div>
              <div className="flex justify-between">
                <span>Version:</span>
                <span>v1.0.3 stable</span>
              </div>
              <div className="flex justify-between">
                <span>Cite DOI:</span>
                <span className="underline">10.5281/zenodo</span>
              </div>
            </div>
          </div>

          {/* Mini concept visual reference card */}
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-sm space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-teal-400 block uppercase">
              {lang === "uk" ? "Математичне ядро" : "Mathematical Core"}
            </span>
            <p className="text-xs font-mono text-slate-300">
              ∫ R_i(λ) · S(λ) dλ = const
            </p>
            <p className="text-[11px] text-slate-400 leading-normal">
              {lang === "uk" 
                ? "Закон примусового лімітування ентропії для всіх спектральних каналів." 
                : "The law of enforced entropy limitation across all spectral channels."}
            </p>
          </div>
        </aside>

        {/* Main core content area */}
        <div className="lg:col-span-3 space-y-12">
          
          {/* Section: Overview (Hero block-like) */}
          <section id="overview" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs relative overflow-hidden">
            {/* Visual background decorations - scientific meshes */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-bl from-teal-500/5 to-transparent pointer-events-none rounded-full" />
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-gradient-to-tr from-indigo-500/5 to-transparent pointer-events-none rounded-full" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 border border-slate-200 text-slate-600 rounded-md px-2.5 py-0.5 text-xs font-mono font-medium">
                  {lang === "uk" ? "Колориметрія & Машинний Зір" : "Colorimetry & Computer Vision"}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span className="text-xs text-slate-400 font-mono">Academic Outline</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  {t.heroTitle}
                </h1>
                <h2 className="text-lg sm:text-xl font-medium text-teal-700 tracking-tight font-serif italic">
                  {t.heroSubtitle}
                </h2>
                <div className="p-3 bg-slate-50 border-l-4 border-slate-400 rounded-r-lg font-mono text-xs text-slate-600">
                  {t.heroConceptName}
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                {t.heroDescription}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800 text-xs">
                    MK
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400 block">{t.authorLabel}</span>
                    <span className="font-semibold text-slate-800">{t.authorName}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a 
                    href="#publications" 
                    className="text-xs font-medium border border-slate-200 hover:border-slate-300 text-slate-700 px-3.5 py-2 rounded-lg transition-colors bg-white flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span>BibTeX Citation</span>
                  </a>
                  <a
                    href="https://zenodo.org/records/19633526"
                    target="_blank"
                    className="text-xs font-medium bg-teal-600 hover:bg-teal-700 text-white px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
                    referrerPolicy="no-referrer"
                  >
                    <span>Read on Zenodo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Theory & Physical nature */}
          <section id="theory" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Binary className="text-teal-600 w-5 h-5" />
              <span>{t.sec1Title}</span>
            </h2>

            {/* Subsection 1: Nature of the defect */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>{t.sec1Part1Title}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.sec1Part1Text}
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-600 text-sm leading-relaxed space-y-2">
                <p>
                  {t.sec1Part1ExtraText}
                </p>
                <p className="font-semibold text-red-700">
                  {t.sec1Part1Impact}
                </p>
              </div>
            </div>

            {/* Subsection 2: Essence of the model */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span>{t.sec1Part2Title}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.sec1Part2Text1}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                {t.sec1Part2Text2}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.sec1Part2Text3}
              </p>

              {/* Mathematical Equation presentation */}
              <div className="bg-slate-900 text-white rounded-xl p-6 my-4 border border-slate-800 text-center relative overflow-hidden">
                <div className="absolute top-2 left-2 text-[9px] font-mono text-teal-400 tracking-wider">
                  SCI MATRIC CONSTANT SPECTRUM EQUALIZATION
                </div>
                <div className="py-4 font-mono text-base sm:text-xl text-teal-300 select-all overflow-x-auto whitespace-nowrap math-font">
                  &int; R<sub>i</sub>(&lambda;) &middot; S(&lambda;) d&lambda; = C
                </div>
                <div className="text-xs text-slate-400 max-w-md mx-auto">
                  {t.sec1Part2FormulaCaption}
                </div>
              </div>

              {/* Scientific Quote Accent */}
              <div className="border-l-4 border-teal-500 pl-4 py-1 italic text-slate-700 bg-teal-50/50 rounded-r-lg text-sm sm:text-base">
                "{t.sec1Part2Quote}"
              </div>
            </div>
          </section>

          {/* Section: Reversibility */}
          <section id="reversibility" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Sliders className="text-teal-600 w-5 h-5" />
              <span>{t.sec2Title}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3 space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.sec2Text}
                </p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-500">
                    {lang === "uk" 
                      ? "Детерміновані спектральні бар'єри усувають хроматичне замилювання, дозволяючи повністю автоматизувати зворотне відновлення." 
                      : "Deterministic spectral parameters prevent color bleeding, allowing complete automation of signal restoration."}
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-slate-100 rounded-xl p-4 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 block uppercase mb-3">
                  {lang === "uk" ? "Хронологія збереження сигналу" : "Signal Flow Pipeline"}
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>Input RGB Channels</span>
                  </div>
                  <div className="w-0.5 h-3 bg-slate-300 ml-2.5" />
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="w-5 h-5 rounded bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>SCI Homogenization</span>
                  </div>
                  <div className="w-0.5 h-3 bg-slate-300 ml-2.5" />
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="w-5 h-5 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Physical Printing (Lossy)</span>
                  </div>
                  <div className="w-0.5 h-3 bg-slate-300 ml-2.5" />
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <span className="w-5 h-5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">4</span>
                    <span>Contrast Remap: 100% Return</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Practical applications */}
          <section id="applications" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Layers className="text-teal-600 w-5 h-5" />
              <span>{t.sec3Title}</span>
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.sec3Intro}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.sec3CrosstalkText}
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold mb-3">
                {t.sec3DirectionsTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 hover:border-teal-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-mono font-bold">A</span>
                  <h4 className="text-sm font-bold text-slate-800">{t.sec3App1Title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.sec3App1Desc}</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 hover:border-teal-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">B</span>
                  <h4 className="text-sm font-bold text-slate-800">{t.sec3App2Title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.sec3App2Desc}</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 hover:border-teal-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center text-xs font-mono font-bold">C</span>
                  <h4 className="text-sm font-bold text-slate-800">{t.sec3App3Title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.sec3App3Desc}</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
              <strong>{lang === "uk" ? "Попередження про цілі:" : "Aesthetic note:"}</strong> {t.sec3Summary}
            </div>
          </section>

          {/* Section: Image Gallery (Visual supplement) */}
          <section id="gallery" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="text-teal-600 w-5 h-5" />
                <span>{t.galleryTitle}</span>
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.galleryDesc}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-[11px] text-slate-500 flex items-center gap-1.5 justify-center font-mono">
              <Info className="w-3.5 h-3.5 text-teal-600" />
              <span>{t.imageTapNotice}</span>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <img 
                      src={img.url} 
                      alt={lang === "uk" ? img.titleUa : img.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 p-1.5 rounded-full shadow-sm text-slate-900 scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {lang === "uk" ? img.titleUa : img.titleEn}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {lang === "uk" ? img.descriptionUa : img.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Author Mykhailo Kashkarov */}
          <section id="author" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
              <User className="text-teal-600 w-5 h-5" />
              <span>{t.sec4Title}</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile card / avatar placeholder */}
              <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-2xl p-6 border border-slate-700 shadow-sm md:w-64 max-w-sm w-full mx-auto shrink-0 text-center space-y-4">
                <div className="w-20 h-20 bg-teal-500/10 border border-teal-500 rounded-full mx-auto flex items-center justify-center font-bold text-teal-400 text-xl font-mono">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Mykhailo Kashkarov</h4>
                  <span className="text-[11px] font-mono text-teal-400 lowercase italic">
                    bakminsterfuler@gmail.com
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono pt-3 border-t border-slate-800 space-y-1 text-left">
                  <div className="flex justify-between">
                    <span>Exp:</span>
                    <span>Color Science & Art</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Region:</span>
                    <span>Kharkiv, Ukraine</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-slate-700 text-sm leading-relaxed">
                  {t.sec4Bio1}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {t.sec4Bio2}
                </p>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  <a 
                    href="https://astra31415926.github.io/#contacts"
                    target="_blank"
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors inline-flex items-center gap-1.5"
                    referrerPolicy="no-referrer"
                  >
                    <span>View Art Portfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Publications & Interaction buttons */}
          <section id="publications" className="scroll-mt-[140px] bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="text-teal-600 w-5 h-5" />
                <span>{t.sec5Title}</span>
              </h2>
              <p className="text-xs text-slate-500">
                {t.sec5Desc}
              </p>
            </div>

            {/* Official links as big chunky interactive cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Button 1: Zenodo */}
              <a 
                href="https://zenodo.org/records/19633526"
                target="_blank"
                className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-teal-500 hover:shadow-xs transition-all flex justify-between items-start"
                referrerPolicy="no-referrer"
              >
                <div className="space-y-1 max-w-[85%]">
                  <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider block font-semibold">Zenodo Preprint</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {t.sec5BtnZenodo}
                  </h4>
                  <p className="text-xs text-slate-500">{lang === "uk" ? "Українська академічна публікація рекорду" : "Academic archival paper upload"}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
              </a>

              {/* Button 2: QRnament */}
              <a 
                href="https://astra31415926.github.io/QRnament2/"
                target="_blank"
                className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-teal-500 hover:shadow-xs transition-all flex justify-between items-start"
                referrerPolicy="no-referrer"
              >
                <div className="space-y-1 max-w-[85%]">
                  <span className="text-[10px] font-mono text-teal-600 uppercase tracking-wider block font-semibold">Web Application</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {t.sec5BtnQRnament}
                  </h4>
                  <p className="text-xs text-slate-500">{lang === "uk" ? "Створення симетричних орнаментальних шифрів" : "Decorative ornament code synthesis module"}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
              </a>

              {/* Button 3: Spectrum QR */}
              <a 
                href="https://astra31415926.github.io/QR.G.B.-ART/"
                target="_blank"
                className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-teal-500 hover:shadow-xs transition-all flex justify-between items-start"
                referrerPolicy="no-referrer"
              >
                <div className="space-y-1 max-w-[85%]">
                  <span className="text-[10px] font-mono text-indigo-600 uppercase tracking-wider block font-semibold">Bypass Crosstalk</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {t.sec5BtnSpectrum}
                  </h4>
                  <p className="text-xs text-slate-500">{lang === "uk" ? "Модулятор багатоканального кольору" : "Multilayer pigment channel modulator portal"}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
              </a>

              {/* Button 4: Fine Art Gallery */}
              <a 
                href="https://astra31415926.github.io/#contacts"
                target="_blank"
                className="group border border-slate-200 rounded-xl p-4 bg-white hover:border-teal-500 hover:shadow-xs transition-all flex justify-between items-start"
                referrerPolicy="no-referrer"
              >
                <div className="space-y-1 max-w-[85%]">
                  <span className="text-[10px] font-mono text-pink-600 uppercase tracking-wider block font-semibold">Traditional Painting</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {t.sec5BtnGallery}
                  </h4>
                  <p className="text-xs text-slate-500">{lang === "uk" ? "Повний реєстр світлочутливих робіт" : "Photoreaction pigment fine works log"}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
              </a>

              {/* Button 5: GitHub Code */}
              <a 
                href="https://github.com/Astra31415926/spectral-color-model"
                target="_blank"
                className="group border border-indigo-200/80 rounded-xl p-4 bg-indigo-50/20 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all flex justify-between items-start md:col-span-2"
                referrerPolicy="no-referrer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-700 uppercase tracking-wider block font-semibold">Open Source Files</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {t.sec5BtnGithub}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === "uk" 
                      ? "Python та JS скрипти компенсації інтегрального зсуву, тестові таблиці та лабораторні матеріали проекту." 
                      : "Source code repository containing channel validation scripts, experimental matrix prints, and optical logs."}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
              </a>

            </div>

            {/* BibTeX copy block */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold">
                  {t.bibtexTitle} (BibTeX)
                </span>
                <button
                  onClick={() => copyToClipboard(BIBTEX_TEXT, t.copiedMessage, setCopiedBib)}
                  className="text-xs text-teal-700 hover:text-teal-900 font-medium flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-md hover:bg-teal-100/80 transition-colors cursor-pointer"
                >
                  {copiedBib ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBib ? t.bibtexCopied : t.bibtexCopy}</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto select-all leading-normal border border-slate-800">
                {BIBTEX_TEXT}
              </pre>
            </div>

            {/* Contact coordinates section */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {t.contactTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Action */}
                <div 
                  onClick={() => copyToClipboard("bakminsterfuler@gmail.com", t.emailCopied)}
                  className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 p-4 rounded-xl flex items-center gap-3 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs overflow-hidden">
                    <span className="text-slate-400 block uppercase tracking-wider text-[9.5px]">
                      {t.contactEmailLabel}
                    </span>
                    <span className="font-mono text-slate-800 font-medium group-hover:text-teal-700 transition-colors truncate block">
                      bakminsterfuler@gmail.com
                    </span>
                  </div>
                </div>

                {/* Phone Action */}
                <div 
                  onClick={() => copyToClipboard("+380635058292", t.phoneCopied)}
                  className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 p-4 rounded-xl flex items-center gap-3 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs overflow-hidden">
                    <span className="text-slate-400 block uppercase tracking-wider text-[9.5px]">
                      {t.contactPhoneLabel}
                    </span>
                    <span className="font-mono text-slate-800 font-medium group-hover:text-teal-700 transition-colors truncate block">
                      +380 63 505 8292
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </section>

        </div>
      </div>

      {/* Main Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 mt-16 text-xs text-slate-500 font-mono text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="#overview" className="hover:text-slate-700 transition-colors">Overview</a>
            <span>&bull;</span>
            <a href="#theory" className="hover:text-slate-700 transition-colors">Theory</a>
            <span>&bull;</span>
            <a href="#gallery" className="hover:text-slate-700 transition-colors">Gallery</a>
            <span>&bull;</span>
            <a href="https://github.com/Astra31415926/spectral-color-model" target="_blank" className="hover:text-slate-700 transition-colors" referrerPolicy="no-referrer">GitHub</a>
          </div>
          <p className="max-w-xl mx-auto leading-relaxed">
            {t.footerText}
          </p>
          <p className="text-[10px] text-slate-400">
            Platform generated • 2026 Academic Archive. All rights reserved.
          </p>
        </div>
      </footer>

      {/* --- Image Magnifying Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full border border-slate-200 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="border-b border-slate-200 px-4 py-3 flex justify-between items-center bg-slate-50">
                <span className="font-mono text-[10px] uppercase text-slate-400 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {lang === "uk" ? "Перегляд матеріалу" : "Exhibit Details"}
                </span>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/50 transition-colors cursor-pointer"
                  title={t.closeModal}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scaled Image */}
              <div className="bg-slate-100 flex items-center justify-center border-b border-slate-100 max-h-[60vh] overflow-hidden">
                <img 
                  src={selectedImg.url} 
                  alt={lang === "uk" ? selectedImg.titleUa : selectedImg.titleEn}
                  className="max-h-[60vh] object-contain w-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative footer inside the Modal */}
              <div className="p-5 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {lang === "uk" ? selectedImg.titleUa : selectedImg.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === "uk" ? selectedImg.descriptionUa : selectedImg.descriptionEn}
                </p>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {lang === "uk" ? "Повний спектральний контроль" : "Full spectral diagnostics"}
                  </span>
                  <a
                    href={selectedImg.url}
                    target="_blank"
                    className="text-xs bg-slate-900 text-white font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-slate-800 transition-colors"
                    referrerPolicy="no-referrer"
                  >
                    <span>{lang === "uk" ? "Відкрити оригінал" : "Open Original"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Simple Toast Notification --- */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-mono px-4 py-3 rounded-full shadow-xl border border-slate-800 flex items-center gap-2 z-50"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
