import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getVillains() {
    return await http.get(BaseUrl.villains);
}