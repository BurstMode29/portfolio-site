import React, { useState, useEffect } from "react";
import '../style.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";





const Projects = () => {

    const [read, setRead] = useState([]);

    const ReadData = async () => {
        await getDocs(collection(db, "projects"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setRead(newData);
            })
    }

    useEffect(() => {
        ReadData();
    }, [])

    const ProjectCard = () => {
        return (
            <div>
                <tr >
                    {
                        read?.map((data, i) => (
                            <td key={i}>
                                <div className="projectName">{data.name}</div>
                                <div className="projectDescription">{data.description}</div>
                                <div className="projectType">{data.type}</div>
                            </td>
                        ))
                    }
                </tr>
            </div>
        )
    };

    return (
        <div className="projects">
            <div>Projects</div>
            <ProjectCard />
        </div>
    )
}

export default Projects;