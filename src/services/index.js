import { createApiClient } from './axios';
import nookies from 'nookies';

const token = nookies.get(null).token_provincia; // Obtenha o token do local 


export const api = createApiClient(token);