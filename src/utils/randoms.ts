export const selectNumberInRange = (maxLimit: number) => {
  let rand = Math.random() * maxLimit
  rand = Math.floor(rand)

  return rand
}

export const generateRandomDate = (
  start = new Date(2022, 0, 1),
  end = new Date()
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

export const getRandomItemFromArray = <T>(lista: T[]) => {
  return lista[selectNumberInRange(lista.length)]
}
