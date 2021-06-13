
import { axiosApi } from './apiAxios';

const fashionApi = {
        getAll() {
            const url = `/fashion-Watch`;
            return axiosApi.get(url);
        },
        getpage(page){
            const url = `http://localhost:3001/fashion-Watch?_page=${page}&_limit=6`
            return axiosApi.get(url)
        },
        getSearch(keySearch){
            const url = `/fashion-Watch/?q=${keySearch}`;
            return axiosApi.get(url);
        },
        getSearchandlimit(keySearch,page){
            const url = `/fashion-Watch/?q=${keySearch}&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        updateProduct(data){
            const url = `/fashion-Watch/${data.id}`;
            return axiosApi.put(url,data);
        },
        getbyid(id){
            const url = `/fashion-Watch/${id}`;
            return axiosApi.get(url);
        },
        addProduct(data){
            const url = `/fashion-Watch/`;
            return axiosApi.post(url,data);
        },
        deleteProduct(id){
            const url = `/fashion-Watch/${id}`;
            return axiosApi.delete(url);
        },
        getpagesorttang(page){
            const url = `/fashion-Watch?_sort=price&_order=asc&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        getpagesortgiam(page){
            const url = `/fashion-Watch?_sort=price&_order=desc&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        gethangcon(page){
            const url = `/fashion-Watch?quantity_gte=1&_page=${page}&_limit=6`;
            return axiosApi.get(url)
        },
        gethanghet(page){
            const url = `/fashion-Watch?quantity=0&_page=${page}&_limit=6`;
            return axiosApi.get(url)
        }

}

export default fashionApi
