import Filter from "./Filter"
const AllCategories = () => {
    return ( 
    <div>
        <h1>What kind of food do you like?</h1>

        {/*MAP*/}
        {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"].
        map(category =><Filter category = {category}/>)}
        
    </div>)
}

export default AllCategories