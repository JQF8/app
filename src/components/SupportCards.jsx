import { MessageCircle, Mic, Send, Star, UserRoundCheck, Video } from 'lucide-react'

export function ChatCard() {
  return <section className="detail-card">
    <div className="detail-head">
      <div>
        <small>AI SUPPORT ROOM</small>
        <b>今晚想先安定下来吗？</b>
      </div>
      <MessageCircle size={22}/>
    </div>

    <div className="mini-chat ai">我会记住你的触发点，但你可以随时删除记忆。</div>
    <div className="mini-chat user">帮我把焦虑拆小一点。</div>

    <div className="composer">
      <span>输入你的感受...</span>
      <div><Mic size={16}/><Send size={16}/></div>
    </div>
  </section>
}

export function TherapistCard() {
  return <section className="detail-card therapist-card">
    <div className="detail-head">
      <div>
        <small>THERAPIST MATCH</small>
        <b>咨询师匹配</b>
      </div>
      <UserRoundCheck size={22}/>
    </div>

    <div className="doctor-row">
      <div className="avatar">林</div>
      <div>
        <b>林医生</b>
        <span>CBT · 焦虑压力 · 7年经验</span>
        <p><Star size={13} fill="currentColor"/> 4.9 · 明晚 8:00 可约</p>
      </div>
      <button><Video size={18}/></button>
    </div>
  </section>
}
