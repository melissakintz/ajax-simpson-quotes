function fetchSimpsonQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(function(response){
            return response.data;
        })
        .then(function (quotes){
            quotes.forEach(quote => {
                const htmlQuote = `
                <p><strong>${quote.quote}</strong></p>
                <img src="${quote.image}" alt="quote"/>
                <p>${quote.character}</p>

            `;
                document.querySelector('#simpson').innerHTML = htmlQuote;
            }
        );
        });
}

fetchSimpsonQuote();

document.querySelector('#refresh').addEventListener('click',()=>{
    fetchSimpsonQuote();
} )