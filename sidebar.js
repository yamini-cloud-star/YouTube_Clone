const sidebar = ()=>{
    const sidebarElement = `<li class="#" id="homeicon"><img src="./images/icons8-home-50.png"><span>Home</span></li>
                    <li class="#"><img src="./images/shorts.png"><span>Shorts</span></li>
                    <li class="#"><img src="./images/icons8-video-playlist-64.png"><span>Subscription</span></li>
                    <hr>
                    <li class="youtext"><span>You  ></span></li>
                    <li class="#"><img src="./images/icons8-for-you-32.png"><span>You</span></li>
                    <li class="#"><img src="./images/icons8-clock-50.png"><span>History</span></li>
                    <li class="#"><img src="./images/icons8-for-you-32.png"><span>You</span></li>
                    <li class="#"><img src="./images/icons8-clock-50.png"><span>History</span></li>
                    <hr>
                    <li class="youtext"><span>Explore</span></li>
                    <li class="#"><img src="./images/icons8-home-50.png"><span>Home</span></li>
                    <li class="#"><img src="./images/shorts.png"><span>Shorts</span></li>
                    <li class="#"><img src="./images/icons8-video-playlist-64.png"><span>Subscription</span></li>
                    <li class="#"><img src="./images/icons8-home-50.png"><span>Home</span></li>
                    <li class="#"><img src="./images/shorts.png"><span>Shorts</span></li>
                    <li class="#"><img src="./images/icons8-video-playlist-64.png"><span>Subscription</span></li>
                    <li class="#"><img src="./images/icons8-home-50.png"><span>Home</span></li>
                    <li class="#"><img src="./images/shorts.png"><span>Shorts</span></li>
                    <li class="#"><img src="./images/icons8-video-playlist-64.png"><span>Subscription</span></li>
                    <li class="#"><img src="./images/icons8-home-50.png"><span>Home</span></li>
                    <li class="#"><img src="./images/shorts.png"><span>Shorts</span></li>
                    <hr>
                    <li class="youtext"><span>More from Youtube</span></li>
                    <li class="#"><img src="./images/icons8-youtube-48.png"><span>Subscription</span></li>
                    <li class="#"><img src="./images/icons8-youtube-48.png"><span>Home</span></li>
                    <li class="#"><img src="./images/icons8-youtube-48.png"><span>Shorts</span></li>
                 `
    document.getElementsByClassName("sidemenu")[0].innerHTML = sidebarElement;
};
sidebar();


const iconbar = ()=>{
    const iconElement =`<li class="@">
                            <img src="./images/icons8-home-50.png" >
                            <div class="text"><span>home</span></div>
                        </li>
                        <li class="@">
                            <img src="./images/shorts.png">
                            <div class="text"><span>Shorts</span></div>
                        </li>
                        <li class="@">
                            <img src="./images/icons8-video-playlist-64.png">
                            <div class="text"><span>Subscription</span></div>
                        </li>
                        <li class="@">
                            <img src="./images/icons8-for-you-32.png" >
                            <div class="text"><span>You</span></div>
                        </li>
                        <li class="@">
                            <img src="./images/icons8-clock-50.png" >
                            <div class="text"><span>History</span></div>
                        </li>
                        <li class="@">
                            <img src="./images/icons8-home-50.png" >
                            <div class="text"><span>home</span></div>
                        </li>`
    document.getElementsByClassName("iconmenu")[0].innerHTML = iconElement;


}

iconbar();


    const sidemenu=document.getElementsByClassName("sidemenu")[0];
    const iconmenu=document.getElementsByClassName("iconmenu")[0];
    const horimenu=document.getElementsByClassName("horimenu")[0];
    const returnhome=document.getElementById("homeicon");



    document.getElementById("icon").addEventListener('click',()=>{
        if(sidemenu.style.display !=='none'){
            sidemenu.style.display='none';
            iconmenu.style.display='block';
            horimenu.style.width='50%';

          
        }else{
            sidemenu.style.display='block';
            iconmenu.style.display='none';

        };
    });

