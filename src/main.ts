import './styles.css';
import { Howl } from 'howler';
import {
  elements,
  switchToPortraitMode,
  switchToLandscapeMode,
  setupOrientationListener,
  setupDeviceCheck,
  disableButton,
  enableButton,
  handleButtonClick,
  setupBgmSelect
} from './ui';

// 音声管理クラス
class AudioManager {
  private bgm: any | null = null;
  private phraseButtons: any[];
  private currentBgmName: string = 'なし';
  private bgmList: { name: string; path: string; displayName: string }[] = [
    { name: 'how-to-get-high-legally', path: './audio/bgm/How to Get High Legally(Instrumental).mp3', displayName: 'How to Get High Legally' },
    { name: 'how-many-boogie', path: './audio/bgm/How Many Boogie(Instrumental).mp3', displayName: 'How Many Boogie' },
    { name: 'lose-yourself', path: './audio/bgm/Lose Yourself (Instrumental).mp3', displayName: 'Lose Yourself' },
    { name: 'still-dre', path: './audio/bgm/Still D.R.E. (Instrumental).mp3', displayName: 'Still D.R.E.' },
    { name: 'human-power-plant', path: './audio/bgm/human power plant Instrumental.mp3', displayName: 'Human Power Plant' },
    { name: 'escort', path: './audio/bgm/Escort.mp3', displayName: 'Escort' }
  ];

  constructor() {
    // すべての音声ファイルの初期化（カテゴリ順）
    this.phraseButtons = [
      // カテゴリ1（ポートレートモード）
      new Howl({ src: ['./audio/portrait/YouTuberおもんないっすよね.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/いいやお前の事誰が好きやねん.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/ええ事ないねんやろ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/お前の事誰が好きなん？.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/お察しします.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/ただぁ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/普段生活してて.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/portrait/野党.mp3'], volume: 1.0, preload: true }),
      // カテゴリ2
      new Howl({ src: ['./audio/landscape/7代目ひょうきん者.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｱﾗｰｽ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/うーん.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/うわああ　あああああ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/えぇ〜.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ええ？.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/エェヘヘヘヘヘ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/えぐぅー.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/気持ち悪い.mp3'], volume: 1.0, preload: true }),
      // カテゴリ3
      new Howl({ src: ['./audio/landscape/えっぐ〜.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/えっとー.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｴﾍﾕｳｹﾞｾﾞｲﾒｰｼ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/おおええーい.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｵｯｼｪｯｼｪｯｼｪｰｽ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｵﾅｶｯﾂﾌﾞｼﾃｰｽ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/お前やん雑魚.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/嘘です.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/嘘ですけどね.mp3'], volume: 1.0, preload: true }),
      // カテゴリ4
      new Howl({ src: ['./audio/landscape/お前足遅いんじゃ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/お母さんに電話しました.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/お笑いとは違ってさ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/キッズダンサーの笑顔.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/キモいのぉー.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｷｬｯﾂｧｲﾈｴ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/威勢いいですねコイツ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/日付変更線で遊ぶな.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/有馬記念で血祭り騒ぎ.mp3'], volume: 1.0, preload: true }),
      // カテゴリ5
      new Howl({ src: ['./audio/landscape/クリオネの泳ぎ方.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/さておき.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ｻﾞﾏｱﾐﾛ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/シンクロ経験者.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/た〜すけて〜.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ﾀﾉｼﾐ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/本当の幸せって.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/本日の有馬記念の.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/好きってところ.mp3'], volume: 1.0, preload: true }),
      // カテゴリ6
      new Howl({ src: ['./audio/landscape/デブ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/でも次の月に死んだ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/なあ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/なにかってゆうたら.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/なんでムラムラきとんねんお前.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ねー.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/無理無理無理ぃ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/言うとる場合か.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/鳥獣ギガ不足.mp3'], volume: 1.0, preload: true }),
      // カテゴリ7
      new Howl({ src: ['./audio/landscape/ヒィー怖.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/ボケエエエエエ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/まあどっちでもええねんそんなもん.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/やかましわドアホ.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/よーしよしよし.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/リアス式海岸.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/買いました.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/賢いから断った.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/馬券を.mp3'], volume: 1.0, preload: true }),
      // カテゴリ8
      new Howl({ src: ['./audio/landscape/わけわからん.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/世にも珍しく.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/中央分離帯.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/何笑ってんねん.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/余命を巻いた.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/信者「ハゲタコ、太客、エビフライ」.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/億借金すると.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/冷房強すぎる.mp3'], volume: 1.0, preload: true }),
      new Howl({ src: ['./audio/landscape/医者も短めに言うとけ.mp3'], volume: 1.0, preload: true })
    ];
  }

