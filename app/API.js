export default class API {
    constructor(token, groupId, url) {
        this.token = token;
        this.groupId = groupId;
        this.url = url;
    }
    getUserInfo() {
        return this.fetch({
            url: 'users/me',
            method: 'GET'
        });
    }
    getInitialCards() {
        return this.fetch({
            url: 'cards',
            method: 'GET'
        });
    }
    patchUser(body) {
        return this.fetch({
            url: 'users/me',
            method: 'PATCH',
            body: body,
            contentType: 'application/json'
        });
    }
    fetch(params) {
        const _method = params.method;
        const _url = params.url;
        const _contentType = params.contentType;
        const _id = params.id;
        const _body = params.body;

        return fetch(`${this.url}/${this.groupId}/${_url}/${_id || ''}`, {
                method: _method,
                headers: {
                    authorization: this.token,
                    'Content-Type': _contentType,
                },
                body: JSON.stringify(_body)
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status, res.statusText);
            });
    }

}