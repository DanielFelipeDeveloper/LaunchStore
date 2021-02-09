module.exports = {
  date(timestamp) {
      const date = new Date(timestamp)

      const year = date.getUTCFullYear()
      const month = `0${date.getUTCMonth() + 1}`.slice(-2) // como o Mês vai de 0 a 11 adicionamos mais 1
      const day = `0${date.getUTCDate()}`.slice(-2)

      return {
          iso: `${year}-${month}-${day}`,
          birthDay: `${day}/${month}`,
          format: `${day}/${month}/${year}`
      }
  }
}