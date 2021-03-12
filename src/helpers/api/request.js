import superagent from 'superagent';

const getToken = () => 
    localStorage.getItem('app_name')
        ? JSON.parse(localStorage.getItem('app_name')).accessToken
        : '';

const request = {
    get(url, query = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .set('Authorization', `Bearer ${getToken()}`)
                .query(query)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },

    post(url, body = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .set('Authorization', `Bearer ${getToken()}`)
                .send(body)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },

    register(url, body = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .send(body)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },

    patch(url, body = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .set('Authorization', `Bearer ${getToken()}`)
                .send(body)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },

    put(url, body = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .set('Authorization', `Bearer ${getToken()}`)
                .send(body)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },

    delete(url, query = {}) {
        return new Promise( (resolve, reject) => {
            superagent
                .get(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache')
                .set('Pragma', 'no-cache')
                .set('Authorization', `Bearer ${getToken()}`)
                .query(query)
                .end((error, result) => {
                    if (error) {
                        return reject({
                            error: error,
                            result: result,
                        });
                    }

                    resolve(result.body);
                });
        });
    },
}

export default request;
