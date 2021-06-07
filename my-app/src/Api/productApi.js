
import { axiosApi } from './apiAxios';

const ProductApi = {
        getAll() {
            const url = `/product`;
            return axiosApi.get(url);
        },
        getSearch(keySearch){
            const url = `/product/?q=${keySearch}`;
            return axiosApi.get(url);
        },
        getSearchandlimit(keySearch,page){
            const url = `/product/?q=${keySearch}&_page=${page}&_limit=6`;
            return axiosApi.get(url);
        },
        updateProduct(data){
            const url = `/product/${data.id}`;
            return axiosApi.put(url,data);
        },
        getbyid(id){
            const url = `/product/${id}`;
            return axiosApi.get(url);
        },
        addProduct(data){
            const url = `/product/`;
            return axiosApi.post(url,data);
        },
        deleteProduct(id){
            const url = `/product/${id}`;
            return axiosApi.delete(url);
        }
        

}

export default ProductApi
