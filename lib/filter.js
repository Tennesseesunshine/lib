function filter (source, keyObj) {
  let keys = Object.keys(keyObj)
  return source.filter(v => {
    return keys.every(key => v[key] === keyObj[key])
  })
}
