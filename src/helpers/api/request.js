import superagent from 'superagent';

const getToken = () => 
    localStorage.getItem('pond_services')
        ? JSON.parse(localStorage.getItem('pond_services')).accessToken
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
                // .set('Authorization', `Bearer ${getToken()}`)
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
        console.log('post', body);
        return new Promise(function (resolve, reject){
            superagent
                // .post('http://localhost:8000/v1/oauth/token')
                .post(`${process.env.REACT_APP_API_URL}${url}`)
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                // .set('Authorization', `Bearer ${getToken()}`)
                .send(body)
                .then((res) => {
                    resolve(res.body);
                })
                .catch((err) => {
                    console.log('err', err);
                    reject(err.response.body);
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
