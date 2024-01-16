import "./card.css"

interface CardProps{
preco:number,
titulo:string,
imagem:string
}
export function Card({preco,imagem,titulo} : CardProps){
   
    return(
       <div className="card">

        <img src={imagem}></img>
        <h2>{titulo}</h2>
        <p><b>Valor:</b>{preco}</p>
       </div>
    )


}