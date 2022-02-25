import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const StopWatch = () => {
    const [input, setInput] = useState({
        ms: "",
        sec: "",
        hour: ""


    });



    const [record, setRecord] = useState([])
    const [Timer, setTimer] = useState(0);
    const [TimeOn, setTimeOn] = useState(false)


    useEffect(() => {
        let interval;
        if (TimeOn) {
            interval = setInterval(() => {
                setTimer(prvTime => prvTime + 10)
            }, 10)
        }
        else if (!TimeOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [TimeOn])



    const handleInput = (data) => {
        let value = data.target.value;
        let name = data.target.name;
        setInput({
            ...input,
            [name]: value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newrecord = { ...input, id: new Date().getTime().toLocaleString() };

        setRecord([...record, newrecord]);
        setInput({ ms: "", sec: "", hour: "" });
    };



    return (
        <>
            <form className="d-flex justify-content-center mt-3 mx-4  ">
                <input type="number" name="ms" min="" max="2" value={input.ms} onChange={handleInput} placeholder="ms" />
                <input type="number" name="sec" min="1" max="2" value={input.sec} onChange={handleInput} placeholder="sec" />
                <input type="number" name="hour" min="1" max="2" value={input.hour} onChange={handleInput} placeholder="hour" />
                <Button onClick={submitForm} variant="success">Submit</Button>

            </form>
            <div className="userOutPut">
                {record.map((item) =>

                    <ul>
                        <li>User Puted ms : {item.ms}</li>
                        <li>User puted sec : {item.sec}</li>
                        <li> User Puted min : {item.min}</li>
                        <li>User Puted Hour :   {item.hour}</li>
                    </ul>
                )}

            </div>

            <div className="outPut">
                <span>{("0" + ((Timer / 10) % 100)).slice(-2)}: </span>
                <span>{("0" + Math.floor((Timer / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((Timer / 60000) % 60)).slice(-2)}</span>
               
               
            </div>

            <div className="btn d-flex justify-content-center mt-5 ">
                <Button onClick={() => setTimeOn(true)} variant="primary">start</Button>
                <Button onClick={() => setTimeOn(false)} variant="danger">Stop</Button>
                <Button onClick={() => setTimeOn(true)} variant="danger">Resume</Button>
                <Button onClick={() => setTimer(0)} variant="primary">Reset</Button>
            </div>
        </>
    );
};

export default StopWatch;
