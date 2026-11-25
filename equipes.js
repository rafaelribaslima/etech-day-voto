window.ETECH = {
  API: "https://lxfhjbkahqujupikivmg.supabase.co/functions/v1/etech-day",
  equipes: [
    { id: 1, nome: "NeuroLink Kids", area: "Acessibilidade & TEA", desc: "Comunicação assistiva e rotina para crianças neurodivergentes.", cor: "#6d5cf0" },
    { id: 2, nome: "Safe Report", area: "Segurança digital", desc: "Relatos anônimos e mapa interativo de golpes digitais.", cor: "#f2581e" },
    { id: 3, nome: "MindFlow", area: "Saúde corporativa", desc: "Triagem diária de bem-estar e saúde mental nas empresas.", cor: "#2f6ff0" },
    { id: 4, nome: "Lumea", area: "Bem-estar emocional", desc: "Micro-hábitos gamificados e indicadores para equipes de RH.", cor: "#5fd06f" },
    { id: 5, nome: "Integra Jovem", area: "Educação financeira", desc: "Trilhas, simuladores e desafios para a vida adulta.", cor: "#2fe0a0" },
    { id: 6, nome: "Mente Ativa", area: "Inclusão digital 60+", desc: "Jogos cognitivos e inclusão digital para a melhor idade.", cor: "#3f9a4c" }
  ],
  async chamar(corpo) {
    const r = await fetch(this.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpo) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { const e = new Error(j.erro || "falha"); e.code = j.erro; throw e; }
    return j;
  }
};
