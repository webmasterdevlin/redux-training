import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getHeroes() {
    return await http.get(BaseUrl.heroes);
}

export async function deleteHero(id) {
    return await http.delete(`${BaseUrl.heroes}${id}`)
}

export async function postHero(newHero) {
    return await http.post(BaseUrl.heroes, newHero);
}