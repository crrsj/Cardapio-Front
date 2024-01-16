import { useEffect, useState } from "react"
import { useCardapioDataMutate } from "../hooks/useCardapioDataMutate";
import { CardapioData } from "../../interface/CardapioData";
import "./modal.css"
interface InputProps{
    label: string,
    value: string|number,
    // eslint-disable-next-line
    updateValue(value: any):void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>

            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>

    )

}

interface ModalProps{
    fecharModal():void
}


export function CriarModal({fecharModal}: ModalProps){
    const [titulo,setTitulo] = useState("");
    const [preco,setPreco] = useState(0);
    const [imagem,setImagem] = useState("");
    const {mutate,isSuccess,isLoading} = useCardapioDataMutate();
useEffect(() => {
    if(!isSuccess) return
    fecharModal();
}, [isSuccess])


    const submit = () => {

        const cardapioData : CardapioData = {
            titulo,
            preco,
            imagem
        }
        mutate(cardapioData)
    }
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                 {isLoading ? "Postando...":"Postar"}    
                <form className="input-container">
                   <Input label = "titulo" value={titulo} updateValue={setTitulo}></Input>
                   <Input label = "preco"  value={preco} updateValue={setPreco}></Input>
                   <Input label = "imagem" value={imagem} updateValue={setImagem}></Input>
                </form>
                <button onClick={submit} className="btn-secondary"><b>Postar</b></button>
            </div>
            
        </div>
    )
}
