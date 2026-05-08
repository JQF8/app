import { BarChart3, Home, MessageCircle, UserRound, UserRoundCheck } from 'lucide-react'

const navItems = [
  { key: 'home', zh: '首页', en: 'Home', icon: Home },
  { key: 'chat', zh: 'AI', en: 'AI', icon: MessageCircle },
  { key: 'track', zh: '追踪', en: 'Track', icon: BarChart3 },
  { key: 'therapist', zh: '咨询', en: 'Therapy', icon: UserRoundCheck },
  { key: 'profile', zh: '我的', en: 'Profile', icon: UserRound },
]

export function BottomNav({ active, setActive, language }) {
  return <nav className="bottom-nav">
    {navItems.map((item) => {
      const Icon = item.icon
      return <button
        key={item.key}
        className={active === item.key ? 'active' : ''}
        onClick={() => setActive(item.key)}
      >
        <Icon size={20}/>
        <span>{language === 'en' ? item.en : item.zh}</span>
      </button>
    })}
  </nav>
}
