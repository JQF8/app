import { Activity, Apple, Bell, CalendarCheck, ChevronRight, HeartPulse, LockKeyhole, MessageCircle, Mic, Moon, PenLine, Send, ShieldCheck, Sparkles, Star, UserRoundCheck, Video } from 'lucide-react'
import { Hero } from './Hero'
import { ThemeSwitcher } from './ThemeSwitcher'

const days = [62, 55, 72, 68, 81, 76, 84]

const quickActions = [
  { icon: MessageCircle, label: 'AI 倾诉', note: '倾听你的心声' },
  { icon: CalendarCheck, label: '情绪打卡', note: '记录每日心情' },
  { icon: UserRoundCheck, label: '找咨询师', note: '专业陪伴支持' },
  { icon: HeartPulse, label: '健康同步', note: '设备数据同步' },
]

export function HomePage({ theme, language }) {
  const ThemeIcon = theme.icon
  const en = language === 'en'
  const actions = en
    ? [
      { icon: MessageCircle, label: 'AI Chat' },
      { icon: CalendarCheck, label: 'Check-in' },
      { icon: UserRoundCheck, label: 'Therapist' },
      { icon: HeartPulse, label: 'Health' },
    ]
    : quickActions

  return <section className="home-dashboard">
    <header className="dashboard-head">
      <div>
        <small>{en ? 'Good morning, Muheng' : '早上好，沐珩'}</small>
        <h1>{en ? 'How are you feeling today?' : '今天感觉怎么样？'}</h1>
      </div>
      {theme.key === 'wood'
        ? <span className="element-badge"><ThemeIcon size={20}/>{en ? 'Wood' : '木'}</span>
        : <span className="element-badge"><ThemeIcon size={20}/>{theme.cn}</span>}
      {theme.key === 'wood' && <span className="wood-charm"><i/><b className="leaf-a"/><b className="leaf-b"/><b className="leaf-c"/><b className="leaf-d"/><b className="leaf-e"/><b className="flower-a"/><b className="flower-b"/></span>}
    </header>

    <section className="mood-card themed">
      <div>
        <span className="pill"><Sparkles size={13}/> {en ? 'Today' : '今日状态'}</span>
        <h2>77</h2>
        <p>{en ? 'Emotional stability / 100' : '情绪稳定度 / 100'}</p>
      </div>
      <div className="mood-orb"><HeartPulse size={48}/></div>
    </section>

    <section className="quick-grid">
      {actions.map(({ icon: Icon, label, note }) => <button className="quick" key={label}>
        <Icon size={22}/><span>{label}</span>{note && <small>{note}</small>}
      </button>)}
    </section>

    <HomeChatCard language={language} />
    <HomeTrackerCard language={language} />
    <HomeTherapistCard language={language} />
    <HomePrivacyCard language={language} />
  </section>
}

export function ChatPage({ language }) {
  const en = language === 'en'
  return <section className="app-page ai-page">
    <PageHeader label="AI SUPPORT" title={en ? 'AI Support Room' : 'AI 支持室'} badge={en ? 'Memory On' : '记忆开启'} icon={Sparkles} />

    <section className="ai-status-card">
      <MessageCircle size={30}/>
      <div>
        <b>{en ? 'Want to settle down first tonight?' : '今晚想先安定下来吗？'}</b>
        <p>{en ? 'I can remember your triggers, and you can delete memory anytime.' : '我会记住你的触发点，但你可以随时删除记忆。'}</p>
      </div>
    </section>

    <section className="chat-screen-card aligned">
      <div className="chat-line ai">{en ? 'I remember your anxiety tends to rise after poor sleep. Tonight, let’s slow the body down first.' : '我记得你最近容易在睡眠不足后焦虑升高。今晚我们先把身体放慢一点。'}</div>
      <div className="chat-line user">{en ? 'I’m a little worried about tomorrow’s conversation.' : '我有点担心明天的沟通。'}</div>
      <div className="chat-line ai">{en ? 'We can do this in three steps: name the feeling, find the trigger, then prepare one sentence you can say tomorrow.' : '我们可以分三步：先命名感受，再找触发点，最后准备一句你明天能说出口的话。'}</div>
    </section>

    <section className="chat-tools aligned">
      <button>{en ? '60s Breath' : '60秒呼吸'}</button>
      <button>{en ? 'Reframe' : '认知重构'}</button>
      <button>{en ? 'Session Brief' : '咨询前摘要'}</button>
    </section>

    <div className="chat-input-bar">
      <span>{en ? 'Type how you feel...' : '输入你的感受...'}</span>
      <div><Mic size={17}/><Send size={17}/></div>
    </div>
  </section>
}

