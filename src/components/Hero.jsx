import { Activity, Flame, HeartPulse, Leaf, Moon, Shield, Sparkles, Wind } from 'lucide-react'

const orbitIcons = [HeartPulse, Leaf, Flame, Wind, Shield, Sparkles, Moon, Activity]

export function Hero({ theme }) {
  const Icon = theme.icon

  return <section className="hero-panel">
    <h1>{theme.title}</h1>
    <p>{theme.sub}</p>

    <div className="orbit-wrap">
      <div className="orbit-ring" />
      <div className="pulse-line"><HeartPulse size={78}/></div>

      {orbitIcons.map((OrbitIcon, index) => {
        const angle = (index / orbitIcons.length) * Math.PI * 2 - Math.PI / 2
        const radius = 122
        return <span
          className="orbit-dot"
          key={index}
          style={{
            left: `calc(50% + ${Math.cos(angle) * radius}px)`,
            top: `calc(50% + ${Math.sin(angle) * radius}px)`,
          }}
        >
          <OrbitIcon size={19}/>
        </span>
      })}

      <div className="center-card">
        <small>DYNAMIC SUPPORT</small>
        <h2>Core Balance</h2>
        <ul>
          <li>情绪被看见</li>
          <li>身体数据同步</li>
          <li>咨询师协作强化</li>
        </ul>
      </div>

      <Icon className="element-mark" size={28}/>
    </div>

    <div className="pager"><i/><i className="active"/><i/></div>
  </section>
}
