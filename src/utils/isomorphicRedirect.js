import Router from 'next/router'

/**
 * Isomorphic redirect
 * @param {string} url - url to redirect to
 * @param {object} [res] - response object
 */
function isomorphicRedirect(url, res) {
  if (res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else {
    Router.push(url)
  }
}

export default isomorphicRedirect