export function buildSearchFilter(search, fields) {
    if (!search || !fields || fields.length === 0) {
        return null;
    }

    return {
        _or: fields.map(field => ({
            [field]: { _icontains: search }
        }))
    };
}

export function buildQueryParams(search, searchFields = [], additionalFilters = {}) {
    const params = { ...additionalFilters };

    const searchFilter = buildSearchFilter(search, searchFields);
    if (searchFilter) {
        params.filter = params.filter
            ? { _and: [params.filter, searchFilter] }
            : searchFilter;
    }

    return params;
}

export function transformData(data, transformFn) {
    if (!data || !Array.isArray(data)) {
        return [];
    }

    return {
        data: data.map(transformFn)
    }
}

export function directusToAxiosParams(params = {}) {
    const axiosParams = {};

    if (params.fields) {
        axiosParams.fields = Array.isArray(params.fields) ? params.fields.join(',') : params.fields;
    }

    if (params.filter) {
        axiosParams.filter = JSON.stringify(params.filter);
    }

    if (params.sort) {
        axiosParams.sort = Array.isArray(params.sort) ? params.sort.join(',') : params.sort;
    }

    if (params.limit !== undefined) {
        axiosParams.limit = params.limit;
    }

    if (params.offset !== undefined) {
        axiosParams.offset = params.offset;
    }

    if (params.search) {
        axiosParams.search = params.search;
    }

    if (params.deep) {
        axiosParams.deep = JSON.stringify(params.deep);
    }

    if (params.translations) {
        axiosParams.translations = params.translations;
    }

    if (params.meta) {
        axiosParams.meta = params.meta;
    }

    if (params.single) {
        axiosParams.single = params.single;
    }

    Object.keys(params).forEach(key => {
        if (!axiosParams[key]) {
            axiosParams[key] = params[key];
        }
    });

    return axiosParams;
}