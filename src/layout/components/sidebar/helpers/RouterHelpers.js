export function getCurrentUrl(pathname) {
  return pathname.split(/[?#]/)[0]
}

export function checkIsActive(pathname, url) {
  const current = getCurrentUrl(pathname)
  if (!current || !url) {
    return false
  }

  if (current === url) {
    return true
  }

  if (current.indexOf(url) > -1) {
    return true
  }

  return false
}

export function checkIsMunuPermis(pathname, url, data) {
  const current = getCurrentUrl(pathname)
  
  if (!current || !url) {
    return null
  }

  if (current === url) {
    return data
  }

  if (current.indexOf(url) > -1) {
    return data
  }

  return false
}
