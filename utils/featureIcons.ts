import { 
  Code, Explore, Rocket, Speed, 
  Interests, IntegrationInstructions, Devices,
  Architecture, Assessment, Group
} from '@mui/icons-material';

export interface FeatureIconMapping {
  icon: any;
  color: string;
  gradient?: string;
}

export const featureIconsMap: { [key: string]: FeatureIconMapping } = {
  'Core': {
    icon: Code,
    color: '#61DAFB',
    gradient: 'linear-gradient(45deg, #61DAFB, #00B2FF)'
  },
  'Discovery': {
    icon: Explore,
    color: '#FF6B6B',
    gradient: 'linear-gradient(45deg, #FF6B6B, #EE5253)'
  },
  'Performance': {
    icon: Speed,
    color: '#4CAF50',
    gradient: 'linear-gradient(45deg, #4CAF50, #388E3C)'
  },
  'Planning': {
    icon: Assessment,
    color: '#9C27B0',
    gradient: 'linear-gradient(45deg, #9C27B0, #7B1FA2)'
  },
  'User Experience': {
    icon: Interests,
    color: '#FF9800',
    gradient: 'linear-gradient(45deg, #FF9800, #F57C00)'
  },
  'Integration': {
    icon: IntegrationInstructions,
    color: '#2196F3',
    gradient: 'linear-gradient(45deg, #2196F3, #1976D2)'
  },
  'Scalability': {
    icon: Architecture,
    color: '#E91E63',
    gradient: 'linear-gradient(45deg, #E91E63, #C2185B)'
  },
  'Engagement': {
    icon: Group,
    color: '#00BCD4',
    gradient: 'linear-gradient(45deg, #00BCD4, #0097A7)'
  },
  'Marketplace': {
    icon: Rocket,
    color: '#673AB7',
    gradient: 'linear-gradient(45deg, #673AB7, #512DA8)'
  },
  'Responsive': {
    icon: Devices,
    color: '#795548',
    gradient: 'linear-gradient(45deg, #795548, #5D4037)'
  }
}; 