interface Movie {

    play(): void;

}

interface AudioControl {
    
    increaseVolume(): void;

}

class TheLionKing implements Movie, AudioControl {
    
    play(): void {

        // play the movie

    }

    increaseVolume(): void {
        
        // increasing volume

    }
}

class ModerTimes implements Movie {
    
    play(): void {
    
        // play the movie
        // Nesse caso, só implementamos a interface que faz sentido para esse filme.
    }
}
