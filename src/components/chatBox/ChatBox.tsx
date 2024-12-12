import React, { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
    requestResState,
    selectedDirectionState,
    selectedPlaceState,
    initialLoadingState,
    scheduleLoadingState,
    scheduleChangedState,
    airTicketLoadingState,
    accommodationLoadingState,
} from "../../recoils/atoms";
import fetchChatGPTResponse from "../../apis/fetchChatGPTResponse";
import { ChatGPTResponseType } from "../../types/ChatGPTResponseType";
import "./ChatBox.scss";
import Message from "./MessageContainer";
import InputContainer from "./InputContainer";
import postChatGPTRequest from "../../apis/postChatGPTRequest";

const ChatBox = () => {
    const setRequestResState = useSetRecoilState(requestResState);
    const setInitialLoadingState = useSetRecoilState(initialLoadingState);
    const setScheduleLoadingState = useSetRecoilState(scheduleLoadingState);
    const setScheduleChangedState = useSetRecoilState(scheduleChangedState);
    const setAirTicketLoadingState = useSetRecoilState(airTicketLoadingState);
    const setAccommodationLoadingState = useSetRecoilState(
        accommodationLoadingState
    );

    const requestRes = useRecoilValue(requestResState);
    const selectedDirection = useRecoilValue(selectedDirectionState);
    const selectedPlace = useRecoilValue(selectedPlaceState);

    const resetSelectedDirection = useResetRecoilState(selectedDirectionState);
    const resetSelectedPlace = useResetRecoilState(selectedPlaceState);

    const [messages, setMessages] = useState([
        {
            from: "Travel Tailor",
            text: "안녕하세요! Travel Tailor 입니다. 완벽한 여행을 위해 최선을 다해 도와드리겠습니다. 어느 도시를 언제 여행하고 싶으신가요?",
        },
    ]);
    const [input, setInput] = useState("");
    const [requestId, setRequestId] = useState<string>("0");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [chatGPTResponseData, setChatGPTResponseData] =
        useState<ChatGPTResponseType>();

    useEffect(() => {
        if (!requestRes) return;
        if (requestRes.answerCode === 1) {
            printPlanMessage();
        }
        if (requestRes.answerCode === 2) {
            printChangeMessage();
        }
        if (
            requestRes.answerCode === 3 ||
            requestRes.answerCode === 4 ||
            requestRes.answerCode === 5
        ) {
            removeLastTravelTailorMessage();
            printMessage("Travel Tailor", requestRes.responseContent);
        }

        // TODO: answerCode에 따라 응답 처리하기
    }, [requestRes]);

    useEffect(() => {
        if (!selectedPlace) return;
        const timerId1 = setTimeout(printWaitMessage, 500);

        // TODO: 장소 정보 메시지 post 하기
        sendMessage(selectedPlace);

        resetSelectedPlace();

        return () => {
            clearTimeout(timerId1);
        };
    }, [selectedPlace]);

    useEffect(() => {
        if (!selectedDirection) return;
        const timerId1 = setTimeout(printWaitMessage, 500);

        // TODO: 경로 요청 메시지 post 하기
        sendMessage(selectedDirection);

        resetSelectedDirection();

        return () => {
            clearTimeout(timerId1);
        };
    }, [selectedDirection]);

    useEffect(() => {
        if (chatGPTResponseData)
            printMessage(
                "Travel Tailor",
                chatGPTResponseData.response ??
                    "오류가 발생했습니다. 다시 시도 해주세요."
            );
    }, [chatGPTResponseData]);

    const postRequest = async (input: string) => {
        try {
            const result = await postChatGPTRequest({
                requestId: requestId,
                requestContent: input,
            });
            const ex_result = {
                requestId: 1,
                answerCode: 1,
                responseContent: "Response from chatGPT.",
            };
            setRequestId(prevRequestId =>
                (parseInt(prevRequestId) + 1).toString()
            );
            setRequestResState(result);
        } catch (error) {
            console.log(error);
        }
    };

    const getChatGPTResponseData = async (requestId: string) => {
        setIsLoading(true);

        try {
            const result = await fetchChatGPTResponse({
                requestId: requestId,
            });
            setChatGPTResponseData(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage = (message: string) => {
        if (message.trim()) {
            printMessage("You", message);
            postRequest(message);

            const timerId1 = setTimeout(printWaitMessage, 500);

            return () => {
                clearTimeout(timerId1);
            };

            // if (message === "2025년 2월 1일부터 2월 4일까지 도쿄 여행하고 싶어") {
            //     const timerId1 = setTimeout(printWaitMessage, 500);
            //     const timerId2 = setTimeout(printPlanMessage, 4000);
            //     const timerId3 = setTimeout(printCompleteMessage, 10000);
            //     const timerId4 = setTimeout(scheduleLoadingComplete, 10000);
            //     const timerId5 = setTimeout(airTicketLoadingComplete, 12000);
            //     const timerId6 = setTimeout(
            //         accommodationLoadingComplete,
            //         14000
            //     );
            //     return () => {
            //         clearTimeout(timerId1);
            //         clearTimeout(timerId2);
            //         clearTimeout(timerId3);
            //         clearTimeout(timerId4);
            //         clearTimeout(timerId5);
            //         clearTimeout(timerId6);
            //     };
            // }
            // if (message === "도쿄 우에노 공원에 대해서 알려줘") {
            //     const timerId1 = setTimeout(printWaitMessage, 500);
            //     const timerId2 = setTimeout(printPlaceMessage, 4000);
            //     return () => {
            //         clearTimeout(timerId1);
            //         clearTimeout(timerId2);
            //     };
            // }
            // if (message === "아우어즈 인 한큐에 대해서 알려줘") {
            //     const timerId1 = setTimeout(printWaitMessage, 500);
            //     const timerId2 = setTimeout(printAccommodationMessage, 4000);
            //     return () => {
            //         clearTimeout(timerId1);
            //         clearTimeout(timerId2);
            //     };
            // }
            // if (message === "아사쿠사 대신 도쿄 국립박물관을 추가해줘") {
            //     const timerId1 = setTimeout(printWaitMessage, 500);
            //     const timerId2 = setTimeout(printChangeMessage, 4000);
            //     const timerId3 = setTimeout(scheduleStartLoading, 4000);
            //     const timerId4 = setTimeout(printChangeCompleteMessage, 9000);
            //     const timerId5 = setTimeout(scheduleLoadingComplete, 9000);
            //     return () => {
            //         clearTimeout(timerId1);
            //         clearTimeout(timerId2);
            //         clearTimeout(timerId3);
            //         clearTimeout(timerId4);
            //         clearTimeout(timerId5);
            //     };
            // }
        }
    };

    const removeLastTravelTailorMessage = () => {
        setMessages(prevMessages => {
            const lastTravelTailorIndex = [...prevMessages]
                .reverse()
                .findIndex(message => message.from === "Travel Tailor");

            if (lastTravelTailorIndex === -1) {
                return prevMessages;
            }

            const indexToRemove =
                prevMessages.length - 1 - lastTravelTailorIndex;

            return [
                ...prevMessages.slice(0, indexToRemove),
                ...prevMessages.slice(indexToRemove + 1),
            ];
        });
    };

    const printWaitMessage = () => {
        printMessage(
            "Travel Tailor",
            "응답을 생성하는 중입니다. 잠시만 기다려주세요..."
        );
    };
    const printPlanMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "여행계획을 작성 해드리겠습니다. 로딩 후에 확인해주세요."
        );
        setInitialLoadingState(true);
    };
    const printCompleteMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "도쿄 여행 계획을 다음과 같이 추천해드립니다."
        );
    };
    const printChangeMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "여행계획을 수정 해드리겠습니다. 로딩 후에 확인해주세요."
        );
        setInitialLoadingState(true);
    };
    const printChangeCompleteMessage = () => {
        removeLastTravelTailorMessage();
        printMessage("Travel Tailor", "여행 계획을 수정해드렸습니다.");
    };
    const printPlaceMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "우에노 공원(Ueno Park)은 도쿄의 타이토구에 위치한 대형 공원으로, 다양한 박물관, 동물원, 그리고 유명한 벚꽃 명소로 알려져 있습니다. 봄철에는 벚꽃을 보기 위해 많은 사람들이 방문하고, 박물관과 문화 시설도 다양하게 구성되어 있어, 도쿄의 역사와 문화를 느낄 수 있는 곳입니다."
        );
    };
    const printAccommodationMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "도쿄 아우어즈 인 한큐는 도쿄에 위치한 호텔로서 편리한 교통과 다양한 시설을 제공합니다. 근처에 쇼핑센터와 관광 명소가 있어 좋은 위치에 있으며, 객실은 현대적이고 깔끔하게 꾸며져 있습니다. 고객 서비스가 우수하다는 평이 많습니다."
        );
    };
    const printDirectionMessage = () => {
        removeLastTravelTailorMessage();
        printMessage(
            "Travel Tailor",
            "몬자야키 다루마에서 우에노 공원까지의 경로는 도쿄의 대중교통을 통해 쉽게 갈 수 있습니다. 가장 빠른 방법은 JR 전철을 타는 것입니다. 근처의 JR 선 정거장에서 야마노테 선을 타고, 우에노역에서 내리시면 됩니다. 총 소요 시간은 약 30분 정도입니다."
        );
    };

    const scheduleLoadingComplete = () => {
        setScheduleLoadingState(true);
    };
    const scheduleStartLoading = () => {
        setScheduleLoadingState(false);
        setScheduleChangedState(true);
    };
    const airTicketLoadingComplete = () => {
        setAirTicketLoadingState(true);
    };
    const accommodationLoadingComplete = () => {
        setAccommodationLoadingState(true);
    };

    const onSendClicked = () => {
        sendMessage(input);
        setInput("");
    };

    const printMessage = (sender: string, content: string) => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
                from: sender,
                text: content,
            },
        ]);
    };

    return (
        <div className="chat-container">
            <Message messages={messages} />
            <InputContainer
                input={input}
                setInput={setInput}
                sendMessage={onSendClicked}
            />
        </div>
    );
};

export default ChatBox;
