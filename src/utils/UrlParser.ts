export const parseSearchParams = (search: string) => {
  const params = decodeURIComponent(search).substring(1).split('&')
  return params.reduce((previous: any, cuurent) => {
    const [key, value] = cuurent.split('=')
    if (!previous[key]) {
      previous[key] = value
      return previous
    }
    const existence = previous[key]
    if (existence instanceof Array) {
      existence.push(value)
    } else {
      previous[key] = [existence, value]
    }
    return previous
  }, {})
}