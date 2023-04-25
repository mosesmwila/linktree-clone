const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

function copyText(e) {
    //prevent button going to site
    e.preventDefault()
    const link =this.getAttribute('link')
    console.log(link)
    try {
        navigator.clipboard.writeText(link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click',copyText))