
export default function Landing() {
    let provinces = ['Phakhao'];
    let province = ''
    let villages = ['Phakhao'];
    let village = ''
    let searchValue = "";
    const handleSearch = () => {
    }
    const handleVillageChange = () => {}
    const handleProvinceChange = () => {}
return <div className="relative rounded-md shadow-sm">
    <input 
        className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder="Search by village or province"
        value={searchValue}
        onChange={handleSearch}
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    

    <div className="mt-2 flex items-center">
    <select 
        className="form-select py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        value={village}
        onChange={handleVillageChange}
    >
        <option value="">All Villages</option>
        {villages.map(village => (
            <option key={village} value={village}>{village}</option>
        ))}
    </select>
    <select 
        className="form-select py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 ml-4"
        value={province}
        onChange={handleProvinceChange}
    >
        <option value="">All Provinces</option>
        {provinces.map(province => (
            <option key={province} value={province}>{province}</option>
        ))}
    </select>
</div>
</div>

}
