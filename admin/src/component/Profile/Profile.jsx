import React from 'react'
import styled from 'styled-components';

const CartWarper = styled.div`
display: flex;
flex-direction: column;
marrgin: 0 1rem;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
padding: 1rem;
background: #fff
`
const CartContainer = styled.div`

`
const CartContent = styled.div`

`
const CartHeader = styled.div`
`
export const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <CartWarper>
                        <CartContainer>
                            <CartHeader>
                                Profile inm
                            </CartHeader>
                            <CartContent>
                            
                            </CartContent>
                        </CartContainer>
                    </CartWarper>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    a
                </div>
            </div> 
        </div>
    )
}