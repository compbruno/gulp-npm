{
  const cst = 2
  class Aluno {
    constructor(curso, ra) {
      this._curso = curso
      this._ra = ra
    }

    get curso() {
      return this._curso
    }

    set curso(curso) {
      this._curso = curso
    }

    get ra() {
      return this._ra
    }

    set ra(ra) {
      this._ra = ra
    }
  }
}