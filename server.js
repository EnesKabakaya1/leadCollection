const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.post('/lead-collection', [
    body('email').isEmail(),
    body('phone').isLength({ min: 10, max: 10 }).isNumeric(),
], async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: 'Invalid Data' });
    }

    await fakeDelay(1000);

    const couponCode = getCouponCode();

    res.status(200).json({ couponCode });
});

const getCouponCode = () => {   
    return 'COUPON_2024';
};

const fakeDelay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${ PORT }`);
});
