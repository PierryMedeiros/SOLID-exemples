class Movie {
    play(): void {
        // play no video
    }

    increaseVolume(): void {
        // Aumenta o volume
    }
}

class TheLionKing extends Movie {
    // Nenhuma alteração necessária, pois herda de Movie
}

/*
     Como o filme ModernTimes de charlie chaplin não tem volume e a classe
    ModernTimes está estendendo "Movie", ela acaba recebendo a função de aumentar
    o volume, o que fere um dos princípios do SOLID, o LSP (Princípio da Substituição de Liskov).
*/
class ModernTimes extends Movie {
    increaseVolume(): void {
        // putz
    }
}
