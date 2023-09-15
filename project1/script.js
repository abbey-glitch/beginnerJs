let contentCont = document.getElementById("wrapper")
let note_template = document.createElement('form')
note_template.setAttribute('onclick', 'remAttr()')
note_template.classList.add('formCont')
note_template.innerHTML = `<div id='noteCont'>
                                <fieldset>
                                    <legend>Note App</legend>
                                     <fieldset>
                                    <legend>Title</legend>
                                    <input type="text" placeholder="enter a note title">
                                </fieldset>
                                <fieldset>
                                    <legend>Content</legend>
                                    <textarea name="" cols=30 rows=4 placeholder="enter your text content">
                                    </textarea>
                                </fieldset>
                                <fieldset>
                                     <legend>Author</legend>
                                     <input type="text" placeholder="name of author">
                                </fieldset>
                                <fieldset>
                                      <button type="submit">Save</button>
                                      <button type="reset">Reset</button>
                                </fieldset>
                                </fieldset>
                               
                           </div>`

// attach the html template to the stactic docs
contentCont.appendChild(note_template)


// create a function that remove an attribute from your static page

function remAttr(){
    if(note_template.hasAttribute('class')){
        note_template.removeAttribute('class')
    }
    note_template.setAttribute('id', 'add') 
}