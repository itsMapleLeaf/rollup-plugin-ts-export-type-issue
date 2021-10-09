export type Box<T> = {
  value: T
}

export function createBox<T>(value: T): Box<T> {
  return { value }
}
