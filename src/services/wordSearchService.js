export const getWordSearchData = async () => {
    let response = await fetch("../helpers/resourses.json")
    return await response.json()

}