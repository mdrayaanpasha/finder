function Doctors(){
    return(
        <>
        <form action="/doctor-category">
            <input type="hidden" name="category" value="general" />
            <button>General</button>
        </form>

        <form action="/doctor-category">
            <input type="hidden" name="category" value="ENT" />
            <button>ENT</button>
        </form>


        <form action="/doctor-category">
            <input type="hidden" name="category" value="dentist" />
            <button>Dentist</button>
        </form>
        
        </>
    )
}

export default Doctors