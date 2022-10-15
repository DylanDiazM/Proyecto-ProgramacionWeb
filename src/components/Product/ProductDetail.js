import React, { useState, useEffect, useContext, Component } from "react"
import { Link, useParams } from "react-router-dom"
import "./ProductDetail.css"
import data from "../data/cpu"
import { Button } from "@mui/material"
import { DataContext } from "../Cart/ShoppingCartContext"



export default function ProductDetail({ data, addToCart }) {

    const [productDetail, setProductDetail] = useState([])
    const { name } = useParams()



    useEffect(() => {
        const findProduct = () => {
            const newProduct = data.find((product) => product.name === name)
            setProductDetail(newProduct)
            console.log(newProduct)
        }

        findProduct()
    }, [name])

    return (
        <div className="details">
            <div className="bigImage">
                <img src="https://pbs.twimg.com/profile_images/1145524454170062848/U4lxVYEw_400x400.png" alt="" />
            </div>
            <div className="box">
                <h2>{productDetail.name}</h2>

                <span>${productDetail.price_usd}</span>

                <table>
                    <tbody>
                        <tr>
                            <th>Core Count</th>
                            <td>{productDetail.core_count}</td>
                        </tr>
                        <tr>
                            <th>Core Clock</th>
                            <td>{productDetail.core_clock}</td>
                        </tr>
                        <tr>
                            <th>Boost Clock</th>
                            <td>{productDetail.boost_clock}</td>
                        </tr>
                        <tr>
                            <th>TDP</th>
                            <td>{productDetail.tdp}</td>
                        </tr>
                    </tbody>
                </table>

                <button
                    className="cart"
                    onClick={() => addToCart(productDetail)}
                >Add to cart
                </button>
            </div>
        </div >
    )
}