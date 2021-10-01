const f = async () => {
  const stripe = require("stripe")(process.env["SECRET_KEY"]);

  const account = await stripe.accounts.create({
    type: "standard",
  });

  console.log(account);

  const accountId = account.id;

  const accountLinks = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: "https://example.com/reauth",
    return_url: "https://example.com/return",
    type: "account_onboarding",
  });

  console.log(accountLinks);
};

f();
