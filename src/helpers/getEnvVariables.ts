 /**Archivo para obtener las variables de entorno */
 export const getEnvVariables = () => {
    import.meta.env;

    return {
        ...import.meta.env
    }
 }