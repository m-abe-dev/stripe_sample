const stripe = require("stripe")(process.env["SECRET_KEY"]);

const account = await stripe.accounts.create({
  type: "standard",
});

console.log(account);
