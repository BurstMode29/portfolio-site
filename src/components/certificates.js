import '../style.css';
import AWS from '../documents/AWS_Academy_Graduate___AWS_Academy_Data_Center_Technician_Badge20220622-46-142d061.svg';
import HP1 from "../documents/hp1.svg";
import HP2 from "../documents/hp2.svg";
import HP3 from "../documents/hp3.svg";
import SAIS from "../documents/SAIS.svg";

const Certificates = () => {

    const certificates = [
        { image: <img src={HP1}></img>, name: "Effective Business Websites"},
        { image: <img src={HP2}></img>, name: "IT for Business Success"},
        { image: <img src={HP3}></img>, name: "Social Entrepreneurship"},
        { image: <img src={AWS}></img>, name: "AWS Data Center Technician"},
        { image: <img src={SAIS}></img>, name: "SA Innovation Summit" }

    ]

    return (
        <div className="certificates">

            <div className='grid-container'>
                {
                    certificates?.map((data, i) => (
                        <div className='grid-item' key={i}>
                            {data.image}
                            {data.name}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Certificates;