import { useState } from 'react'
import { themes } from './data/themes'
import { TopBar } from './components/TopBar'
import { BottomNav } from './components/BottomNav'
import { ChatPage, HomePage, ProfilePage, TherapistPage, TrackPage } from './components/AppPages'

function WoodDecor() {
  return <div className="wood-decor" aria-hidden="true">
    <span className="wood-orbit one" />
    <span className="wood-orbit two" />
    <span className="wood-ball b1" />
    <span className="wood-ball b2" />
    <span className="wood-ball b3" />
    <span className="wood-ball b4" />
    <span className="wood-stem s1"><i/><i/><i/></span>
    <span className="wood-stem s2"><i/><i/><i/></span>
  </div>
}

export default function App() {
  const [themeKey, setThemeKey] = useState('wood')
  const [activePage, setActivePage] = useState('home')
  const [language, setLanguage] = useState('zh')
  const theme = themes[themeKey]

  const pages = {
    home: <HomePage theme={theme} language={language} />,
    chat: <ChatPage language={language} />,
    track: <TrackPage language={language} />,
    therapist: <TherapistPage language={language} />,
    profile: <ProfilePage themeKey={themeKey} setThemeKey={setThemeKey} language={language} setLanguage={setLanguage} />,
  }

  return <main
    className="stage"
    style={{
      '--primary': theme.primary,
      '--ink': theme.ink,
      '--bg1': theme.bg1,
      '--bg2': theme.bg2,
      '--card': theme.card,
      '--glow': theme.glow,
    }}
  >
    <section className={`phone theme-${theme.key}`}>
      <TopBar />
      {theme.key === 'wood' && <WoodDecor />}
      <div className="page-scroll">{pages[activePage]}</div>
      <BottomNav active={activePage} setActive={setActivePage} language={language} />
    </section>
  </main>
}
