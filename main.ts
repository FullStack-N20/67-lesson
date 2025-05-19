const getMinValue = (arr: number[]): number => arr.length === 0 ? -1 : Math.min(...arr)

const joinStrings = (arr: string[]): string => arr.map(str => str).join(',')

const userLogin: [string, Date, boolean] = ["admin", new Date(), true]
console.log(userLogin[0], userLogin[1], userLogin[2] ? "Login is success" : "Login is failed")

type Phone = {
  brand: string
  model: string
  price: number
}
const phones: Phone[] = [
  { brand: "Apple", model: "iPhone 14", price: 1200 },
  { brand: "Samsung", model: "S23", price: 1000 },
]
const mostExpensivePhone = (arr: Phone[]): Phone => arr.reduce((a, b) => a.price > b.price ? a : b)

type Student = {
  name: string
  grade: number
  isActive: boolean
}
const students: Student[] = [
  { name: "Killer", grade: 5, isActive: true },
  { name: "Abu", grade: 4, isActive: false },
]
const activeStudents = (arr: Student[]): Student[] => arr.filter(s => s.isActive)

const formatPrice = (price: string | number): number =>
  typeof price === "string" ? parseFloat(price) : price

const checkInput = (input: boolean | string): string =>
  typeof input === "boolean" ? input.toString() : input.length.toString()

const isAdult = (age: number): boolean => age >= 18

const getName = (name: string | null | undefined): string => name ?? "Guest"

const welcome = (): void => console.log("Welcome")

const throwError = (): never => { throw new Error("Error") }
