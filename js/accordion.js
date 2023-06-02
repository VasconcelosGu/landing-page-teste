const acordionHeaders = document.querySelectorAll('.accordion-header')


acordionHeaders.forEach(acordionItemHeader => {
  acordionItemHeader.addEventListener("click",()=>{
    const acordionContent = acordionItemHeader.nextElementSibling;
    const shouldClose = acordionItemHeader.classList.contains("ativo")

    acordionHeaders.forEach(itemHeader =>{
      itemHeader.classList.remove("ativo")
      itemHeader.nextElementSibling.classList.remove("ativo")
    })
    if(!shouldClose){
      acordionItemHeader.classList.add("ativo")
      acordionContent.classList.add("ativo")
    }
  })
})