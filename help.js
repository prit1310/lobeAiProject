const welcomeEl = document.getElementById('welcome')
const labelEl = document.getElementById('label')
let currentContentElement = null;

welcomeEl.addEventListener('click',() =>{
    const welcomeContents = [
        'welcome-content1',
        'welcome-content2',
        'welcome-content3',
        'welcome-content4',
        'welcome-content5',
        'welcome-content6',
        'welcome-content7',
        'welcome-content8'
    ];
    
    function addText(index, content) {
        const element = document.getElementById(welcomeContents[index]);
        const newContent = `<p style='font-size: 18px;'>${content}</p>`;
        if (currentContentElement) {
            currentContentElement.remove();
        }
        element.insertAdjacentHTML('afterend', newContent);
        currentContentElement = element.nextElementSibling; 
        element.removeEventListener('click', clickHandler);
    }
    
    function clickHandler(event) {
        const index = welcomeContents.indexOf(event.target.id);
        if (index !== -1) {
            if (index === 0) {
                addText(0, "Lobe is a free, private desktop application that has everything you need to \ntake your machine learning ideas from prototype to production.");
            } else if (index === 1) {
                addText(1, "Machine learning is software that learns to perform a task from a\n collection of examples rather than through a person explicitly defining \nrules and formulas. This learning software is called a <b>model</b>. Teaching a\n model through examples is called <b>training</b>");
            }
            else if (index === 2){
                addText(2, "This version of Lobe learns to look at images using <b>image classification -</b>\n categorizing an image into a single label overall. We are working to\n expand to more types of problems and data in future versions.")
            }
            else if(index === 3){
                addText(3 , "Image classification is categorizing an image into\n a single label to represent its content.")
            }
            else if(index === 4){
                addText(4, "A model is a piece of code. You can export your model into a variety of \nindustry-standard formats to run on Mac and Windows, the web, or \nmobile and edge devices. You can also export and use your model in\n Power Platform. See our GitHub for sample projects and other tools for\n working with Lobe. We are also working on a collection of apps and\n integrations to help run your model without any code.")
            }
            else if(index === 5){
                addText(5, "Lobe is free and runs entirely on your computer.")
            }
            else if(index === 6){
                addText(6, "No machine learning knowledge is necessary. Lobe follows best practices \nwhile automatically building and training a model for you.")
            }
            else if(index === 7){
                addText(7, "Yes, all of your images and models stay private on your computer. Lobe \nruns and trains machine learning models entirely on your own device. Your\n project images and models are never uploaded to the cloud or visible to \nus.")
            }
        }
    }
    
    welcomeContents.forEach((id) => {
        const element = document.getElementById(id);
        element.addEventListener('click', clickHandler);
    });
})

