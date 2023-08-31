        const GEN_ADMISSION_PRICE = 20;
        const DISCOUNT_PRICE = 10;
        const MATINEE_DISCOUNT = 3;

        function buyTicket() {
            const age = prompt('Enter age!');
            let cost = getTicketCost(age);
            function getTicketCost(age) {
                if (age <= 12 || age >= 65) {
                    return DISCOUNT_PRICE;
                }
                return GEN_ADMISSION_PRICE;
            }
            const isMatinee = prompt('Are you attending a matinee, yes or no?').toLowerCase();
            cost = applyMatineeDiscount(cost, isMatinee);
            alert(`Your ticket will cost $${cost}`);
        }

        function applyMatineeDiscount(cost, isMatinee) {
            if (isMatinee === 'yes' || isMatinee === 'y') {
                return cost - MATINEE_DISCOUNT;
            }
            return cost;
        }