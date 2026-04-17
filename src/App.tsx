import React from "react";
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
  Lock
} from "lucide-react";

const ASSETS = "https://eusouaugusttoleao.github.io/augustto-aura-assets";
const heroImg = `${ASSETS}/augustto-palco-frente.jpg`;

// Signature easing curves (U10)
const EASE_AURA = [0.22, 1, 0.36, 1] as const;
const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

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
              className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#8B5CF6] opacity-[0.18] blur-[120px] pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="relative z-50 w-full max-w-[1040px] mx-auto flex flex-col items-center text-center mt-6"
            style={{ opacity: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_REVEAL }}
              className="mb-8 text-white flex flex-col items-center"
            >
              <div
                className="uppercase text-[11px] tracking-[4px] text-white/50 mb-6 font-editorial"
                style={{ fontWeight: 200 }}
              >
                Mentoria e Protocolo
              </div>
              <AuraLogo className="h-20 sm:h-24 w-auto mb-2 opacity-30" ariaLabel="AURA" />
              <div
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] uppercase tracking-[4px] text-white font-editorial"
                style={{ textShadow: "none", fontWeight: 200 }}
              >
                <span>Ativação</span>
                <span className="opacity-40" aria-hidden="true">·</span>
                <span>Unicidade</span>
                <span className="opacity-40" aria-hidden="true">·</span>
                <span>Respeito</span>
                <span className="opacity-40" aria-hidden="true">·</span>
                <span>Autoridade</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE_REVEAL }}
              className="inline-block px-5 py-2 uppercase text-[11px] font-bold tracking-[3px] text-[#FFD700] mb-6 bg-white/[0.12] backdrop-blur-xl rounded-full border border-white/20"
              style={{ textShadow: "none" }}
            >
              Seja protagonista da sua história - por augustto leao
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE_REVEAL }}
              className="text-[clamp(28px,6vw,68px)] font-black leading-[0.95] tracking-[-1px] md:tracking-[-3px] text-white max-w-[1100px] mb-8 uppercase"
              style={{ textShadow: "none" }}
            >
              <span className="block whitespace-nowrap">ATIVE SEU POSICIONAMENTO,</span>
              <span className="block whitespace-nowrap">DOMINE SUA COMUNICAÇÃO</span>
              <span className="block whitespace-nowrap">PRESENÇA NA VIDA E NOS NEGÓCIOS</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="text-[clamp(15px,2vw,20px)] text-white mb-10 max-w-[1100px] uppercase font-editorial"
              style={{ textShadow: "none", fontWeight: 200, fontStyle: 'italic', letterSpacing: '4px' }}
            >
              EM 12 SEMANAS VEJA O REFLEXO DA SUA AUTORIDADE ALINHADA COM SUA COMPETÊNCIA.
            </motion.div>



            {/* Espaço para o Vídeo do YouTube */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="w-full max-w-[320px] sm:max-w-[360px] mt-4 mb-8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/20"
            >
              <div className="relative w-full aspect-[9/16] bg-black/50 backdrop-blur-sm">
                <iframe
                  className="absolute inset-0 w-full h-full pointer-events-auto"
                  src="https://www.youtube.com/embed/MbXZsn2mP60?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=MbXZsn2mP60"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[clamp(20px,2.8vw,30px)] font-black mb-6 max-w-[940px] leading-tight uppercase"
              style={{ textShadow: "none", color: "#FFD700" }}
            >
              PARA LÍDERES E EMPRESÁRIOS COM RESULTADOS, QUE NÃO SÃO VISTOS NO TAMANHO QUE DEVERIAM SER.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[clamp(17px,2vw,21px)] font-black mb-12 leading-relaxed max-w-[940px]"
              style={{ textShadow: "none", color: "#FFFFFF" }}
            >
              Você construiu competência. Construiu resultado. Mas continua sendo tratado como uma opção — e não como A referência — no seu mercado, na sua mesa, na sua família. A Mentoria AURA reconstrói sua Autoimagem, seu Posicionamento, sua Comunicação Magnética e sua Autoridade em Movimento nos 4 blocos da Jornada de 12 Semanas. No final, você não fala melhor. Você ocupa o lugar certo.
            </motion.p>

            {/* Keyword row — U11 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] uppercase tracking-[4px] text-[var(--aura-gold)]/70"
            >
              <span>Ativação</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span>Unicidade</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span>Respeito</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span>Autoridade</span>
            </motion.div>

            {/* CTA — U7 */}
            <motion.a
              href="https://typebot.co/mentoria-aura"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ y: -2, scale: 1.05, boxShadow: "0 0 30px rgba(0,242,255,0.6)" }}
              className="inline-flex items-center gap-4 pl-8 pr-10 py-5 sm:py-6 rounded-md font-bold text-[20px] sm:text-[24px] transition-all duration-300 hover:brightness-125 text-black bg-[#00f2ff] opacity-100 relative z-[60]"
              style={{
                boxShadow: "0 0 20px rgba(0,242,255,0.4)",
              }}
            >
              <MessageCircle size={22} strokeWidth={3} />
              <span className="w-px h-6 bg-black/20" aria-hidden="true" />
              Aplicar para a Sessão Estratégica
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 text-[12px] uppercase tracking-[2px] opacity-70 font-semibold"
            >
              MESA LIMITADA A 33 MEMBROS POR SEMESTRE · PROCESSO SELETIVO
            </motion.div>

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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE_AURA }}
            >
              <Eyebrow>A Injustiça do Mercado</Eyebrow>
              <h2
                id="section-injustica"
                className="text-[clamp(28px,4.5vw,52px)] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[var(--aura-white)] mb-6 max-w-[800px] leading-tight"
              >
                O mercado não paga quem é melhor. <br />
                Paga quem é{" "}
                <span className="font-editorial text-[var(--aura-gold)]">
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
                  className="group relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-black/80 transition-all duration-500 shadow-xl"
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
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={`${ASSETS}/pinterest-video-03.mp4`} type="video/mp4" />
            </video>
            {/* Added Black Glass Scrim for contrast */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

            {/* Confluence gradient — Top down to meet the previous section */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />

            {/* The original glowing blur element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[var(--aura-fire)] opacity-[0.05] blur-[160px] pointer-events-none" />
          </div>

          <div className="max-w-[1040px] mx-auto w-full relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <Eyebrow>Desativar para Ativar</Eyebrow>
              <h2
                id="section-pilares"
                className="text-[clamp(28px,4.5vw,52px)] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[var(--aura-white)] mb-6 max-w-[800px] leading-tight"
              >
                O mercado vende personagens. <br />
                Nós ativamos sua{" "}
                <span className="font-editorial text-[var(--aura-gold)]">
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
                  className="group relative rounded-[2rem] bg-white/[0.03] backdrop-blur-[40px] border border-white/[0.1] p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-700 hover:border-white/20"
                >
                  {/* Background Content (Image or Video) — U9 */}
                  {(pilar.img || pilar.video) && (
                    <div className="absolute inset-0 z-0">
                      {pilar.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
                        >
                          <source src={pilar.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={pilar.img}
                          alt=""
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

                {/* Stats with hairline — U16 */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { num: "100M+", label: "Movimentados · 2024" },
                    { num: "100k", label: "Pessoas lideradas" },
                    { num: "10+", label: "Anos de método" },
                  ].map((stat, i) => (
                    <div key={i} className="relative pt-4">
                      <div
                        className="absolute top-0 left-0 w-8 h-[1px] bg-[var(--aura-gold)] opacity-60"
                        aria-hidden="true"
                      />
                      <div className="num-tabular text-[clamp(20px,3vw,32px)] font-extrabold tracking-[-1px] text-[var(--aura-gold)] mb-2">
                        {stat.num}
                      </div>
                      <div className="uppercase text-[11px] tracking-[1.5px] opacity-60 max-w-[140px] leading-snug">
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
            <div className="flex flex-col items-center text-center mb-16">
              <Eyebrow>A Jornada AURA</Eyebrow>
              <h2
                id="section-jornada"
                className="text-[clamp(28px,4.5vw,52px)] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[var(--aura-white)] mb-6 max-w-[800px] leading-tight"
              >
                12 semanas. 4 blocos. <br />
                Uma{" "}
                <span className="font-editorial text-[var(--aura-gold)]">
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
                  className="group relative bg-white/[0.03] backdrop-blur-[35px] border border-white/[0.08] rounded-[2rem] p-8 sm:p-12 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  {/* Glow Hotspot matching the block color */}
                  <div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, ${bloco.color}, transparent)`
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-6 blur-[10px] opacity-0 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at bottom, white 0%, transparent 70%)`
                    }}
                  />

                  <div
                    className="absolute top-4 right-10 font-editorial num-tabular text-[100px] opacity-[0.25] leading-none select-none pointer-events-none transition-all duration-1000 group-hover:opacity-100 group-hover:scale-110"
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
                  className="group relative p-10 rounded-[2.5rem] bg-white/20 backdrop-blur-[24px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <h3 className="text-[20px] font-black text-black mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-black/60 leading-relaxed font-medium">
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
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src="https://github.com/eusouaugusttoleao/mentoria-aura/releases/download/v1.0-assets/acabamento-site-comprimido.mp4" type="video/mp4" />
            </video>
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

            <div className="w-full max-w-[500px] text-left mb-16 space-y-4">
              {[
                "Você envia uma mensagem pelo botão abaixo (1 min)",
                "Nossa equipe contata em até 24h úteis via WhatsApp",
                "Se houver fit, agendamos sua Sessão com Augustto ou Talita",
                "Diagnosticamos sua autoridade percebida e definimos o próximo passo"
              ].map((passo, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/[0.02] p-4 rounded-sm border border-white/[0.05]">
                  <span className="text-[var(--aura-gold)] font-bold num-tabular">{idx + 1}.</span>
                  <span className="text-[var(--aura-cream)] opacity-90 text-[14px]">{passo}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://typebot.co/mentoria-aura"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="inline-flex items-center gap-4 pl-6 pr-8 py-4 sm:py-5 rounded-sm font-editorial font-bold text-[18px] sm:text-[22px] transition-all duration-300 hover:brightness-110 text-black bg-[#00f2ff]"
              style={{
                boxShadow: "none",
              }}
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              <span className="w-px h-5 bg-black/20" aria-hidden="true" />
              Aplicar para a Sessão Estratégica
            </motion.a>

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
          <div className="text-[var(--aura-gold)]/70">
            <AuraLogo className="h-7 w-auto" ariaLabel="AURA" />
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
