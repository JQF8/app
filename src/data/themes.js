import { Coins, Leaf, Droplets, Flame, Mountain } from 'lucide-react'

export const themes = {
  metal: {
    key: 'metal', cn: '金', title: 'Metal Clarity', sub: 'CLEAR MIND', icon: Coins,
    primary: '#b99a55', ink: '#2f2d28', bg1: '#f3efe5', bg2: '#e7dfcc', card: 'rgba(255,252,243,.74)', glow: 'rgba(185,154,85,.25)'
  },
  wood: {
    key: 'wood', cn: '木', title: 'Forest Wisdom', sub: 'GROWTH ECHO', icon: Leaf,
    primary: '#55795c', ink: '#223327', bg1: '#e7eee4', bg2: '#cddbcf', card: 'rgba(250,255,249,.72)', glow: 'rgba(85,121,92,.24)'
  },
  water: {
    key: 'water', cn: '水', title: 'Still Water', sub: 'DEEP REST', icon: Droplets,
    primary: '#4d7f96', ink: '#172b34', bg1: '#e3eef1', bg2: '#c9dce5', card: 'rgba(247,253,255,.72)', glow: 'rgba(77,127,150,.26)'
  },
  fire: {
    key: 'fire', cn: '火', title: 'Inner Flame', sub: 'MEETING RESCUE', icon: Flame,
    primary: '#b8683e', ink: '#3a2b22', bg1: '#f2d5c5', bg2: '#f5e7d8', card: 'rgba(255,248,241,.70)', glow: 'rgba(184,104,62,.28)'
  },
  earth: {
    key: 'earth', cn: '土', title: 'Grounded Earth', sub: 'SAFE RETURN', icon: Mountain,
    primary: '#9a7a50', ink: '#332d24', bg1: '#e8ddca', bg2: '#d6c7ad', card: 'rgba(255,250,240,.72)', glow: 'rgba(154,122,80,.27)'
  }
}
