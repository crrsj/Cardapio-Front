import axios, {AxiosPromise} from "axios"
import { CardapioData } from "../../interface/CardapioData";
import { useMutation,useQueryClient} from "@tanstack/react-query";


const API_URL = 'http://localhost:8080';
// eslint-disable-next-line
const postData = async (data: CardapioData): AxiosPromise<any> => {
   const response = axios.post(API_URL + '/cardapio',data) 
   return response;
}

export function useCardapioDataMutate(){
const queryClient = useQueryClient();
const mutate = useMutation({
mutationFn: postData,
retry: 2,
onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['cardapio-data']});

  }
})
return mutate
}