  // セリフボタン再生（ポートレートモード用）
  playPhraseButton(index: number): void {
    console.log('Phrase button state:', this.phraseButtons[index]?.state());
    if (this.phraseButtons[index]) {
      const buttonId = `phrase-btn-${index + 1}`;
      const button = document.getElementById(buttonId) as HTMLButtonElement;
      
      if (button) {
        disableButton(button);
        this.phraseButtons[index].play();
        
        this.phraseButtons[index].once('end', () => {
          enableButton(button);
        });
      }
    }
  }

  // ランドスケープモード用のボタン再生
  playLandscapeButton(buttonData: any): void {
    console.log('Playing landscape button:', buttonData);
    
    // 音声ファイル名からインデックスを取得
    const audioIndex = this.getAudioIndex(buttonData.audio);
    if (audioIndex >= 0 && this.phraseButtons[audioIndex]) {
      this.phraseButtons[audioIndex].play();
    }
  }

  // 音声ファイル名からインデックスを取得
  private getAudioIndex(audioFileName: string): number {
    // ファイル名からベース名を抽出
    const baseFileName = audioFileName.split('/').pop() || '';
    
    const audioFiles = [
      // カテゴリ1（ポートレートモード）
      'YouTuberおもんないっすよね.mp3',
      'いいやお前の事誰が好きやねん.mp3',
      'ええ事ないねんやろ.mp3',
      'お前の事誰が好きなん？.mp3',
      'お察しします.mp3',
      'ただぁ.mp3',
      '普段生活してて.mp3',
      '野党.mp3',
      // カテゴリ2
      '7代目ひょうきん者.mp3',
      'ｱﾗｰｽ.mp3',
      'うーん.mp3',
      'うわああ　あああああ.mp3',
      'えぇ〜.mp3',
      'ええ？.mp3',
      'エェヘヘヘヘヘ.mp3',
      'えぐぅー.mp3',
      '気持ち悪い.mp3',
      // カテゴリ3
      'えっぐ〜.mp3',
      'えっとー.mp3',
      'ｴﾍﾕｳｹﾞｾﾞｲﾒｰｼ.mp3',
      'おおええーい.mp3',
      'ｵｯｼｪｯｼｪｯｼｪｰｽ.mp3',
      'ｵﾅｶｯﾂﾌﾞｼﾃｰｽ.mp3',
      'お前やん雑魚.mp3',
      '嘘です.mp3',
      '嘘ですけどね.mp3',
      // カテゴリ4
      'お前足遅いんじゃ.mp3',
      'お母さんに電話しました.mp3',
      'お笑いとは違ってさ.mp3',
      'キッズダンサーの笑顔.mp3',
      'キモいのぉー.mp3',
      'ｷｬｯﾂｧｲﾈｴ.mp3',
      '威勢いいですねコイツ.mp3',
      '日付変更線で遊ぶな.mp3',
      '有馬記念で血祭り騒ぎ.mp3',
      // カテゴリ5
      'クリオネの泳ぎ方.mp3',
      'さておき.mp3',
      'ｻﾞﾏｱﾐﾛ.mp3',
      'シンクロ経験者.mp3',
      'た〜すけて〜.mp3',
      'ﾀﾉｼﾐ.mp3',
      '本当の幸せって.mp3',
      '本日の有馬記念の.mp3',
      '好きってところ.mp3',
      // カテゴリ6
      'デブ.mp3',
      'でも次の月に死んだ.mp3',
      'なあ.mp3',
      'なにかってゆうたら.mp3',
      'なんでムラムラきとんねんお前.mp3',
      'ねー.mp3',
      '無理無理無理ぃ.mp3',
      '言うとる場合か.mp3',
      '鳥獣ギガ不足.mp3',
      // カテゴリ7
      'ヒィー怖.mp3',
      'ボケエエエエエ.mp3',
      'まあどっちでもええねんそんなもん.mp3',
      'やかましわドアホ.mp3',
      'よーしよしよし.mp3',
      'リアス式海岸.mp3',
      '買いました.mp3',
      '賢いから断った.mp3',
      '馬券を.mp3',
      // カテゴリ8
      'わけわからん.mp3',
      '世にも珍しく.mp3',
      '中央分離帯.mp3',
      '何笑ってんねん.mp3',
      '余命を巻いた.mp3',
      '信者「ハゲタコ、太客、エビフライ」.mp3',
      '億借金すると.mp3',
      '冷房強すぎる.mp3',
      '医者も短めに言うとけ.mp3'
    ];
    return audioFiles.indexOf(baseFileName);
  }

