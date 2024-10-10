import "./DayPlanContainer.scss";

const DayPlanContainer = () => {
    const day1Plan = [
        { time: "오전", location: "센소지 절", transport: "도보 15분" },
        { time: "점심", location: "이치란 라멘", transport: "버스 15분" },
        { time: "오후", location: "도쿄 타워", transport: "버스 30분" },
        { time: "저녁", location: "모토무라 규카츠", transport: "" },
    ];

    return (
        <div className="day-plan">
            <h2>DAY 1</h2>
            <div className="schedule">
                {day1Plan.map((item, index) => (
                    <div key={index} className="plan-item">
                        <p>
                            {item.time}: {item.location}
                        </p>
                        <p>{item.transport}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayPlanContainer;
