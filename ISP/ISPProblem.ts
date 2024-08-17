interface Movie {
    play(): void;
    increaseVolume(): void;
}

class TheLionKing implements Movie {
    play(): void {
        // Play the movie
    }

    increaseVolume(): void {
        // Increasing volume
    }
}

class ModernTimes implements Movie {
    play(): void {
        // Play the movie
    }

    increaseVolume(): void {
        // Esse método não será utilizado pois o filme não tem som, porém terá que ser implementado.
    }
}