export function TrackPage({ language }) {
  const en = language === 'en'
  return <PageFrame label="BODY ECHO" title={en ? 'Mood & Body Tracking' : '情绪与身体追踪'}>
    <section className="score-card">
      <div><small>{en ? 'TODAY SCORE' : '今日稳定度'}</small><b>84</b><span>/100</span></div>
      <HeartPulse size={62}/>
    </section>
    <section className="detail-card page-card">
      <div className="detail-head"><div><small>WEEKLY MOOD</small><b>{en ? 'Weekly Trend' : '本周趋势'}</b></div><CalendarCheck size={22}/></div>
      <div className="week-chart">{days.map((value, i) => <i key={i} style={{height: `${value}%`}} />)}</div>
    </section>
    <section className="metric-list">
      <Metric icon={Moon} title={en ? 'Sleep' : '睡眠'} value="6h 42m" note={en ? 'Low; anxiety may rise' : '偏少，焦虑可能上升'} />
      <Metric icon={Activity} title={en ? 'Heart Rate' : '心率'} value="72 bpm" note={en ? 'Normal range' : '正常范围'} />
      <Metric icon={Apple} title={en ? 'Nutrition' : '饮食'} value={en ? 'Medium' : '中等'} note={en ? 'Dinner was late' : '晚餐偏晚'} />
    </section>
  </PageFrame>
}

export function TherapistPage({ language }) {
  const en = language === 'en'
  return <section className="app-page therapist-page">
    <PageHeader label="THERAPIST MATCH" title={en ? 'Therapist Match' : '咨询师匹配'} badge={en ? 'Smart Match' : '智能推荐'} icon={UserRoundCheck} />

    <section className="match-card aligned">
      <UserRoundCheck size={34}/>
      <h2>{en ? 'Find a therapist who fits you' : '匹配更适合你的咨询师'}</h2>
      <p>{en ? 'Recommended by concern type, budget, schedule, language, therapy style, and AI summary.' : '根据困扰类型、预算、时间、语言、咨询风格和 AI 摘要推荐。'}</p>
      <button>{en ? 'Start Matching' : '开始匹配问卷'}</button>
    </section>

    <Doctor name={en ? 'Dr. Lin' : '林医生'} spec={en ? 'CBT · Anxiety & stress · 7 yrs' : 'CBT · 焦虑压力 · 7年经验'} time={en ? 'Tomorrow 8:00 PM' : '明晚 8:00 可约'} />
    <Doctor name={en ? 'Counselor Chen' : '陈咨询师'} spec={en ? 'Mindfulness · Relationships · 5 yrs' : '正念 · 关系议题 · 5年经验'} time={en ? 'Mon 2:30 PM' : '周一 14:30 可约'} />
  </section>
}

