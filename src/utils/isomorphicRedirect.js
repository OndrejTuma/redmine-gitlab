import Router from 'next/router'

/**
 * Isomorphic redirect
 * @param {string} url - url to redirect to
 * @param {object} [ctx] - Next.js context object
 */
function isomorphicRedirect(url, ctx = {}) {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: url })
    ctx.res.end()
  } else {
    Router.push(url)
  }
}

export default isomorphicRedirect