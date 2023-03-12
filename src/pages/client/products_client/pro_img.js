const pro_img = (book)=>{
     return `
     <img id="imgbase" src="${book?.images?.[0].base_url}" class="w-[444px] h-[444px]" alt="" srcset="">
     `
}
export default pro_img