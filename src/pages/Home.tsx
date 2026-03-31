import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, MessageCircle } from "lucide-react";

import { posts } from "../data/posts";
import { WHATSAPP_URL } from "../constants";

export default function Home() {
  // Pegar os 3 posts mais recentes
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col bg-surface text-on-surface">
      
      {/* 1. HERO - DIRETO AO PONTO */}
      <section className="pt-32 pb-20 px-6 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Seleção Especializada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-primary leading-[1.1]">
              Onde o produto <br /> encontra a ciência.
            </h1>
            <p className="text-xl font-light text-on-surface-variant max-w-md leading-relaxed">
              Uma seleção rigorosa de produtos naturais aliada a dicas e curiosidades para quem busca eficiência e resultados reais.
            </p>
            <div className="flex gap-4">
              <Link to="/produtos" className="btn-primary flex items-center gap-2">
                Ver Loja Completa <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-video rounded-[2rem] overflow-hidden editorial-shadow">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Saúde e Valor" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANNER CASH ON DELIVERY */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden editorial-shadow border border-primary/10">
            <img 
              src="https://i.postimg.cc/FsjyBYTn/NOVIDADE-CASH-ON-DELIVERY.jpg" 
              alt="Novidade: Pague na Entrega" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUTOS EM DESTAQUE - SECAPS BLACK & VELMORA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Laboratório Secaps Black</span>
            <h2 className="text-4xl font-serif italic text-primary">Nossos Tratamentos Exclusivos</h2>
            <p className="text-on-surface-variant font-light max-w-2xl mx-auto">
              Tecnologia avançada e ingredientes naturais de alta concentração para resultados extraordinários em 30 a 90 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Produto 1: Secaps Black */}
            <div className="group space-y-6 bg-surface-container-low p-6 rounded-[2.5rem] border border-outline-variant/10 hover:editorial-shadow transition-all">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative">
                <img 
                  src="https://i.postimg.cc/rw5qWkFC/Arte_sem_preço_01.jpg" 
                  alt="Secaps Black" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Fórmula Original</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif italic text-primary">Secaps Black</h3>
                  <img src="https://i.postimg.cc/sDvXMqhW/SECAPS_BLACK_Liberado_pela_Anvisa.png" alt="Anvisa" className="h-6" referrerPolicy="no-referrer" />
                </div>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Elimina gorduras localizadas, regula o metabolismo e controla a fome emocional de forma 100% natural.
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary font-bold">Oferta Especial: 5 Meses com 30% OFF</span>
                  <span className="text-lg font-serif italic text-primary">R$ 323,05</span>
                </div>
                <div className="flex gap-2 py-2">
                   <img src="https://i.postimg.cc/7Yf65d22/SECAPS_BLACK_Garantia_90_Dias.png" alt="90 dias" className="h-8" referrerPolicy="no-referrer" />
                   <img src="https://i.postimg.cc/ncCzXgD9/SECAPS_BLACK_Alerta_de_Segurança.png" alt="Seguro" className="h-8" referrerPolicy="no-referrer" />
                </div>
                <a 
                  href="https://pay.hest.com.br/6962df76-3f49-4ec7-8c05-5dc73daa0783" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                >
                  Compre Agora <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Produto 2: Termo Drink Velmora */}
            <div className="group space-y-6 bg-surface-container-low p-6 rounded-[2.5rem] border border-outline-variant/10 hover:editorial-shadow transition-all">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-[#8B0000]">
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" 
                  alt="Termo Drink" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-serif italic text-3xl">Termo Drink</div>
                <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Energia & Foco</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-primary">Termo Drink</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Acelera de dentro para fora com Laranja Moro e Cafeína. Menos retenção, mais foco e queima calórica real.
                </p>
                <a 
                  href="https://viva-bem.com/checkout/termo-drink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                >
                  Comprar Agora <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Produto 3: Long Beauty Velmora */}
            <div className="group space-y-6 bg-surface-container-low p-6 rounded-[2.5rem] border border-outline-variant/10 hover:editorial-shadow transition-all">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-[#FF69B4]">
                <img 
                  src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800" 
                  alt="Long Beauty" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-serif italic text-3xl">Long Beauty</div>
                <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Cabelo, Pele & Unha</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-primary">Long Beauty</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Beleza de dentro para fora. Biotina e Resveratrol para fios fortes, unhas resistentes e combate ao envelhecimento.
                </p>
                <a 
                  href="https://viva-bem.com/checkout/long-beauty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                >
                  Comprar Agora <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Produto 4: Neumax Drops */}
            <div className="group space-y-6 bg-surface-container-low p-6 rounded-[2.5rem] border border-outline-variant/10 hover:editorial-shadow transition-all">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-[#1E3A8A]">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" 
                  alt="Neumax Drops" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-serif italic text-3xl">Neumax Drops</div>
                <div className="absolute top-4 left-4 bg-blue-400 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Foco & Memória</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-primary">Neumax Drops</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Potencialize sua mente. Gotas de foco e clareza mental para quem busca alta performance cognitiva no dia a dia.
                </p>
                <a 
                  href="https://viva-bem.com/checkout/neumax-drops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                >
                  Comprar Agora <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Produto 5: CeluGlow */}
            <div className="group space-y-6 bg-surface-container-low p-6 rounded-[2.5rem] border border-outline-variant/10 hover:editorial-shadow transition-all">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-[#EAB308]">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                  alt="CeluGlow" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-serif italic text-3xl">CeluGlow</div>
                <div className="absolute top-4 left-4 bg-yellow-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Pele Lisa</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-primary">CeluGlow</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Diga adeus à celulite. Fórmula termogênica tópica que ativa a circulação e melhora a textura da pele.
                </p>
                <a 
                  href="https://viva-bem.com/checkout/celuglow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                >
                  Comprar Agora <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANOS DE TRATAMENTO SECAPS BLACK */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Escolha seu Plano</span>
            <h2 className="text-4xl font-serif italic text-primary">Planos Secaps Black</h2>
            <p className="text-on-surface-variant font-light max-w-2xl mx-auto">
              Selecione o tratamento ideal para o seu objetivo. Frete grátis e garantia de 90 dias em todos os planos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano 1: 1 Pote */}
            <div className="bg-white p-8 rounded-[2.5rem] editorial-shadow border border-outline-variant/10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                <img src="https://i.postimg.cc/rw5qWkFC/Arte_sem_preço_01.jpg" alt="1 Pote" className="h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-primary">1 Pote</h3>
                <p className="text-sm text-on-surface-variant">Tratamento para 30 dias</p>
              </div>
              <div className="text-3xl font-serif italic text-primary">R$ 209,90</div>
              <a 
                href="https://pay.hest.com.br/33469a7a-7d47-40ee-b807-fd617640f4d1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 border-2 border-primary text-primary rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                Compre Agora
              </a>
            </div>

            {/* Plano 2: 3 Meses com 10% OFF */}
            <div className="bg-white p-8 rounded-[2.5rem] editorial-shadow border border-outline-variant/10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                <img src="https://i.postimg.cc/rw5qWkFC/Arte_sem_preço_01.jpg" alt="3 Meses" className="h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-primary">3 Meses (10% OFF)</h3>
                <p className="text-sm text-on-surface-variant">Tratamento para 90 dias</p>
              </div>
              <div className="text-3xl font-serif italic text-primary">R$ 302,13</div>
              <a 
                href="https://pay.hest.com.br/b622f325-cb2f-4595-89fd-30dca3d99928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 border-2 border-primary text-primary rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                Compre Agora
              </a>
            </div>

            {/* Plano 3: 5 Meses com 30% OFF */}
            <div className="bg-white p-8 rounded-[2.5rem] editorial-shadow border-2 border-secondary flex flex-col items-center text-center space-y-6 relative scale-105 z-10">
              <div className="absolute -top-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Melhor Oferta</div>
              <div className="w-20 h-20 bg-secondary/5 rounded-full flex items-center justify-center">
                <img src="https://i.postimg.cc/rw5qWkFC/Arte_sem_preço_01.jpg" alt="5 Meses" className="h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-primary">5 Meses (30% OFF)</h3>
                <p className="text-sm text-on-surface-variant">Tratamento para 150 dias</p>
              </div>
              <div className="text-3xl font-serif italic text-primary">R$ 323,05</div>
              <a 
                href="https://pay.hest.com.br/6962df76-3f49-4ec7-8c05-5dc73daa0783" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-secondary text-white rounded-full font-bold text-sm hover:bg-secondary/90 transition-all shadow-lg"
              >
                Compre Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL (FOCO EM CONSULTORIA/WHATSAPP) */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Atendimento Personalizado</span>
          <h2 className="text-4xl font-serif italic text-primary">
            Dúvidas sobre qual produto escolher? <br /> 
            Fale com nossa equipe especializada.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-4 flex items-center gap-3">
            <MessageCircle size={20} /> Consultar via WhatsApp
          </a>
          <Link to="/produtos" className="btn-secondary px-12 py-4">
            Ver Loja Completa
          </Link>
        </div>
      </section>
    </div>
  );
}
