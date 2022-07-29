import MoviesList from "./MoviesList/MoviesList";
import "./Home.css";

export default function Home() {

    return (
        <div className="home">
            <h2 className="subtitulo">
                Selecione o filme
            </h2>
            <MoviesList />
        </div>
    )
}