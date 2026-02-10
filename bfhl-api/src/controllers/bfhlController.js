const mathUtils = require('../utils/mathUtils');
const aiUtils = require('../utils/aiUtils');

const EMAIL = process.env.EMAIL || "user@chitkara.edu.in";

exports.handleBfhl = async (req, res) => {
    try {
        const { fibonacci, prime, lcm, hcf, AI } = req.body;
        let data = null;

        if (fibonacci !== undefined) {
            if (!Number.isInteger(fibonacci)) throw new Error("Invalid input");
            data = mathUtils.getFibonacci(fibonacci);
        } 
        else if (prime !== undefined) {
            if (!Array.isArray(prime)) throw new Error("Invalid input");
            data = mathUtils.filterPrimes(prime);
        } 
        else if (lcm !== undefined) {
            if (!Array.isArray(lcm)) throw new Error("Invalid input");
            data = mathUtils.getLCM(lcm);
        } 
        else if (hcf !== undefined) {
            if (!Array.isArray(hcf)) throw new Error("Invalid input");
            data = mathUtils.getHCF(hcf);
        } 
        else if (AI !== undefined) {
            if (typeof AI !== 'string') throw new Error("Invalid input");
            data = await aiUtils.getAIResponse(AI);
        } 
        else {
            return res.status(400).json({
                is_success: false,
                official_email: EMAIL,
                data: "Invalid request key"
            });
        }

        res.status(200).json({
            is_success: true,
            official_email: EMAIL,
            data: data
        });

    } catch (error) {
        res.status(400).json({
            is_success: false,
            official_email: EMAIL,
            data: error.message
        });
    }
};