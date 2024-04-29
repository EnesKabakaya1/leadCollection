const leadForm = document.getElementById('lead-form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const GDPR = document.getElementById('GDPR');
const GDPRBox = document.querySelector('.lead-form-GDPR-box');
const couponCopyButton = document.querySelector('.lead-coupon-copy-button');
const closeButton = document.querySelector('.lead-close-button');
const container = document.querySelector('.lead-container');

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

    if (email.value && phone.value && GDPR.checked) {
        postData('http://localhost:4000/lead-collection', { email: email.value, phone: phone.value }).then((response) => {
            if (response.errors === 'Invalid Data') {
                if (!self.isEmail(email.value)) {
                    setErrorFor(email, 'Email is not a valid');
                }

                if (!self.isPhone(phone.value)) {
                    setErrorFor(phone, 'Phone is not a valid');
                }

                return;
            }

            showCouponPage(response.couponCode);

        }).catch((error) => {
            console.log(error);
        });
    }
});

couponCopyButton.addEventListener('click', () => {
    const couponText = document.querySelector('.lead-coupon-text');

    navigator.clipboard.writeText(couponText.innerText);

    couponCopyButton.innerText = 'Copied!';

    setTimeout(() => {
        couponCopyButton.innerText = 'Copy';
    }, 2000);
});

closeButton.addEventListener('click', () => {
    container.remove();
});

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('lead-container')) {
        container.remove();
    }
});

const showCouponPage = (coupon) => {
    const contactBox = document.querySelector('.lead-contact-box');
    const couponBox = document.querySelector('.lead-coupon-box');
    const couponText = document.querySelector('.lead-coupon-text');

    couponBox.classList.add('lead-coupon-box-active');
    contactBox.classList.add('lead-contact-box-hidden');

    couponText.innerText = coupon;
};

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    return response.json();
};

const checkInputs = () => {
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else {
        setSuccessFor(email);
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be blank')
    } else {
        setSuccessFor(phone);
    }

    if (!GDPR.checked) {
        setErrorFor(GDPRBox, 'You must agree to the terms and conditions')
    } else {
        setSuccessFor(GDPRBox);
    }
};

const setErrorFor = (input, message) => {
    const formControl = input.nextElementSibling;

    formControl.innerText = message;
};

const setSuccessFor = (input) => {
    const formControl = input.nextElementSibling;

    formControl.innerText = '';
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

const isPhone = (phone) => {
    return /^\d{10}$/.test(phone);
};