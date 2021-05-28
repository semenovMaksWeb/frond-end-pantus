export function RedirectCode() {
  const checkRedirectCode = (
    redirect: any,
    router: string,
    code: string,
    url: string
  ) => {
    if (router !== code) {
      redirect(url + '/' + code)
    }
  }
  return { checkRedirectCode }
}
