(()=>{"use strict";const t=document.querySelector("h1"),i=document.querySelector("audio"),e=document.querySelector("#play img:nth-child(2)"),s=document.querySelector(".menu-list"),n=document.querySelector(".audioList"),r=document.querySelector(".download"),a=document.querySelector(".tracks"),o=document.querySelector(".previous"),c=document.querySelector(".next"),l=document.querySelector("#img-play"),u=new class{constructor(t){this.json=t.json,this.containerSongs=t.containerSongs,this.download=t.download,this.anima=t.anima,this.imgPlay=t.imgPlay,this.musicArray=[],this.title=[],this.src=[],this.id=[],this.current=0}playList(){this.musicArray=this.json.map((t=>t)),this.musicArray.forEach((t=>{const{title:i,track:e,id:s}=t;this.title.push(i),this.src.push(e),this.id.push(s),this.current===s&&this.createSource({title:i,src:e,id:s})}))}autoPlay(){this.containerSongs.addEventListener("ended",(()=>{this.current++,this.current>this.musicArray.length?this.current=1:this.current=this.current,this.createSource({title:this.title[this.current-1],src:this.src[this.current-1],id:this.id[this.current-1]})}))}nextSong(){document.querySelector("source")&&(this.current++,this.current>this.musicArray.length?this.current=1:this.current,this.createSource({title:this.title[this.current-1],src:this.src[this.current-1],id:this.id[this.current-1]}))}preSong(){document.querySelector("source")&&(this.current--,this.current<1?this.current=this.musicArray.length:this.current,this.createSource({title:this.title[this.current-1],src:this.src[this.current-1],id:this.id[this.current-1]}))}validateData(t){const{textTrack:i,id:e,src:s}=t;null!=i&&null!=e&&null!=s||(i.textContent="Add a Song")}createSource(t){const{title:i,src:e,id:s}=t,n=document.querySelector(".description p");this.validateData({textTrack:n,src:e,id:s});const r=document.createElement("source"),a=document.createAttribute("download");this.download.setAttributeNode(a),this.download.href=`./assets/audio/${e}.mp3`,this.anima.style.setProperty("--anima","3s linear infinite"),this.imgPlay.src="./assets/img/pause.svg",r.src=`./assets/audio/${e}.mp3`,n.textContent=i,r.type="audio/mpeg",r.id=s,this.clearHTML(),this.containerSongs.appendChild(r),this.containerSongs.load(),this.timeAudio()}timeAudio(){setTimeout((()=>{this.containerSongs.play()}),100)}volume(){document.querySelector(".volumen").oninput=t=>{const i=t.target.value;this.containerSongs.volume=i}}clearHTML(){for(;this.containerSongs.firstChild;)this.containerSongs.removeChild(this.containerSongs.firstChild)}}({json:[{title:"Aventura Mística",version:"Dragon Ball | Luis De Lille",track:"aventura-mistica",id:1},{title:"Romance te puedo dar",version:"Dragon Ball | Marisa de Lille",track:"romance-te-puedo-dar",id:2},{title:"Cha-La Head-Cha-La",version:"Dragon Ball Z | Ricardo Silva",track:"chala-head-chala",id:3},{title:"El poder nuestro es...",version:"Dragon Ball Z | Adrián Barba",track:"el-poder-nuestro",id:4},{title:"Angeles Fuimos",version:"Dragon Ball Z | Adrián Barba",track:"angeles-fuimos",id:5},{title:"Mi corazón encantado",version:"Dragon Ball Gt | Aarón Montalvo",track:"mi-corazon-encantado",id:6},{title:"Sinfonía Cozarón Encantado",version:"Sinfonía DB Gt",track:"sinfonia-db-gt",id:7}],containerSongs:i,download:r,anima:a,imgPlay:l}),d=new class{constructor(t){this.plugins=t.plugins,this.audiolist=t.audiolist}list(){const t=document.querySelector(".db");this.plugins.json.forEach((i=>{const e=document.createElement("li");e.classList.add("audio-track"),e.dataset.id=i.id,e.title=i.version;const s=document.createElement("p");s.textContent=i.title;const n=document.createElement("img");n.src="./assets/img/track.svg",e.appendChild(n),e.appendChild(s),t.appendChild(e)}))}setPlay(){document.querySelectorAll(".audio-track").forEach((t=>{t.addEventListener("click",(()=>{let i=Number(t.getAttribute("data-id"));this.plugins.current=i,this.plugins.playList()}))}))}github(){window.open("https://github.com/chendodev","_blank")}}({audiolist:n,plugins:u});d.list(),d.setPlay(),t.onclick=()=>d.github(),u.playList(),i.addEventListener("ended",u.autoPlay()),c.onclick=()=>u.nextSong(),o.onclick=()=>u.preSong(),u.volume();const h=new class{constructor(t){this.track=t.audio,this.lists=t.lists,this.anima=t.anima,this.imgPlay=t.imgPlay,this.isPlaying=!0}onPlay(){this.track.play(),this.isPlaying=!0,this.anima.style.setProperty("--anima","3s linear infinite"),this.imgPlay.src="./assets/img/pause.svg"}onPause(){this.track.pause(),this.isPlaying=!1,this.anima.style.setProperty("--anima","paused"),this.imgPlay.src="./assets/img/play.svg"}async toggleAudio(){return this.track.paused&&!this.isPlaying?this.onPlay():this.track.paused?void 0:this.onPause()}toggleMenu(){"250px"===this.lists.style.height?(this.lists.style.height="0px",this.lists.style.borderBottom="0"):(this.lists.style.height="250px",this.lists.style.borderBottom="2px solid #000")}}({audio:i,lists:n,anima:a,imgPlay:l});e.onclick=()=>h.toggleAudio(),s.onclick=()=>h.toggleMenu()})();