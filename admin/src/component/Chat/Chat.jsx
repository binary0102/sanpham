
import React,{useEffect, useRef, useState, useCallback} from 'react';
import styled from 'styled-components';
import Avatar from '../../image/avatar.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {timeSince} from '../../helper/format';
const ContainerList = styled.div`
display: flex;
flex-direction: column;
marrgin: 0 1rem;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
padding: 1.5rem;
background: #fff

`
const ListThread = styled.div`
display: flex;
flex-dirction: row;
margin-bottom: 1rem;
&:hover {
    background-color: rgba(0, 0, 0, .05);
}
`
const ImgThread = styled.div`
width: 3rem;
height: 3rem;
border-radius: 50%;
box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
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
background: #fff;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;

`
const BoxMessage = styled.div`
display: flex;
flex-direction: column;
padding: 0 2rem;
overflow-y: scroll;
height:400px;
`
const MessageItem = styled.div`
display: flex;
justify-content: flex-end;
position: relative;
margin: 10px 0;

`
const MessageItemRight = styled.div`
display: flex;
justify-content: flex-end;
position: relative;
margin: 10px 0;
`
const MessageItemLeft = styled.div`
display: flex;
justify-content: flex-start;
position: relative;
margin: 10px 0;

`
const BoxSendMessage = styled.div`
border-top: 1px solid rgba(0, 0, 0, .10);
z-index: 201;
max-height: 144px;
min-height: 18px;
padding: 9px 0;
display: flex;
justify-content: center;
align-items: center;
`
const MessageContent = styled.div`
display: flex;

align-items: center;

`
const MessageContentText = styled.div`
background-color:#f1f0f0;
padding: 7px 13px 7px;
border-radius: 1.3em;

`
const MessageContentImageLeft = styled.div`
width: 2rem;
height: 2rem;
margin-right: 1rem;
`
const MessageContentImageRight = styled.div`
margin-left: 1rem;
width: 2rem;
height: 2rem;
`
const WarperThreadUser = styled.div`
background: #fff;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
padding: 1rem;
`
const CurrentMessageUser = styled.div`
margin-right: 1rem;
`


