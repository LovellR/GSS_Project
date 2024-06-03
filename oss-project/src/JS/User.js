import React from "react";
import "./css/User.css";

const User = () => {
    return (
        <div>
            <table>
                <tr>
                    <th colSpan="2">개인 이력 입력</th>
                </tr>
                <tr>
                    <td>연령대</td>
                    <td>
                        <select id="age" name="age">
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
                            <label for="preg">yes</label> <br />
                            <input type="radio" id="non_preg" name="opt_preg" value="non_preg" />
                            <label for="non_preg">no</label> <br />
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>장애</td>
                    <td>
                        <input type="checkbox" id="hearing" name="disability" value="hearing" />
                        <label for="hearing">청각 장애</label><br />
                        <input type="checkbox" id="intellectual" name="disability" value="intellectual" />
                        <label for="intellectual">지적 장애</label><br />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default User;
