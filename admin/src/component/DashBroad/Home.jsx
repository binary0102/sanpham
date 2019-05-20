import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMoneyBill , faCircle} from '@fortawesome/free-solid-svg-icons'
import Chart from '../Chart';
import { ChartArea } from '../Chart/chartArea';
import { ChartPie } from '../Chart/CharPie';
import { Test } from '../Timeline/Timeline';



export const Cart = styled.div`
border-left: ${props => props.color ? "0.25rem solid" + props.color + "!important;" :
        "0.25rem solid #4e73df!important;"}
height: 100%!important;
padding:0.5rem 0rem!important;
background-color: #fff;
background-clip: border-box;
border: 1px solid #e3e6f0;
border-radius: .35rem;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
`
export const CartBody = styled.div`
padding: 1.25rem;
`
const CartContent = styled.div`
display: flex;
align-items: center!important;
margin-right: 0;
margin-left: 0;
`
const Content = styled.div`
flex: 1;
margin-right: .5rem!important;
`
const ContentIcon = styled.div`
flex: 0 0 auto;
width: auto;
max-width: 100%;
`
const ChartBar = styled.div`
position: relative;
height: 10rem;
width: 100%;
@media (min-width: 768px)
{
    height: 20rem;
}
`
export const Home = () => {
    return (
        <div className="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row mb-4">

                <div className="col-12 col-md-6 col-lg-3">
                    <Cart>
                        <CartBody>
                            <CartContent>
                                <Content>
                                    <div>
                                        Earnings (Monthly)
                                    </div>
                                    <div>
                                        $40,000
                                    </div>
                                </Content>
                                <ContentIcon>
                                    <FontAwesomeIcon icon={faCalendar} color="#dddfeb" size="3x" />
                                </ContentIcon>
                            </CartContent>

                        </CartBody>
                    </Cart>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Cart color="#1cc88a" >
                        <CartBody>
                            <CartContent>
                                <Content>
                                    <div>
                                        Earnings (Monthly)
                                    </div>
                                    <div>
                                        $40,000
                                    </div>
                                </Content>
                                <ContentIcon>
                                    <FontAwesomeIcon icon={faMoneyBill} color="#dddfeb" size="3x" />
                                </ContentIcon>
                            </CartContent>

                        </CartBody>
                    </Cart>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <Cart color="#f6c23e">
                        <CartBody>
                            <CartContent>
                                <Content>
                                    <div>
                                        Earnings (Monthly)
                                    </div>
                                    <div>
                                        $40,000
                                    </div>
                                </Content>
                                <ContentIcon>
                                    <FontAwesomeIcon icon={faCalendar} color="#dddfeb" size="3x" />
                                </ContentIcon>
                            </CartContent>

                        </CartBody>
                    </Cart>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <Cart color="#36b9cc">
                        <CartBody>
                            <CartContent>
                                <Content>
                                    <div>
                                        Earnings (Monthly)
                                    </div>
                                    <div>
                                        $40,000
                                    </div>
                                </Content>
                                <ContentIcon>
                                    <FontAwesomeIcon icon={faCalendar} color="#dddfeb" size="3x" />
                                </ContentIcon>
                            </CartContent>

                        </CartBody>
                    </Cart>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-7 col-xl-8" >
                    <div className="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold " style={{ color: "#4e73df" }}>Area Chart</h6>
                        </div>
                        <div className="card-body">
                            <ChartBar>
                                <Chart />
                            </ChartBar>
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold " style={{ color: "#4e73df" }}>Area Chart</h6>
                        </div>
                        <div className="card-body">
                            <ChartBar>
                                <ChartArea />
                            </ChartBar>
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold " style={{ color: "#4e73df" }}>Area Chart</h6>
                        </div>
                        <div className="card-body">
                            <ChartBar>
                                <ChartPie />

                            </ChartBar>
                            <div class="mt-4 text-center small">
                                <span class="mr-2">
                                    <FontAwesomeIcon color={"#4e73df"} icon={faCircle} size="1x" /> Direct
                                 </span>
                                <span class="mr-2">
                                    <FontAwesomeIcon color={"#1cc88a"} icon={faCircle} size="1x" /> Social
                                </span>
                                <span class="mr-2">
                                    <FontAwesomeIcon color={"#36b9cc"} icon={faCircle} size="1x" /> Referral
                                 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-5 col-xl-4" >
                    <Test />
                </div>
            </div>

        </div>
    )
}