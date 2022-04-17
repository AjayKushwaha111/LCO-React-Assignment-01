import React from "react";
import Card from "./Card";

const CardSection = () =>{
    return(
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                We love new friends!
                </h2>
                <div className="row">
                <div className="col-4">
                    <Card title="Card One" buttonText="Click Here" />
                </div>
                <div className="col-4">
                    <Card title="Card Two" buttonText="Click Here" />
                </div>
                <div className="col-4">
                    <Card title="Card Three" buttonText="Click Here" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection