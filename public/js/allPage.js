((self) => {
    'use strict'

    const classes = {
        style: 'lead-style',
        container: 'lead-container',
        wrapper: 'lead-wrapper',
        closeBox: 'lead-close-box',
        closeButton: 'lead-close-button',
        rightBox: 'lead-right-box',
        imageBox: 'lead-image-box',
        image: 'lead-image',
        leftBox: 'lead-left-box',
        headerBox: 'lead-header-box',
        header: 'lead-header',
        shortTitle: 'lead-short-title',
        couponShortTitle: 'lead-coupon-short-title',
        contactBox: 'lead-contact-box',
        contactBoxHidden: 'lead-contact-box-hidden',
        formBox: 'lead-form-box',
        leadForm: 'lead-form',
        formGroup: 'lead-form-group',
        errorMessage: 'lead-error-message',
        submitButton: 'lead-submit-button',
        checkboxGroup: 'lead-form-checkbox-group',
        GDPRBox: 'lead-form-GDPR-box',
        GDPRLink: 'lead-GDPR-link',
        couponBox: 'lead-coupon-box',
        couponBoxActive: 'lead-coupon-box-active',
        couponTextBox: 'lead-coupon-text-box',
        couponText: 'lead-coupon-text',
        couponCopyButtonContainer: 'lead-coupon-box-button',
        couponCopyButton: 'lead-coupon-copy-button',
        leadEmail: 'email',
        leadPhone: 'phone',
        leadGDPR: 'GDPR',
        GDPRBox: 'lead-form-GDPR-box',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${classes[key]}`, createdSelector
    ), {});

    self.init = () => {
        self.buildCSS();
        self.buildHTML();
        self.events();
    };

    self.reset = () => {
        const { container, style } = selectors;

        document.querySelector(container).remove();
        document.querySelector(style).remove();
    };

    self.buildCSS = () => {
        const { container, wrapper, closeBox, rightBox, imageBox, image, leftBox, headerBox, header, shortTitle,
            couponShortTitle, contactBox, contactBoxHidden, formBox, leadForm, formGroup, errorMessage, GDPRBox,
            submitButton, checkboxGroup, GDPRLink, couponBox, couponBoxActive, couponTextBox, couponText,
            couponCopyButton, closeButton, couponCopyButtonContainer } = selectors;

        const leadCSS = `
        ${container} {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999;
        }
        ${container}::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: -1;
        }
        ${wrapper} {
            width: 700px;
            height: 400px;
            display: flex;
        }
        ${closeBox} {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        ${closeBox} ${closeButton} {
            border: none;
            background-color: transparent;
            cursor: pointer;
            outline: none;
            font-size: 25px;
            font-weight: 900;
        }
        ${rightBox} {
            width: 50%;
        }
        ${imageBox} {
            width: 100%;
            height: 100%;
        }
        ${imageBox} ${image} {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        ${leftBox} {
            position: relative;
            width: 50%;
            background-color: #ffffff;
        }
        ${headerBox} {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
            margin: 0 0 20px 0;
        }
        ${header} {
            font-size: 30px;
            font-weight: 700;
            color: #000;
            margin: 0;
        }
        ${shortTitle},
        ${couponShortTitle} {
            text-align: center;
            padding: 0 10px;
            color: #000;
            font-weight: 700;
            margin: 0;
        }
        ${shortTitle} {
            font-size: 15px;
        }
        ${couponShortTitle} {
            font-size: 12px;
        }
        ${contactBox} {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        }
        ${contactBox}${contactBoxHidden} {
            display: none;
        }
        ${formBox} {
            width: 100%;
            height: 70%;
        }
        ${leadForm} {
            height: 100%;
            padding: 0 30px;
        }
        ${formGroup} {
            width: 100%;
            height: 40px;
        }
        ${formGroup}:nth-child(1),
        ${formGroup}:nth-child(2) {
            margin: 0 0 20px 0;
        }
        ${errorMessage} {
            width: 100%;
            height: 20px;
            color: red;
            font-size: 12px;
            font-weight: 900;
            padding-left: 5px;
            display: flex;
        }
        ${formGroup} input {
            width: 100%;
            height: 100%;
            border: 1px solid #e6e6e6;
            outline: none;
            border-radius: 5px;
            padding-left: 10px;
            font-weight: 700;
            font-size: 17px;
            color: #000000;
        }
        ${submitButton} {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 17px;
            background-color: #21292b;
            color: #ffffff;
            cursor: pointer;
            font-weight: 500;
            text-transform: uppercase;
        }
        ${checkboxGroup} {
            margin: 10px 0 0 0;
        }
        ${GDPRBox} {
            display: flex;
            gap: 10px;
        }
        ${checkboxGroup} ${GDPRLink} {
            display: flex;
            font-size: 11px;
        }
        ${checkboxGroup} ${GDPRLink} a {
            color: #000;
            text-decoration: none;
            font-weight: 600;
        }
        ${couponBox} {
            width: 100%;
            height: 100%;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        ${couponBox}${couponBoxActive} {
            display: flex;
        }
        ${couponTextBox} {
            width: 60%;
            height: 40px;
            margin: 30px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px dashed #dee5eb;
        }
        ${couponText} {
            font-size: 20px;
            font-weight: 700;
            color: #000;
            margin: 0;
        }
        ${couponCopyButtonContainer} {
            width: 80%;
            height: 40px;
        }
        ${couponCopyButtonContainer} ${couponCopyButton} {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 17px;
            background-color: #21292b;
            color: #ffffff;
            cursor: pointer;
            font-weight: 500;
            text-transform: uppercase;
        }
        @media (max-width: 768px) {
            ${wrapper} {
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
            }
            ${rightBox} {
                width: 100%;
                height: 35%;
            }
            ${leftBox} {
                width: 100%;
                height: 35%;
            }
            ${formBox} {
                height: 100%;
            }
        }`;

        const style = document.createElement('style');
        style.innerHTML = leadCSS;
        style.classList.add(classes.style);
        document.head.appendChild(style);
    };

    self.buildHTML = () => {
        const { container, wrapper, closeBox, closeButton, rightBox, imageBox, image, leftBox, headerBox, header,
            shortTitle, contactBox, formBox, leadForm, formGroup, errorMessage, submitButton, checkboxGroup, GDPRBox,
            GDPRLink, couponBox, couponTextBox, couponText, couponCopyButton, leadEmail, leadPhone, leadGDPR,
            couponCopyButtonContainer } = classes;

        const leadHtml = `
        <div class="${container}">
            <div class="${wrapper}">
                <div class="${rightBox}">
                    <div class="${imageBox}">
                        <img src="https://www.arttablo.com/upload/U-sonbahar-ve-yapraklar-doga-manzaralari-kanvas-tablo1455361389-800.jpg" 
                            class="${image}">
                    </div>
                </div>
                <div class="${leftBox}">
                    <div class="${closeBox}">
                        <button class="${closeButton}">×</button>
                    </div>
                    <div class="${contactBox}">
                        <div class="${headerBox}">
                            <h1 class="${header}">Title</h1>
                            <p class="${shortTitle}">Short Text</p>
                        </div>
                        <div class="${formBox}">
                            <form class="${leadForm}">
                                <div class="${formGroup}">
                                    <input type="text" class="${leadEmail}" name="email" autocomplete="on" placeholder="Email">
                                    <div class="${errorMessage}"></div>
                                </div>
                                <div class="${formGroup}">
                                    <input type="tel" class="${leadPhone}" name="phone" autocomplete="on" placeholder="Phone Number">
                                    <div class="${errorMessage}"></div>
                                </div>
                                <div class="${formGroup}">
                                    <button type="submit" class="${submitButton}">Be First</button>
                                </div>
                                <div class="${checkboxGroup}">
                                    <div class="${GDPRBox}">
                                        <input type="checkbox" name="gdpr" class="${leadGDPR}">
                                        <div class="${GDPRLink}">
                                            <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"
                                                target="_blank">By submitting this form, you are giving
                                                consent for you email to
                                                be used and disclosed.</a>
                                        </div>
                                    </div>
                                    <div class="${errorMessage}"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="${couponBox}">
                        <div class="lead-header-box">
                            <h1 class="lead-header">Amazing!</h1>
                            <p class="lead-coupon-short-title">
                                Here is your discount code you can use in your next order. This
                                coupon will be valid until
                                01.01.2024</p>
                        </div>
                        <div class="${couponTextBox}">
                            <p class="${couponText}"></p>
                        </div>
                        <div class="${couponCopyButtonContainer}">
                            <button class="${couponCopyButton}">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', leadHtml);
    };

    self.events = () => {
        document.querySelector(selectors.leadForm).addEventListener('submit', (e) => {
            const email = document.querySelector(selectors.leadEmail);
            const phone = document.querySelector(selectors.leadPhone);
            const GDPR = document.querySelector(selectors.leadGDPR);

            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();

            e.preventDefault();

            self.checkInputs();

            if (emailValue && phoneValue && GDPR.checked) {
                self.postData('http://localhost:4000/lead-collection', { phone: phoneValue, email: emailValue }).then(({ errors, couponCode }) => {
                    if (errors === 'Invalid Data') {
                        if (!self.isEmail(emailValue)) {
                            self.setErrorFor(email, 'Email is not valid');
                        }

                        if (!self.isPhone(phoneValue)) {
                            self.setErrorFor(phone, 'Phone is not valid');
                        }

                        return;
                    }

                    self.showCouponPage(couponCode);

                }).catch((error) => {
                    console.log(error);
                });
            }
        });

        document.querySelector(selectors.couponCopyButton).addEventListener('click', () => {
            const copyButton = document.querySelector(selectors.couponCopyButton);
            const couponText = document.querySelector(selectors.couponText);

            navigator.clipboard.writeText(couponText.innerText);

            copyButton.innerText = 'Copied!';

            setTimeout(() => {
                copyButton.innerText = 'Copy';
            }, 2000);
        });

        document.querySelector(selectors.closeButton).addEventListener('click', () => {
            self.reset();
        });

        document.querySelector(selectors.container).addEventListener('click', (event) => {
            if (event.target.classList.contains(classes.container)) {
                self.reset();
            }
        });
    }

    self.showCouponPage = (coupon) => {
        const contactBox = document.querySelector(selectors.contactBox);
        const couponBox = document.querySelector(selectors.couponBox);
        const couponText = document.querySelector(selectors.couponText);

        couponBox.classList.add(classes.couponBoxActive);
        contactBox.classList.add(classes.contactBoxHidden);

        couponText.innerText = coupon;
    };

    self.postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        return response.json();
    };

    self.checkInputs = () => {
        const email = document.querySelector(selectors.leadEmail);
        const phone = document.querySelector(selectors.leadPhone);
        const GDPR = document.querySelector(selectors.leadGDPR);
        const GDPRBox = document.querySelector(selectors.GDPRBox);

        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();

        if (emailValue === '') {
            self.setErrorFor(email, 'Email cannot be blank')
        } else {
            self.setSuccessFor(email);
        }

        if (phoneValue === '') {
            self.setErrorFor(phone, 'Phone cannot be blank')
        } else {
            self.setSuccessFor(phone);
        }

        if (!GDPR.checked) {
            self.setErrorFor(GDPRBox, 'You must agree to the terms and conditions')
        } else {
            self.setSuccessFor(GDPRBox);
        }
    };

    self.setErrorFor = (input, message) => {
        const formControl = input.nextElementSibling;

        formControl.innerText = message;
    };

    self.setSuccessFor = (input) => {
        const formControl = input.nextElementSibling;

        formControl.innerText = '';
    }

    self.isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    self.isPhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    self.init();
})({});