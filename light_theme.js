const d =document,
    ls =localStorage;
export default function lightTheme(btn,classLight){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-light]");

    let moon = "🌙",
        sun= "🌞";

    let lightMode = ()=>{
        $selectors.forEach(el => el.classList.add(classLight));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    let darkMode = ()=>{
        $selectors.forEach((el)=> el.classList.remove(classLight));
        $themeBtn.textContent =sun;
        ls.setItem("theme","dark");
    }

    d.addEventListener("click", e =>{
        if (e.target.matches(btn)) {
           if ($themeBtn.textContent === moon) {
                darkMode();
           }else{
                lightMode();
           }
        }
    })

    d.addEventListener("DOMContentLoaded" , e =>{
        if (ls.getItem("theme")=== null) {
            ls.setItem("theme", "light");
        }

        if(ls.getItem("theme") === "light"){
            lightMode();
        }

        if(ls.getItem("theme") === "dark"){
            darkMode();
        }
    });
}