export const Chat = ({socket,user}) => {

    const [listMessage, setListMessage] =  useState([]);
    const [Threads, setThreads ] = useState([]);
    const [message, setMessage] = useState("");
    const [messageSend, SetmessageSend] = useState("");
    const [currentThread, setCurrentThread] = useState({});
    
    const registerHandler = useCallback(() => {
        socket.on('messagereceived', (message) => {

            onMessageReceived(message);
            
        })
        
        
    },[message])  
    const onMessageReceived = (message) => {
      
        setListMessage(listMessage.concat(message));
        
         let threadChange =Threads.map(thread => {
            if(thread._id === message.thread_id) {
                console.log(message);
                thread.current_message.message = message.message;
                thread.current_message.date = message.created_at;
                thread.current_message.client_id = message.client_id;
            }
            return thread;
        })
        setThreads(threadChange);
        refBoxMessage.current.scrollTo (0,refBoxMessage.current.scrollHeight);  
    }
    const sendMesage = useCallback( (message,threadId) => {
        socket.emit('message',message,threadId, (error) => console.log(error))
        
    },[messageSend])
    const getMessageAndSet = useCallback((threadId,skip) => {
        socket.emit('join', threadId,skip,(error,chatHistory) => {
            if (error) {
                console.log(error);
            }
            chatHistory.reverse()
            setListMessage(chatHistory);
            refBoxMessage.current.scrollTo (0,refBoxMessage.current.scrollHeight);  
         });
        
    
    },[currentThread])
    const refBoxMessage = useRef(null);
    useEffect(() => {
        
        socket.emit('threads',user._id,(error, threads) => {
            if (error) {
                console.log(error);
            }
    
            
                getMessageAndSet( threads[0]._id ,0);
          
        
                setCurrentThread(threads[0]);
                setThreads(threads);
         
        })
       
    },[]);


    useEffect(() => {
        registerHandler()
        return () => {
            socket.off('messagereceived')
      }
    },[message])
    const  handleScroll = () => {
     
        if (refBoxMessage.current.scrollTop === 0) {
           
           socket.emit('join', currentThread._id,listMessage.length,(error,chatHistory) => {
            if (error) {
                console.log(error);
            }

            chatHistory.reverse()
           
            if(chatHistory.length !== 0) {
                setListMessage([...chatHistory,...listMessage]);
            }
           
            refBoxMessage.current.scrollTo (0, 1000 );  
        
         });
        }
    }
  

    const test = useCallback((thread) => {
        getMessageAndSet(thread._id);
        setCurrentThread(thread);
    }, [currentThread])
    return (
       
        <div className="container-fluid">
       
            
            <div className="row">
                <div className="col-md-3 col-sm-3 col-3">
                   
                    <ContainerList>
                    {Threads.map(thread => {
                       
                        return (
                        <ListThread onClick={() => {
                            test(thread)
                        }}>
                            <ImgThread>
                                <Img src={`${process.env.REACT_APP_PUBLIC_URL}/images/${thread.avatar}`} />
                            </ImgThread>
                            <WarperThread>
                                <WarrperUser>
                                    <InfoUser>{thread.name}</InfoUser>
                                 
                                    
                                    <div> {timeSince(new Date(thread.current_message.date))}</div>
                                </WarrperUser>
                                <MessageInfo>
                                    {console.log( thread.current_message)}
                                    {console.log( thread.current_message.client_id)}
                                    
                                    <CurrentMessageUser>{(thread.participants.find(client => client.id === thread.current_message.client_id).first_name) }:</CurrentMessageUser>
                                    <div>{thread.current_message.message}</div>
                                </MessageInfo>
                            </WarperThread>

                        </ListThread>
                        )
                    })}
                   
                    </ContainerList>
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                    <WarperMessage>
                        <BoxMessage onScroll={handleScroll} ref={refBoxMessage}>
                            {listMessage.map(message => {
                
                                return    (message.client_id  === user._id ? 
                            
                                 <div >
                                    <MessageItemRight >
                                        <MessageContent>
    
                                            <MessageContentText>
                                                {message.message}
                                            </MessageContentText>
                                            <MessageContentImageRight>
                                                <Img src={`${process.env.REACT_APP_PUBLIC_URL}/images/${user.avatar}`} />
                                            </MessageContentImageRight>
                                        </MessageContent>
                                    </MessageItemRight>
                                </div> :  <div >
                                    <MessageItemLeft >
                                        <MessageContent>
                                        <MessageContentImageLeft>
                                              
                                                <Img src={`${process.env.REACT_APP_PUBLIC_URL}/images/${currentThread.participants.find((client) => client.id === message.client_id ).avatar}`} />
                                            </MessageContentImageLeft>
                                            <MessageContentText>
                                                {message.message}
                                            </MessageContentText>
                                          
                                        </MessageContent>
                                    </MessageItemLeft>
                                </div>)
                            })}
                       
                        </BoxMessage>
                        <BoxSendMessage>
                            <InputSend placeholder={"Send Message ..."} value={message} onChange={(e) => {
                                 setMessage(e.target.value);
                            }} onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        sendMesage(message,currentThread); 
                                        SetmessageSend(!messageSend);
                                        setMessage("");  
                                        
                                    }
                                  
                            }}/>
                            <ButtonSend>
                                <FontAwesomeIcon onClick={() => {
                                     sendMesage(message,currentThread); 
                                     SetmessageSend(!messageSend);
                                     setMessage("");  
                                     refBoxMessage.current.scrollTo (0,refBoxMessage.current.scrollHeight);  
                                }} size={"lg"} icon={faPaperPlane}/>
                            </ButtonSend>
                        </BoxSendMessage>

                    </WarperMessage>
                </div>
                <div className="col-md-3 col-sm-3 col-3">
                     <WarperClientOfThread>
                         <ContainerClientOfThread>
                            <ContainerHeaderThread>
                                <ImgThread>
                                    <Img src={Avatar} />
                                </ImgThread>
                                <HeaderThread>
                                    
                                    {currentThread.name}
                                </HeaderThread>
                            </ContainerHeaderThread>
                            <ContainerOfThread>
                                <ContentOfThread>
                                    <ListItems>
                                        {currentThread.participants !== undefined  && currentThread.participants.map(user => {
                                            return (
                                                <Items >
                                                    <ImgThread>
                                                        <Img src={`${process.env.REACT_APP_PUBLIC_URL}/images/${user.avatar}`} />
                                                    </ImgThread>
                                                    <UserName> 
                                                        {user.name}
                                                    </UserName>
                                                    
                                                </Items>
                                            )
                                        })}
                                    </ListItems>
                                </ContentOfThread>
                            </ContainerOfThread>
                         </ContainerClientOfThread>
                     </WarperClientOfThread>
                </div>
            </div>
        </div>
    )
}
const WarperClientOfThread = styled.div`
display: flex;
flex-direction: column;
background: #fff;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
` 
const ContainerClientOfThread = styled.div`

`
const ContainerOfThread = styled.div`

`
const ContentOfThread = styled.div`
`
const ContainerHeaderThread = styled.div`
display: flex;
height: 5rem;
align-items: center;
align-self: center;
padding: 0 14px 16px 14px;
border-bottom: 1px solid rgba(0, 0, 0, .10);
`
const HeaderThread = styled.div`
margin-left: 0.5rem
`
const ListItems = styled.ul`
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none;

`
const Items = styled.li`
display: flex;
height: 70px;
align-items: center;
padding: 14px 1rem;
&:hover {
    background-color: rgba(0,0,0,.05);
}
`
const UserName = styled.div`
margin-left: 1rem;
`
const InputSend = styled.input`
height: 50px;
width: 90%;
border 0;

&:focus {
    outline: none;
}
`
const ButtonSend = styled.div`
color:#adb5bd;
&:hover {
    color: #495057!important;
}
`