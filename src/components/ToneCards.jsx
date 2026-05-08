const toneCards = [
  { label: 'AI CHAT', title: 'Quiet Support', desc: '记忆 · 陪伴 · 咨询后复盘' },
  { label: 'TRACKING', title: 'Body Echo', desc: '睡眠 · 心率 · 饮食 · 情绪' },
]

export function ToneCards() {
  return <section className="tone-grid">
    {toneCards.map((card, index) => <article className="tone-card" key={card.label}>
      <small>{card.label}</small>
      <h3>{card.title}</h3>
      <LineFlower variant={index}/>
      <p>{card.desc}</p>
    </article>)}
  </section>
}

function LineFlower({ variant }) {
  return <div className={`line-flower v${variant}`}>
    <span/><span/><span/><span/>
  </div>
}
