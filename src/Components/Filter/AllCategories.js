import Filter from "./Filter"
const AllCategories = () => {
    return ( 
    <div>
        <h1>What kind of food do you like?</h1>

        {/*MAP*/}
        {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"].map(
<<<<<<< HEAD
            category => (
            <Filter key = {category} category = {category}/>
        ))}
=======
            category => <Filter category = {category}/>)}
>>>>>>> 3fd1bdfb96ada0e5e44128c60c229aa9b20f658c
        
    </div>)
}

export default AllCategories
