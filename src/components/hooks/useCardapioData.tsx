import axios, {AxiosPromise} from "axios"
import { CardapioData } from "../../interface/CardapioData";
import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';
const fetchData = async (): AxiosPromise<CardapioData[]> => {
   const response = axios.get(API_URL + '/cardapio') 
   return response;
}

export function useCardapioData(){
const query = useQuery({
queryFn: fetchData,
queryKey:['cardapio-data'],
retry: 2

})
return{
    ...query,
    data:query.data?.data
  }
}