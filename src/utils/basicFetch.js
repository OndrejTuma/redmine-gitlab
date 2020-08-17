const basicFetch = (url, method) => async variables => {
  const result = await fetch(url, {
    method,
    body: JSON.stringify(variables)
  })
  const data = await result.json()

  if (!result.ok) {
    throw new Error(data.message)
  }

  return data
}

export default basicFetch