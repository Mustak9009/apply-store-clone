export const fetchCategories = async () =>{
    const res = await fetch(`${process.env.ABC}/api/getCategories`);

}