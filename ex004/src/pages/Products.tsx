import { useNavigate, useSearchParams, Link } from "react-router"

export function Products() {

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
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category') 

    const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products

    return (
        <div>

            <Link to="/">Voltar</Link>

            <h1>Produtos</h1>


            <div style={{display: "flex", gap: '1rem'}}>
            {
                products.map(({ id, name, price, category: productCategory }) => (
                    <div key={id} style={{cursor: 'pointer', border: '1px solid black', width: '15rem'}}>
                        <h2>{name}</h2>
                        <p>{price}</p>
                        <button onClick={() => navigate(`/products/?category=${productCategory}`)}>Ver Categoria</button>
                        <button onClick={() => navigate(`/products/${id}`)}>Ver Detalhes</button>
                    </div> 
                ))
            }
            </div>

            {
                category && (
                    <span style={{display: 'block', marginTop: '2rem', fontSize: '2em'}}>
                        Categoria <strong>{category}</strong>
                    </span>
                )
            }

        </div>
    )
}