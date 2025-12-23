
import { Project, NewsItem, ProvinceData } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Barrage d\'Inga III - Phase 1',
    category: 'Énergie',
    image: 'https://picsum.photos/seed/inga/800/600',
    progress: 45,
    location: 'Kongo-Central'
  },
  {
    id: '2',
    title: 'Port en Eau Profonde de Banana',
    category: 'Infrastructure',
    image: 'https://picsum.photos/seed/banana/800/600',
    progress: 20,
    location: 'Banana'
  },
  {
    id: '3',
    title: 'Digital Hub Kinshasa',
    category: 'Innovation',
    image: 'https://picsum.photos/seed/tech/800/600',
    progress: 85,
    location: 'Kinshasa'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Lancement du Plan Stratégique 2025-2030',
    date: '15 Mai 2024',
    excerpt: 'Le gouvernement annonce une enveloppe de 15 milliards pour les infrastructures rurales.',
    category: 'Politique',
    image: 'https://picsum.photos/seed/policy/400/300'
  },
  {
    id: '2',
    title: 'Partenariat avec la Banque Mondiale',
    date: '12 Mai 2024',
    excerpt: 'Un nouvel accord signé pour soutenir l\'éducation des jeunes filles en milieu rural.',
    category: 'Économie',
    image: 'https://picsum.photos/seed/bank/400/300'
  }
];

export const PROVINCES: ProvinceData[] = [
  { id: 'KIN', name: 'Kinshasa', priority: 'Numérisation & Transport', investment: '$2.5B', projects: 142 },
  { id: 'KC', name: 'Kongo-Central', priority: 'Logistique & Énergie', investment: '$4.1B', projects: 88 },
  { id: 'LUA', name: 'Lualaba', priority: 'Mines & Industrie', investment: '$3.8B', projects: 64 },
  { id: 'NK', name: 'Nord-Kivu', priority: 'Agro-industrie & Paix', investment: '$1.2B', projects: 120 }
];
