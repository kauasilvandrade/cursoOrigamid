import { useParams, useNavigate } from "react-router"

export function Details() {

    const products = [
        {
            id: 1,
            name: "Notebook Gamer",
            price: 4500,
            category: "tech",
            description: "Notebook potente para jogos e programação"
        },
        {
            id: 2,
            name: "Smartphone",
            price: 2500,
            category: "tech",
            description: "Celular com ótima câmera e desempenho"
        },
        {
            id: 3,
            name: "Camiseta Básica",
            price: 50,
            category: "roupa",
            description: "Camiseta confortável para o dia a dia"
        },
        {
            id: 4,
            name: "Tênis Esportivo",
            price: 300,
            category: "roupa",
            description: "Ideal para corrida e academia"
        },
        {
            id: 5,
            name: "Fone de Ouvido",
            price: 200,
            category: "tech",
            description: "Som de alta qualidade"
        }
    ]

    const navigate = useNavigate()
    const {id} = useParams<{id: string}>()

    const product = products.find(p => p.id === Number(id))
    if (!product) {
        return <h1>Produto não encontrado</h1>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}