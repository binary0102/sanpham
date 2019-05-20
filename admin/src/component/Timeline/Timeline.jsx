import React from 'react';
import styled from 'styled-components';
const data = {
    auther: "võ thị tú anh",
    category: {
        color: "",
        tag: "Delete",
    },
    value: "3150000",
    time: "March 03 2017",

}
const TimeLineItem = styled.div`
display: flex;
position: relative;
margin: 10px 0;

justify-content: flex-start;
padding-left: 30px;
padding-right: 0;

`
const TimeLineItemContent = styled.div`
position: relative;
background-color: #fff;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border-radius: 5px;
width: 400px;
padding: 15px;
position: relative;
`
const Tab = styled.span`
`
const Time = styled.time`

`
const Circle = styled.span`
width: 20px;
height: 20px;
z-index: 100;
position: absolute;
top: calc(50% - 10px);
background-color: #8c1a1a;
border: 3px solid var(--red-color);
border-radius: 50%;
right: auto;
    left: -38px;
`
export const TimelineItem = ({ data }) => {
    return (
        <TimeLineItem>
            <TimeLineItemContent>
              
                <p>
                    {data.auther} vừa {data.tag} {data.value ? " với giá trị " + data.value : null}
                </p>
                <Time>
                    {data.time}
                </Time>
                <Circle />
            </TimeLineItemContent>
        </TimeLineItem>
    )
}
export const TimeLineContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin: 40px 0;
&:after {
    background-color: #e17b77;
    content: '';
    position: absolute;
    
    width: 4px;
    height: 100%;
}
`

export const Test = () => {
    return (
       
                <TimeLineContainer>
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                    <TimelineItem data={data} />
                </TimeLineContainer>
       

    )
}