export interface VoiceButtonConfig {
  id: string;
  label: string;
  audio: string;
  colorClass: string;
  hoverClass: string;
}

export interface PortraitConfig {
  imageSrc: string;
  imageAlt: string;
  buttons: VoiceButtonConfig[];
}

export interface CategoryConfig {
  id: string;
  title: string;
  colorClass: string;
  hoverClass: string;
  buttons: VoiceButtonConfig[];
}

export interface LandscapeConfig {
  imageSrc: string;
  imageAlt: string;
  categories: CategoryConfig[];
}

export interface BgmConfig {
  id: string;
  label: string;
  src: string;
}

export interface AppConfig {
  appName: string;
  description: string;
  portrait: PortraitConfig;
  landscape: LandscapeConfig;
  bgm: BgmConfig[];
}

export const appConfig: AppConfig = {
  appName: '粗品ボタン',
  description: '粗品の音声クリップとBGM、画像を使えるテンプレート',
  portrait: {
    imageSrc: '/images/sosina2.jpg',
    imageAlt: 'Sample portrait image',
    buttons: [
      {
        id: 'portrait-1',
        label: 'Motivate',
        audio: './audio/sample-voice-01.mp3',
        colorClass: 'bg-green-600',
        hoverClass: 'hover:bg-green-700'
      },
      {
        id: 'portrait-2',
        label: 'Cheer Up',
        audio: './audio/sample-voice-02.mp3',
        colorClass: 'bg-blue-600',
        hoverClass: 'hover:bg-blue-700'
      },
      {
        id: 'portrait-3',
        label: 'Focus',
        audio: './audio/sample-voice-03.mp3',
        colorClass: 'bg-purple-600',
        hoverClass: 'hover:bg-purple-700'
      }
    ]
  },
  landscape: {
    imageSrc: '/images/sosina2.jpg',
    imageAlt: 'Sample landscape image',
    categories: [
      {
        id: 'category-1',
        title: 'Quick Boost',
        colorClass: 'bg-blue-600',
        hoverClass: 'hover:bg-blue-700',
        buttons: [
          {
            id: 'quick-boost-1',
            label: 'Let\'s Go!',
            audio: './audio/sample-voice-01.mp3',
            colorClass: 'bg-green-600',
            hoverClass: 'hover:bg-green-700'
          },
          {
            id: 'quick-boost-2',
            label: 'Stay Ready',
            audio: './audio/sample-voice-02.mp3',
            colorClass: 'bg-yellow-600',
            hoverClass: 'hover:bg-yellow-700'
          },
          {
            id: 'quick-boost-3',
            label: 'Own It',
            audio: './audio/sample-voice-03.mp3',
            colorClass: 'bg-red-600',
            hoverClass: 'hover:bg-red-700'
          }
        ]
      },
      {
        id: 'category-2',
        title: 'Confidence',
        colorClass: 'bg-green-600',
        hoverClass: 'hover:bg-green-700',
        buttons: [
          {
            id: 'confidence-1',
            label: 'You Got This',
            audio: './audio/sample-voice-01.mp3',
            colorClass: 'bg-indigo-600',
            hoverClass: 'hover:bg-indigo-700'
          },
          {
            id: 'confidence-2',
            label: 'Breathe In',
            audio: './audio/sample-voice-02.mp3',
            colorClass: 'bg-teal-600',
            hoverClass: 'hover:bg-teal-700'
          },
          {
            id: 'confidence-3',
            label: 'Smile Wide',
            audio: './audio/sample-voice-03.mp3',
            colorClass: 'bg-pink-600',
            hoverClass: 'hover:bg-pink-700'
          }
        ]
      },
      {
        id: 'category-3',
        title: 'Cool Down',
        colorClass: 'bg-purple-600',
        hoverClass: 'hover:bg-purple-700',
        buttons: [
          {
            id: 'cool-down-1',
            label: 'Reset',
            audio: './audio/sample-voice-01.mp3',
            colorClass: 'bg-gray-600',
            hoverClass: 'hover:bg-gray-700'
          },
          {
            id: 'cool-down-2',
            label: 'Hydrate',
            audio: './audio/sample-voice-02.mp3',
            colorClass: 'bg-orange-600',
            hoverClass: 'hover:bg-orange-700'
          },
          {
            id: 'cool-down-3',
            label: 'Stretch',
            audio: './audio/sample-voice-03.mp3',
            colorClass: 'bg-cyan-600',
            hoverClass: 'hover:bg-cyan-700'
          }
        ]
      }
    ]
  },
  bgm: [
    {
      id: 'escort',
      label: 'Escort',
      src: './audio/bgm/Escort.mp3'
    }
  ]
};
