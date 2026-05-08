import { themes } from '../data/themes'

export function ThemeSwitcher({ current, setTheme }) {
  return <section className="theme-row">
    {Object.values(themes).map((theme) => {
      const Icon = theme.icon
      return <button
        key={theme.key}
        onClick={() => setTheme(theme.key)}
        className={current === theme.key ? 'active' : ''}
      >
        <Icon size={17}/>
        <span>{theme.cn}</span>
      </button>
    })}
  </section>
}
