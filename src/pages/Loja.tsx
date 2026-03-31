import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Info, Sparkles, Zap, Leaf, PlayCircle, ArrowRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { WHATSAPP_URL } from "../constants";

export default function Loja() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const produtos = [
    { id: 1, nome: "Detox Caps 360", cat: "Encapsulados", dica: "Auxilia na queima de gordura abdominal e eliminação de toxinas.", img: "https://images.unsplash.com/photo-1584017945366-b97b0e4b1dbb?q=80&w=800" },
    { id: 2, nome: "Chá Noite Serena", cat: "Chás Naturais", dica: "Blend de ervas para relaxamento profundo e melhora do sono.", img: "https://images.unsplash.com/photo-1594631252845-29fc458681b3?q=80&w=800" },
    { id: 3, nome: "Colágeno Hidrolisado V+", cat: "Encapsulados", dica: "Fortalecimento de unhas, cabelos e elasticidade da pele.", img: "https://images.unsplash.com/photo-1611930513496-1105d56d905d?q=80&w=800" },
    { id: 4, nome: "Termogênico Green Tea", cat: "Suplementos", dica: "Energia natural para o treino sem picos de ansiedade.", img: "https://images.unsplash.com/photo-1544787210-2211d44b5639?q=80&w=800" },
    { id: 5, nome: "Combo Imunidade Total", cat: "Kits", dica: "Complexo vitamínico focado em fortalecer as defesas do corpo.", img: "https://images.unsplash.com/photo-1550573105-3453303347b3?q=80&w=800" },
    { id: 6, nome: "Chá Bio-Digest", cat: "Chás Naturais", dica: "Melhora o trânsito intestinal e reduz o inchaço após as refeições.", img: "https://images.unsplash.com/photo-1563911191283-d48555e1f681?q=80&w=800" },
    { id: 7, nome: "Multi-Vitamínico Mulher", cat: "Encapsulados", dica: "Fórmula exclusiva com nutrientes essenciais para a saúde feminina.", img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=800" }
  ];

  const categories = useMemo(() => {
    const cats = produtos.map(p => p.cat);
    return ["Todos", ...Array.from(new Set(cats))];
  }, []);

  const filteredProdutos = useMemo(() => {
    return produtos.filter(prod => {
      const matchesSearch = prod.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           prod.dica.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || prod.cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SEÇÃO DE DESTAQUES / PROMOÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white flex flex-col justify-between h-72 editorial-shadow relative overflow-hidden group">
             <Sparkles className="absolute right-[-10px] top-[-10px] opacity-20 w-32 h-32" />
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Protocolo VIP</span>
             <h3 className="text-3xl font-serif italic">Kit Detox Verão: Assista à Proposta</h3>
             <button className="bg-white text-primary px-8 py-3 rounded-full w-fit font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-container transition-colors">
                <PlayCircle size={16} /> Saiba Mais
             </button>
          </div>

          <div className="bg-secondary p-8 rounded-[2.5rem] text-white flex flex-col justify-between h-72 editorial-shadow relative overflow-hidden">
             <Zap className="absolute right-[-10px] top-[-10px] opacity-20 w-32 h-32" />
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Tecnologia</span>
             <h3 className="text-3xl font-serif italic">A Ciência por trás do Colágeno V+</h3>
             <button className="bg-white text-secondary px-8 py-3 rounded-full w-fit font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <PlayCircle size={16} /> Saiba Mais
             </button>
          </div>

          <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-outline-variant/20 flex flex-col justify-between h-72 editorial-shadow relative overflow-hidden">
             <Leaf className="absolute right-[-10px] top-[-10px] opacity-10 w-32 h-32 text-primary" />
             <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Dúvidas</span>
             <h3 className="text-3xl font-serif italic text-primary">Qual o melhor para o seu objetivo?</h3>
             <a href={WHATSAPP_URL} className="btn-primary w-fit flex items-center gap-2">
                <MessageCircle size={18} /> Chamar no WhatsApp
             </a>
          </div>
        </div>

        {/* 2. VITRINE DE PRODUTOS */}
        <header className="mb-12 border-b border-outline-variant/30 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div>
              <h2 className="text-4xl font-serif italic text-primary">Curadoria Viva Bem</h2>
              <p className="text-on-surface-variant font-light mt-2 italic text-sm">Selecione um produto para ver a apresentação completa.</p>
            </div>

            {/* Barra de Busca */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
              <input 
                type="text" 
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant/20 rounded-full focus:outline-none focus:border-primary/30 font-sans text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Filtro de Categorias */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <main className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProdutos.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {filteredProdutos.map((prod) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={prod.id} 
                    className="group bg-white rounded-[2rem] overflow-hidden border border-outline-variant/10 flex flex-col transition-all hover:shadow-xl"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img src={prod.img} alt={prod.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary">{prod.cat}</div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-serif italic text-primary mb-3 leading-tight">{prod.nome}</h3>
                      
                      <div className="flex gap-2 p-3 bg-surface-container-low rounded-xl mb-6">
                        <Info size={14} className="text-secondary shrink-0 mt-0.5" />
                        <p className="text-[11px] leading-relaxed text-on-surface-variant italic font-light">{prod.dica}</p>
                      </div>

                      <button className="mt-auto w-full btn-primary flex items-center justify-center gap-2 py-4 hover:bg-tertiary transition-colors">
                        Saiba Mais <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-24">
                <p className="text-on-surface-variant font-serif italic text-xl">Nenhum produto encontrado.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}
                  className="mt-4 text-secondary font-bold hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </AnimatePresence>
        </main>

        {/* RODAPÉ DA LOJA */}
        <section className="mt-24 py-12 border-t border-outline-variant/20 text-center">
          <p className="text-on-surface-variant font-light italic mb-8">
            "Eficiência e resultado: o produto certo e a informação que funciona."
          </p>
          <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors">
            Falar com suporte técnico <ArrowRight size={14} />
          </a>
        </section>
      </div>
    </div>
  );
}
