class DASHBOARD {
  private root = '/'

  REGISTER = `${this.root}register`
  LOG_IN = `${this.root}log-in`

  HOME = this.root
  TASKS = `${this.root}tasks`
  TIMER = `${this.root}timer`
  TIME_BLOCK = `${this.root}time-block`
  SETTINGS = `${this.root}settings`
}

export const DASHBOARD_PAGES = new DASHBOARD()
