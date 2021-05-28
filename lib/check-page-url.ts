export function CheckPageUrl(page: string | (string | null)[]): number {
  let res = 1
  if (page) {
    res = Number(page)
  }
  return res
}
