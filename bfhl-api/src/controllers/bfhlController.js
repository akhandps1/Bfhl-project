const mathUtils = require('../utils/mathUtils');
const aiUtils = require('../utils/aiUtils');

const EMAIL = process.env.EMAIL || "test@chitkara.edu.in";

exports.handleBfhl = async (req, res) => {
    try {
        const { fibonacci, prime, lcm, hcf, AI } = req.body;
        let data = null;

        // --- INPUT VALIDATION & LOGIC SELECTION ---

        if (fibonacci !== undefined) {
            if (!Number.isInteger(fibonacci)) throw new Error("Invalid input: fibonacci must be an integer");
            data = mathUtils.getFibonacci(fibonacci);
        } 
        else if (prime !== undefined) {
            if (!Array.isArray(prime)) throw new Error("Invalid input: prime must be an array");
            data = mathUtils.filterPrimes(prime);
        } 
        else if (lcm !== undefined) {
            if (!Array.isArray(lcm)) throw new Error("Invalid input: lcm must be an array");
            data = mathUtils.getLCM(lcm);
        } 
        else if (hcf !== undefined) {
            if (!Array.isArray(hcf)) throw new Error("Invalid input: hcf must be an array");
            data = mathUtils.getHCF(hcf);
        } 
        else if (AI !== undefined) {
            if (typeof AI !== 'string') throw new Error("Invalid input: AI must be a string");
            data = await aiUtils.getAIResponse(AI);
        } 
        else {
            return res.status(400).json({
                is_success: false,
                official_email: EMAIL,
                message: "Invalid request format. Send one of: fibonacci, prime, lcm, hcf, AI"
            });
        }

        // --- SUCCESS RESPONSE ---
        res.status(200).json({
            is_success: true,
            official_email: EMAIL,
            data: data
        });

    } catch (error) {
        // --- ERROR RESPONSE (Graceful Handling) ---
        res.status(400).json({
            is_success: false,
            official_email: EMAIL,
            data: error.message
        });
    }
};