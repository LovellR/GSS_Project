import React from "react";

const User = () => {
    return (
        <table>
            <tr>
                <td>연령대</td>
                <td></td>
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
                <td></td>
            </tr>
        </table>
    );
}

export default User;
