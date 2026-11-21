import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@figma/astraui";
import "@figma/astraui/styles.css";
import { motion, MotionConfig, useScroll, useTransform, useReducedMotion } from "motion/react";
import {
  MessageCircle,
  TrendingDown,
  BadgeCheck,
  Fingerprint,
  VolumeX,
  ZapOff,
  Ghost,
  Brain,
  EyeOff,
  Lock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ASSETS = "https://eusouaugusttoleao.github.io/augustto-aura-assets";
const heroImg = `${ASSETS}/augustto-palco-frente.jpg`;
const TYPEBOT_URL = "https://typebot.co/mentoria-aura";

/**
 * Geometria Sagrada (Flor da Vida minimalista) — Referência Moodboard Slide 3.
 */
function SacredGeometryMark({ className = "" }: { className?: string }) {
  const circles = [
    [100, 100],
    [100, 64],
    [100, 136],
    [68.8, 82],
    [131.2, 82],
    [68.8, 118],
    [131.2, 118],
  ];
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      aria-hidden="true"
      className={className}
    >
      <circle cx="100" cy="100" r="88" strokeOpacity="0.35" />
      <circle cx="100" cy="100" r="74" strokeOpacity="0.2" />
      {circles.map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r="36" strokeOpacity="0.45" />
      ))}
    </svg>
  );
}

/**
 * Diagrama Radial ("Foque em uma única coisa") — Referência Moodboard Slide 4.
 */
function FocusDiagramMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden="true"
      className={className}
    >
      <circle cx="80" cy="80" r="64" strokeOpacity="0.35" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x2 = 80 + Math.cos(angle) * 64;
        const y2 = 80 + Math.sin(angle) * 64;
        return <line key={i} x1="80" y1="80" x2={x2} y2={y2} strokeOpacity="0.35" />;
      })}
      <circle cx="80" cy="80" r="7" fill="currentColor" fillOpacity="0.85" />
    </svg>
  );
}

/**
 * Texto rotativo vertical em pílula — inspirado na animação connect-ai-label do Refero.
 */
