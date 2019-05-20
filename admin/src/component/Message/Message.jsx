import io from 'socket.io-client';
import React from 'react';
import styled from 'styled-components';
import Avatar from '../image/zoro.jpg';
const ContainerList = styled.div`
display: flex;
flex-direction: column;
marrgin: 0 1rem;
`
const ListThread  = styled.div`
display: flex;
flex-dirction: row;
`
const ImgThread  = styled.div`
width: 3rem;
height: 3rem;
@media (max-width: 567px) {
    display: none !important;
}
`
const Img = styled.img`
width:100%;
height: 100%;
border-radius: 50%;
background-color: rgba(0, 0, 0, .05);
`

const socket = io("http://localhost:4000");
const WarperThread = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
flex: 1 1 0;
`
const WarrperUser = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between!important;
`
const InfoUser = styled.span`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
color: rgba(0, 0, 0, 1);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
`
const MessageInfo = styled.div`
display: flex;
`
const WarperMessage = styled.div`
display: flex;
flex-direction: column;
`
const BoxMessage = styled.div`
display: flex;
flex-direction: column;
height: 600px;
`
const MessageItem = styled.div`
display: flex;
justify-content: flex-end;
position: relative;
margin: 10px 0;
&:nth-child(even) {
    justify-content: flex-start;
}
`
const BoxSendMessage = styled.div`
`
const MessageContent = styled.div`
display: flex;
`

export const Chat  = () => {
    socket.on('test', )
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3 col-3">
                    <ContainerList>
                         <ListThread>
                            <ImgThread>
                                <Img src={Avatar} />
                            </ImgThread>
                            <WarperThread>
                                <WarrperUser>
                                    <InfoUser>a</InfoUser>
                                    <div>date</div>
                                </WarrperUser>
                                <MessageInfo>
                                    <div>a</div>
                                </MessageInfo>
                            </WarperThread>
                         </ListThread>
                         
                    </ContainerList>
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                    <WarperMessage>
                        <BoxMessage>
                            <MessageItem>
                              <MessageContent>
                             
                                <div>
                                    <div>
                                        aaaaaaaaaaaaaaaa
                                    </div>
                                    <div>
                                        aaaaaaaaaaa
                                    </div>
                                </div>
                                <div>
                                   <Img src={Avatar} />
                                </div>
                             </MessageContent>
                            </MessageItem>
                            <MessageItem>
                            <MessageContent>
                            <div>
                                <Img src={Avatar} />
                             </div>
                             <div>
                                 <div>
                                     aaaaaaaaaaaaaaaa
                                 </div>
                                 <div>
                                     cccc
                                 </div>
                             </div>
                             
                          </MessageContent>
                            </MessageItem>
                      
                         
                     
                        </BoxMessage>
                        <BoxSendMessage>
                            Box
                        </BoxSendMessage>

                    </WarperMessage>
                </div>
                <div className="col-3 col-md-3 col-sm-3">
                    a
                </div>
            </div>
        </div>
    )
}