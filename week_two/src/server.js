const app = require("express")();
 const stripe = require("stripe")("sk_test_zg4Fz2gt28kwB0Hul7HQzJ1H");
 app.use(require("body-parser").text());
 app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
           amount: 2000,
           currency: "usd",
           description: "An example charge",
           source: req.body
         });

           res.json({status});
         } catch (err) {
           res.status(500).end();
         }
       });
       app.listen(8000, () => console.log("Listening on port 8000"));
    //    <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>  