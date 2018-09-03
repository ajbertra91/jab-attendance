import HyperHtmlElement from 'hyperhtml-element';
import '@polymer/paper-button/paper-button.js';
// import moment from 'moment/src/moment';

class JabAttendanceLogin extends HyperHtmlElement {

    // static get observedAttributes() {
    //     return [
    //         'dataNow'
    //     ];
    // }

    created() {
        this.render();
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    render() {
        // const now = moment().format("MMM Do, YYYY");
        const activityDate = new Date('Aug 2, 2018').toString();
        const activity = 'Sunday School';
        this.html`
            <style>
                jab-attendance-login .jab-attendance-login {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                jab-attendance-login .jab-attendance-login__title,
                jab-attendance-login .jab-attendance-login__sub-title,
                jab-attendance-login .jab-attendance-login__date,
                jab-attendance-login .jab-attendance-login__button {
                    flex: 0 1 auto;
                }
                jab-attendance-login .jab-attendance-login__title {
                    font-size: 32px;
                    font-weight: 100;
                    margin-bottom: 0;
                }
                jab-attendance-login .jab-attendance-login__sub-title,
                jab-attendance-login .jab-attendance-login__date {
                    font-size: 16px;
                    font-weight: 100;
                }
                jab-attendance-login .jab-attendance-login__sub-title {
                    margin-top: 0;
                }
                jab-attendance-login paper-button {
                    background: blue;
                    color: white;
                    font-size: 32px;
                }
            </style>

            <section class="jab-attendance-login">
                <h1 class="jab-attendance-login__title">Attendance</h1>
                <h2 class="jab-attendance-login__sub-title">Activity: ${activity}</h2>
                <h3 class="jab-attendance-login__date">${activityDate}</h3>
                <!-- <button class="jab-attendance-login__button" id="login-button" type="button">+</button> -->
                <paper-button raised class="jab-attendance-login__button" id="login-button">+</paper-button>
                <label for="login-button">Login To Event</label>
            </section>
        `;
    }
}

JabAttendanceLogin.define('jab-attendance-login');