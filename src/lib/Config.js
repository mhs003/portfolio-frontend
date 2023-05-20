const Config = {
    SERVER_URL: 'https://mhs-pf-be.fly.dev',
    get BLOG_BASE() {
        return this.SERVER_URL + '/api/v1/blog'
    },
    get WORK_BASE() {
        return this.SERVER_URL + '/api/v1/work'
    }
}

export default Config;