// DOM要素の取得
export const elements = {
  portraitMode: document.getElementById('portrait-mode') as HTMLDivElement,
  landscapeMode: document.getElementById('landscape-mode') as HTMLDivElement,
  pcWarning: document.getElementById('pc-warning') as HTMLDivElement,
  georgeImage: document.getElementById('george-image') as HTMLImageElement,
  sidebar: document.getElementById('sidebar') as HTMLDivElement,
  buttonDisplay: document.getElementById('button-display') as HTMLDivElement,
  buttonGrid: document.getElementById('button-grid') as HTMLDivElement,
  currentCategory: document.getElementById('current-category') as HTMLSpanElement,
  bgmSelect: document.getElementById('bgm-select') as HTMLSelectElement,
  bgmPlay: document.getElementById('bgm-play') as HTMLButtonElement,
  bgmPause: document.getElementById('bgm-pause') as HTMLButtonElement,
  bgmStop: document.getElementById('bgm-stop') as HTMLButtonElement,
  currentBgm: document.getElementById('current-bgm') as HTMLSpanElement,
};

// ボタンカテゴリの定義
export const buttonCategories = {
  1: [
    { id: 1, text: 'YouTuberおもんないっすよね', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/portrait/YouTuberおもんないっすよね.mp3' },
    { id: 2, text: 'いいやお前の事誰が好きやねん', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/portrait/いいやお前の事誰が好きやねん.mp3' },
    { id: 3, text: 'ええ事ないねんやろ', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/portrait/ええ事ないねんやろ.mp3' },
    { id: 4, text: 'お前の事誰が好きなん？', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/portrait/お前の事誰が好きなん？.mp3' },
    { id: 5, text: 'お察しします', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/portrait/お察しします.mp3' },
    { id: 6, text: 'ただぁ', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/portrait/ただぁ.mp3' },
    { id: 7, text: '普段生活してて', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/portrait/普段生活してて.mp3' },
    { id: 8, text: '野党', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/portrait/野党.mp3' }
  ],
  2: [
    { id: 9, text: '7代目ひょうきん者', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/7代目ひょうきん者.mp3' },
    { id: 10, text: 'ｱﾗｰｽ', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/ｱﾗｰｽ.mp3' },
    { id: 11, text: 'うーん', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/うーん.mp3' },
    { id: 12, text: 'うわああ　あああああ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/うわああ　あああああ.mp3' },
    { id: 13, text: 'えぇ〜', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/えぇ〜.mp3' },
    { id: 14, text: 'ええ？', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ええ？.mp3' },
    { id: 15, text: 'エェヘヘヘヘヘ', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/エェヘヘヘヘヘ.mp3' },
    { id: 16, text: 'えぐぅー', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/えぐぅー.mp3' },
    { id: 57, text: '気持ち悪い', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/気持ち悪い.mp3' }
  ],
  3: [
    { id: 17, text: 'えっぐ〜', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/えっぐ〜.mp3' },
    { id: 18, text: 'えっとー', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/えっとー.mp3' },
    { id: 19, text: 'ｴﾍﾕｳｹﾞｾﾞｲﾒｰｼ', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/ｴﾍﾕｳｹﾞｾﾞｲﾒｰｼ.mp3' },
    { id: 20, text: 'おおええーい', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/おおええーい.mp3' },
    { id: 21, text: 'ｵｯｼｪｯｼｪｯｼｪｰｽ', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/ｵｯｼｪｯｼｪｯｼｪｰｽ.mp3' },
    { id: 22, text: 'ｵﾅｶｯﾂﾌﾞｼﾃｰｽ', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ｵﾅｶｯﾂﾌﾞｼﾃｰｽ.mp3' },
    { id: 23, text: 'お前やん雑魚', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/お前やん雑魚.mp3' },
    { id: 58, text: '嘘です', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/嘘です.mp3' },
    { id: 59, text: '嘘ですけどね', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/嘘ですけどね.mp3' }
  ],
  4: [
    { id: 24, text: 'お前足遅いんじゃ', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/お前足遅いんじゃ.mp3' },
    { id: 25, text: 'お母さんに電話しました', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/お母さんに電話しました.mp3' },
    { id: 26, text: 'お笑いとは違ってさ', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/お笑いとは違ってさ.mp3' },
    { id: 27, text: 'キッズダンサーの笑顔', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/キッズダンサーの笑顔.mp3' },
    { id: 28, text: 'キモいのぉー', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/キモいのぉー.mp3' },
    { id: 29, text: 'ｷｬｯﾂｧｲﾈｴ', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ｷｬｯﾂｧｲﾈｴ.mp3' },
    { id: 60, text: '威勢いいですねコイツ', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/威勢いいですねコイツ.mp3' },
    { id: 61, text: '日付変更線で遊ぶな', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/日付変更線で遊ぶな.mp3' },
    { id: 62, text: '有馬記念で血祭り騒ぎ', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/有馬記念で血祭り騒ぎ.mp3' }
  ],
  5: [
    { id: 30, text: 'クリオネの泳ぎ方', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/クリオネの泳ぎ方.mp3' },
    { id: 31, text: 'さておき', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/さておき.mp3' },
    { id: 32, text: 'ｻﾞﾏｱﾐﾛ', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/ｻﾞﾏｱﾐﾛ.mp3' },
    { id: 33, text: 'シンクロ経験者', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/シンクロ経験者.mp3' },
    { id: 34, text: 'た〜すけて〜', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/た〜すけて〜.mp3' },
    { id: 35, text: 'ﾀﾉｼﾐ', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ﾀﾉｼﾐ.mp3' },
    { id: 63, text: '本当の幸せって', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/本当の幸せって.mp3' },
    { id: 64, text: '本日の有馬記念の', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/本日の有馬記念の.mp3' },
    { id: 71, text: '好きってところ', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/好きってところ.mp3' }
  ],
  6: [
    { id: 36, text: 'デブ', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/デブ.mp3' },
    { id: 37, text: 'でも次の月に死んだ', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/でも次の月に死んだ.mp3' },
    { id: 38, text: 'なあ', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/なあ.mp3' },
    { id: 39, text: 'なにかってゆうたら', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/なにかってゆうたら.mp3' },
    { id: 40, text: 'なんでムラムラきとんねんお前', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/なんでムラムラきとんねんお前.mp3' },
    { id: 41, text: 'ねー', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/ねー.mp3' },
    { id: 65, text: '無理無理無理ぃ', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/無理無理無理ぃ.mp3' },
    { id: 66, text: '言うとる場合か', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/言うとる場合か.mp3' },
    { id: 67, text: '鳥獣ギガ不足', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/鳥獣ギガ不足.mp3' }
  ],
  7: [
    { id: 42, text: 'ヒィー怖', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/ヒィー怖.mp3' },
    { id: 43, text: 'ボケエエエエエ', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/ボケエエエエエ.mp3' },
    { id: 44, text: 'まあどっちでもええねんそんなもん', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/まあどっちでもええねんそんなもん.mp3' },
    { id: 45, text: 'やかましわドアホ', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/やかましわドアホ.mp3' },
    { id: 46, text: 'よーしよしよし', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/よーしよしよし.mp3' },
    { id: 47, text: 'リアス式海岸', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/リアス式海岸.mp3' },
    { id: 68, text: '買いました', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/買いました.mp3' },
    { id: 69, text: '賢いから断った', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/賢いから断った.mp3' },
    { id: 70, text: '馬券を', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/馬券を.mp3' }
  ],
  8: [
    { id: 48, text: 'わけわからん', color: 'bg-red-600', hoverColor: 'hover:bg-red-700', audio: './audio/landscape/わけわからん.mp3' },
    { id: 49, text: '世にも珍しく', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', audio: './audio/landscape/世にも珍しく.mp3' },
    { id: 50, text: '中央分離帯', color: 'bg-green-600', hoverColor: 'hover:bg-green-700', audio: './audio/landscape/中央分離帯.mp3' },
    { id: 51, text: '何笑ってんねん', color: 'bg-yellow-600', hoverColor: 'hover:bg-yellow-700', audio: './audio/landscape/何笑ってんねん.mp3' },
    { id: 52, text: '余命を巻いた', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', audio: './audio/landscape/余命を巻いた.mp3' },
    { id: 53, text: '信者「ハゲタコ、太客、エビフライ」', color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700', audio: './audio/landscape/信者「ハゲタコ、太客、エビフライ」.mp3' },
    { id: 54, text: '億借金すると', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', audio: './audio/landscape/億借金すると.mp3' },
    { id: 55, text: '冷房強すぎる', color: 'bg-teal-600', hoverColor: 'hover:bg-teal-700', audio: './audio/landscape/冷房強すぎる.mp3' },
    { id: 56, text: '医者も短めに言うとけ', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', audio: './audio/landscape/医者も短めに言うとけ.mp3' }
  ]
};

// デバイス判定
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isLandscape = (): boolean => {
  return window.innerWidth > window.innerHeight;
};

// モード切り替え
export const switchToPortraitMode = (): void => {
  elements.portraitMode.classList.remove('hidden');
  elements.landscapeMode.classList.add('hidden');
};

export const switchToLandscapeMode = (): void => {
  elements.portraitMode.classList.add('hidden');
  elements.landscapeMode.classList.remove('hidden');
  setupLandscapeMode();
};

// ランドスケープモードの初期化
export const setupLandscapeMode = (): void => {
  setupSidebarButtons();
  setupBgmControls();
  updateButtonGrid(1); // デフォルトでカテゴリ1を表示
};

// サイドバーボタンの設定
export const setupSidebarButtons = (): void => {
  const sidebarButtons = document.querySelectorAll('.sidebar-btn');
  sidebarButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const category = parseInt(target.dataset.category || '1');
      updateButtonGrid(category);
      updateCurrentCategory(category);
      
      // アクティブ状態の更新
      sidebarButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-yellow-400'));
      target.classList.add('ring-2', 'ring-yellow-400');
    });
  });
  
  // デフォルトでカテゴリ1をアクティブにする
  const firstButton = document.querySelector('.sidebar-btn') as HTMLButtonElement;
  if (firstButton) {
    firstButton.classList.add('ring-2', 'ring-yellow-400');
  }
};

// ボタングリッドの更新
export const updateButtonGrid = (category: number): void => {
  const buttons = buttonCategories[category as keyof typeof buttonCategories] || [];
  elements.buttonGrid.innerHTML = '';
  
  buttons.forEach(buttonData => {
    const button = document.createElement('button');
    button.className = `landscape-button ${buttonData.color} ${buttonData.hoverColor}`;
    button.textContent = buttonData.text;
    button.dataset.audio = buttonData.audio;
    button.dataset.buttonId = buttonData.id.toString();
    
    // ボタンクリックイベント
    button.addEventListener('click', () => {
      handleButtonClick(buttonData);
    });
    
    elements.buttonGrid.appendChild(button);
  });
};

// ボタンクリックの処理
export const handleButtonClick = (buttonData: any): void => {
  console.log('Button clicked:', buttonData);
  // グローバルなハンドラーが設定されている場合は呼び出し
  if ((window as any).handleLandscapeButtonClick) {
    (window as any).handleLandscapeButtonClick(buttonData);
  }
};

// 現在のカテゴリの更新
export const updateCurrentCategory = (category: number): void => {
  if (elements.currentCategory) {
    elements.currentCategory.textContent = category.toString();
  }
};

// BGMコントロールの設定
export const setupBgmControls = (): void => {
  if (elements.bgmPlay) {
    elements.bgmPlay.addEventListener('click', () => {
      console.log('BGM Play clicked');
      // BGM再生の処理（main.tsで実装）
    });
  }
  
  if (elements.bgmPause) {
    elements.bgmPause.addEventListener('click', () => {
      console.log('BGM Pause clicked');
      // BGM一時停止の処理（main.tsで実装）
    });
  }
  
  if (elements.bgmStop) {
    elements.bgmStop.addEventListener('click', () => {
      console.log('BGM Stop clicked');
      // BGM停止の処理（main.tsで実装）
    });
  }
};

// BGM選択ドロップダウンの設定
export const setupBgmSelect = (bgmList: { name: string; path: string; displayName: string }[]): void => {
  console.log('setupBgmSelect called with:', bgmList);
  if (elements.bgmSelect) {
    console.log('BGM Select element found, setting up options...');
    // 既存のオプションをクリア（最初の「BGMを選択」オプションは残す）
    elements.bgmSelect.innerHTML = '<option value="">BGMを選択</option>';
    
    // BGMリストからオプションを追加
    bgmList.forEach(bgm => {
      console.log('Adding BGM option:', bgm);
      const option = document.createElement('option');
      option.value = bgm.name;
      option.textContent = bgm.displayName;
      elements.bgmSelect.appendChild(option);
    });

    // 初期状態で再生ボタンを無効化
    const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
    if (playButton) {
      playButton.disabled = true;
      playButton.classList.add('opacity-50', 'cursor-not-allowed');
    }

    // BGM選択時のイベントリスナーを追加
    elements.bgmSelect.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      if (target.value) {
        console.log('BGM selected:', target.value);
        // BGMが選択されたら再生ボタンを有効化
        const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
        if (playButton) {
          playButton.disabled = false;
          playButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
      } else {
        // BGMが選択されていない場合は再生ボタンを無効化
        const playButton = document.getElementById('bgm-play') as HTMLButtonElement;
        if (playButton) {
          playButton.disabled = true;
          playButton.classList.add('opacity-50', 'cursor-not-allowed');
        }
      }
    });
  }
};

// PC警告の表示/非表示
export const showPCWarning = (): void => {
  elements.pcWarning.classList.remove('hidden');
};

export const hidePCWarning = (): void => {
  elements.pcWarning.classList.add('hidden');
};

// ボタンの無効化/有効化
export const disableButton = (button: HTMLButtonElement): void => {
  button.disabled = true;
  button.classList.add('opacity-50', 'cursor-not-allowed');
};

export const enableButton = (button: HTMLButtonElement): void => {
  button.disabled = false;
  button.classList.remove('opacity-50', 'cursor-not-allowed');
};

// 画面向きの監視
export const setupOrientationListener = (onOrientationChange: (isLandscape: boolean) => void): void => {
  const handleOrientationChange = (): void => {
    const landscape = isLandscape();
    onOrientationChange(landscape);
  };

  window.addEventListener('resize', handleOrientationChange);
  window.addEventListener('orientationchange', handleOrientationChange);
  
  // 初期状態の設定
  handleOrientationChange();
};

// デバイス判定の監視
export const setupDeviceCheck = (): void => {
  if (!isMobile()) {
    showPCWarning();
  } else {
    hidePCWarning();
  }
}; 