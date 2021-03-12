const accordionItem = document.querySelectorAll('.faq__qeustion')

accordionItem.forEach((accordionItem) => {
  accordionItem.addEventListener('click', () => {
    const height = accordionItem.nextElementSibling.scrollHeight;
    accordionItem.classList.toggle('faq__qeustion--active');
    if (accordionItem.classList.contains('faq__qeustion--active')) {
      accordionItem.nextElementSibling.style.height = `${height}px`
      accordionItem.nextElementSibling.style.marginTop = `25px`
    } else {
      accordionItem.nextElementSibling.style.height = `0px`
      accordionItem.nextElementSibling.style.marginTop = `0px`
    }
  })
}) 