  // BGM再生
  playBGM(bgmName: string): void {
    if (this.bgm) {
      this.bgm.stop();
    }
    
    // BGMリストから選択されたBGMを探す
    const selectedBgm = this.bgmList.find(bgm => bgm.name === bgmName);
    if (selectedBgm) {
      this.bgm = new Howl({
        src: [selectedBgm.path],
        volume: 0.7,
        loop: true,
        preload: true,
        onloaderror: (_id: number, error: unknown) => {
          console.error('BGM読み込みエラー:', error);
          this.currentBgmName = '読み込みエラー';
          this.updateBgmInfo();
        },
        onplayerror: (_id: number, error: unknown) => {
          console.error('BGM再生エラー:', error);
          this.currentBgmName = '再生エラー';
          this.updateBgmInfo();
        }
      });
      
      this.bgm.play();
      this.currentBgmName = selectedBgm.displayName;
      this.updateBgmInfo();
    }
  }

  // BGMリストの取得
  getBgmList(): { name: string; path: string; displayName: string }[] {
    return this.bgmList;
  }

  // BGM一時停止
  pauseBGM(): void {
    if (this.bgm) {
      this.bgm.pause();
    }
  }

  // BGM停止
  stopBGM(): void {
    if (this.bgm) {
      this.bgm.stop();
      this.currentBgmName = 'なし';
      this.updateBgmInfo();
    }
  }

  // BGM情報の更新
  private updateBgmInfo(): void {
    if (elements.currentBgm) {
      elements.currentBgm.textContent = this.currentBgmName;
    }
  }

  // 音声のプリロード
  preloadAll(): void {
    this.phraseButtons.forEach(phrase => phrase.load());
  }
}

// アプリケーションクラス
class SosinaVoiceApp {
  private audioManager: AudioManager;
  private isLandscapeMode: boolean = false;

  constructor() {
    this.audioManager = new AudioManager();
    this.initialize();
  }

  private initialize(): void {
    // デバイスチェック
    setupDeviceCheck();

    // 画面向きの監視
    setupOrientationListener((isLandscape) => {
      this.handleOrientationChange(isLandscape);
    });

    // ポートレートモード用のセリフボタンのイベントリスナー
    for (let i = 1; i <= 8; i++) {
      const button = document.getElementById(`phrase-btn-${i}`) as HTMLButtonElement;
      if (button) {
        button.addEventListener('click', () => {
          this.audioManager.playPhraseButton(i - 1);
        });
      }
    }

      // ランドスケープモード用のBGMコントロール
  this.setupBgmControls();
  
  // BGM選択ドロップダウンの設定
  const bgmList = this.audioManager.getBgmList();
  console.log('BGM List:', bgmList);
  console.log('BGM Select Element:', elements.bgmSelect);
  setupBgmSelect(bgmList);

    // 音声のプリロード
    this.audioManager.preloadAll();

    // サービスワーカーの登録
    this.registerServiceWorker();
  }

  // BGMコントロールの設定
  private setupBgmControls(): void {
    if (elements.bgmPlay) {
      elements.bgmPlay.addEventListener('click', () => {
        const selectedBgm = elements.bgmSelect?.value;
        if (selectedBgm) {
          this.audioManager.playBGM(selectedBgm);
        } else {
          // BGMが選択されていない場合は最初のBGMを再生
          this.audioManager.playBGM('how-many-boogie');
        }
      });
    }
    
    if (elements.bgmPause) {
      elements.bgmPause.addEventListener('click', () => {
        this.audioManager.pauseBGM();
      });
    }
    
    if (elements.bgmStop) {
      elements.bgmStop.addEventListener('click', () => {
        this.audioManager.stopBGM();
        // 停止後、BGM選択をリセット
        if (elements.bgmSelect) {
          elements.bgmSelect.value = '';
        }
      });
    }
  }

  private handleOrientationChange(isLandscape: boolean): void {
    if (isLandscape && !this.isLandscapeMode) {
      this.enterLandscapeMode();
    } else if (!isLandscape && this.isLandscapeMode) {
      this.exitLandscapeMode();
    }
  }

  private enterLandscapeMode(): void {
    this.isLandscapeMode = true;
    switchToLandscapeMode();
    
    // ランドスケープモード用のボタンクリック処理を設定
    this.setupLandscapeButtonHandlers();
  }

  private exitLandscapeMode(): void {
    this.isLandscapeMode = false;
    switchToPortraitMode();
  }

  // ランドスケープモード用のボタンハンドラー設定
  private setupLandscapeButtonHandlers(): void {
    // 既存のhandleButtonClickをオーバーライド
    const originalHandleButtonClick = handleButtonClick; void originalHandleButtonClick;
    
    // グローバルなhandleButtonClickを再定義
    (window as any).handleLandscapeButtonClick = (buttonData: any) => {
      this.audioManager.playLandscapeButton(buttonData);
    };
  }

  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully');
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
  new SosinaVoiceApp();
});