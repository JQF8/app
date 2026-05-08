export function BreathButton({ theme }) {
  const Icon = theme.icon

  return <footer className="breath-area">
    <div className="breath-ring">
      <button><Icon size={26}/></button>
    </div>
    <p>START 60s BREATH</p>
  </footer>
}
