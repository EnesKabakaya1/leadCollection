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
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: 'Invalid Data' });
    }

    const couponCode = getCouponCode();

    setTimeout(() => res.status(200).json({ couponCode }), 2000);
});

const getCouponCode = () => {   
    return 'COUPON_2024';
};

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${ PORT }`);
});
