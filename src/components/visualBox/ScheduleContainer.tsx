import "./OptionContainer.scss";
import ScheduleCard from "./ScheduleCard";

const ScheduleContainer = () => {
    const day1Plan = [
        {
            title: "센소지 절",
            time: "오전",
            detail: "Lorem Ipsum",
            url: "url",
            isTransport: false,
        },
        {
            title: "이치란 라멘",
            time: "점심",
            detail: "Lorem Ipsum",
            url: "url",
            isTransport: false,
        },
        {
            title: "도쿄 타워",
            time: "오후",
            detail: "Lorem Ipsum",
            url: "url",
            isTransport: false,
        },
        {
            title: "모토무라 규카츠",
            time: "저녁",
            detail: "Lorem Ipsum",
            url: "url",
            isTransport: false,
        },
    ];

    const day1Transport = [
        {
            title: "도보",
            time: "15분",
            detail: "",
            url: "url",
            isTransport: true,
        },
        {
            title: "버스",
            time: "15분",
            detail: "200번",
            url: "url",
            isTransport: true,
        },
        {
            title: "버스",
            time: "30분",
            detail: "300번",
            url: "url",
            isTransport: true,
        },
    ];

    return (
        <div className="option-container">
            <header>DAY 1</header>
            <div className="options">
                {day1Plan.map((schedule, index) => (
                    <ScheduleCard
                        key={index}
                        title={schedule.title}
                        time={schedule.time}
                        detail={schedule.detail}
                        url={schedule.url}
                        isTransport={schedule.isTransport}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScheduleContainer;
