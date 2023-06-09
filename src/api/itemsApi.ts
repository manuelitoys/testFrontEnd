/**Archivo para consulta de la URL de la API */
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const itemsApi = axios.create({
    baseURL: VITE_API_URL
})

export default itemsApi;