
import { axiosApi } from './apiAxios';

const DiamondApi = {
        getAll() {
            const url = `/diamond-Watch`;
            return axiosApi.get(url);
        },
        getSearch(keySearch){
            const url = `/diamond-Watch/?q=${keySearch}`;
            return axiosApi.get(url);
        },
        getSearchandlimit(keySearch,page){
            const url = `/diamond-Watch/?q=${keySearch}&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        updateProduct(data){
            const url = `/diamond-Watch/${data.id}`;
            return axiosApi.put(url,data);
        },
        getbyid(id){
            const url = `/diamond-Watch/${id}`;
            return axiosApi.get(url);
        },
        addProduct(data){
            const url = `/diamond-Watch/`;
            return axiosApi.post(url,data);
        },
        deleteProduct(id){
            const url = `/diamond-Watch/${id}`;
            return axiosApi.delete(url);
        },
        getpagesorttang(page){
            const url = `/diamond-Watch?_sort=price&_order=asc&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        getpagesortgiam(page){
            const url = `/diamond-Watch?_sort=price&_order=desc&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        gethangcon(page){
            const url = `/diamond-Watch?quantity>0&_page=${page}&_limit=6`;
            return axiosApi.get(url)
        },
        gethanghet(page){
            const url = `/diamond-Watch?quantity=0&_page=${page}&_limit=6`;
            return axiosApi.get(url)
        }

}

export default DiamondApi
