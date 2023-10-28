import { access_key } from './module.js' // importing access key using package.json

async function getExchangeRate(currencyCode) {
  
  let access_key = access_key() // access key for exchange rate from local
  let from = "EUR" // base curreny

  // Getting response from exchangerate API - base curreny EUR
  let response = await fetch("http://api.exchangerate.host/convert?access_key=" + access_key + "&from=" + from + "&to=" + currencyCode + "&amount=1")

  // API JSON response
  let data = await response.json()
  console.log(data) 

  // Fetcing exchange rate of EUR to USD
  let ex_rate = data["result"]

  // setting decimal points to 4 -> 0.0000
  return ex_rate.toFixed(4)
}

/*

sample reponse: any curreny (EUR) to any curreny (USD)

info: {timestamp: 1698504123, quote: 1.057861}
privacy: "https://currencylayer.com/privacy"
query: {from: 'EUR', to: 'USD', amount: 1}
result: 1.057861
success: true
terms: "https://currencylayer.com/terms"

*/



getExchangeRate("USD")

.then((rate) => {
  console.log(rate) // Output: 1.0579 
}).catch((error) => {
  console.error(error)
})


/*

sample reponse: live - USD to all curreny

privacy: "https://currencylayer.com/privacy"
quotes: {USDAED: 3.673042, USDAFN: 73.207619, USDALL: 99.957465, USDAMD: 401.625786, USDANG: 1.798289, …}
source: "USD"
success: true
terms: "https://currencylayer.com/terms"
timestamp: 1698499863

*/