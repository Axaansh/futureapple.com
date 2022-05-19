const createNav = () => {
   let nav = document.querySelector('.navbar');

    nav.innerHTML = `
                <div class="nav">
                    <img src="img/logo.png" class="brand-logo" alt="">
                        <div class="nav-items" >
                            <div class="search">
                                <input type="text" class="search-box" placeholder="Search Here">
                                <button class="search-btn">🔍</button>
                            </div>
                            <a href=""><img src="img/profile.png" width="30px" height="30px"></a>
                        </div>   
                </div>

                <div>
                    <ul class="links-container">
                        <li class="link-item"><a href="index.html" class="link">Home</a></li>
                        <li class="link-item"><a href="flip.html" class="link">iPhone Flip</a></li>
                        <li class="link-item"><a href="fold.html" class="link">iPhone Fold</a></li>
                        <li class="link-item"><a href="ap3.html" class="link">AirPods 3</a></li>
                        <li class="link-item"><a href="i8.html" class="link">iWatch 8</a></li>
                        <li class="link-item"><a href="i8pro.html" class="link">iWatch 8 Pro</a></li>
                        <li class="link-item"><a href="support.html" class="link">Support</a></li>
                        <li class="link-item"><a href="aboutus.html" class="link">About Us</a></li>
                    </ul>
                </div>
    `;  
}

createNav();