export function ProfilePage({ themeKey, setThemeKey, language, setLanguage }) {
  const en = language === 'en'
  return <PageFrame label="PERSONAL PROFILE" title={en ? 'Profile' : '个人空间'}>
    <section className="profile-hero">
      <div className="profile-avatar large">沐</div>
      <div className="profile-copy">
        <small>7 DAY STREAK</small>
        <h2>沐珩</h2>
        <p>{en ? 'Preference: gentle support · CBT-assisted · sleep-first' : '偏好：温柔支持型 · CBT 辅助 · 睡眠优先'}</p>
      </div>
      <button className="edit-profile"><PenLine size={17}/> {en ? 'Edit' : '编辑'}</button>
    </section>

    <section className="profile-section">
      <div className="profile-section-head">
        <div><small>ELEMENT THEME</small><b>{en ? 'Five-Element Theme' : '五行个人主题'}</b></div>
        <span>{en ? 'Controls home style, AI tone, and visualization colors' : '用于首页气质、AI语气和可视化颜色'}</span>
      </div>
      <ThemeSwitcher current={themeKey} setTheme={setThemeKey} />
    </section>

    <section className="profile-stats">
      <div><b>84</b><span>{en ? 'Today Score' : '今日稳定度'}</span></div>
      <div><b>12</b><span>{en ? 'AI Memories' : 'AI 记忆'}</span></div>
      <div><b>3</b><span>{en ? 'Goals' : '追踪目标'}</span></div>
    </section>

    <section className="profile-section language-section">
      <div className="profile-section-head">
        <div><small>LANGUAGE</small><b>{en ? 'Language' : '语言设置'}</b></div>
        <span>{en ? 'Affects app copy and AI reply language' : '影响 App 文案和 AI 回复语言'}</span>
      </div>
      <div className="language-toggle">
        <button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中文</button>
        <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>English</button>
      </div>
    </section>

    <section className="settings-list">
      <Setting icon={Sparkles} title={en ? 'AI Personalization' : 'AI 个性化'} note={en ? 'Gentle support · CBT-assisted · therapist-tunable' : '温柔支持型 · CBT 辅助 · 可由咨询师强化'} />
      <Setting icon={ShieldCheck} title={en ? 'Therapist Sharing' : '咨询师共享权限'} note={en ? 'Off by default; share summaries and trends only' : '默认关闭，仅共享摘要与趋势'} />
      <Setting icon={HeartPulse} title={en ? 'Health Data Access' : '健康数据授权'} note={en ? 'Sleep, heart rate, activity, nutrition' : '睡眠、心率、运动、饮食'} />
      <Setting icon={Bell} title={en ? 'Reminders' : '提醒设置'} note={en ? 'Mood check-ins, sleep nudges, session reviews' : '情绪打卡、睡眠提醒、咨询复盘'} />
      <Setting icon={LockKeyhole} title={en ? 'Memory & Privacy' : '记忆与隐私'} note={en ? 'View, edit, or delete long-term AI memory' : '查看、编辑或删除 AI 长期记忆'} />
    </section>
  </PageFrame>
}

function PageHeader({ label, title, badge, icon: Icon }) {
  return <header className="page-header">
    <div>
      <small>{label}</small>
      <h1>{title}</h1>
    </div>
    {badge && <span><Icon size={15}/> {badge}</span>}
  </header>
}

function PageFrame({ label, title, children }) {
  return <section className="page-frame">
    <div className="page-title"><small>{label}</small><h1>{title}</h1></div>
    {children}
  </section>
}

function InsightCard() {
  return <section className="detail-card insight-card">
    <div className="detail-head"><div><small>TODAY INSIGHT</small><b>今日观察</b></div><MessageCircle size={22}/></div>
    <p>你在睡眠不足时更容易出现紧张感。今晚建议先做 60 秒呼吸，再写下明天最重要的一句话。</p>
  </section>
}

function HomeChatCard({ language }) {
  const en = language === 'en'
  return <section className="home-card home-chat">
    <div className="home-card-title">
      <div><b>{en ? 'AI Support Room' : 'AI 支持室'}</b><small>{en ? 'Memory on · therapist-tunable' : '记忆开启 · 心理医生可协作定制'}</small></div>
      <span>{en ? 'Online' : '在线'}</span>
    </div>
    <div className="home-chat-body">
      <div className="mini-chat ai">{en ? 'I remember your recent stress is mainly from project progress. Want to talk feelings first, or break down tasks?' : '我记得你最近压力主要来自项目推进。今天想先聊情绪，还是先拆任务？'}</div>
      <div className="mini-chat user">{en ? 'Let’s talk feelings first. I didn’t sleep well last night.' : '先聊情绪，我昨晚没睡好。'}</div>
    </div>
    <div className="composer"><span>{en ? 'Type how you feel...' : '输入你的感受...'}</span><div><Mic size={16}/><Send size={16}/></div></div>
  </section>
}

