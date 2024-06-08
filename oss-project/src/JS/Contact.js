import React, { useRef} from 'react';
import emailjs from "@emailjs/browser";
import "./css/Contact.css";

const Contact = () => {
    const SERVICE_ID = "service_r0a0dxm";
    const TEMPLATE_ID = "template_symu0op";
    const PUBLIC_KEY = "oyhTWECKoFoWOfvAG";
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
            result => {
                alert("성공적으로 전송되었습니다.");
                form.current.reset();
            },
            error => {
                console.log(error.text);
                alert("전송이 실패하였습니다.");
            },
        );
    };

    return (
        <div id="contact">
            <div>
                <h2>문의페이지</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} class="form">
                <div>
                    <input 
                        placeholder="제목" 
                        name="title" 
                        className="title" 
                        type="text" 
                    />
                    <br />
                    <input 
                        placeholder="답변 받을 이메일을 적으시오" 
                        name='email'
                        className="email" 
                        type="email" 
                    />
                    <br />
                    <textarea
                        placeholder="내용"
                        name='content'
                        className="content" 
                    />
                </div>
                <div>
                    <input class="submit" type="submit" value="전송" />
                </div>
            </form>
        </div>
        
    );
};

export default Contact;