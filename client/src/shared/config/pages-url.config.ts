class DASHBOARD {
  private root = '/'

  REGISTER = `${this.root}register`
  LOG_IN = `${this.root}log-in`

  HOME = this.root
  TASKS = `${this.root}tasks`
  HABITS = `${this.root}habits`
  TIMER = `${this.root}timer`
  TIME_BLOCKING = `${this.root}time-blocking`
  SETTINGS = `${this.root}settings`
}

export const DASHBOARD_PAGES = new DASHBOARD()
