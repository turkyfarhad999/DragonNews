export const category =async()=>{
const res= await fetch('https://openapi.programming-hero.com/api/news/categories')
const catData=await res.json()
const data=catData.data.news_category
return data;


}

export const catagoryNews=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const catData=await res.json()
const data=catData.data

return data;

}
export const exactNews=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const catData=await res.json();
    const data=catData.data[0]
    console.log(data)
    return data;
}