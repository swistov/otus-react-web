export default class ApiService {

    _apiBase = 'http://127.0.0.1:8000/api/v1.0';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllCurses() {
        const curses = await this.getResource(`/curse/`);
        return curses.results;
    }

    async getCurse(id) {
        const curse = await this.getResource(`/curse/${id}/`);
        return curse.result;
    }
}