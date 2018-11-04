{
  console.log(moment().format())
  class Pessoa {
    constructor(nome, idade, sexo) {
      this._nome = nome
      this._idade = idade
      this._sexo = sexo
    }

    get nome() {
      return this._nome
    }

    set nome(nome) {
      this._nome = nome
    }

    get idade() {
      return this._idade
    }

    set idade(idade) {
      this._idade = idade
    }

    get sexo() {
      return this._sexo
    }

    set sexo(sexo) {
      this._sexo = sexo
    }
  }
}