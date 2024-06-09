"use client"
import { useParams, notFound } from 'next/navigation';
import CartProduct from '../../components/CartProduct'; // Mettez à jour le chemin en fonction de votre structure de projet
import products from './../products'; // Importez vos produits
import Header from '@/app/components/header';
import ProductInfo from './components/ProductInfo';
import PhotoProducts from './components/PhotoProducts';
import ProductRecommendation from './components/ProductRecommendation';
import ListDevice from '@/app/components/ListDevice';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';



export default function ProductPage() {
    const { productid } = useParams();

    const product = products.find((product) => product.id === productid);

    if (!product) {
        notFound(); // Affiche une page 404 personnalisée si le produit n'est pas trouvé
    }

    return (
        <div>
            <Header />
            <CartProduct 
                imgProduct={product.imgProduct} 
                title={product.title} 
                name={product.name} 
                description={product.description} 
                reverse={product.reverse} 
            />
            <ProductInfo />
            <PhotoProducts />
            <ProductRecommendation />
            <div className="mt-20">
                <ListDevice />
            </div>
            <div className="mt-20">
                <About />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}
