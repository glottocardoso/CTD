import { useEffect, useContext } from "react"; //Importamos a função para usar o contexto
import { ThemeContext } from "../contexts/ThemeContext"; //Importamos o contexto
import NavBar from "./NavBar";

function Header() {

    useEffect(() => {
        console.log("<Header /> executou efeito colateral");
        return function unmount() {
            console.log(console.log("<Header /> desmontou"));
        }
    }, []);

    const { theme, handleChangeTheme } = useContext(ThemeContext) //Resgatamos o contexto

    return (
        <div style={{
            backgroundColor: "#8A6DF178",
            padding: "2%",
            marginTop: "2%",
            marginBottom: "5%"
        }}>
            <h1>The Rick and Morty API</h1>

            <img src="https://c4.wallpaperflare.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg"
                style={{
                    width: "90%",
                    border: "3px solid #FFFFFF"
                }} />

            <NavBar />
            <button onClick={handleChangeTheme}>Trocar Tema</button>

        </div>

    );
}

export default Header;
