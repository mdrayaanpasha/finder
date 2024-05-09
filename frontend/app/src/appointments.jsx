import { useState } from "react";
import axios from "axios"; // Don't forget to import axios

function Appointment() {
    const [message, setMessage] = useState(""); // State to hold response message
    const [timeError, setTimeError] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const finder = new URLSearchParams(window.location.search);
        const startTime = finder.get("from");
        const endTime = finder.get("to");
        const id = finder.get("id");
        const dur =  finder.get("pertime")
        const patTime = e.target.patTime.value;


        // Comparison of times
        if (patTime < startTime || patTime > endTime) {
            setTimeError(`Choose a time between ${startTime}-${endTime}`);
            return; // Prevent form submission
        }

        try {
            const response = await axios.post("http://localhost:3000/bookappoint", {
                name: e.target.patName.value,
                date: e.target.patDate.value,
                time: patTime,
                problem: e.target.problem.value,
                by: localStorage.getItem("email"),
                to: id,
                duration:dur,
                startT  : startTime,
                endT : endTime
            });
            setMessage(response.data.message); // Set response message to state
            setTimeError(null); // Reset error state
        } catch (error) {
            console.log("Error:", error); // Log any errors
        }
    };

    return (
        <div>
            {timeError && <p>{timeError}</p>}
            <form onSubmit={submitForm}>
                <input type="text" name="patName" /> <br />
                <input type="date" name="patDate" /> <br />
                <input type="time" name="patTime" /> <small>note: 24hrs format</small> <br />
                <textarea name="problem" cols="30" rows="10"></textarea> <br />
                <input type="submit" value="Book!" className="btn btn-primary" />
            </form>
            {message && <p>{message}</p>} {/* Display response message if available */}
        </div>
    );
}

export default Appointment;
