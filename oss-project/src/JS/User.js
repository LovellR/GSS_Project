import React from "react";
import "./css/User.css";

const User = () => {
    const handleSave = () => {
        const age = document.getElementById('age').value;
        const preg = document.querySelector('input[name="opt_preg"]:checked')?.value || '';
        const hearing = document.getElementById('hearing').checked;
        const intellectual = document.getElementById('intellectual').checked;

        const userData = {
            age,
            preg,
            disabilities: {
                hearing,
                intellectual
            }
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Data saved to local storage');
    };
    return (
        <div>
            <table>
                <tr>
                    <th colSpan="2">개인 이력 입력</th>
                </tr>
                <tr>
                    <td><label htmlFor="age">연령</label></td>
                    <td>
                        <select id="age" name="age">
                            <option value="0">10대 미만</option>
                            <option value="10">10대</option>
                            <option value="20">20대</option>
                            <option value="30">30대</option>
                            <option value="40">40대</option>
                            <option value="50">50대</option>
                            <option value="60">60대</option>
                            <option value="70">70대</option>
                            <option value="70">80대 이상</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>임신 여부</td>
                    <td>
                        <form>
                            <input type="radio" id="preg" name="opt_preg" value="preg" />
                            <label htmlFor="preg">yes</label> <br />
                            <input type="radio" id="non_preg" name="opt_preg" value="non_preg" />
                            <label htmlFor="non_preg">no</label> <br />
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>장애</td>
                    <td>
                        <input type="checkbox" id="hearing" name="disability" value="hearing" />
                        <label htmlFor="hearing">청각 장애</label><br />
                        <input type="checkbox" id="intellectual" name="disability" value="intellectual" />
                        <label htmlFor="intellectual">지적 장애</label><br />
                    </td>
                </tr>
            </table>
            <button className="personal_btn" onClick={handleSave}>저장</button>
        </div>
    );
}

export default User;
