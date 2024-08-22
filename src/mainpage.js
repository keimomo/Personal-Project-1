var btn_english = document.getElementById("english");
var btn_japanese = document.getElementById("japanese");
var english = document.getElementById("about-me-English");
var japanese = document.getElementById("about-me-Japanese");

btn_english.addEventListener('click', ()=>{
    english.style.display='block';
    japanese.style.display='none';
});

btn_japanese.addEventListener('click', ()=>{
    english.style.display='none';
    japanese.style.display='block';
});