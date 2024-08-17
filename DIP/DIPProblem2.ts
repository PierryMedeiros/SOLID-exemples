class DramaCategory {
    
}

class Movie {
    private name: string;
    private category: DramaCategory;

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCategory(): DramaCategory {
        return this.category;
    }

    setCategory(category: DramaCategory): void {
        this.category = category;
    }
}