function RotatingPillWords() {
  const words = ["Ativação", "Unicidade", "Respeito", "Autoridade"];
  return (
    <span className="inline-block h-[16px] overflow-hidden align-middle">
      <span className="aura-word-track">
        {words.map((w) => (
          <span key={w} className="h-[16px] leading-[16px] block text-[var(--aura-gold)]">
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * Botão principal unificado da Mentoria AURA (Hero e CTA Final).
 */
function AuraCTA({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={TYPEBOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.03, boxShadow: "0 0 30px rgba(0,242,255,0.55)" }}
      className={`inline-flex items-center justify-center gap-3.5 px-7 sm:px-9 py-4 sm:py-5 rounded-md font-bold text-[16px] sm:text-[19px] transition-all duration-300 hover:brightness-110 text-black bg-[#00f2ff] ${className}`}
      style={{ boxShadow: "0 0 20px rgba(0,242,255,0.32)" }}
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span className="w-px h-5 bg-black/20" aria-hidden="true" />
      <span>Aplicar para a Sessão Estratégica</span>
    </motion.a>
  );
}

const TESTIMONIALS = [
  {
    id: "emerson-ventura",
    name: "Emerson Ventura",
    role: "CEO & Presidente Luci Luci · Empresário e Conselheiro",
    location: "Camboriú - SC",
    image: "/cases/endorse-emerson.webp",
    headline: "Uma das maiores autoridades no país em energia de palco. Faturamos mais de R$ 100M juntos.",
    quote:
      "Augustto é um profissional multifacetado. Uma das maiores autoridades no país em energia de palco. Foi meu CMO no ano em que faturamos mais de 100 milhões de reais, consolidamos a melhor criação perfumística da América Latina, e impactamos centenas de milhares de vidas no Brasil e no mundo.",
    badge: "Endosso Institucional Master",
    metrics: ["CMO R$ 100M+ Faturamento", "Expansão América Latina"],
    color: "#FFD700",
  },
  {
    id: "kaue-petry",
    name: "Kauê Petry",
    role: "Empresário & Fundador · 3 Operações Consolidadas",
    location: "Itapema - SC",
    image: "/cases/case-01-kaue.webp",
    headline: "De vendedor no marketplace para empresário multimilionário com 3 operações consolidadas.",
    quote:
      "Começou vendendo iPhone em casa via marketplace do Facebook; com a modelagem de postura e presença ASP®, hoje fatura milhões e comanda 3 operações consolidadas.",
    badge: "Modelagem de Postura & Presença",
    metrics: ["Multi-operações", "7 Dígitos Faturamento"],
    color: "#4ADE80",
  },
  {
    id: "bruno-bessa",
    name: "Dr. Bruno Bessa",
    role: "Médico Especialista em Alta Performance",
    location: "Brasília - DF",
    image: "/cases/case-bruno-bessa.webp",
    headline: "Virada de chave imediata: de R$ 3.000 para mais de R$ 16.000 por protocolo.",
    quote:
      "Após uma sessão com Augustto, tive uma virada de chave onde saí de R$ 3.000 de um protocolo para mais de R$ 16.000, ajustando minha oferta e público.",
    badge: "Reposicionamento de Alto Valor",
    metrics: ["R$ 3k → R$ 16k", "Ticket +5x"],
    color: "#4ADE80",
  },
  {
    id: "tony-burses",
    name: "Tony Burses",
    role: "Infoprodutor & Criador de Conteúdo",
    location: "São Paulo - SP",
    image: "/cases/case-03-tony.webp",
    headline: "De aluno de mentoria individual a um dos maiores infoprodutores do país.",
    quote:
      "Aluno de mentoria individual com Augustto em 2020. Hoje é um dos maiores infoprodutores do país e referência internacional de estilo de vida.",
    badge: "Aluno 1:1 · Mentoria Individual",
    metrics: ["Tier S Nacional", "Referência Internacional"],
    color: "#FFD700",
  },
  {
    id: "bruno-criativo",
    name: "Bruno Criativo",
    role: "Estrategista de Branding & Criador (@criativobruno)",
    location: "Brasília - DF",
    image: "/cases/case-02-bruno.webp",
    headline: "-50kg, virada de autoimagem e autoridade nacional em branding viral.",
    quote:
      "Mudou radicalmente sua autoimagem, eliminando mais de 50kg, aplicando constância em sua única coisa, tornou-se uma das maiores autoridades do país em branding para marcas virais.",
    badge: "Autoimagem & Presença Viral",
    metrics: ["-50kg & Autoimagem", "Branding Viral"],
    color: "#8B5CF6",
  },
  {
    id: "luis-felipe",
    name: "Luis Felipe",
    role: "CEO Rede de Combustíveis & Investidor",
    location: "Rio de Janeiro - RJ",
    image: "/cases/case-05-luis-felipe.webp",
    headline: "Aluno 1:1 há 5 anos; hoje comanda rede de postos e múltiplos ativos físicos.",
    quote:
      "Aluno de mentoria 1:1 de 5 anos atrás; hoje dono de rede de postos de gasolina e múltiplos ativos físicos consolidados.",
    badge: "Patrimônio & Negócios Físicos",
    metrics: ["Ativos Físicos", "Rede de Postos"],
    color: "#00E5FF",
  },
  {
    id: "nata-kesller",
    name: "Natã Kesller",
    role: "Fotógrafo Profissional & Criador (@nkesller)",
    location: "Brasília - DF",
    image: "/cases/case-08-nata.webp",
    headline: "Desde 2016 aplicando as bases de postura, liderança e energia com os seus.",
    quote:
      "Desde 2016 quando fazíamos vendas diretas juntos, Augustto sempre atuou com liderança, visão e energia com os dele. Aprendi muito e hoje aplico em minha profissão base do que aplicávamos naquele tempo.",
    badge: "Aliança desde 2016",
    metrics: ["@nkesller", "Parceria Histórica"],
    color: "#FFD700",
  },
  {
    id: "amil-oliveira",
    name: "Amil de Oliveira",
    role: "Advogado Empresarial & Estrategista",
    location: "Santarém - PA",
    image: "/cases/case-amil.webp",
    headline: "Uma união única de comunicação, presença, mentalidade e reprogramação.",
    quote:
      "Augustto tem uma forma única de unir comunicação, presença, imagem, mentalidade e energia através de sua metodologia e reprogramação.",
    badge: "Advocacia Corporativa",
    metrics: ["Reprogramação", "Presença Magnética"],
    color: "#8B5CF6",
  },
  {
    id: "gabriel-breier",
    name: "Gabriel Breier",
    role: "Criador de Conteúdo & Fitness Leader",
    location: "Florianópolis - SC",
    image: "/cases/case-gabriel-breier.webp",
    headline: "O Leão é unânime quando o assunto é marketing pessoal e presença de palco.",
    quote:
      "O Leão é unânime quando o assunto é marketing pessoal e presença. Vi ao vivo o impacto que ele consegue gerar em seus treinamentos e reprogramações.",
    badge: "Marketing Pessoal & Impacto",
    metrics: ["Marketing Pessoal", "Impacto Ao Vivo"],
    color: "#00E5FF",
  },
  {
    id: "gabriel-fernandes",
    name: "Gabriel Fernandes",
    role: "Empresário Internacional",
    location: "Bruxelas · Bélgica",
    image: "/cases/case-gabriel-fernandes.webp",
    headline: "Mais de 10 anos vendo o Augustto quebrar recordes e liderar pelo exemplo.",
    quote:
      "Além de um grande ativador, é um grande amigo. São mais de 10 anos que vejo ele quebrar recordes e criar impacto genuíno em todos os negócios que participou. Augustto é uma autoridade em posicionamento e presença.",
    badge: "Escala Internacional",
    metrics: ["Escala Internacional", "Aliança 10+ Anos"],
    color: "#4ADE80",
  },
] as const;

// Signature easing curves (U10)
const EASE_AURA = [0.22, 1, 0.36, 1] as const;
const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

/**
 * Carrega e reproduz vídeos abaixo da dobra apenas quando se aproximam do viewport,
 * evitando disputa de banda com a Hero e reduzindo uso de CPU/GPU em background.
 */
function LazyVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay={shouldLoad}
      loop
      muted
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      className={className}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}

// --- Brand & Ornament Components ---

function AuraLogo({ className = "", ariaLabel = "AURA" }: { className?: string; ariaLabel?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={16}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <polygon points="80,250 260,250 170,80" />
      <path d="M 380 80 L 380 188 A 70 62 0 0 0 520 188 L 520 80" />
      <path d="M 640 250 L 640 80 L 740 80 A 47.5 42.5 0 0 1 740 165 L 640 165" />
      <path d="M 720 165 L 810 250" />
      <polygon points="900,250 1080,250 990,80" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span
        className="font-editorial text-[var(--aura-gold)] opacity-60 text-[16px] leading-none"
        aria-hidden="true"
      >
        *
      </span>
      <div className="w-12 h-[1px] bg-[var(--aura-gold)] opacity-30" />
      <span className="uppercase text-[11px] font-semibold tracking-[4px] text-[var(--aura-gold)]">
        {children}
      </span>
    </div>
  );
}

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.02] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
      }}
    />
  );
}

function AuraLandingPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const prefersReducedMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyBar(window.scrollY > 560);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const currentCase = TESTIMONIALS[activeTestimonial];
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="min-h-screen font-[var(--font-sans)] text-[var(--aura-cream)]"
      style={{
        backgroundColor: "var(--aura-black)",
        backgroundImage:
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.04), transparent 50%), radial-gradient(circle at 80% 90%, rgba(120,120,120,0.06), transparent 50%)",
      }}
    >
      {/* Skip link — A7 */}
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>

      {/* Noise grain overlay — U14 */}
      <GrainOverlay />

      {/* Barra flutuante discreta pós-Hero */}
      <div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          showStickyBar
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="bg-[#070707]/85 backdrop-blur-md border-b border-white/10 px-5 sm:px-8 py-3">
          <div className="max-w-[1140px] mx-auto flex items-center justify-between gap-4">
            <a href="#main" className="text-white/90 hover:text-white transition-colors" aria-label="Topo AURA">
              <AuraLogo className="h-5 sm:h-6 w-auto" ariaLabel="AURA" />
            </a>
            <a
              href={TYPEBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-[#00f2ff] text-black font-bold text-[12px] sm:text-[13px] uppercase tracking-[1px] hover:brightness-110 transition-all"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              <span>Aplicar</span>
            </a>
          </div>
        </div>
      </div>

      <main id="main">
        {/* ─── SEÇÃO 01 — HERO ─── */}
        <section
          aria-labelledby="hero-heading"
          className="relative min-h-[100vh] flex flex-col items-center justify-start pt-16 pb-16 px-6 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-60"
            >
              <source src={`${ASSETS}/pexels-abstract-01.mp4`} type="video/mp4" />
            </video>
            {/* Purple/Aurora Glow for Hero branding context */}
            <div
              className="absolute -bottom-48 -right-48 w-[640px] h-[640px] opacity-[0.18] pointer-events-none"
              style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="relative z-40 w-full max-w-[1140px] mx-auto flex flex-col items-center text-center mt-4"
            style={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch w-full">
              <div className="lg:col-span-7 flex flex-col justify-between items-center lg:items-start text-center lg:text-left">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: EASE_REVEAL }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 uppercase text-[11px] font-bold tracking-[2.5px] text-white/90 mb-6 bg-white/[0.08] backdrop-blur-md rounded-full border border-white/15"
                    style={{ textShadow: "none" }}
                  >
                    <span>Seja protagonista da sua história</span>
                    <span className="opacity-40" aria-hidden="true">·</span>
                    <RotatingPillWords />
                  </motion.div>

                  <motion.h1
                    id="hero-heading"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: EASE_REVEAL }}
                    className="font-display text-[clamp(38px,5.6vw,74px)] font-extrabold text-white mb-6 uppercase"
                    style={{ textShadow: "none" }}
                  >
                    ATIVE SEU POSICIONAMENTO, DOMINE SUA COMUNICAÇÃO E PRESENÇA NA VIDA E NOS NEGÓCIOS
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35 }}
                    className="text-[clamp(16px,1.8vw,22px)] text-white/90 mb-8 max-w-[680px] font-editorial italic tracking-[1px]"
                    style={{ textShadow: "none", fontWeight: 400 }}
                  >
                    Em 12 semanas veja o reflexo da sua autoridade alinhada com sua competência.
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.45 }}
                    className="text-[clamp(16px,2vw,21px)] font-extrabold mb-4 max-w-[680px] leading-snug uppercase"
                    style={{ textShadow: "none", color: "#FFD700" }}
                  >
                    PARA LÍDERES E EMPRESÁRIOS COM RESULTADOS, QUE NÃO SÃO VISTOS NO TAMANHO QUE DEVERIAM SER.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-[clamp(15px,1.5vw,17px)] font-normal text-white/80 mb-8 leading-relaxed max-w-[660px]"
                    style={{ textShadow: "none" }}
                  >
                    Você construiu competência. Construiu resultado. Mas continua sendo tratado como uma opção — e não como A referência — no seu mercado, na sua mesa, na sua família. A Mentoria AURA reconstrói sua Autoimagem, seu Posicionamento, sua Comunicação Magnética e sua Autoridade em Movimento nos 4 blocos da Jornada de 12 Semanas. No final, você não fala melhor. Você ocupa o lugar certo.
                  </motion.p>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full pt-2">
                  <AuraCTA className="relative z-[60]" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-4 text-[11px] uppercase tracking-[2px] opacity-70 font-semibold"
                  >
                    MESA LIMITADA A 33 MEMBROS POR SEMESTRE · PROCESSO SELETIVO
                  </motion.div>
                </div>
              </div>

              {/* Vídeo Vertical do YouTube + Logos do Ecossistema */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-5 flex flex-col justify-between items-center lg:items-end"
              >
                <div className="w-full max-w-[360px] sm:max-w-[400px] rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/20">
                  <div className="relative w-full aspect-[9/16] bg-black/50">
                    <iframe
                      className="absolute inset-0 w-full h-full pointer-events-auto"
                      src="https://www.youtube.com/embed/MbXZsn2mP60?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=MbXZsn2mP60"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Faixa minimalista das 4 marcas embaixo do vídeo: ASP · AURA · Augustto · Sellect */}
                <div className="w-full max-w-[360px] sm:max-w-[400px] mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <img
                    src="/brands/logo-asp.png"
                    alt="ASP"
                    loading="eager"
                    decoding="async"
                    className="h-4 sm:h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                  <div className="text-white/75 hover:text-white transition-opacity">
                    <AuraLogo className="h-4 sm:h-5 w-auto" ariaLabel="AURA" />
                  </div>
                  <img
                    src="/brands/logo-leao.png"
                    alt="Augustto Leão"
                    loading="eager"
                    decoding="async"
                    className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/brands/logo-sellect-light.png"
                    alt="Sellect Inteligência"
                    loading="eager"
                    decoding="async"
                    className="h-4 sm:h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ─── SEÇÃO 02 — A INJUSTIÇA / RAIO-X ─── */}
        <section
          aria-labelledby="section-injustica"
          className="py-28 md:py-40 px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src={`${ASSETS}/augustto-palco-apontando.jpg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.5]"
            />
            <div className="absolute inset-0 bg-[var(--aura-black)]/55 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--aura-black)] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          </div>

          <div className="max-w-[1040px] mx-auto w-full relative z-10">
            {/* Ghost text do Moodboard (#93877E) + Diagrama Radial */}
            <div
              className="hidden md:block absolute -top-10 -left-4 font-display text-[130px] lg:text-[180px] uppercase tracking-tight select-none pointer-events-none opacity-[0.05]"
              style={{ color: "var(--aura-taupe)" }}
              aria-hidden="true"
            >
              DISSONÂNCIA
            </div>
            <FocusDiagramMark className="hidden lg:block absolute top-2 right-0 w-36 h-36 text-white/30 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE_AURA }}
            >
              <Eyebrow>A Injustiça do Mercado</Eyebrow>
              <h2
                id="section-injustica"
                className="font-display text-[clamp(36px,5.2vw,66px)] font-extrabold text-[var(--aura-white)] mb-6 max-w-[800px] uppercase"
              >
                O mercado não paga quem é melhor. <br />
                Paga quem é{" "}
                <span className="font-editorial normal-case aura-gold-sweep">
                  melhor percebido
                </span>
                .
              </h2>
              <p className="text-[clamp(20px,2.4vw,26px)] font-semibold text-[var(--aura-white)] mb-4">
                E pagamento é igual ao respeito pela sua autoridade e capacidade, concorda?
              </p>
              <p className="text-[16px] text-[var(--aura-cream)] opacity-70 max-w-[760px] leading-relaxed mb-16">
                Pessoas com menos competência que você estão faturando mais e ocupando
                lugares que deveriam ser seus — porque elas dominam a Percepção e a
                Comunicação.
              </p>
            </motion.div>

            {/* Individual Dark Glass Cards — U9 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Fingerprint size={32} />,
                  title: "Desvalorização",
                  desc: "Sem posicionamento, você é commodity. Substituível por preço, por agenda, por qualquer um.",
                  color: "#8B5CF6"
                },
                {
                  icon: <BadgeCheck size={32} />,
                  title: "O Nome como Ativo",
                  desc: "Seu nome e imagem são representações sociais. Se não geram valor imediato, você perde seu patrimônio mais caro: o Respeito.",
                  color: "#4ADE80"
                },
                {
                  icon: <VolumeX size={32} />,
                  title: "O Gigante Silencioso",
                  desc: "De nada adianta um oceano de conhecimento se sua comunicação é um riacho raso. O mercado pune o invisível.",
                  color: "#00E5FF"
                },
                {
                  icon: <ZapOff size={32} />,
                  title: "Impotência",
                  desc: "Possibilidades nas mãos, mas inércia por falta de planejamento. A baixa confiança te trava de expor talentos por medo do julgamento.",
                  color: "#FFD700"
                },
                {
                  icon: <Ghost size={32} />,
                  title: "Síndrome do Impostor",
                  desc: "Habilidades de sobra, mas zero confiança em apresentar projetos por falta de narrativa e contexto claro.",
                  color: "#8B5CF6"
                },
                {
                  icon: <Brain size={32} />,
                  title: "Obesidade Mental",
                  desc: "Você sabe muito, mas não condensa em projetos. A procrastinação te faz empurrar com a barriga o que deveria ser o seu legado.",
                  color: "#4ADE80"
                },
                {
                  icon: <EyeOff size={32} />,
                  title: "Sufocamento",
                  desc: "O espelho não reflete quem você realmente se tornou. Sua imagem virou um reflexo embaçado.",
                  color: "#00E5FF"
                },
                {
                  icon: <Lock size={32} />,
                  title: "Algemas de Ouro",
                  desc: "Preso a um trabalho ou situação por não ter coragem de empreender no que domina — por não saber vender seu valor.",
                  color: "#FFD700"
                },
              ].map((card, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.06, ease: EASE_AURA }}
                  className="group relative p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-black/80 transition-all duration-500 shadow-xl h-full flex flex-col"
                >
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-0 group-hover:opacity-[0.1] blur-3xl transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: card.color }} />

                  <div className="mb-6 flex">
                    <div
                      className="transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                      style={{ color: card.color, opacity: 0.5 }}
                      aria-hidden="true"
                    >
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-[17px] font-black text-white mb-3 tracking-[-0.3px] uppercase leading-tight group-hover:text-white transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-500">{card.desc}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_AURA }}
              className="mt-12 text-center"
            >
              <p className="text-[clamp(18px,2.4vw,28px)] font-black text-white max-w-[1040px] mx-auto leading-tight uppercase tracking-[-1px]">
                Quando você tem clareza de quem é, o que faz, para quem faz e quanto vale, um mundo de possibilidades se abre.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── SEÇÃO 03 — A ÁRVORE / 4 PILARES ─── */}
        <section
          aria-labelledby="section-pilares"
          className="py-24 md:py-32 px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <LazyVideo
              src={`${ASSETS}/pinterest-video-03.mp4`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Added Black Glass Scrim for contrast */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

            {/* Confluence gradient — Top down to meet the previous section */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />

            {/* The original glowing blur element */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-[0.06] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, var(--aura-fire) 0%, transparent 70%)" }}
            />
          </div>

          <div className="max-w-[1040px] mx-auto w-full relative z-10">
            <SacredGeometryMark className="w-[340px] h-[340px] md:w-[440px] md:h-[440px] text-[var(--aura-gold)] opacity-[0.07] absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="flex flex-col items-center text-center mb-20 relative z-10">
              <Eyebrow>Desativar para Ativar</Eyebrow>
              <h2
                id="section-pilares"
                className="font-display text-[clamp(36px,5.2vw,66px)] font-extrabold text-[var(--aura-white)] mb-6 max-w-[800px] uppercase"
              >
                O mercado vende personagens. <br />
                Nós ativamos sua{" "}
                <span className="font-editorial normal-case aura-gold-sweep">
                  Autoimagem Real
                </span>
                .
              </h2>
              <p className="text-[clamp(15px,1.6vw,18px)] text-[var(--aura-cream)] opacity-75 max-w-[720px] leading-relaxed">
                A Mentoria AURA é uma engenharia de dentro para fora, fundamentada em 10
                anos de PNL, Coaching, Neurociência, Marketing e Mentalidade. Seu
                posicionamento será uma emanação da sua verdade — não uma máscara.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "I",
                  tag: "Raiz",
                  title: "Autoimagem",
                  desc: "Reprogramação da forma como você se vê. Limpeza do espelho mental.",
                  img: "https://i.pinimg.com/736x/f7/c2/79/f7c279c0c6e92b6fe24c0d5167c24e6d.jpg",
                  pos: "50% 80%",
                  color: "#8B5CF6", // Purple
                },
                {
                  num: "II",
                  tag: "Estrutura",
                  title: "Posicionamento",
                  desc: "Definição do seu lugar único no mercado. Território claro.",
                  pos: "50% 50%",
                  color: "#4ADE80", // Green Neon
                  video: "https://eusouaugusttoleao.github.io/augustto-aura-assets/pinterest-video-05.mp4",
                },
                {
                  num: "III",
                  tag: "Canal",
                  title: "Comunicação Magnética",
                  desc: "Oratória, linguagem corporal, storytelling que conecta e converte.",
                  pos: "50% 50%",
                  video: "https://eusouaugusttoleao.github.io/augustto-aura-assets/pinterest-video-04.mp4",
                  color: "#00E5FF", // Cyan/Blue
                },
                {
                  num: "IV",
                  tag: "Colheita",
                  title: "Autoridade em Movimento",
                  desc: "Execução, vendas com autoridade, liderança visível, escala.",
                  img: "https://i.pinimg.com/1200x/f5/08/bb/f508bb26a260ba47c015551fbe34716a.jpg",
                  pos: "50% 55%",
                  color: "#FFD700", // Gold/Yellow
                },
              ].map((pilar, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: EASE_AURA }}
                  className="group relative rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/[0.1] p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-700 hover:border-white/20"
                >
                  {/* Background Content (Image or Video) — U9 */}
                  {(pilar.img || pilar.video) && (
                    <div className="absolute inset-0 z-0">
                      {pilar.video ? (
                        <LazyVideo
                          src={pilar.video}
                          className="w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
                        />
                      ) : (
                        <img
                          src={pilar.img}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 ease-out"
                          style={{ objectPosition: pilar.pos || 'center' }}
                        />
                      )}
                      {/* Dark Overlay for Text Contrast */}
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
                    </div>
                  )}

                  {/* Aurora Bottom Glow — Derived from User Reference */}
                  <div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, ${pilar.color}, transparent)`
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-6 blur-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at bottom, white 0%, transparent 70%)`
                    }}
                  />

                  {/* Roman numeral editorial — U15 */}
                  <div className="flex items-center gap-3 mb-6 relative z-10 transition-opacity duration-700">
                    <span
                      className="font-editorial text-[16px] num-tabular mt-[1px]"
                      style={{ color: pilar.color }}
                      aria-hidden="true"
                    >
                      {pilar.num}
                    </span>
                    <span className="opacity-40 text-white/50" aria-hidden="true">/</span>
                    <span
                      className="uppercase text-[10px] tracking-[4px] font-black"
                      style={{ color: pilar.color }}
                    >
                      {pilar.tag}
                    </span>
                  </div>

                  <h3 className="text-[clamp(24px,2.5vw,30px)] font-black text-white mb-4 tracking-[-0.5px] relative z-10 uppercase">
                    {pilar.title}
                  </h3>
                  <p className="text-[15px] text-white/50 leading-relaxed relative z-10 max-w-[420px] font-medium group-hover:text-white/90 transition-all duration-500">
                    {pilar.desc}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="font-editorial italic text-[clamp(18px,2vw,22px)] text-[var(--aura-gold)]">
                Pular um bloco é o motivo de 90% das mentorias de marca pessoal falharem. <br /> A ordem é o método.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── SEÇÃO 04 — MENTOR AUGUSTTO ─── */}
        <section
          aria-labelledby="section-mentor"
          className="py-32 md:py-48 px-6 relative"
        >
          <div className="max-w-[1040px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-16 md:gap-24 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE_AURA }}
                className="relative w-full h-full min-h-[380px] md:min-h-[500px] md:max-w-none overflow-hidden"
              >
                {/* Editorial corner rules — U12 */}
                <div className="absolute -top-2 -left-2 w-16 h-[1px] bg-[var(--aura-gold)] opacity-40 z-20" aria-hidden="true" />
                <div className="absolute -top-2 -left-2 w-[1px] h-16 bg-[var(--aura-gold)] opacity-40 z-20" aria-hidden="true" />

                <img
                  src={`${ASSETS}/mentor-augustto.jpg`}
                  alt="Retrato de Augustto Leão, mentor do Patrimônio Social"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top grayscale-[25%] contrast-[1.05]"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--aura-black)]/70 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 z-10">
                  <div className="font-editorial text-[13px] text-[var(--aura-white)]/85 leading-tight">
                    Augustto Leão, 2024
                  </div>
                  <div className="uppercase text-[9px] tracking-[3px] text-[var(--aura-gold)]/70 mt-1">
                    Balneário Camboriú · SC
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE_AURA }}
              >
                <Eyebrow>A Autoridade</Eyebrow>
                <h2
                  id="section-mentor"
                  className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[var(--aura-white)] mb-2 leading-none uppercase"
                >
                  Augustto Leão
                </h2>
                <div className="font-editorial text-[22px] text-[var(--aura-gold)] mb-8">
                  Mentor do Patrimônio Social
                </div>

                <div className="space-y-6 text-[16px] text-[var(--aura-cream)] opacity-85 leading-[1.8] mb-12">
                  <p>
                    Saí de{" "}
                    <strong className="text-[var(--aura-white)]">panfleteiro aos 13 anos</strong>
                    , ajudante de obra aos 17, e líder internacional de vendas aos 23. Aos
                    24, como Mastercoach e Practitioner em PNL, fundei minha agência de
                    marketing de posicionamento.
                  </p>
                  <p>
                    Saí da periferia de Brasília para a cadeira de{" "}
                    <strong className="text-[var(--aura-white)]">CMO de uma multinacional</strong>
                    , liderando estratégias que movimentaram{" "}
                    <strong className="text-[var(--aura-white)]">
                      mais de R$ 100 Milhões apenas em 2024
                    </strong>
                    . Hoje, aos 32 anos, sou mentor, ativador de marcas, graduado em
                    neurociência e mestre em comunicação.
                  </p>
                  <p>
                    Minha metodologia foi forjada na pressão de liderar{" "}
                    <strong className="text-[var(--aura-white)]">100.000 pessoas</strong> e
                    na precisão de mentorar{" "}
                    <strong className="text-[var(--aura-white)]">empresários de 7 dígitos</strong>
                    . Eu sei como limpar o espelho mental porque eu limpei o meu.
                  </p>
                </div>

                {/* Stats with hairline + vertical dividers — U16 */}
                <div className="grid grid-cols-3 gap-0 pt-8 border-t border-white/10">
                  {[
                    { num: "100M+", label: "Movimentados · 2024" },
                    { num: "100k", label: "Pessoas lideradas" },
                    { num: "10+", label: "Anos de método" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`relative pt-2 ${i > 0 ? "border-l border-white/10 pl-4 sm:pl-6" : "pr-4 sm:pr-6"}`}
                    >
                      <div className="num-tabular text-[clamp(20px,3vw,32px)] font-extrabold tracking-[-1px] text-[var(--aura-gold)] mb-2">
                        {stat.num}
                      </div>
                      <div className="uppercase text-[10px] sm:text-[11px] tracking-[1.5px] opacity-60 max-w-[140px] leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SEÇÃO 05 — JORNADA 12 SEMANAS ─── */}
        <section
          aria-labelledby="section-jornada"
          className="py-24 md:py-36 px-6 bg-[#0D0D0D] relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src={`${ASSETS}/augustto-palco-frente-02.jpg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-[center_85%] opacity-90"
            />
            <div className="absolute inset-0 bg-[#0D0D0D]/60 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0D0D0D] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
          </div>

          <div className="max-w-[1040px] mx-auto w-full relative z-10">
            <div
              className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[130px] lg:text-[170px] uppercase tracking-tight select-none pointer-events-none opacity-[0.05] whitespace-nowrap"
              style={{ color: "var(--aura-taupe)" }}
              aria-hidden="true"
            >
              FLUXO DE ATIVAÇÃO
            </div>
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
              <Eyebrow>A Jornada AURA</Eyebrow>
              <h2
                id="section-jornada"
                className="font-display text-[clamp(36px,5.2vw,66px)] font-extrabold text-[var(--aura-white)] mb-6 max-w-[800px] uppercase"
              >
                12 semanas. 4 blocos. <br />
                Uma{" "}
                <span className="font-editorial normal-case aura-gold-sweep">
                  transformação
                </span>
                .
              </h2>
              <p className="text-[clamp(15px,1.6vw,18px)] text-[var(--aura-cream)] opacity-75 max-w-[720px] leading-relaxed">
                Cada bloco resolve uma camada profunda da sua autoridade. Ao final, você
                não é "alguém que aprendeu" — você é outra versão de si mesmo.
              </p>
            </div>

            {/* Mini timeline — U17 */}
            <div
              className="hidden md:flex items-center justify-between gap-4 mb-20 max-w-[1040px] mx-auto w-full px-12"
              aria-hidden="true"
            >
              {[
                { label: "Sem 1–3", color: "#8B5CF6" },
                { label: "Sem 4–6", color: "#4ADE80" },
                { label: "Sem 7–9", color: "#00E5FF" },
                { label: "Sem 10–12", color: "#FFD700" }
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      style={{ backgroundColor: item.color }}
                    />
                    <span
                      className="font-editorial text-[11px] num-tabular font-bold"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex-1 h-[1px] opacity-20" style={{ backgroundColor: item.color }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  tag: "Semanas 1–3",
                  title: "Autoimagem",
                  foco: "Como você se vê?",
                  desc: "Diagnóstico de Autoridade e Limpeza do Espelho Mental. Raio-X da Autoridade Percebida · Inventário de Identidade · Carta de Identidade.",
                  encontro: "Espelho de Identidade — 1:1 com Augustto",
                  bonus: "DISC Comportamental + Livro Pessoal",
                  color: "#8B5CF6", // Purple
                },
                {
                  num: "02",
                  tag: "Semanas 4–6",
                  title: "Posicionamento",
                  foco: "O lugar que você ocupa",
                  desc: "One Page Positioning · PUV · Script de Apresentação de Elite. Define com clareza o seu território único no mercado.",
                  encontro: "Arquitetura de Posicionamento — 1:1 com Augustto",
                  bonus: "Workshop de Comunicação Assertiva",
                  color: "#4ADE80",
                },
                {
                  num: "03",
                  numFull: "03",
                  tag: "Semanas 7–9",
                  title: "Comunicação Magnética",
                  foco: "Como você chega?",
                  desc: "Oratória de Ativação · Presença de Palco · Protocolo de Linguagem Corporal · Plano de Conteúdo de Autoridade.",
                  encontro: "Calibragem de Comunicação — 1:1 com Augustto",
                  bonus: "Técnica Vocal + Análise Arquetípica Digital",
                  color: "#00E5FF",
                },
                {
                  num: "04",
                  tag: "Semanas 10–12",
                  title: "Autoridade em Movimento",
                  foco: "Como você é pago?",
                  desc: "Conversa Diagnóstica · Pitch de Alto Valor · Plano Estratégico de 90 Dias · Ritual de Sustentação.",
                  encontro: "Plano de Autoridade — 1:1 com Augustto",
                  bonus: "Primal Branding + Pitch Pessoal + Agente IA (Clone Pessoal)",
                  color: "#FFD700",
                },
              ].map((bloco, idx) => (
                <motion.article
                  key={bloco.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE_AURA }}
                  className="group relative bg-[#111111]/90 border border-white/[0.08] border-t-2 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#141414]"
                  style={{ borderTopColor: bloco.color }}
                >
                  <div
                    className="absolute top-4 right-8 font-editorial num-tabular text-[84px] opacity-[0.2] leading-none select-none pointer-events-none transition-all duration-700 group-hover:opacity-60"
                    style={{ color: bloco.color }}
                    aria-hidden="true"
                  >
                    {bloco.num}
                  </div>

                  <div
                    className="uppercase text-[10px] tracking-[4px] font-black mb-6"
                    style={{ color: bloco.color }}
                  >
                    {bloco.tag}
                  </div>

                  <h3 className="text-[clamp(28px,3vw,33px)] font-black text-white mb-2 tracking-[-0.5px] uppercase">
                    {bloco.title}
                  </h3>

                  <div
                    className="font-editorial text-[18px] mb-8 italic"
                    style={{ color: bloco.color }}
                  >
                    "{bloco.foco}"
                  </div>

                  <p className="text-[14px] text-white/50 leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-500">
                    {bloco.desc}
                  </p>

                  <div
                    className="text-[14px] font-black mb-8 flex items-center gap-3"
                    style={{ color: bloco.color }}
                  >
                    <div className="w-2 h-2 rounded-full border border-white/20" style={{ backgroundColor: bloco.color }} />
                    {bloco.encontro}
                  </div>

                  <div className="bg-white/5 border border-white/[0.08] p-6 rounded-2xl group-hover:bg-white/10 transition-colors duration-500">
                    <div className="uppercase text-[10px] tracking-[2px] opacity-60 font-black mb-3">
                      Bônus de Ativação
                    </div>
                    <div className="text-[13px] text-white font-medium leading-relaxed">
                      {bloco.bonus}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>



        {/* ─── SEÇÃO 06 — DEPOIMENTOS ─── */}
        <section
          aria-labelledby="section-depoimentos"
          className="py-24 md:py-36 px-6 bg-[var(--aura-black)] relative overflow-hidden border-t border-white/[0.06]"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[420px] opacity-[0.07] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top, ${currentCase.color} 0%, transparent 70%)` }}
            aria-hidden="true"
          />

          <div className="max-w-[1140px] mx-auto w-full relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <Eyebrow>Quem Já Viveu a Metodologia</Eyebrow>
              <h2
                id="section-depoimentos"
                className="text-[clamp(28px,4.5vw,52px)] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[var(--aura-white)] mb-4 max-w-[820px] leading-tight"
              >
                Não é Teoria de Palco.{" "}
                <span className="font-editorial text-[var(--aura-gold)]">
                  Resultados Reais
                </span>
                .
              </h2>
              <p className="text-[clamp(14px,1.5vw,17px)] text-[var(--aura-cream)] opacity-65 max-w-[680px] leading-relaxed">
                Depoimentos de empresários, médicos, executivos e líderes que ajustaram postura, posicionamento e presença com o Augustto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Spotlight Card */}
              <div className="lg:col-span-7 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/[0.1] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-40 opacity-20 pointer-events-none transition-all duration-500"
                  style={{ background: `radial-gradient(ellipse at bottom, ${currentCase.color} 0%, transparent 70%)` }}
                  aria-hidden="true"
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[2.5px] bg-white/[0.05] border border-white/10"
                      style={{ color: currentCase.color }}
                    >
                      <BadgeCheck size={14} />
                      {currentCase.badge}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="num-tabular text-[11px] font-bold tracking-[2px] text-white/50">
                        {String(activeTestimonial + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={prevTestimonial}
                          aria-label="Depoimento anterior"
                          className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={nextTestimonial}
                          aria-label="Próximo depoimento"
                          className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[clamp(20px,2.4vw,28px)] font-extrabold text-white leading-snug tracking-[-0.5px]">
                    "{currentCase.headline}"
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-[var(--aura-cream)] opacity-80 leading-relaxed font-light">
                    "{currentCase.quote}"
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentCase.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.05] border border-white/10 text-white/85"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0 bg-black/50"
                    style={{ borderColor: `${currentCase.color}80` }}
                  >
                    <img
                      src={currentCase.image}
                      alt={currentCase.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] sm:text-[20px] font-black text-white leading-tight">
                      {currentCase.name}
                    </h4>
                    <p className="text-[13px] text-[var(--aura-cream)] opacity-70 leading-snug mt-0.5">
                      {currentCase.role}
                    </p>
                    <span
                      className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] mt-1"
                      style={{ color: currentCase.color }}
                    >
                      {currentCase.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Rail — Faixa horizontal no mobile, lista vertical no desktop */}
              <div className="lg:col-span-5 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] p-4 sm:p-5 flex flex-col">
                <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-white/[0.08]">
                  <span className="uppercase text-[10px] tracking-[3px] font-black text-white/60">
                    Cases Verificados
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--aura-gold)]">
                    {TESTIMONIALS.length} histórias
                  </span>
                </div>

                {/* Mobile horizontal chips */}
                <div className="flex lg:hidden gap-2.5 overflow-x-auto pb-2 snap-x">
                  {TESTIMONIALS.map((item, idx) => {
                    const isActive = idx === activeTestimonial;
                    return (
                      <button
                        key={`mob-${item.id}`}
                        type="button"
                        onClick={() => setActiveTestimonial(idx)}
                        className={`snap-start shrink-0 px-3 py-2 rounded-xl border transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? "bg-white/[0.1] border-white/30"
                            : "bg-white/[0.03] border-white/10"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className={`w-9 h-9 rounded-lg object-cover object-top shrink-0 border border-white/15 transition-all ${
                            isActive ? "grayscale-0" : "grayscale-[30%] contrast-[1.05]"
                          }`}
                        />
                        <span className="text-[13px] font-bold text-white whitespace-nowrap">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Desktop vertical list */}
                <div className="hidden lg:block space-y-2 max-h-[480px] overflow-y-auto pr-1">
                  {TESTIMONIALS.map((item, idx) => {
                    const isActive = idx === activeTestimonial;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveTestimonial(idx)}
                        className={`group/rail w-full text-left p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer ${
                          isActive
                            ? "bg-white/[0.08] border-white/25"
                            : "bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/10"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className={`w-11 h-11 rounded-xl object-cover object-top shrink-0 border border-white/15 transition-all duration-300 ${
                            isActive
                              ? "grayscale-0 contrast-100"
                              : "grayscale-[30%] contrast-[1.05] group-hover/rail:grayscale-0"
                          }`}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[14px] font-bold text-white truncate">
                              {item.name}
                            </span>
                            {isActive && (
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                            )}
                          </div>
                          <p className="text-[12px] text-white/55 truncate">
                            {item.role}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SEÇÃO 07 — GARANTIA ─── */}
        <section
          aria-labelledby="section-garantia"
          className="relative bg-[var(--aura-black)] overflow-hidden"
        >
          {/* Imagem lateral com fade interno */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] z-0 pointer-events-none">
            <img
              src="https://eusouaugusttoleao.github.io/augustto-aura-assets/augustto-retrato-oculos.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute left-0 w-full h-[115%] -top-[8%] md:-top-[12%] object-cover object-[center_top] opacity-40 mix-blend-luminosity md:mix-blend-normal md:opacity-80"
            />
            {/* Fade lateral (transição sutil para a cor de fundo) direcionando atenção para a garantia */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--aura-black)]/30 to-[var(--aura-black)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--aura-black)] via-transparent to-[var(--aura-black)] opacity-80" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--aura-black)] via-[var(--aura-black)]/80 to-transparent" />
          </div>

          <div className="py-24 md:py-32 px-6 max-w-[1040px] mx-auto w-full relative z-10 flex flex-col md:flex-row md:justify-end">
            <div className="max-w-[560px] w-full text-center md:text-left">
              <Eyebrow color="#8B5CF6">Sem Risco</Eyebrow>
              <h3
                id="section-garantia"
                className="text-[clamp(28px,3.5vw,42px)] font-bold text-[var(--aura-white)] mb-6 tracking-[-0.5px]"
              >
                Garantia de Ativação — <span style={{ color: "#8B5CF6" }}>14 dias</span>.
              </h3>
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-[var(--aura-cream)] opacity-80 mb-8 mx-auto md:mx-0">
                Participe do primeiro encontro em grupo e do primeiro Encontro Individual (<strong className="text-white">Espelho de Identidade</strong>).
                Se nas 2 primeiras semanas você sentir que a Jornada AURA não é a ferramenta que você precisa, devolvemos <strong style={{ color: "#8B5CF6" }}>100% do investimento</strong>. Sem perguntas, sem fricção.
              </p>
              <div 
                className="bg-white/[0.04] backdrop-blur-sm border-l-2 p-6 text-left rounded-sm mx-auto md:mx-0"
                style={{ borderColor: "#8B5CF699" }}
              >
                <div className="text-[13px] font-bold mb-2 uppercase tracking-[1px]" style={{ color: "#8B5CF6" }}>Por que 14 dias?</div>
                <p className="text-[14px] text-[var(--aura-cream)] opacity-80 leading-relaxed">
                  Porque nas 2 primeiras semanas você já passa pelo Diagnóstico de Autoridade Percebida e pelo Espelho de Identidade. Em 14 dias você sabe se é para você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SEÇÃO 08 — FILTRO DE AUTORIDADE ─── */}
        <section
          aria-labelledby="section-filtro"
          className="py-24 md:py-36 px-6 relative overflow-hidden flex flex-col items-center bg-[#F0EFEC]"
        >
          <div className="max-w-[1040px] mx-auto w-full text-center flex flex-col items-center relative z-10">
            <div className="inline-block px-5 py-2 uppercase text-[10px] font-black tracking-[4px] text-black mb-10 bg-black/10 backdrop-blur-sm rounded-full border border-black/5">
              Filtro de Autoridade
            </div>

            <h2
              id="section-filtro"
              className="text-[clamp(48px,8vw,92px)] font-black tracking-[-3px] text-black mb-8 max-w-[900px] leading-[0.9] uppercase"
            >
              Para quem não <span className="font-editorial normal-case text-[#8B5CF6]">é</span>.
            </h2>

            <p className="text-[clamp(18px,2.4vw,26px)] font-bold text-black/70 mb-20 max-w-[70%]">
              A Mentoria AURA é uma <strong className="text-black font-black">mesa curada</strong>. <br />
              Fechamos a porta para três perfis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              {[
                {
                  title: "Os Superficiais",
                  desc: 'Que buscam "parecer" sem a coragem de "ser".',
                },
                {
                  title: "Os Céticos do Valor Humano",
                  desc: "Que não entendem que o nome é o maior ativo de um negócio.",
                },
                {
                  title: "Os que fogem da Verdade",
                  desc: "Que não têm coragem de olhar para dentro para poder brilhar fora.",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: EASE_AURA }}
                  className="group relative p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <h3 className="text-[20px] font-black text-black mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-black/75 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEÇÃO 09 — CTA FINAL ─── */}
        <section
          aria-labelledby="section-convite"
          className="py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <LazyVideo
              src="https://github.com/eusouaugusttoleao/mentoria-aura/releases/download/v1.0-assets/acabamento-site-comprimido.mp4"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div className="max-w-[780px] mx-auto w-full relative z-10 flex flex-col items-center">
            <Eyebrow>Próximo Passo</Eyebrow>
            <h2
              id="section-convite"
              className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[var(--aura-white)] mb-10 leading-[1.1]"
            >
              Sessão Estratégica com{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  color: "var(--aura-gold)",
                  backgroundImage:
                    "linear-gradient(135deg, var(--aura-fire), var(--aura-flame), var(--aura-gold))",
                }}
              >
                Augustto
              </span>
              .
            </h2>

            <div className="space-y-6 text-[clamp(15px,1.6vw,18px)] text-[var(--aura-cream)] opacity-85 max-w-[680px] leading-relaxed mb-12">
              <p>
                A Jornada AURA não é para quem está começando. É para quem{" "}
                <strong className="text-[var(--aura-white)] font-bold">já tem resultado</strong>{" "}
                e está pronto para o próximo patamar de percepção.
              </p>
              <p className="pt-4 border-t border-white/10 font-editorial italic text-[var(--aura-gold)]">
                Se você leu até aqui, o Augustto já te olhou nos olhos pelo texto. O próximo passo é olhar nos olhos dele — literalmente — na Sessão Estratégica.
              </p>
            </div>

            <div className="w-full max-w-[760px] text-left mb-14 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Você envia uma mensagem pelo botão abaixo (1 min)",
                "Nossa equipe contata em até 24h úteis via WhatsApp",
                "Se houver fit, agendamos sua Sessão com Augustto ou Talita",
                "Diagnosticamos sua autoridade percebida e definimos o próximo passo"
              ].map((passo, idx) => (
                <div key={idx} className="flex gap-3.5 items-start bg-white/[0.03] backdrop-blur-sm p-4 rounded-xl border border-white/[0.08]">
                  <span className="text-[var(--aura-gold)] font-bold num-tabular shrink-0">{idx + 1}.</span>
                  <span className="text-[var(--aura-cream)] opacity-90 text-[14px] leading-snug">{passo}</span>
                </div>
              ))}
            </div>

            <AuraCTA />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 text-[12px] uppercase tracking-[2px] opacity-70 font-semibold text-[var(--aura-white)]"
            >
              MESA LIMITADA A 33 MEMBROS POR SEMESTRE · PROCESSO SELETIVO
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER — Colophon editorial (U20) ─── */}
      <footer className="py-16 px-6 text-center bg-[var(--aura-black)] relative z-10 border-t border-white/[0.06]">
        <div className="max-w-[1040px] mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <img
              src="/brands/logo-asp.png"
              alt="ASP"
              loading="lazy"
              decoding="async"
              className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <div className="text-white/60 hover:text-white transition-opacity">
              <AuraLogo className="h-4 sm:h-5 w-auto" ariaLabel="AURA" />
            </div>
            <img
              src="/brands/logo-leao.png"
              alt="Augustto Leão"
              loading="lazy"
              decoding="async"
              className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="/brands/logo-sellect-light.png"
              alt="Sellect Inteligência"
              loading="lazy"
              decoding="async"
              className="h-4 sm:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="text-[10px] tracking-[2px] uppercase opacity-55 text-[var(--aura-cream)] flex flex-col gap-2">
            <p>Sellect Intelligence · Marketing &amp; Posicionamento</p>
            <p>Balneário Camboriú — Santa Catarina — Brasil</p>
            <p className="opacity-70 mt-2">
              © {new Date().getFullYear()} · Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <AuraLandingPage />
      </MotionConfig>
    </ThemeProvider>
  );
}
