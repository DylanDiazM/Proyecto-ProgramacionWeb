import React, { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import "./ProductDetail.css"
import data from "./cpu.json"
import { Button } from "@mui/material"

export default function ProductDetail() {
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
                <img src="https://yt3.ggpht.com/GDjDgYYW3x2V7fjv9Q6WJtvnhzttd2l5OMD6usdE54OiLxBsW8SRIudvERw_29qzrbZ0hkbI9A=s900-c-k-c0x00ffffff-no-rj" alt="" />
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

                <button className="cart">Add to cart</button>

            </div>
        </div >

    )


}