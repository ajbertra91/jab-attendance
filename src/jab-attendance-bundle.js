import HyperHtmlElement from 'hyperhtml-element';
import moment from 'moment';

class JabAttendance extends HyperHtmlElement {
  
  // static get observedAttributes() {

  // }

  created() {
    this.loadJabAttendanceLogin = false;
    this.render();
  }

  constructor() {
    super();
  }

  ready(){
    super.ready();
  }

  
  getLogin(){
    if(!this.loadJabAttendanceLogin) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      Promise.resolve().then(function () { return jabAttendanceLogin; }).then((JabAttendanceLogin) => {
        console && console.log("JabAttendanceLogin loaded");
      }).catch((reason) => {
        console && console.error("JabAttendanceLogin failed to load", reason);
      });
      this.loadJabAttendanceLogin = true;
    }
  }

  render() {
    this.getLogin();
    this.html`
      <style>
        .jab-attendance {
            display: block;
        }
      </style>
      <section class="jab-attendance">
          <jab-attendance-login></jab-attendance-login>
      </section>
    `;
  }
}

// Register the element with the browser.
JabAttendance.define('jab-attendance');

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
        const now = moment().format("MMM Do, YYYY");
        this.html`
            <style>
                .jab-attendace-login {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .jab-attendace-login .jab-attendance-login__title,
                .jab-attendace-login .jab-attendance-login__button {
                    flex: 1 0 auto;
                }
            </style>
        
            <section class="jab-attendance-login">
                <h1 class="jab-attendance-login__title">Sunday School</h1>
                <h2>${now}</h2>
                <button class="jab-attendance-login__button" id="login-button" type="button">+</button>
                <label for="login-button">Login To Event</label>
            </section>
        `;
    }
}

JabAttendanceLogin.define('jab-attendance-login');

var jabAttendanceLogin = /*#__PURE__*/Object.freeze({

});
