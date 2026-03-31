import { motion } from "motion/react";
import { ArrowRight, Search, Clock, User, MessageCircle, Tag } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { posts } from "../data/posts";
import { WHATSAPP_URL } from "../constants";

export default function Blog() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const currentPost = id ? posts.find(p => p.id === parseInt(id)) : null;

  const categories = useMemo(() => {
    const cats = posts.map(p => p.category);
    return ["Todos", ...Array.from(new Set(cats))];
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    return posts
      .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
      .slice(0, 3);
  }, [currentPost]);

  // Reset search and category when navigating to a post or back to list
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (currentPost) {
    return (
      <div className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-secondary mb-12 hover:underline">
            <ArrowRight size={14} className="rotate-180" /> Voltar ao Blog
          </Link>
          
          <article className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                <span>{currentPost.category}</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <span>{currentPost.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
                {currentPost.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <User size={14} /> {currentPost.author}
              </div>
            </div>

            <div className="aspect-video rounded-[2rem] overflow-hidden editorial-shadow">
              <img 
                src={currentPost.img} 
                alt={currentPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="font-sans text-lg md:text-xl font-light leading-relaxed text-on-surface-variant space-y-6 whitespace-pre-wrap">
              <p>{currentPost.content}</p>
              <p>Para saber mais sobre como aplicar esses conhecimentos no seu dia a dia, consulte nossa equipe especializada via WhatsApp.</p>
            </div>

            <div className="pt-12 border-t border-outline-variant/20">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                <MessageCircle size={20} /> Consultar Especialista
              </a>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-24 pt-12 border-t border-outline-variant/20">
              <h3 className="text-2xl font-serif italic text-primary mb-8">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group space-y-4">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-outline-variant/10">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="font-serif italic text-primary group-hover:text-secondary transition-colors leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header do Blog */}
        <header className="mb-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold italic">Conteúdo & Ciência</span>
              <h1 className="text-5xl md:text-6xl font-serif italic text-primary">Dicas e Curiosidades</h1>
              <p className="text-[10px] text-on-surface-variant/60 font-sans">Atualizado em: 31/03/2026</p>
            </div>
            
            {/* Barra de Busca */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
              <input 
                type="text" 
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-full focus:outline-none focus:border-primary/30 font-sans text-sm"
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

        {/* Grade de Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={post.id} 
                className="group bg-white rounded-[2rem] overflow-hidden editorial-shadow border border-outline-variant/10 flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    <span className="flex items-center gap-2 text-[10px] font-medium text-on-surface-variant">
                      <User size={12} /> {post.author}
                    </span>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                      Ler mais <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-on-surface-variant font-serif italic text-xl">Nenhum artigo encontrado para sua busca.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}
              className="mt-4 text-secondary font-bold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
