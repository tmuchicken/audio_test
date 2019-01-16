/*
https://resonance-audio.github.io/resonance-audio/develop/web/getting-started.html
*/

function Play(){

// Create an AudioContext
let audioContext = new AudioContext();

// Create a (first-order Ambisonic) Resonance Audio scene and pass it
// the AudioContext.
let resonanceAudioScene = new ResonanceAudio(audioContext);

// Connect the scene’s binaural output to stereo out.
resonanceAudioScene.output.connect(audioContext.destination);

// Define room dimensions.
// By default, room dimensions are undefined (0m x 0m x 0m).
let roomDimensions = {
  width: 3.1,
  height: 2.5,
  depth: 3.4,
};


// Define materials for each of the room’s six surfaces.
// Room materials have different acoustic reflectivity.
let roomMaterials = {
  // Room wall materials
  left: 'brick-bare',
  right: 'curtain-heavy',
  front: 'marble',
  back: 'glass-thin',
  // Room floor
  down: 'grass',
  // Room ceiling
  up: 'transparent',
};

// Add the room definition to the scene.
resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

// Create an AudioElement.
let audioElement = document.createElement('audio');

// Load an audio file into the AudioElement.
audioElement.src = 'SpeechSample.wav';

// Generate a MediaElementSource from the AudioElement.
let audioElementSource = audioContext.createMediaElementSource(audioElement);

// Add the MediaElementSource to the scene as an audio input source.
let source = resonanceAudioScene.createSource();
audioElementSource.connect(source.input);

// Set the source position relative to the room center (source default position).
source.setPosition(-0.707, -0.707, 0);

// Play the audio.
audioElement.play();

};

/*
$('play').click(function () {
  Play();
});
*/



/*
 * main.js
 http://phiary.me/webaudio-api-getting-started/
 更新日時:2019/1/15/18:05
 */

/*
var context;
let resonanceAudioScene;

window.AudioContext = window.AudioContext || window.webkitAudioContext;  
var context = new AudioContext();


// Audio 用の buffer を読み込む
var getAudioBuffer = function(url, fn) {  
  var req = new XMLHttpRequest();
  // array buffer を指定
  req.responseType = 'arraybuffer';

  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 0 || req.status === 200) {
        // array buffer を audio buffer に変換
        context.decodeAudioData(req.response, function(buffer) {
          // コールバックを実行
          fn(buffer);
        });
      }
    }
  };

  req.open('GET', url, true);
  req.send('');
};

// サウンドを再生
var playSound = function(buffer) {
  /* 
  //sourceの都合上コメントアウト
  // source を作成
  var source = context.createBufferSource();
  */

  // Resonance ソースの作成
  //let source = resonanceAudioScene.createSource();


/////////////////////////////////////////////
///////  Resonance Audio Set up  ////////////
/////////////////////////////////////////////

/*
  // Create a (first-order Ambisonic) Resonance Audio scene and pass it
  // オーディオシーンの作成
  let resonanceAudioScene = new ResonanceAudio(context, {
      ambisonicOrder: 1,
    });


      //シーンに部屋を追加する
  // Define room dimensions.
  // By default, room dimensions are undefined (0m x 0m x 0m). メートルで決められる
  let roomDimensions = {
    width: 3.1,
    height: 2.5,
    depth: 3.4,
  };

  // Define materials for each of the room’s six surfaces.
  // Room materials have different acoustic reflectivity. 
  // 部屋の6つの面（4つの壁、天井、および床）それぞれに部屋の材料を定義します。
  let roomMaterials = {
    // Room wall materials
    left: 'brick-bare',
    right: 'curtain-heavy',
    front: 'marble',
    back: 'glass-thin',
    // Room floor
    down: 'grass',
    // Room ceiling
    up: 'transparent',
  };


  // Add the room definition to the scene.
  // シーンに部屋の定義を追加する
  resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);




  /////////////////////////////////////////////
  /////////////////////////////////////////////

  // buffer をセット
  resonanceAudioScene.buffer = buffer;
  // context に connect
  resonanceAudioScene.connect(context.destination);
  
  // Set the source position relative to the room center (source default position).
  // ソースをシーンに配置する
  resonanceAudioScene.setPosition(-0.707, -0.707, 0);
  
  // 再生
  resonanceAudioScene.start(0);
};

// main
window.onload = function() {
  // サウンドを読み込む
  //getAudioBuffer('se.mp3', function(buffer) {
    //getAudioBuffer('Overture.mp3', function(buffer) {
    getAudioBuffer('0.1s_20.mp3', function(buffer) {
    // 読み込み完了後にボタンにクリックイベントを登録
    var btn = document.getElementById('btn');
    btn.onclick = function() {
      // サウンドを再生
      playSound(buffer);
    };
  });
};
*/