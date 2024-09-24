document.getElementById('donate-button').addEventListener('click', function(){
    showSectionById('donate-section')
    setColor('donate-button')
})

document.getElementById('history-button').addEventListener('click', function(){
    showSectionById('history')
    setColor('history-button')
})

document.getElementById('blog').addEventListener('click', function(){
    window.location.href= "./blog.html" 
})

