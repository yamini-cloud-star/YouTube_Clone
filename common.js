const header = ()=>{
    const headerElement = `<ul class="menuicon">
                 <li id="icon" class="icon">
                    <img src="./images/icons8-menu-48.png">            
                </li> 
                <li class="youtubeicon">
                    <img src="./images/icons8-youtube-48.png">
                </li>
                <li class="text">
                    <h1>Youtube</h1>
                </li>
                <li class="search">
                    <ul class="forsearch">
                        <li class="searchicon">
                            <input type="text" id="searchicon" placeholder="Search" onkeyup = "betterFunction()">
                                
                        </li>
                        <li class="searchimg">
                            <span onclick="showSearchResults()">
                                <img src="./images/icons8-search-50.png">
                            </span>
                        </li>
                        <li class="suggestions"></li>

                    </ul>                      
                </li>
                
                <li class="microphone">
                    <img src="./images/icons8-microphone-50.png">
                </li>
                <li class="videosymbol">
                    <img src="./images/video_call_24dp_FILL0_wght400_GRAD0_opsz24.png">
                </li>
            
                <li class="bellicon">
                        <img src="./images/notifications_24dp_FILL0_wght400_GRAD0_opsz24.png">
                </li>
                <li class="profileicon">
                        <span class="profiletext">Y</span>
          
                </li>
                     
            </ul>

            <div class="right">

            
                <div class="horizontalmenu">
                    <li class="leftbutton"><img src="./images/icons8-less-than-30.png"></li>
                    <li class="first"><span class="allclass">All</span></li>
                    <li class="sec"><span class="class2">Shorts</span></li>
                    <li class="sec"><span class="class2">Unwatched</span></li>
                    <li class="sec"><span class="class2">Watched</span></li>
                    <li class="sec"><span class="class2">uploaded</span></li>
                    <li class="sec"><span class="class2">Live</span></li>
                    <li class="sec"><span class="class2">Music</span></li>
                    <li class="sec"><span class="class2">Stories</span></li>
                    <li class="sec"><span class="class2">Movies</span></li>
                    <li class="sec"><span class="class2">Comedy scenes</span></li>
                    <li class="sec"><span class="class2">Games</span></li>
                    <li class="sec"><span class="class2">Entertainment</span></li>
                    <li class="rightbutton"><img src="./images/icons8-greater-than-30.png"></li>
                </div>
            </div>`
    document.getElementsByClassName("firstmenu")[0].innerHTML = headerElement;
};

// for search operation
const debounce = (fn, d) => {            
    let interval;

    return function () {
        clearTimeout(interval);
        interval = setTimeout(() => {
            fn();
        }, d);
    };
};
const listSuggestion = async () => {
    const queryData = document.getElementById("searchicon").value;
    const suggestionURL = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${queryData}`;
    const data = await fetch(suggestionURL);
    const response = await data.json();
    showSuggestions = true;
    loadSuggestions(response);
}
const loadSuggestions = (data)=>{
    let suggestionhtml = '';
    console.log(data[1]);
    data.length>0 && data[1]?.forEach((element,index) => {
    suggestionhtml+=`<div id=suggestion_${index} onclick="selectValue(event)"><p>${element}</p></div>` 
});
document.getElementsByClassName("suggestions")[0].innerHTML = suggestionhtml;
}
const betterFunction = debounce(listSuggestion, 300);


const showSearchResults = async()=>{
    const queryData = document.getElementById("searchicon").value;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${queryData}&type=video&videoDefinition=high&key=AIzaSyD8yqXGfcpfxCyX-kWWzKa2dXC_jh57Dh8`;

    const searchResults = await fetch(url);
    const data = await searchResults.json();
    if(data.items.length > 0){
        console.log("im in if");
        localStorage.setItem("searchResults",JSON.stringify(data.items));
        window.location.href = "./searchresults.html"
    }else{
         window.location.href = "./searchresults.html"
    }
}

const selectValue = (event)=>{
  const inputValue = event.target.textContent;
  document.getElementById("searchicon").value = inputValue;
  showSearchResults();
  document.getElementById("searchicon").value = " ";
}

header();


