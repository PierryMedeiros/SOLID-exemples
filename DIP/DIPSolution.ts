interface Category {
    
}

class DramaCategory implements Category {
    
}

class Movie {
    private name: string;
    private category: Category;

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
