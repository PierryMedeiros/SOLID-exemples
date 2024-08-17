class DramaCategory {
    
}

class Movie {
    private name: string;
    private category: string;

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCategory(): DramaCategory {
        return new DramaCategory();
    }
}
