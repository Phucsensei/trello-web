// cappitalize first of the string
export const capitalizeFisrtLetter = val => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}
