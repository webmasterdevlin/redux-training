import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getVillains() {
    return await http.get(BaseUrl.villains);
}

export async function deleteVillain(id) {
    return await http.delete(`${BaseUrl.villains}${id}`)
}