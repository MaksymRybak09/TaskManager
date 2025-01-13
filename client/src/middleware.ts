import { NextRequest, NextResponse } from 'next/server'
import { Tokens } from './shared/constants/tokens.constants'
import { DASHBOARD_PAGES } from './shared/config/pages-url.config'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request

  const refreshToken = cookies.get(Tokens.REFRESH_TOKEN)?.value

  const isAuthPage = url.includes('/auth')

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
  }

  if (isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/auth', url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*', '/auth/:path*'],
}
