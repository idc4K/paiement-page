let paymentRequestUrl = "https://paytech.sn/api/payment/request-payment";
let fetch = require('node-fetch');// http client
let params = {
item_name:"Iphone 7",
item_price:"560000",
currency:"XOF",
ref_command:"HBZZYZVUZZZV",
command_name:"Paiement Iphone 7 Gold via PayTech",
env:"test",
ipn_url:"https://domaine.com/ipn",
success_url:"https://domaine.com/success",
cancel_url:"https://domaine.com/cancel",
custom_field:JSON.stringify({
   custom_fiel1:"value_1",
   custom_fiel2:"value_2",
})
};

let headers = {
Accept: "application/json",
'Content-Type': "application/json",
API_KEY:"1afac858d4fa5ec74e3e3734c3829793eb6bd5f4602c84ac4a5069369812915e",
API_SECRET:"96bc36c11560f2151c4b43eee310cefabc2e9e9000f7e315c3ca3d279e3f98ac",
};

fetch(paymentRequestUrl, {
method:'POST',
body:JSON.stringify(params),
headers: headers
})
.then(function (response) {
return response.json()
})
.then(function (jsonResponse) {
console.log(jsonResponse)
/*
{
    "success":1,
    "redirect_url":"https://paytech.sn/payment/checkout/98b1c97af00c8b2a92f2",
  token:"98b1c97af00c8b2a92f2"}

*/
})