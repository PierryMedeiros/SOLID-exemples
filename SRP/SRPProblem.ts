class Course {
    private nome: string;
    private categoria: string;
    private descricao: string;
  
    constructor(nome: string, categoria: string, descricao: string) {
      this.nome = nome;
      this.categoria = categoria;
      this.descricao = descricao;
    }
  
    private connection() {
      // Aqui ficaria sua conexão com o banco.
      // Para simplificar, retornaremos um objeto fictício.
      return {
        insert: (data: string) => {
          console.log(`Inserido no banco de dados: ${data}`);
        }
      };
    }
  
    public criarCategoria() {
      this.connection().insert(this.categoria);
    }
  
    public criarCurso() {
      this.connection().insert(this.nome);
    }

    public criarDescricao() {
        this.connection().insert(this.descricao);
      }
  
    public pegarNome(): string {
      return this.nome;
    }
  
    public setarNome(nome: string): this {
      this.nome = nome;
      return this;
    }
  
    public pegarCategoria(): string {
      return this.categoria;
    }
  
    public setarCategoria(categoria: string): this {
      this.categoria = categoria;
      return this;
    }

    public pegarDescricao(): string {
        return this.categoria;
      }
    
    public setarDescricao(descricao: string): this {
      this.descricao = descricao;
      return this;
    }
  }
  