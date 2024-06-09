"use client"
import { useParams, notFound } from 'next/navigation';
import CartProduct from '../../components/CartProduct'; // Mettez à jour le chemin en fonction de votre structure de projet
import products from './../products'; // Importez vos produits



export default function ProductPage() {
    const { productid } = useParams();

    const product = products.find((product) => product.id === productid);

    if (!product) {
        notFound(); // Affiche une page 404 personnalisée si le produit n'est pas trouvé
    }

    return (
        <div>
            <CartProduct 
                imgProduct={product.imgProduct} 
                title={product.title} 
                name={product.name} 
                description={product.description} 
                reverse={product.reverse} 
            />
        </div>
    );
}
