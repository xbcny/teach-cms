class localCache {
  localStorage = window.localStorage

  setItem(name: string, value: string) {
    this.localStorage.setItem(name, value)
  }
  getItem(name: string) {
    return this.localStorage.getItem(name)
  }
  deleteItem(name: string) {
    this.localStorage.removeItem(name)
  }
  clearAllItem() {
    this.localStorage.clear()
  }
}
export default new localCache()
