import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <div>
                <h2>문의페이지</h2>
            </div>
            <form>
                <div>
                    <label >제목: </label>
                    <input class="title" type="text" />
                    <label >내용: </label>
                    <textarea class="content" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
        
    );
};

export default Contact;