function HomeTrackerCard({ language }) {
  const en = language === 'en'
  return <section className="home-card tracker-card themed">
    <div className="home-card-title">
      <div><b>{en ? 'Mood Tracking' : '个人情绪追踪'}</b><small>{en ? 'Sleep, heart rate, nutrition, movement' : '睡眠、心率、饮食、运动联动'}</small></div>
      <ChevronRight size={19}/>
    </div>
    <MoodWaveChart />
    <div className="home-metrics tracker-metrics">
      <p><Moon size={16}/> {en ? 'Sleep' : '睡眠'} <em>{en ? 'Linked' : '联动'}</em></p>
      <p><HeartPulse size={16}/> {en ? 'Heart Rate' : '心率'} <em>{en ? 'Linked' : '联动'}</em></p>
      <p><Apple size={16}/> {en ? 'Nutrition' : '饮食'} <em>{en ? 'Linked' : '联动'}</em></p>
      <p><Activity size={16}/> {en ? 'Movement' : '运动'} <em>{en ? 'Linked' : '联动'}</em></p>
    </div>
  </section>
}

function MoodWaveChart() {
  return <div className="mood-wave-chart" aria-label="线性情绪波动图">
    <svg viewBox="0 0 300 96" role="img" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="woodWaveStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f8e7ad" />
          <stop offset="48%" stopColor="#fff4c7" />
          <stop offset="100%" stopColor="#c99d58" />
        </linearGradient>
        <linearGradient id="woodWaveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8e7ad" stopOpacity=".26" />
          <stop offset="100%" stopColor="#f8e7ad" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="wave-fill" d="M4 70 C28 58 38 50 55 56 C72 62 78 78 96 72 C116 65 118 39 139 36 C159 33 166 68 186 67 C207 66 210 42 230 44 C249 46 251 72 270 69 C284 67 291 54 296 50 L296 96 L4 96 Z" />
      <path className="wave-line secondary" d="M4 76 C29 70 43 62 61 68 C82 75 91 62 108 58 C132 53 145 76 166 72 C189 68 197 55 215 58 C238 62 246 75 266 71 C280 68 289 62 296 58" />
      <path className="wave-line primary" d="M4 70 C28 58 38 50 55 56 C72 62 78 78 96 72 C116 65 118 39 139 36 C159 33 166 68 186 67 C207 66 210 42 230 44 C249 46 251 72 270 69 C284 67 291 54 296 50" />
    </svg>
  </div>
}

function HomeTherapistCard({ language }) {
  const en = language === 'en'
  return <section className="home-card">
    <div className="home-card-title">
      <div><b>{en ? 'Recommended Therapist' : '推荐咨询师'}</b><small>{en ? 'Matched by survey, budget, schedule, and style' : '根据问卷、预算、时间和风格匹配'}</small></div>
      <button>{en ? 'More' : '更多'}</button>
    </div>
    <div className="doctor-row compact">
      <div className="avatar">林</div>
      <div>
        <b>{en ? 'Dr. Lin' : '林医生'}</b>
        <span>{en ? 'CBT · Anxiety & stress · 7 yrs' : 'CBT · 焦虑压力 · 7年经验'}</span>
        <p><Star size={13} fill="currentColor"/> 4.9 · {en ? 'Tomorrow 8 PM' : '明晚 8:00 可约'}</p>
      </div>
      <button><Video size={18}/></button>
    </div>
  </section>
}

function HomePrivacyCard({ language }) {
  const en = language === 'en'
  return <section className="home-privacy">
    <ShieldCheck size={22}/>
    <p>{en ? 'AI chats are private by default. Therapists only see summaries and trends after your permission.' : 'AI 聊天默认不共享给咨询师。只有你授权后，咨询师才能看到摘要和趋势。'}</p>
  </section>
}

function Metric({ icon: Icon, title, value, note }) {
  return <div className="metric-item">
    <Icon size={22}/>
    <div><b>{title}</b><span>{note}</span></div>
    <strong>{value}</strong>
  </div>
}

function Doctor({ name, spec, time }) {
  return <section className="detail-card doctor-card">
    <div className="doctor-row">
      <div className="avatar">{name.slice(0, 1)}</div>
      <div>
        <b>{name}</b>
        <span>{spec}</span>
        <p><Star size={13} fill="currentColor"/> 4.9 · {time}</p>
      </div>
      <button><Video size={18}/></button>
    </div>
  </section>
}

function Setting({ icon: Icon, title, note }) {
  return <div className="setting-item">
    <Icon size={21}/>
    <div><b>{title}</b><span>{note}</span></div>
    <ChevronRight size={18}/>
  </div>
}
