import { createApiClient } from './axios';
import nookies from 'nookies';

const token = nookies.get(null).token; // Obtenha o token do local 

console.log(token);

export const api = createApiClient(token);