import HyperHtmlElement from 'hyperhtml-element'

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
      import('./jab-attendance-login.js').then((JabAttendanceLogin) => {
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
        jab-attendance {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background-color: #FAFAFA;
        }
        jab-attendance .padded-inner {
          padding: 20px;
        }
      </style>
      <section class="jab-attendance">
          <div class="padded-inner">
            <jab-attendance-login></jab-attendance-login>
          </div>
      </section>
    `;
  }
}

// Register the element with the browser.
JabAttendance.define('jab-attendance');
