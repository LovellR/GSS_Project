import React from 'react';
import "./css/Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <div>
                <h2>문의페이지</h2>
            </div>
            <form class="form">
                <div>
                    <input placeholder="제목" class="title" type="text" />
                    <br />
                    <input placeholder="답변 받을 이메일을 적으시오" class="email" type="email" />
                    <br />
                    <textarea placeholder="내용" class="content" />
                </div>
                <div>
                    <input class="submit" type="submit" />
                </div>
            </form>
        </div>
        
    );
};

export default Contact;