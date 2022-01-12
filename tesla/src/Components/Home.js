import React from 'react'
import styled from 'styled-components'
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundimg= "model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundimg= "model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
                />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundimg= "model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
                />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundimg= "model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundimg= "solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundimg= "solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundimg= "accessories.jpg"
                leftBtnText="Shop Now" 
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`