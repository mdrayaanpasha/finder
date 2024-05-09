function Lawyers(){
    return(
        <>
        <form action="/lawyers-category" method="get">
            <input type="hidden" name="category" value="tax-law"/>
            <button>Tax Lawyers</button>
        </form>


        <form action="/lawyers-category" method="get">
            <input type="hidden" name="category" value="Intellectual-Property-law"/>
            <button>Intellectual Property Lawyers</button>
        </form>

        <form action="/lawyers-category" method="get">
            <input type="hidden" name="category" value="criminal-law"/>
            <button>Criminal Lawyers</button>
        </form>

        <form action="/lawyers-category" method="get">
            <input type="hidden" name="category" value="cooperate-law"/>
            <button>Cooperate Lawyers</button>
        </form>

        </>
    )
}

export default Lawyers