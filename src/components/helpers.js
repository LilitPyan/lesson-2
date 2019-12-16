
export const FetchHeader = new class {
    _fetchHeaders = { };

    makeWith(sendHeaders) {
        return {
            ...this._fetchHeaders,
            ...sendHeaders
        };
    }

    setFetchHeader(name, value) {
        this._fetchHeaders[name] = value;
    }

    deleteFetchHeader(name) {
        delete this._fetchHeaders[name];
    }
};
