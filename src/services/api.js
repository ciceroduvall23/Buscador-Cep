import axios from "axios"; // vai fazer requisições http


const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"   /* baseURL é algo que não vai mudar ,é uma URL base */
});


export default api;