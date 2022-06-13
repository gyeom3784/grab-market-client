import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage(){
    const { id } = useParams();
    const[product, setProduct] = useState(null);
    useEffect(function(){
    axios
    .get(
        `https://cea4d9bb-bfff-44e3-a185-99c7cd48a232.mock.pstmn.io/products/${id}`
        ).then(function (result) {
            setProduct(result.data);
        }).catch(function(error){
            console.error(error);
        });
    },[id]);

    if(product === null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} alt="productimage" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="iconsavatar" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">2022년 1월 31일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;