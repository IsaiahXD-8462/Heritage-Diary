

const SearchBar = (props) => {
    
    const [ profile, getprofile ] = useState ([]);
    
    async function searchallmedia() {
        const response = await axios.get("http://127.0.0.1:8000/api/diaries/")
        try{
          getprofile(response.data)}
        catch(error){
          console.log(error)
        };
      }
    
    return (         
    <form onSubmit={searchallmedia}>
        <label>Search</label> 
        <input placeholder="Type To Search..." type='text' onChange={(event) => setmedia(event.target.value)} />           
        <button type='submit'>search</button>
    <Routes>
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/video" element={<VideoPage />} />
    </Routes>
    </form>
    );
}
 
export default SearchBar;