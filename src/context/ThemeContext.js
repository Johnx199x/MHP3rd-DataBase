import "../Styles/Theme.css"

export const ThemeContext = ({theme}) => {
    let $body = document.body;
    

        if(theme === "lightTheme"){
                $body.classList.contains("darkTheme")&& ($body.classList.toggle("darkTheme"));
                $body.classList.add("lightTheme");
                localStorage.setItem("theme", "lightTheme");

        }
            else{ 
                $body.classList.contains("lightTheme")&& ($body.classList.toggle("lightTheme"));
                $body.classList.add("darkTheme");
                localStorage.setItem("theme", "darkTheme");
            }
            
}
