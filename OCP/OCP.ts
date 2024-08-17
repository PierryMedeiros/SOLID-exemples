abstract class Video {
    abstract calculaInteresse(): void;
}

class Movie extends Video {
    calculaInteresse(): void {
        // calcula interesse para filmes
    }
}

class TVShow extends Video {
    calculaInteresse(): void {
        // calcula interesse para séries
    }
}